'use strict'

// Styles
import styles from './styles.sass'

export default () => {
    return (<nav className={styles.banner}><div className={styles.bannerContainer}>
        <address className={styles.address}><a href="https://goo.gl/maps/aK8gXbdydM62" className={styles.link} target="_blank" rel="nofollow">
            <span className={['fas', 'fa-map-marker-alt', styles.fas].join(' ')}  role="icon" aria-hidden="true"></span>
            <span className={styles.text}>Driscoll Center North 2055 E. Evans Ave., Denver, Colorado 80208</span>
        </a></address>
        <div className={styles.contact}>
            <a href="tel:303-871-3111" className={[styles.link].join(' ')} target="_blank" rel="nofollow"><span className={['fas', 'fa-phone', styles.fas].join(' ')}  role="icon" aria-hidden="true"></span> <span className={styles.text}>303-871-3111</span></a>
            <a href="mailto:campuslife@du.edu" className={[styles.link].join(' ')} target="_blank" rel="nofollow"><span className={['fas', 'fa-envelope', styles.fas].join(' ')}  role="icon" aria-hidden="true"></span> <span className={styles.text}>campuslife@du.edu</span></a>
        </div>
    </div></nav>);
}