import * as React from 'react';
import * as M from 'materialize-css'

export default class Header extends React.Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var options = {};
            var instances = M.Sidenav.init(elems, options);
        });
    }

    render() {
        return (
            <div>
                <nav class="teal lighten-2">
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo right">Chiltern Natural Health</a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li><a href="index.html">About</a></li>
                            <li><a href="prices.html">Price</a></li>
                            <li><a href="contacts.html">Find Us</a></li>
                            <li><a href="contacts.html">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="mobile-demo">
                    <li><a href="index.html">About</a></li>
                    <li><a href="prices.html">Price</a></li>
                    <li><a href="contacts.html">Find Us</a></li>
                    <li><a href="contacts.html">Contact Us</a></li>
                </ul>
            </div>
        );
    }

}



