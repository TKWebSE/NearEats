export const initializeState = {
    food:{
        name:"",
        price:0,
        description:"",
    },
}

export const foodCreateActionTypes = {
    INITIAL:"INITIAL",
    SETTINGFOODNAME:"SETTINGFOODNAME",
    SETTINGFOODPRICE:"SETTINGFOODPRICE",
    SETTINGFOODDESCRIPTION:"SETTINGFOODDESCRIPTION",
    SUCCESS:"SUCCESS",
}

export const foodCreateReducer = (state,action) => {
    switch (action.type) {
        case foodCreateActionTypes.SETTINGFOODNAME:
            return {
                    food:{
                        name: action.payload.name,
                        price: state.food.price,
                        description:state.food.description,
                    }
            }
        case foodCreateActionTypes.SETTINGFOODPRICE:
            return {
                food:{
                    name:state.food.name,
                    price:action.payload.price,
                    description:state.food.description,
                }
            }
        case foodCreateActionTypes.SETTINGFOODDESCRIPTION:
            return {
                food:{
                    name:state.food.name,
                    price:state.food.price,
                    description:action.payload.description,
                }
            }
        default:
            throw new Error();
    }
}