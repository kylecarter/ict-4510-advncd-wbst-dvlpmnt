'use strict'

// Node Modules
import React from 'react'
import jQuery from 'jquery'
import Chart from 'chart.js'

// Components
import HEAD from '../../../components/Head'

// Styles
import styles from './styles.sass'

const $ = jQuery;
const META = {
    title: 'Assignment 8',
    description: 'Assignment 8: use localstorage to chart data and chart.js to build a pie chart.',
    keywords: 'html, css, js, react, nextjs'
};

export default class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bar: null,
            pie: null
        }
        this.chart = this.chart.bind( this );
        this.store = this.store.bind( this );
    }

    static getDerivedStateFromProps(props, state) {
        return {
            bar: state.bar,
            pie: state.pie
        };
    }

    componentDidMount() {
        const self = this;
        $.get({
            url: '/static/json/piechart-data.json',
            dataType: 'json',
            success: self.store
        });
    }

    render() {
        const {bar, pie} = this.state;
        return (<div>
            <HEAD {...META}/>
            <main className={styles.content}><article className={styles.article}>
                <h1 className={styles.h1}>Using LocalStorage</h1>
                <section className={styles.section}>
                    <header className={styles.header}>
                        <div className={styles.headerCol}><h2>Pie Chart</h2></div>
                        <div className={styles.headerCol}><button className="btn btn-primary" onClick={this.chart} onTouchEnd={this.chart}>Show Pie Chart</button></div>
                    </header>
                    <canvas className={styles.responsiveEmbed} id="pie-chart"></canvas>
                </section>
            </article></main>
        </div>)
    }

    store(data, textStatus, jqXHR) {
        let config = (()=> {
            let obj = {
                datasets: [{
                    hoverBackgroundColor: [],
                    backgroundColor: [],
                    data: []
                }],
                labels: []
            };
            data.forEach(v => {
                obj.labels.push(v.label);
                obj.datasets[0].data.push(v.value);
                obj.datasets[0].backgroundColor.push(v.color);
                obj.datasets[0].hoverBackgroundColor.push(v.highlight);
            });
            return obj;
        })();

        return window.localStorage.setItem('config', JSON.stringify(config));
    }

    chart() {
        return this.setState({
            pie: new Chart(document.getElementById('pie-chart'), {
                type: 'pie',
                data: JSON.parse(window.localStorage.getItem('config'))
            })
        });
    }

}