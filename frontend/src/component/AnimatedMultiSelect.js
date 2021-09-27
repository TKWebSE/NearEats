import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';

const animatedComponents = makeAnimated();

const options = [
  { value: "ruby", label: "Ruby" },
  { value: "rails", label: "Rails" },
  { value: "neko", label: "Neko" },
  { value: "teretere", label: "Teretere" },
]

export default function AnimatedMultiSelect() {
  return (
    <Select options={options} />
  );
}
