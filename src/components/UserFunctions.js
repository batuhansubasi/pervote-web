import axios from "axios";
import "../config";

export const register = (newAdmin) => {
  return axios
    .post(global.config.i18n.backend_api.url + "admins/add", {
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
    .post(
      global.config.i18n.backend_api.url +
        "admins/forgetpassword/" +
        Admin.email,
      {
        email: Admin.email,
      }
    )
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
    .post(global.config.i18n.backend_api.url + "admins/login", {
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
    .delete(
      global.config.i18n.backend_api.url + "personnels/" + personnel.email
    )
    .catch((err) => {
      return err;
    });
};

export const addPersonnel = (personnel) => {
  return axios
    .post(global.config.i18n.backend_api.url + "personnels/add", {
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
    .put(global.config.i18n.backend_api.url + "admins/changepassword", {
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
    .put(global.config.i18n.backend_api.url + "admins/update", {
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
