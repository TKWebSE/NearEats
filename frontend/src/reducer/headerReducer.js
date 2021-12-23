import { REQUEST_STATE } from '../constants';

export const headerInitializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    isOpenDrawer: false,
}

export const headerActionTypes = {
    OPENDRAWER: "OPENDRAWER",
    CLOSEDRAWER: "CLOSEDRAWER",
}

export const headerReducer = (state, action) => {
    switch (action.type) {
        case headerActionTypes.OPENDRAWER:
            return {
                isOpenDrawer: true,
                fetchState: REQUEST_STATE.OPENDRAWER,
            }
        case headerActionTypes.CLOSEDRAWER:
            return {
                isOpenDrawer: false,
                fetchState: REQUEST_STATE.CLOSEDRAWER,
            }
        default:
            throw new Error();
    }
}
