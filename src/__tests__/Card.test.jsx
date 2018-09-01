import React from 'react';
import { mount } from 'enzyme';
import Card from '../components/Card';

const card = mount(<Card raised={50} target={100} />);

it('renders correctly', () => {
  expect(card.exists()).toBe(true);
});

it('renders a Progress component containing a progress bar and information about progress', () => {
  const progress = card.find('Progress');
  expect(progress.exists()).toBe(true);
  expect(progress.find('ProgressBar').exists()).toBe(true);
});

it('renders a Donation component correctly', () => {
  const donation = card.find('Donate');
  expect(donation.exists()).toBe(true);
});
