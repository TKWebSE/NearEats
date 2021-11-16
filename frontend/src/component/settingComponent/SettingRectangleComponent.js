import React, { Fragment, useEffect, useState } from 'react';
import styled from "styled-components";

const RectangleWrapper = styled.h2`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  display: flex;
  padding-left:1%;
  padding-top:1%;
  padding-bottom:1%;
  height:100%;
  width:100%;
`;

const RectangleIcon = styled.div`
  padding-top:1%;
  padding-right:1%;
`;

const RectangleText = styled.div`
  padding-top:1%;
`;

export default function SettingRectangleComponent({ Icon, text, onClick }) {
  return (
    <Fragment>
      <RectangleWrapper onClick={() => { onClick() }}>
        <RectangleIcon>
          <Icon fontSize='large' />
        </RectangleIcon>
        <RectangleText>
          {text}
        </RectangleText>
      </RectangleWrapper>
    </Fragment>
  );
}
