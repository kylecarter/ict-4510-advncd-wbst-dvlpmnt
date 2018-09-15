'use strict'

// Node Modules
import Link from 'next/link'

// Styles
import styles from './styles.sass'

export default ()=> (<nav className={styles.nav}><div className={styles.navContainer}>
    <ul className={styles.listMenu}>
        <li className={styles.branding}><Link href="/"><a className="fas fa-home" rel="bookmark"><span className="sr-only">Home</span></a></Link></li>
        <li><Link href="https://github.com/kylecarter"><a className="fab fa-github-alt" rel="bookmark"><span className="sr-only">GitHub</span></a></Link></li>
        <li><Link href="https://twitter.com/kyleacarter"><a className="fab fa-twitter" rel="bookmark"><span className="sr-only">Twitter</span></a></Link></li>
        <li><Link href="https://www.linkedin.com/in/kyle-carter-8425a369/"><a className="fab fa-linkedin-in" rel="bookmark"><span className="sr-only">LinkedIn</span></a></Link></li>
    </ul>
</div></nav>)