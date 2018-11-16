'use strict'

// Node Modules
import React from 'react'
import jQuery from 'jquery'
import Chart from 'chart.js'

// Components
import Page from '../../components/Page'

// Styles
import styles from './styles.sass'

const $ = jQuery;
const META = {
    title: 'Assignment 6',
    description: 'Assignment 6: use chart.js to build a pie and bar graph.',
    keywords: 'html, css, js, react, nextjs'
};

export default class Six extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bar: null,
            pie: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            bar: state.bar,
            pie: state.pie
        };
    }

    componentDidMount() {
        $.get({
            url: '/static/json/barchart-data.json',
            dataType: 'json',
            success: (data, textStatus, jqXHR)=> {
                let config = (()=> {
                    let obj = {
                        datasets: [],
                        labels: data.labels
                    };
                    data.datasets.forEach(v => {
                        obj.datasets.push({
                            data: v.data,
                            label: v.label,
                            borderColor: v.strokeColor,
                            backgroundColor: v.fillColor,
                            hoverBorderColor: v.highlightStroke,
                            hoverBackgroundColor: v.highlightFill
                        });
                    });
                    return obj;
                })();
                this.setState({
                    bar: new Chart(document.getElementById('bar-chart'), {
                        type: 'bar',
                        data: config
                    })
                });
            }
        });

        $.get({
            url: '/static/json/piechart-data.json',
            dataType: 'json',
            success: (data, textStatus, jqXHR)=> {
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
                this.setState({
                    pie: new Chart(document.getElementById('pie-chart'), {
                        type: 'pie',
                        data: config
                    })
                });
            }
        });
    }

    render() {
        const {bar, pie} = this.state;
        return (<Page {...META}>
            <main className={styles.content}><article className={styles.article}>
                <h1 className={styles.h1}>Using ChartJS</h1>
                <section className={styles.section}>
                    <h2>Bar Chart</h2>
                    <canvas className={styles.responsiveEmbed} id="bar-chart"></canvas>
                </section>
                <section className={styles.section}>
                    <h2>Pie Chart</h2>
                    <canvas className={styles.responsiveEmbed} id="pie-chart"></canvas>
                </section>
            </article></main>
        </Page>)
    }

}