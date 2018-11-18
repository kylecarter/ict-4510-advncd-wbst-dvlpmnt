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
    title: 'Image Gallery',
    description: 'Check out the conversation about Chocobo Cafe on Twitter.',
    keywords: 'html, css, js, react, nextjs'
}

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tweets: null};
        this.tweets = this.tweets.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {...state};
    }

    componentDidMount() {
        const self = this;
        $.get({
            dataType: 'json',
            url: '/api/v1/instagram',
            success: self.tweets,
            data: {
                q: 'nomnom'
            }
        });
    }

    render() {
        const {tweets} = this.state;
        return (<Page {...META}>
            <main className={styles.content}><article className={styles.container}>
                <header className={styles.headerContainer}><h1 className={styles.h1}>Image Gallery</h1>
                <p>Check out the conversation about Chocobo Caf&eacute; on Twitter.</p></header>
                <div className={styles.grid}></div>
            </article></main>
        </Page>);
    }

    tweets(data, textStatus, jqXHR) {
        console.log(data);
    }
}