import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const app = mount(<App />);

it('renders without crashing', () => {
  expect(app.exists()).toBe(true);
});

it('renders a wrapping div', () => {
  expect(app.find('div.App').hasClass('wrap')).toBe(true);
});

it('renders a Progress component containing a progress bar and information about progress', () => {
  const progress = app.find('Progress');
  expect(progress.exists()).toBe(true);
  expect(progress.find('ProgressBar').exists()).toBe(true);
});
