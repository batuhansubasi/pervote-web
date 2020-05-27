import axios from "axios";

export const register = (newAdmin) => {
  return axios
    .post("http://192.168.1.111:3001/admins/add", {
      email: newAdmin.email,
      password: newAdmin.password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.data;
    });
};

export const mail = (Admin) => {
  return axios
    .post("http://192.168.1.111:3001/admins/forgetpassword/" + Admin.email, {
      email: Admin.email,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.data;
    });
};

export const LoginFunction = (admin) => {
  console.log("admin email", admin.email);
  console.log("admin pass", admin.password);
  return axios
    .post("http://192.168.1.111:3001/admins/login", {
      email: admin.email,
      password: admin.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data);
      localStorage.setItem("email", admin.email);
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const deletePersonnel = (personnel) => {
  return axios
    .delete("http://192.168.1.111:3001/personnels/" + personnel.email, {})
    .catch((err) => {
      return err;
    });
};

export const addPersonnel = (personnel) => {
  return axios
    .post("http://192.168.1.111:3001/personnels/add", {
      email: personnel.email,
      password: personnel.password,
      admin: personnel.admin,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const passwordChange = (Admin) => {
  return axios
    .put("http://192.168.1.111:3001/admins/changepassword", {
      email: Admin.email,
      password: Admin.password,
      newpassword: Admin.newpassword,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.data;
    });
};

export const departmentChange = (Admin) => {
  return axios
    .put("http://192.168.1.111:3001/admins/update", {
      email: Admin.email,
      departments: Admin.departments,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.data;
    });
};
