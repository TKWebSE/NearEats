import React, {Fragment} from 'react';
import styled from `styled-components`;
import { REQUEST_STATE } from '../constants';

const foodWrapper = styled.div`
`;

export const Foods = () => {

    return (
        <Fragment>
            <header>
                フード一覧
            </header>
            <foodWrapper>
                {
                    REQUEST_STATE.LOADING == State.fetc
                }

            </foodWrapper>
        </Fragment>
    )
}