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

export const UpdateCompleteTitle = `アップデート完了のお知らせ`;

export const UpdateComplete = () => {

  return (
    <Fragment>
      <Title>
        {UpdateCompleteTitle}
      </Title>
      <Text>
        アプリバージョンを1.0.1にアップデートしました。
      </Text>
      <Text>
        アプリの再起動をお願いします。
      </Text>
      <br />
      <br />
      <Text>
        NearEats運営チーム
      </Text>
    </Fragment>
  )
}
