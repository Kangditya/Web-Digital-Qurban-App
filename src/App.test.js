import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import FilterList from './Components/FilterList/FilterList';
import FilterListItem from './Components/FilterListItem/FilterListItem';
import LiveStockGrid from './Components/LiveStockGrid/LiveStockGrid';


test('e commerce Qurban', () => {
  const component = renderer.create(
    <App/>
  );
})

