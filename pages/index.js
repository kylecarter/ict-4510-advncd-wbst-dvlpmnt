'use strict'

// Node Modules
import React from 'react'
import Link from 'next/link'

// Components
import HEAD from '../components/Head'

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

    render() {
        return (<div>
            <HEAD {...META} />
            <div className="page page-home">
                <header className={styles.marquee} role="banner"><div className={styles.container}>
                    <h1 className={styles.title}>Kyle A. Carter | ICT 4510 Advanced Website Design and Management</h1>
                </div></header>
                <div id="content" className={[styles.container, styles.wrapper].join(' ')}>
                    <aside className={styles.sidebar} role="complementary">
                        <div className={styles.sidebarBlock}>
                            <img className={[styles.imgAvatar].join(' ')} src="/static/kylecarter_profile_web.JPG" alt="Kyle Carter Headshot" />
                            <h2>Kyle A. Carter</h2>
                        </div>
                        <div className={styles.sidebarBlock}>
                            <p>An experienced front end developer versed driven by a desire to create scalable, innovative web applications that inspire and promote success</p>
                        </div>
                        <div className={styles.sidebarBlock}>
                            <ul className={styles.listMeta}>
                                <li className={styles.icoUsers}>Web Developer</li>
                                <li className={styles.icoMap}><Link href="https://www.google.com/maps/place/Austin,+TX/@30.3076863,-97.8934865,11z/data=!3m1!4b1!4m5!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608"><a rel="bookmark">Austin, TX</a></Link></li>
                                <li className={styles.icoLink}><Link href="https://github.com/kylecarter"><a rel="bookmark">https://github.com/kylecarter</a></Link></li>
                            </ul>
                        </div>
                    </aside>
                    <main className={styles.content}>
                        <article role="article">
                            <h2>Assignments</h2>
                            <ul className={styles.listAssignments}>
                                <li>
                                    <h3>Assignment One</h3>
                                    <p>Familiarize yourselves with the HTTP protocol, Web browsers and Web servers. Review HTML and CSS concepts.</p>
                                    <Link href="/assignments/1"><a rel="bookmark">Go to assignment.</a></Link>
                                </li>
                            </ul>
                        </article>
                    </main>
                </div>
            </div>
        </div>)
    }
}
