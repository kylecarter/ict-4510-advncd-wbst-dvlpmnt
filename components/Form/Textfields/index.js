'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

// Styles
import styles from './styles.sass'

const _ = underscore

export default class Textfield extends React.Component {
    constructor(props) {
        super();
        this.state = _.extend({}, props);
    }

    static getDerivedStateFromProps(props, state) {
        return _.extend({}, props);
    }

    render() {
        const {attributes, err, label, label_display, name} = this.state;
        return (<div className={[styles.formItem, styles.formTextfield, err ? styles.formError : styles.formValid].join(' ')}>
            <label htmlFor={name} className={'label-display' + label_display}>{label}</label>
            <input id={name} name={name} {...attributes}/>
            {err && <label htmlFor={name} className={styles.labelError}>Please check the value of this field.</label>}
        </div>)
    }
}