'use strict'

// Node Modules
import Link from 'next/link'

// Styles
import styles from './styles.sass'

export default () => {
    return (<footer id="footer" className={styles.footer} role="contentinfo">
        <nav className={styles.footerTop}><div className={styles.footerContainter}>
            <h2 className={styles.socialTitle}>Connect with Kyle</h2>
            <ul className={styles.socialLinks}>
                <li><Link href="https://github.com/kylecarter"><a className="fab fa-github-alt" rel="bookmark"><span className="sr-only">GitHub</span></a></Link></li>
                <li><Link href="https://twitter.com/kyleacarter"><a className="fab fa-twitter" rel="bookmark"><span className="sr-only">Twitter</span></a></Link></li>
                <li><Link href="https://www.linkedin.com/in/kyle-carter-8425a369/"><a className="fab fa-linked-in" rel="bookmark"><span className="sr-only">LinkedIn</span></a></Link></li>
            </ul>
        </div></nav>
        <div className={styles.footerBottom}><div className={styles.footerContainter}>
            <h6>&copy; 2018 Kyle A. Carter</h6>
        </div></div>
    </footer>);
}