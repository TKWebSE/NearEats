export const initializeState = {
    food: {
        image: "",
        name: "",
        price: 0,
        description: "",
        city: "",
    },
}

export const foodCreateActionTypes = {
    INITIAL: "INITIAL",
    SETFOODIMAGE: "SETFOODIMAGE",
    SETTINGFOODNAME: "SETTINGFOODNAME",
    SETTINGFOODPRICE: "SETTINGFOODPRICE",
    SETTINGFOODDESCRIPTION: "SETTINGFOODDESCRIPTION",
    SETTINGFOODCITY: "SETTINGFOODCITY",
    SUCCESS: "SUCCESS",
}

export const foodCreateReducer = (state, action) => {
    switch (action.type) {
        case foodCreateActionTypes.SETFOODIMAGE:
            return {
                food: {
                    image: action.payload.image,
                    name: state.food.name,
                    price: state.food.price,
                    description: state.food.description,
                    city: state.food.city,
                }
            }
        case foodCreateActionTypes.SETTINGFOODNAME:
            return {
                food: {
                    image: state.food.image,
                    name: action.payload.value,
                    price: state.food.price,
                    description: state.food.description,
                    city: state.food.city,
                }
            }
        case foodCreateActionTypes.SETTINGFOODPRICE:
            return {
                food: {
                    image: state.food.image,
                    name: state.food.name,
                    price: action.payload.value,
                    description: state.food.description,
                    city: state.food.city,
                }
            }
        case foodCreateActionTypes.SETTINGFOODDESCRIPTION:
            return {
                food: {
                    image: state.food.image,
                    name: state.food.name,
                    price: state.food.price,
                    description: action.payload.value,
                    city: state.food.city,
                }
            }
        case foodCreateActionTypes.SETTINGFOODCITY:
            return {
                food: {
                    image: state.food.image,
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
