import * as React from 'react';
import { render } from 'react-dom';

import CityMapper from './CityMapper';
import Footer from '../Footer'
import Header from '../Header'

render(

    <div>
        <Header></Header>
        <CityMapper />
        <Footer />
    </div>

    , document.getElementById('main'));