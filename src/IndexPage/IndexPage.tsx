import * as React from 'react';
import { render } from 'react-dom';

import Counter from './MainContent';
import Footer from '../Footer'
import Header from '../Header'

render(

    <div>
        <Header></Header>
        <Counter />
        <Footer />
    </div>

    , document.getElementById('main'));