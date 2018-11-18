'use strict'

// Node Modules
import React from 'react'

// Components
import Page from '../components/Page'
import {Textarea, Textfield} from '../components/Form'

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

    componentDidMount() {
        if (!Element.prototype.getAttributes) {
            Element.prototype.getAttributes = function () {
                const self = this;
                const attributes = Array.isArray(arguments[0]) && arguments[0] || arguments.length > 0 && [...arguments] || Array.prototype.slice.call(this.attributes);
                let data = {};
                attributes.forEach((index) => {
                    if (index instanceof Attr) return data[index.name] = index.value;
                    if (!self.getAttribute(index) || self.getAttribute(index) === '') return;
                    return data[index] = self.getAttribute(index);
                });
                return data;
            }
        }
    }

    render() {
        return (<Page {...META}>
            <main className={styles.content}><article className={styles.container}>
                <header className={styles.headerContainer}>
                    <h1 className={styles.h1}>Tell us about your experience</h1>
                    <p>Use the form below to let us know what your experiences with our restaurant are like.</p>
                </header>
                <form method="post" id="contact-form" className={styles.form} action="">
                    <Textfield label='Full Name' label_display='visible' name='contact' attributes={{
                        type: 'text',
                        required: 'required',
                        placeholder: 'John Doe',
                        autoComplete: 'name',
                        autoFocus: 'autofocus',
                        className: [styles.formTextfield].join(' ')
                    }} />
                    <Textfield label='Email Address' label_display='visible' name='email' attributes={{
                        type: 'email',
                        required: 'required',
                        placeholder: 'john.doe@email.com',
                        autoComplete: 'email',
                        className: [styles.formTextfield].join(' ')
                    }} />
                    <Textarea label="Message" label_display="visible" name='message' attributes={{
                        required: 'required',
                        placeholder: 'Your message',
                        className: [styles.formTextfield].join(' ')
                    }} />
                    <Button presentation='btnPrimary' attributes={{
                        type: 'submit',
                        value: 'Submit',
                        form: 'contact-form'
                    }} />
                </form>
            </article></main>
        </Page>);
    }
}