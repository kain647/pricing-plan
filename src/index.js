import React from 'react';
import { plans } from './price/const'
import { PricePlanContainer } from './price/pricePlan'
import { priceTableTheme } from './price/themes'
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <PricePlanContainer plans={plans} theme={priceTableTheme} />
  </React.StrictMode>,
  document.getElementById('root')
);
