'use strict'

// Node Modules
import React from 'react'
import Head from 'next/head'

export default class HEAD extends React.Component {
    constructor( props ) {
        super();
    }

    render() {
        const { title, description, keywords, canonical } = this.props;
        return (
            <Head>
                <title>{ title } | Kyle A. Carter | ICT 4510 Advanced Website Design and Management</title>
                <meta name="description" content={description || ''} />
                <meta name="keywords" content={keywords || ''} />
                <link rel="canonical" href={canonical || ''} />
            </Head>
        );
    }
}