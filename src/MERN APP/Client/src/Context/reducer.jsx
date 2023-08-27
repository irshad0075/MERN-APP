
export const reducer = (state, action) => {
    switch (action.type) {

        case "USER_LOGIN": {
            return { ...state, token: action.token }
        }

        case "USER_LOGOUT": {
          
            return { ...state, token: undefined }; 
        }

        case "SET_USER": {
            return { ...state, user: action.payload }
        }

        case "USER_SIGNUP": {
            return { ...state, token: action.token };
          }

        default: {
            return state;
        }
    }
}