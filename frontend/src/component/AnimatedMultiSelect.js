import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
  { value: "ruby", label: "Ruby" },
  { value: "rails", label: "Rails" },
  { value: "neko", label: "Neko" },
  { value: "teretere", label: "Teretere" },
]

export default function AnimatedMultiSelect({ placeholederText }) {
  return (
    <Select
      options={options}
      placeholder={placeholederText}
      value={options[0]}
    />
  );
}
