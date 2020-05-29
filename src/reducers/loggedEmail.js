const loggedEmail = (state = "", action) => {
  switch (action.type) {
    case "SAVE_EMAIL":
      console.log(action.text);
      state = action.text;
      return state;
    default:
      return state;
  }
};

export default loggedEmail;
