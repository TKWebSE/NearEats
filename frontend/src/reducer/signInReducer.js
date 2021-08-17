export const initializeState =  {
    user:{  
            email:"",
            password:"",
        },
    isLogin:false,
    message:"",
    errorMessage:"",
}

export const signInActionTypes = {
    SIGNIN:"SIGNIN",
    SETTINGEMAIL:"SETTINGEMAIL",
    SETTINGPASSWORD:"SETTINGPASSWORD",
    SETTINGPASSWORDCONFIRM:"SETTINGPASSWORDCONFIRM",
    SETTINGMESSAGE:"SETTINGMESSAGE",
    SETTINGERRORMESSAGE:"SETTINGERRORMESSAGE"
}


export const signInReducer = (state,action) => {
    switch (action.type) {
        case signInActionTypes.SIGNIN:
            return {
                ...state,
                user:action.payload.user,
                isLogin:true,
                message:"",
                errorMessage:state.errorMessage,
            }
        case signInActionTypes.SETTINGEMAIL:
            return {
                user:{
                    email:action.payload.email,
                    password:state.user.password,
                },
                message:state.message,
                errorMessage:state.errorMessage,
            }
        case  signInActionTypes.SETTINGPASSWORD:
            return {
                user:{
                    email:state.user.email,
                    password:action.payload.password,
                },
                message:state.message,
                errorMessage:state.errorMessage,
            }
        case signInActionTypes.SETTINGMESSAGE:
            return {
                user:{
                    email:state.user.email,
                    password:state.user.password,
                },
                message:action.payload.message,
                errorMessage:state.errorMessage,
            }
        case signInActionTypes.SETTINGERRORMESSAGE:
            return {
                user:{
                    email:state.user.email,
                    password:state.user.password,
                },
                message:state.message,
                errorMessage:action.payload.errorMessage,
            }    
        default:
            break;
    }
}