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
    description: 'Check out the conversation about Chocobo Cafe on Reddit.',
    keywords: 'html, css, js, react, nextjs'
};
const _li = (props, index, handler)=> {return (<li key={'react.item.' + props.data.id + '.' + index} id={'post-item-' + props.data.id}>
    <a href={'https://www.reddit.com' + props.data.permalink} target="_blank" rel="nofollow" onClick={handler} onTouchEnd={handler} data-index={index}><img src={props.data.thumbnail} alt={props.data.title}/></a>
</li>)};

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: null, dialog: null};
        this.posts = this.posts.bind(this);
        this.modal = this.modal.bind(this);
        this.dismiss = this.dismiss.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            posts: state.posts,
            dialog: state.dialog
        };
    }

    componentDidMount() {
        const self = this;
        $.get({
            dataType: 'json',
            url: '/api/v1/reddit',
            success: self.posts,
            data: {
                q: 'VeganFoodPorn'
            }
        });
    }

    render() {
        const self = this;
        const {posts, dialog} = self.state;
        return (<Page {...META}>
            <main className={styles.content}><article className={styles.container}>
                <header className={styles.headerContainer}><h1 className={styles.h1}>Image Gallery</h1>
                <p>Check out the conversation about Chocobo Caf&eacute; on Reddit.</p></header>
                {posts && <div className={styles.grid}>
                    <ul className={styles.gallery}>
                        {posts.map((p,i)=> !p.is_video && !p.over_18 && _li(p,i,self.modal) || '')}
                    </ul>
                </div>}
                <aside className={[styles.dialog, dialog && styles.dialogOpen].join(' ')}><div className={styles.dialogContainer}>
                    <button className={['fas', 'fa-times', styles.close].join(' ')} onClick={this.dismiss} onTouchEnd={this.dismiss}><span className="sr-only">Dismiss</span></button>
                    {dialog && <div className={styles.dialogContent}>
                        <figure className={styles.responsiveEmbed} style={{backgroundImage: 'url(' + dialog.data.url.replace(/\/\/imgur\.com\/(?:[^\/]+\/)*([^\$]+)$/, '//i.imgur.com/$1.jpg') + ')'}}>
                            <figcaption className={styles.responsiveEmbedCaption}>
                                <h2 className={styles.h2}>{dialog.data.title}</h2>
                                <a href={dialog.data.permalink} className={['fab', 'fa-reddit-alien', styles.reddit].join(' ')} rel="nofollow" target="_blank"><span className="sr-only">Link to Reddit post</span></a>
                            </figcaption>
                        </figure>
                    </div>}
                </div></aside>
            </article></main>
        </Page>);
    }

    posts(data, textStatus, jqXHR) {
        this.setState({posts: data.posts});
    }

    modal(e) {
        let post = this.state.posts[parseInt(e.currentTarget.getAttribute('data-index'))];
        if (/\/\/imgur\.com\/(?:[^\/]+\/)+([^\$]+)$/.test(post.data.url)) return;
        e.preventDefault();
        this.setState({dialog: post});
    }

    dismiss(e) {
        e.preventDefault()
        this.setState({dialog: null});
    }
}