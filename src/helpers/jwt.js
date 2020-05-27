export const getTokenJwt = () => {
  return localStorage.getItem("usertoken");
};

export const getMailJwt = () => {
  return localStorage.getItem("email");
};
