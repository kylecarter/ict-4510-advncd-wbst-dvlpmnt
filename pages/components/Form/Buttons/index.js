'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

// Styles
import styles from './styles.sass'

const _ = underscore

export default class Button extends React.Component {
    constructor(props) {
        super();
        this.state = _.extend({}, props);
    }

    render() {
        const { attributes, presentation } = this.state;
        let attrs = _.extend({
            className: styles[presentation]
        }, attributes);
        return (<div className={[styles.formItem, styles.formButton].join(' ')}>
            <input {...attrs} />
        </div>)
    }
}