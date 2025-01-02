const initialState = {
    data: [],
    editObj: {}
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_SUBMIT':
        return {
          ...state,data: action.payload
        }
        case 'USER_DELETE':
          const filterData = state.data.filter((item,index) => index !== action.payload)
        return {
          ...state,data: filterData
        }
        case 'USER_EDIT':
          const editObj = state.data.find((item,index) => index === action.payload)
        return {
          ...state, editObj
        }
      
      default:
        break;
    }
  };
  
  export default userReducer;
  