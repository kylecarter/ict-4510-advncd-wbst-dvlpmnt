'use strict'

// Node Modules
import React from 'react'

// Components
import HEAD from '../../../components/Head'
import {Button, Textfield} from '../../../components/Form'

// Styles
import styles from './styles.sass'

const META = {
    title: 'Assignment 1',
    description: 'Assignment 1: build a web form.',
    keywords: 'html, css, js, react, nextjs'
}

export default class One extends React.Component {
    constructor(props) {
        super();
        this.state = {
            errors: ''
        }
        this.submit = this.submit.bind(this)
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

        document.getElementById('assignment-one-form').addEventListener('submit', this.submit )
    }

    render() {
        const {errors} = this.state;
        return(<div>
            <HEAD {...META}/>
            <main className={styles.content}>
                <form method="post" id="assignment-one-form" className={styles.form}>
                    <Textfield err={/first_name/g.test(errors)} label='First Name' label_display='visible' name='first_name' attributes={{
                        type: 'text',
                        required: 'required',
                        placeholder: 'John',
                        autoComplete: 'given-name',
                        autoFocus: 'autofocus',
                        className: [styles.formTextfield].join(' ')
                    }} />
                    <Textfield err={/last_name/g.test(errors)} label='Last Name' label_display='visible' name='last_name' attributes={{
                        type: 'text',
                        required: 'required',
                        placeholder: 'Doe',
                        autoComplete: 'family-name',
                        className: [styles.formTextfield].join(' ')
                    }} />
                    <Textfield err={/email/g.test(errors)} label='Email Address' label_display='visible' name='email' attributes={{
                        type: 'email',
                        required: 'required',
                        placeholder: 'john.doe@email.com',
                        autoComplete: 'email',
                        className: [styles.formTextfield].join(' ')
                    }} />
                    <Textfield err={/phone/g.test(errors)} label='Telephone Number' label_display='visible' name='phone' attributes={{
                        type: 'tel',
                        placeholder: '(xxx) xxx-xx or +xx xx xxxx xxxx',
                        autoComplete: 'tel',
                        className: [styles.formTextfield].join(' ')
                    }} />
                    <Button attributes={{
                        type: 'submit',
                        value: 'Submit',
                        form: 'assignment-one-form',
                        className: [styles.btnPrimary].join(' ')
                    }} />
                </form>
            </main>
        </div>)
    }

    submit( e ) {
        const params = (()=>{
            let obj = {};
            Array.prototype.slice.call(e.target.querySelectorAll('input')).forEach((element)=> {
                if (!/(?:submit|reset|button)/g.test(element.type)) {
                    obj[element.name] = element.getAttributes();
                    obj[element.name].value = element.value;
                }
            });
            return obj;
        })();

        let errors = '';
        for( let key in params) {
            let element = params[key];
            if (element.value === '' && element.required) {
                errors += element.name + ' ';
            }
            if (element.type === 'email') {
                if (!/^[a-z]+@[a-z]+\.[a-z]+$/g.test(element.value)) {
                    errors += element.name + ' ';
                }
            }
            if (element.type === 'tel') {
                if (/^(?:(?:\+|011\s)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\s)*[\s\d\(\)\-\.]{6,14}$/g.test(element.value)) {
                    errors += element.name + ' ';
                }
            }
        }

        console.log(errors)
        if (errors != '') {
            this.setState({
                errors: errors
            });
        }
        return errors === '' ? true : e.preventDefault();
    }
}