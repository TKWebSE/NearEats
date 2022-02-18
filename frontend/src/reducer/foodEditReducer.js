import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    food: null,
}

export const foodEditActionTypes = {
    FETCHING: "FECTHING",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    SETTINGFOODIMAGE: "SETTINGFOODIMAGE",
    SETTINGFOODNAME: "SETTINGFOODNAME",
    SETTINGFOODPRICE: "SETTINGFOODPRICE",
    SETTINGFOODDESCRIPTION: "SETTINGFOODDESCRIPTION",
}

export const foodEditReducer = (state, action) => {
    switch (action.type) {
        case foodEditActionTypes.FETCHING:
            return {
                ...state,
                fetchstate: REQUEST_STATE.LOADING,
            }
        case foodEditActionTypes.FETCH_SUCCESS:
            return {
                fetchstate: REQUEST_STATE.OK,
                food: action.payload.food,
            }
        case foodEditActionTypes.SETTINGFOODIMAGE:
            console.log(state)
            return {
                fetchstate: REQUEST_STATE.OK,
                food: {
                    id: state.food.id,
                    image: action.payload.image,
                    name: state.food.name,
                    price: state.food.price,
                    description: action.payload.description,
                }
            }
        case foodEditActionTypes.SETTINGFOODNAME:
            return {
                fetchstate: REQUEST_STATE.OK,
                food: {
                    id: state.food.id,
                    image: state.image,
                    name: action.payload.name,
                    price: state.food.price,
                    description: state.food.description,
                }
            }
        case foodEditActionTypes.SETTINGFOODPRICE:
            return {
                fetchstate: REQUEST_STATE.OK,
                food: {
                    id: state.food.id,
                    image: state.image,
                    name: state.food.name,
                    price: action.payload.price,
                    description: state.food.description,
                }
            }
        case foodEditActionTypes.SETTINGFOODDESCRIPTION:
            return {
                fetchstate: REQUEST_STATE.OK,
                food: {
                    id: state.food.id,
                    image: state.image,
                    name: state.food.name,
                    price: state.food.price,
                    description: action.payload.description,
                }
            }
        default:
            throw Error();
    }
}
