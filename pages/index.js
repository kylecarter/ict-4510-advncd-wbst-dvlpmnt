'use strict'

// Node Modules
import React from 'react'
import Glide from '@glidejs/glide'

// Components
import Page from '../components/Page'

// Styles
import styles from "./styles.sass"

const META = {
    title: 'Home',
    description: 'This is the project work for Kyle A. Carter in the ICT 4510 Advanced Website Design and Management offered through the University of Denver.',
    keywords: 'html, css, js, react, nextjs'
}

export default class Home extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        new Glide('#slider', {
            type: 'slider',
            perView: 1,
            startAt: 0,
            gap: 0
        }).mount();
    }

    render() {
        return (<Page {...META}>
            <main className={styles.content}>
                <article role="article">
                    <header className={styles.marquee} role="banner"><div className={[styles.slider, styles.glide].join(' ')} id="slider"><div data-glide-el="track" className={[styles.frame, styles.glide__track].join(' ')}>
                        <ul id="slider" className={[styles.glide__slides, styles.slides].join(' ')}>
                            <li className={[styles.glide__slide, styles.slide, styles.slideOne].join(' ')}>
                                <div className={styles.container}><div className={styles.slideText}>
                                    <h1 className={styles.slideTitle}>Welcome to Chocobo Caf&eacute;</h1>
                                    <p>We&rsquo;re an eclectic vegan/vegetarian restaurant making a variety of comfort and ethnic foods sure to please every taste bud.</p>
                                </div></div>
                            </li>
                            <li className={[styles.glide__slide, styles.slide, styles.slideTwo].join(' ')}>
                                <div className={styles.container}><div className={styles.slideText}>
                                    <h1 className={styles.slideTitle}>From Farm to our Menu</h1>
                                    <p>We use only the freshest ingredients in all of our food.</p>
                                </div></div>
                            </li>
                            <li className={[styles.glide__slide, styles.slide, styles.slideThree].join(' ')}>
                                <div className={styles.container}><div className={styles.slideText}>
                                    <h1 className={styles.slideTitle}>Happy Hour Just Got Better</h1>
                                    <p>We have a fully stocked bar with drink and food specials everyday of the week.</p>
                                </div></div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.glide__arrows} data-glide-el="controls">
                        <button className={[styles.glide__arrow, styles['glide__arrow--left'], styles.arrow, 'fas', 'fa-chevron-left'].join(' ')} data-glide-dir="<"><span className="sr-only">prev</span></button>
                        <button className={[styles.glide__arrow, styles['glide__arrow--right'], styles.arrow, 'fas', 'fa-chevron-right'].join(' ')} data-glide-dir=">"><span className="sr-only">next</span></button>
                    </div>
                    </div></header>
                    <section className={[styles.section, styles.sectionMenu].join(' ')}><div className={styles.container}><div className={styles.sectionContent}>
                        <h2>Always Fresh, Never Frozen</h2>
                        <p>We source all of our ingredients from local area farms to ensure the best quality food at the best price. We blieve in being a party our community and gladly support our local business partners.</p>
                        <a href="/menu" class={styles.buttonDefault} rel="bookmark">Our Menu</a>
                    </div></div></section>
                    <section className={[styles.section, styles.sectionLocation].join(' ')}><div className={styles.container}><div className={styles.sectionContent}>
                        <h2>We Are Members of the Community</h2>
                        <p>Located near the University of Denver campus in Denver, Colorado, Chocobo Caf&acute; prodly serves the local community some of the most diverse selection in vegan and vegetarian food.</p>
                        <a href="/about" class={styles.buttonDefault} rel="bookmark">Learn More</a>
                    </div></div></section>
                    <section className={[styles.section, styles.sectionContact].join(' ')}><div className={styles.container}><div className={styles.sectionContent}>
                        <h2>We Want to Hear from You</h2>
                        <p>Tell us about your experience and get all sorts of prizes including gift cards for your next meal.</p>
                        <a href="/contact" class={styles.buttonDefault} rel="bookmark">Contact Us</a>
                    </div></div></section>
                </article>
            </main>
        </Page>)
    }
}
