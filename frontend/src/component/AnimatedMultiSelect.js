import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { locationConstans } from '../locationConstants';

const animatedComponents = makeAnimated();

export default function AnimatedMultiSelect({ placeholederText, setLocation, nowSelectLocation }) {

  function handleChange(value) {
    setLocation(value);
  }

  function onkeyPressHandle(e) {
    if (e.which === 13)
      console.log(e)
  }

  console.log(nowSelectLocation)
  return (
    <Select
      options={locationConstans}
      placeholder={placeholederText}
      defaultValue={{ label: nowSelectLocation, value: nowSelectLocation }}
      onChange={(event) => { handleChange(event.value) }}
      onKeyPress={(e) => onkeyPressHandle(e)}
    />
  );
}
