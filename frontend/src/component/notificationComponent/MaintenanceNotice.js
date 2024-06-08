import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import media from "styled-media-query";
import styled from "styled-components";


const Title = styled.div`
  margin-top:3%;
  margin-bottom:3%;
  font-size:250%;
  ${media.lessThan("large")`
      font-size:230%;
  `}
  ${media.lessThan("medium")`
      font-size:150%;
  `}
  ${media.lessThan("small")`
    font-size:100%;
  `}
`;

const Text = styled.div`
  margin-bottom:1%;
`;

export const MaintenanceNoticeTitle = `メンテナンスのお知らせ`;

export const MaintenanceNotice = () => {

  return (
    <Fragment>
      <Title>
        {MaintenanceNoticeTitle}
      </Title>
      <Text>
        メンテナンスを実施します。
      </Text>
      <Text>
        メンテナンス実施中はアプリを使用できません。
      </Text>
      <br />
      <br />
      <Text>
        NearEats運営チーム
      </Text>
    </Fragment>
  )
}
