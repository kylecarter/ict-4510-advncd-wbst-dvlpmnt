'use strict'

// Node Modules
import React from 'react'

// Components
import Page from '../components/Page'

// Styles
import styles from "./styles.sass"

const META = {
    title: 'About Us',
    description: 'Learn more about Chocobo Cafe.',
    keywords: 'html, css, js, react, nextjs'
}
const _cookieify = cookie => {
    let obj = new Object();
    cookie.split(';').forEach(data => obj[data.split('=')[0]] = data.split('=')[1]);
    return obj;
};

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.setTimeout(()=>{
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 39.678121, lng: -104.961753},
            zoom: 15
        });
        const marker = new google.maps.Marker({position: {lat: 39.678121, lng: -104.961753}, map: map});
        }, 300);
    }

    render() {
        return (<Page {...META}>
            <main className={styles.content}>
                <article role="article">
                    <header className={styles.marquee} role="banner"><div className={styles.container}>
                        <h1 className={styles.title}>Holler at us y&rsquo;all!</h1>
                    </div></header>
                    <section className={styles.section}><div className={styles.container}>
                        <h2>Our Location</h2>
                        <p>We are located on the idyllic University of Denver campus in the heart of Denver Colorado.</p>
                        <address><a href="https://goo.gl/maps/aK8gXbdydM62" className={styles.unstyled} target="_blank" rel="nofollow">
                            <span className={['fas', 'fa-map-marker-alt', styles.fas].join(' ')} role="icon" aria-hidden="true"></span>
                            Chocobo Caf&eacute; 2055 E. Evans Ave. Denver, Colorado 80208
                        </a></address>
                        <time><span className="far fa-clock" role="icon" aria-hidden="true"></span> Open Sun. - Sat. 7 a.m. to 9 p.m.</time>
                        <a href="tel:303-871-3111" className={styles.unstyled} target="_blank" rel="nofollow"><span className="fas fa-phone" role="icon" aria-hidden="true"></span> 303-871-3111</a>
                        <a href="mailto:campuslife@du.edu" className={styles.unstyled} target="_blank" rel="nofollow"><span className="fas fa-envelope" role="icon" aria-hidden="true"></span> campuslife@du.edu</a>
                        <div className={styles.responsiveEmbed}><div id="map" className={styles.responsiveEmbedItem}></div></div>
                    </div></section>
                </article>
            </main>
            <script src={"https://maps.googleapis.com/maps/api/js?key=" + _cookieify(document.cookie).GOOGLE_MAPS_API_KEY + "&callback=initMap"} async defer></script>
        </Page>);
    }
}