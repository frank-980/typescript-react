const routeInfo = (state={isShow:false} , action) => {
  console.log(action.type,state)
    switch (action.type) {
      case 'changeToFalse':
          return {...state,isShow:false}
      case 'changeToTrue':
          return {...state,isShow:true}
      default:
        return state;
    }
  };
  export default routeInfo