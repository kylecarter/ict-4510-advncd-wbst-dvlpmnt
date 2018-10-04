'use strict'

// Node Modules
import React from 'react'

// Components
import HEAD from '../../../components/Head'
import {Button, Textfield} from '../../../components/Form'

// Styles
import styles from './styles.sass'

const META = {
    title: 'Assignment 4',
    description: 'Assignment 4: use the geolocation api.',
    keywords: 'html, css, js, react, nextjs'
}

const DU = {
    lat: 39.676609,
    lon: -104.959457
}

const RADIUS = 6371;

export default class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kilometers: 0,
            can_geo: false,
            coords: undefined
        }
        this.map = this.map.bind(this);
        this.distance = this.distance.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(state.kilometers);
        return {
            coords: state.coords,
            can_geo: state.can_geo,
            kilometers: state.kilometers
        };
    }

    componentDidMount() {
        if (window.navigator.geolocation) {
            this.map();
        }
    }

    render() {
        const {can_geo, coords, kilometers} = this.state;
        return (<div>
            <HEAD {...META}/>
            <main className={styles.content}><article className={styles.article}>
                <h1 className={styles.h1}>Using the Geolocation API</h1>
                <section className={styles.section}>
                    <h2 className={styles.h2}>Your Location</h2>
                    {can_geo && <div className={styles.responsiveEmbed}><div id="map" className={styles.responsiveEmbedItem}></div></div>}
                    {can_geo && <p>You are at Lat: {coords.lat} and Lon: {coords.lon}.</p>}
                    {!can_geo && <p>You have to agree to geolocation.</p>}
                </section>
                <section className={styles.section}>
                    <h2 className={styles.h2}>Distance to DU</h2>
                    {!can_geo && <p>You have to agree to geolocation.</p>}
                    {can_geo && <p>You are {kilometers} km from the University of Denver campus.</p>}
                </section>
            </article></main>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6uD_aOL_zFyC6ty4GTHkbR_LY4XpsI0w&callback=initMap" async defer></script>
        </div>)
    }

    map() {
        const self = this;
        window.navigator.geolocation.getCurrentPosition((pos)=> {
            self.setState({
                can_geo: true,
                coords: {
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude
                },
                kilometers: self.distance(pos.coords.latitude, pos.coords.longitude).toFixed(2)
            });
            window.setTimeout(()=>{
                const map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: pos.coords.latitude, lng: pos.coords.longitude},
                    zoom: 15
                  });
                const marker = new google.maps.Marker({position: {lat: pos.coords.latitude, lng: pos.coords.longitude}, map: map});
            }, 300);
        });
    }

    distance(lat, lon) {
        const degreesToRadians = coord => {
            return (coord * Math.PI)/180;
        }

        return Math.acos(
            (Math.sin(degreesToRadians(lat)) * Math.sin(degreesToRadians(DU.lat))) +
            (Math.cos(degreesToRadians(lat)) * Math.cos(degreesToRadians(DU.lat))) *
            Math.cos(degreesToRadians(lon) - degreesToRadians(DU.lon))
        ) * RADIUS;
    }
}