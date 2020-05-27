export const loginaction = () => {
  return {
    type: "SIGN_IN_SUCCESS",
  };
};

export const emailaction = (email) => {
  console.log(email);
  return {
    type: "SAVE_EMAIL",
    text: email,
  };
};
