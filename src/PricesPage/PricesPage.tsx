import * as React from 'react';
import { render } from 'react-dom';

import PrcieList from './PrcieList';
import Footer from '../Footer'
import Header from '../Header'

render(

    <div>
        <Header></Header>
        <PrcieList />
        <Footer />
    </div>

    , document.getElementById('main'));