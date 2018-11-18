'use strict'

// Node Modules
import React from 'react'
import $ from 'jquery'

// Components
import Page from '../components/Page'
import {Button, Textarea, Textfield} from '../components/Form'

// Styles
import styles from "./styles.sass"

const META = {
    title: 'Contact Us',
    description: 'Use the form below to let us know what your experiences with our restaurant are like.',
    keywords: 'html, css, js, react, nextjs'
};
const _cookieify = cookie => {
    let obj = new Object();
    cookie.split(';').forEach(data => obj[data.split('=')[0]] = data.split('=')[1]);
    return obj;
};

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false
        };
        this.submit = this.submit.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            success: state.success
        };
    }

    componentDidMount() {
        const self = this;
        $(()=> {
            const validate = require('jquery-validation');
            $(document.documentElement).removeClass('no-js');

            $.ajaxSetup({
                beforeSend(xhr, settings) {
                    xhr.setRequestHeader("X-CSRFToken", _cookieify(document.cookie).csrftoken);
                }
            });

            $('#contact-form').validate({
                highlight(element, errorClass) {
                    $(element).parent().addClass(styles.formError);
                },
                unhighlight(element, validClass) {
                    $(element).parent().removeClass(styles.formError);
                }
            });
        });
    }

    render() {
        const {success} = this.state;
        return (<Page {...META}>
            <main className={styles.content}><article className={styles.container}>
                <header className={styles.headerContainer}>
                    <h1 className={styles.h1}>Tell us about your experience</h1>
                    <p>Use the form below to let us know what your experiences with our restaurant are like.</p>
                </header>
                <div className={styles.formWrapper}><form method="post" id="contact-form" className={[styles.form, 'no-js-hidden'].join(' ')} onSubmit={this.submit} action="">
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
                        className: [styles.formTextarea].join(' ')
                    }} />
                    <Button presentation='btnPrimary' attributes={{
                        type: 'submit',
                        value: 'Submit',
                        form: 'contact-form'
                    }} />
                </form>{success && <em className={styles.success}>Your message was submitted successfully. A customer service representive will be in touch with you.</em>}</div>
            </article></main>
        </Page>);
    }

    submit(e) {
        e.preventDefault();
        const self = this;
        let qstring = (()=> {
            let obj = new Object();
            decodeURIComponent($(e.target).serialize()).split(/[\?&]/i).forEach(pair => obj[pair.split('=')[0]] = pair.split('=')[1]);
            return obj;
        })();
        $.post( `/api/v1/contact/`, qstring, function( data ) {
            self.setState({
                success: data.status === 200
            })
        });
    }
}