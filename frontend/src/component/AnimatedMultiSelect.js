import React, { useContext, useEffect, useState } from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
  { value: "東京都千代田区", label: "東京都千代田区" },
  { value: "東京都中央区", label: "東京都中央区" },
  { value: "東京都港区", label: "東京都港区" },
  { value: "東京都新宿区", label: "東京都新宿区" },
  { value: "東京都文京区", label: "東京都文京区" },
  { value: "東京都台東区", label: "東京都台東区" },
  { value: "東京都墨田区", label: "東京都墨田区" },
  { value: "東京都江東区", label: "東京都江東区" },
  { value: "東京都品川区", label: "東京都品川区" },
  { value: "東京都目黒区", label: "東京都目黒区" },
  { value: "東京都大田区", label: "東京都大田区" },
  { value: "東京都世田谷区", label: "東京都世田谷区" },
  { value: "東京都渋谷区", label: "東京都渋谷区" },
  { value: "東京都中野区", label: "東京都中野区" },
  { value: "東京都杉並区", label: "東京都杉並区" },
  { value: "東京都豊島区", label: "東京都豊島区" },
  { value: "東京都北区", label: "東京都北区" },
  { value: "東京都荒川区", label: "東京都荒川区" },
  { value: "東京都板橋区", label: "東京都板橋区" },
  { value: "東京都練馬区", label: "東京都練馬区" },
  { value: "東京都足立区", label: "東京都足立区" },
  { value: "東京都葛飾区", label: "東京都葛飾区" },
  { value: "東京都江戸川区", label: "東京都江戸川区" },
]

export default function AnimatedMultiSelect({ placeholederText, setLocation, nowSelectLocation }) {

  function handleChange(value) {
    setLocation(value);
  }

  function keyPress(e) {
    if (e.which === 13)
      console.log(e)
  }

  console.log(nowSelectLocation)
  return (
    <Select
      options={options}
      placeholder={placeholederText}
      defaultValue={{ label: nowSelectLocation, value: nowSelectLocation }}
      onChange={(event) => { handleChange(event.value) }}
      onKeyPress={(e) => keyPress(e)}
    />
  );
}
