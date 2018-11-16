'use strict'

// Node Modules
import React from 'react'

// Components
import Page from '../../components/Page'
import {Button, Textfield} from '../../components/Form'

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
        this.submit = this.submit.bind(this);
        this.get_values = this.get_values.bind(this);
        this.show_values = this.show_values.bind(this);
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
        const {errors} = this.state;
        return(<Page {...META}>
            <main className={styles.content}>
                <form method="post" id="assignment-one-form" className={styles.form} onSubmit={this.submit} onChange={this.submit}>
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
                    <Button presentation='btnPrimary' attributes={{
                        type: 'submit',
                        value: 'Submit',
                        onClick: this.submit,
                        onTouchEnd: this.submit,
                        form: 'assignment-one-form'
                    }} />
                </form>
            </main>
        </Page>)
    }

    submit( e ) {
        e.preventDefault();
        const form = document.getElementById('assignment-one-form');
        const params = (()=>{
            let obj = {};
            Array.prototype.slice.call(form.querySelectorAll('#assignment-one-form input')).forEach((element)=> {
                if (!/(?:submit|reset|button)/g.test(element.type)) {
                    obj[element.name] = element.getAttributes();
                    obj[element.name].value = element.value;
                }
            });
            return obj;
        })();
        if (e.type != 'change') this.show_values(form, this.get_values(params));

        let errors = '';
        for( let key in params) {
            let param = params[key];
            if (param.value.trim() === '' && param.hasOwnProperty('required')) {
                errors += param.name + ' ';
            }
            if (param.type === 'email') {
                if (!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g.test(param.value.trim())) {
                    errors += param.name + ' ';
                }
            }
            if (param.type === 'tel') {
                if (!/^(?:(?:\+|011\s)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\s)*[\s\d\(\)\-\.]{6,14}$/g.test(param.value.trim())) {
                    errors += param.name + ' ';
                }
            }
        }

        if (errors != '') {
            this.setState({
                errors: errors
            });
        }
        return errors === '';
    }

    get_values(params) {
        let form_values = [];
        for (let key in params) {
            const param = params[key];
            const field = document.getElementById(param.id)
            form_values.push(field.name + '|' + field.value);
        }
        return form_values;
    }

    show_values( form, values ) {
        if (values.length < 1) return;
        var root = form.parentNode
        var ul = document.getElementById('form-values');

        if (!ul) {
            ul = document.createElement('ul');
            ul.setAttribute('id', 'form-values');
            root.appendChild(ul);
        }

        values.forEach(function(val) {
            var li = ul.querySelector('li[data-for="' + val.replace(/^([^\|]+?)\|[^\$]*/g, '$1') + '"]');
            if (val.replace(/^[^\|]+?\|([^\$]*)/g, '$1').trim() === '') return;
            if (!li) {
                li = document.createElement('li');
                li.setAttribute('data-for', val.replace(/^([^\|]+?)\|[^\$]*/g, '$1'));
            }
            li.innerHTML = val.replace(/^[^\|]+?\|([^\$]*)/g, '$1');
            return ul.appendChild(li);
        });

        return this;
    }
}