'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

// Components
import HEAD from '../Head'
import Navigation from '../Navigation'
import Footer from '../Footer'

// Styles
import styles from './styles.sass'

const _ = underscore;
export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.extend({}, props);
    }

    render() {
        return (<div>
            <HEAD {...this.state} />
            <Navigation />
            <div className={styles.page}>{this.props.children}</div>
            <Footer />
        </div>);
    }
}