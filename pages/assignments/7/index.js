'use strict'

// Node Modules
import React from 'react'
import jQuery from 'jquery'

// Components
import Page from '../../../components/Page'

// Styles
import styles from './styles.sass'

const $ = jQuery;
const META = {
    title: 'Assignment 7',
    description: 'Assignment 6: Make use of the video element to show videos from a playlist.',
    keywords: 'html, css, js, react, nextjs'
};

class SOURCE extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: props.path,
            type: props.type
        }
    }

    render() {
        const {type, path} = this.state;
        return <source src={path} type={'video/' + type}></source>;
    }
}

class LI extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.state = {
            pathName: props.pathName,
            formats: ['mp4', 'ogv', 'webm']
        }
    }

    render() {
        const {formats, pathName} = this.state;
        return (<li className={styles.section}>
            <video className={styles.video} controls id={pathName.replace('/', '-')} width="300" height="300" onCanPlayThrough={this.play}>
                {formats.map((type, idx)=> <SOURCE path={'/static/' + pathName + '.' + type} type={type} key={'react.source.' + pathName + '.' + type + '.' + idx }/>)}
                <p>Your browser doesn't support HTML5 video. Here is a <a href={'/static/' + pathName + '.mp4'}>link to the video</a> instead.</p>
            </video>
        </li>);
    }

    play(e) {
        return e.target.play();
    }
}

export default class Seven extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: null
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            videos: state.videos
        }
    }

    componentDidMount() {
        const self = this;
        $.get({
            url: '/static/json/video-data.json',
            dataType: 'json',
            success: (data, textStatus, jqXHR)=> self.setState({videos: data})
        });
    }

    render() {
        const {videos} = this.state;
        return (<Page {...META}>
            <main className={styles.content}><article className={styles.article}>
                <h1 className={styles.h1}>Video Element</h1>
                <ul className={styles.videoList}>
                    {videos && videos.map((data, idx)=> <LI pathName={data.video} key={'react.li.' + data.video + '.' + idx} />)}
                </ul>
            </article></main>
        </Page>);
    }
}