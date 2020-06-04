import React, { Component } from "react";
import MaterialTable from "material-table";
import SweetAlert from "react-bootstrap-sweetalert";

import { getTokenJwt, getMailJwt } from "../helpers/jwt";
import Hero from "../components/Hero";
import { departmentChange } from "../components/UserFunctions";
import "../config";

var temp = {};

var gosterilecekler = [
  {
    department: "",
  },
];

export default class Department extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      columns: [],
      data: [],
      admin: {},
      loading: true,
      showAlert: false,
      alertText: "",
    };
  }

  async componentDidMount() {
    var jwt = getTokenJwt();
    if (!jwt) {
      this.props.history.push("/pervote-web/login");
    } else {
      jwt = getMailJwt();
      this.setState({ email: jwt });

      await fetch(global.config.i18n.backend_api.url + "admins/" + jwt)
        .then((res) => res.json())
        .then((res) => this.setState({ admin: res }));

      this.setState({
        data: this.state.admin.departments,
      });

      //material table' in loading'i
      this.setState({ loading: false });

      //kolonları belirledim.
      this.setState({
        columns: [
          {
            title: "Department",
            field: "department",
          },
        ],
      });
    }
  }

  addDepartment() {
    if (temp !== null) {
      var arrayData = this.state.data;
      var counter = 0;

      for (let i = 0; i < arrayData.length + 1; i++) {
        const templete = arrayData[i];
        var gosterileceklertekil = {
          department: "",
        };
        //Eğer gelen yeni değerse, tablodan...
        if (i === arrayData.length) {
          gosterileceklertekil.department = temp.department;
        } else {
          //Eger eski degerse
          gosterileceklertekil.department = templete.department;
        }
        gosterilecekler[counter] = gosterileceklertekil;
        counter++;
      }

      const admin = {
        email: this.state.email,
        departments: gosterilecekler,
      };
      departmentChange(admin).then((res) => {
        if (
          res.error !== undefined ||
          res.toString().toLowerCase().includes("error")
        ) {
          this.setState({ showAlert: true });
          this.setState({ alertText: "Check your connection" });
        } else {
          this.setState({ showAlert: true });
          this.setState({ alertText: "Department added succesfully!" });
        }
      });
    }
  }

  deleteDepartment() {
    if (temp !== null) {
      var arrayData = this.state.data;
      var counter = 0;

      for (let i = 0; i < arrayData.length; i++) {
        const templete = arrayData[i];
        var gosterileceklertekil = {
          department: "",
        };

        if (temp.department !== templete.department) {
          gosterileceklertekil.department = templete.department;
        }
        if (gosterileceklertekil.department !== "") {
          gosterilecekler[counter] = gosterileceklertekil;
          counter++;
        }
      }

      const admin = {
        email: this.state.email,
        departments: gosterilecekler,
      };
      console.log(gosterilecekler);
      departmentChange(admin).then((res) => {
        if (
          res.error !== undefined ||
          res.toString().toLowerCase().includes("error")
        ) {
          this.setState({ showAlert: true });
          this.setState({ alertText: "Check your connection" });
        } else {
          this.setState({ showAlert: true });
          this.setState({ alertText: "Department deleted succesfully!" });
        }
      });
    }
  }

  onConfirm = () => {
    this.setState({ showAlert: false });
    this.setState({ alertText: "" });
  };

  render() {
    return (
      <Hero>
        <MaterialTable
          title="Department List"
          columns={this.state.columns}
          data={this.state.data}
          isLoading={this.state.loading}
          localization={{
            header: {
              actions: "Action",
            },
            toolbar: {
              searchPlaceholder: "Search Department",
            },
            body: {
              addTooltip: "Add new Department",
              emptyDataSourceMessage: "You dont have Department for list",
              filterRow: {
                filterTooltip: "Filter Department",
              },
              editRow: {
                deleteText: "Department will be delete. Are you sure that?",
              },
            },
          }}
          style={{
            backgroundColor: "#f7f7f7",
          }}
          options={{
            pageSizeOptions: [5, 10],
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  newData.submitted = true;
                  if (!newData.department) {
                    this.setState({
                      alertText: "Department must be add!",
                    });
                    this.setState({ showAlert: true });
                    reject();
                    return;
                  }
                  resolve();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    console.log(newData);
                    temp = newData;
                    this.addDepartment();
                    return { ...prevState, data };
                  });
                }, 500);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    console.log(oldData);
                    temp = oldData;
                    this.deleteDepartment();
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 500);
              }),
          }}
        />
        <SweetAlert
          title={this.state.alertText}
          onConfirm={this.onConfirm}
          show={this.state.showAlert}
        />
      </Hero>
    );
  }
}
