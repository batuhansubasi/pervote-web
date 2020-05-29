const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      if (state === true) {
        localStorage.removeItem("usertoken");
        localStorage.removeItem("email");
      }
      return !state;
    default:
      return state;
  }
};

export default isLoggedReducer;
