'use strict'

// Styles
import styles from './styles.sass'

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.toggle = this.toggle.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            show: state.show
        };
    }

    toggle(e) {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const {show} = this.state;
        return (<nav id="nav" className={[styles.nav, show ? styles.navOpen : ''].join(' ').trim()}><div className={styles.navContainer} role="navigation">
            <a href="/" className={[styles.logo, styles.branding].join(' ')} rel="bookmark"><img src="/static/logo.svg" alt="Chocobo Cafe logo" /></a>
            <a href="/" className={['fas', 'fa-bars', styles.bars].join(' ').trim()} rel="bookmark" role="button" onClick={this.toggle} onTouchEnd={this.toggle}><span className="sr-only">Toggle menu visibility...</span></a>
            <ul className={styles.listMenu}>
                <li><a href="/" rel="bookmark">Home</a></li>
                <li><a href="/about" rel="bookmark">About Us</a></li>
                <li><a href="/menu" rel="bookmark">Menu</a></li>
                <li><a href="/gallery" rel="bookmark">Gallery</a></li>
                <li><a href="/contact" rel="bookmark">Contact Us</a></li>
            </ul>
        </div></nav>);
    }
}