'use strict'

// Node Modules
import React from 'react'

// Components
import HEAD from '../../components/Head'

// Styles
import styles from "./styles.sass"

const META = {
    title: '',
    description: '',
    keywords: 'html, css, js, react, nextjs'
}

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div>
            <HEAD {...META} />
        </div>);
    }
}