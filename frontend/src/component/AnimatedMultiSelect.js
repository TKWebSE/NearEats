import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';

const animatedComponents = makeAnimated();

const valueList = [
  { value: "ruby", label: "Ruby" },
  { value: "rails", label: "Rails" },
  { value: "neko", label: "Neko" },
  { value: "teretere", label: "Teretere" },
]

export default function AnimatedMultiSelect() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[valueList[4], valueList[5]]}
      placeholder="エリア設定"
      options={valueList}
      width='2000px'
      styles={{
        singleValue: base => ({
          ...base,
          padding: 5,
          borderRadius: 5,
          background: "red",
          color: 'white',
          display: 'flex',
        }),
      }}
    />
  );
}
