'use strict'

// Node Modules
import React from 'react'
import jQuery from 'jquery'

// Components
import Page from '../components/Page'

// Styles
import styles from "./styles.sass"

const $ = jQuery;
const META = {
    title: 'Menu',
    description: 'Check out all the delicious things we offer.',
    keywords: 'html, css, js, react, nextjs'
};

const _li = (props, index)=> {return (<li key={'react.item.' + props.id + '.' + index} id={'menu-item-' + props.id}>
    <h3 className={styles.h3}>{props.title}</h3>
    <p>{props.description}</p>
    <span className={styles.price}>{parseFloat(props.price).toFixed(2).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })}</span>
</li>)};

const _section = (props, index)=> {return (<section key={'react.course.' + props.course_id + '.' + index} className={styles.section} id={'menu-course-' + props.course_id}>
    <h2 className={styles.h2}>{props.course}</h2>
    <ul className={styles.menu}>
        {props.items.map(_li)}
    </ul>
</section>)};

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menu: null};

        this.storeify = this.storeify.bind(this);
        this.menuify = this.menuify.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            menu: state.menu
        };
    }

    componentDidMount() {
        const self = this;
        if (!window.localStorage.getItem('menu') || window.localStorage.getItem('menu') === ''
            || !window.localStorage.getItem('menu_age')
            || Date.now() > parseInt(window.localStorage.getItem('menu_age'))) {
            console.log('refresh');
            $.get({
                url: '/api/v1/menu',
                dataType: 'json',
                success: self.storeify
            });
        } else {
            console.log('cache');
            self.menuify(window.localStorage.getItem('menu'));
        }
    }

    render() {
        const {menu} = this.state;
        return (<Page {...META}>
            <main className={styles.content}><article className={styles.container}>
                <header><h1 className={styles.h1}>Menu</h1></header>
                {menu && menu.map(_section)}
            </article></main>
        </Page>);
    }

    storeify(data, textStatus, jqXHR) {
        window.localStorage.setItem('menu', JSON.stringify(data.menu));
        window.localStorage.setItem('menu_age', Date.now() + (6 * 60 * 60 * 1000));
        this.menuify(window.localStorage.getItem('menu'));
    }

    menuify(menu) {
        this.setState({menu: JSON.parse(menu)});
    }
}