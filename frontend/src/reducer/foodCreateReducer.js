export const initializeState = {
    food: {
        name: "",
        price: 0,
        description: "",
        city: "",
    },
}

export const foodCreateActionTypes = {
    INITIAL: "INITIAL",
    SETTINGFOODNAME: "SETTINGFOODNAME",
    SETTINGFOODPRICE: "SETTINGFOODPRICE",
    SETTINGFOODDESCRIPTION: "SETTINGFOODDESCRIPTION",
    SETTINGFOODCITY: "SETTINGFOODCITY",
    SUCCESS: "SUCCESS",
}

export const foodCreateReducer = (state, action) => {
    switch (action.type) {
        case foodCreateActionTypes.SETTINGFOODNAME:
            return {
                food: {
                    name: action.payload.name,
                    price: state.food.price,
                    description: state.food.description,
                    city: state.food.city,
                }
            }
        case foodCreateActionTypes.SETTINGFOODPRICE:
            return {
                food: {
                    name: state.food.name,
                    price: action.payload.price,
                    description: state.food.description,
                    city: state.food.city,
                }
            }
        case foodCreateActionTypes.SETTINGFOODDESCRIPTION:
            return {
                food: {
                    name: state.food.name,
                    price: state.food.price,
                    description: action.payload.description,
                    city: state.food.city,
                }
            }
        case foodCreateActionTypes.SETTINGFOODCITY:
            return {
                food: {
                    name: state.food.name,
                    price: state.food.price,
                    description: state.food.description,
                    city: action.payload.city,
                }
            }
        default:
            throw new Error();
    }
}
