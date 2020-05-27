import React, { Component } from "react";
import MaterialTable from "material-table";
import SweetAlert from "react-bootstrap-sweetalert";

import { getTokenJwt, getMailJwt } from "../helpers/jwt";
import Hero from "../components/Hero";
import { deletePersonnel, addPersonnel } from "../components/UserFunctions";

var temp = {};

export default class Personnel extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      columns: [],
      data: [],
      users: [],
      hasErrors: false,
      loading: true,
      admin: "",
      showAlert: false,
      alertText: "",
    };
  }

  async componentDidMount() {
    var jwt = getTokenJwt();
    if (!jwt) {
      this.props.history.push("/login");
    } else {
      //eğer jwt varsa... reduxtan islognedin bakılabilir.
      jwt = getMailJwt();
      this.setState({ admin: jwt });

      await fetch("http://192.168.1.111:3001/personnels/admin/" + jwt)
        .then((res) => res.json())
        .then((res) => this.setState({ users: res }))
        .catch(() => this.setState({ hasErrors: true }));

      //Apiden hata döndüyse...
      if (!this.state.hasErrors) {
        this.setState({ alertText: "You dont have personnel for list" });
        this.setState({ showAlert: true });
      }

      const yedek = this.state.users;
      //personellerini dönüyoruz.
      for (let i = 0; i < yedek.length; i++) {
        const templete = yedek[i];
        if (yedek[i].photo !== undefined) {
          yedek[i].photo = (
            <img
              style={{ height: "100px", width: "100px" }}
              src={templete.photo}
            />
          );
        }
        //İlgili personellin oy bilgilerini cektik...
        var point = [];
        var ortalamapuan = 0;
        await fetch(
          "http://192.168.1.111:3001/points/personnel/" + yedek[i]._id
        )
          .then((res) => res.json())
          .then((res) => (point = res));

        //toplam personele verilmiş puanı çektik.
        for (let j = 0; j < point.length; j++) {
          const tempvalue = point[j];
          if (tempvalue.pointValue !== undefined) {
            ortalamapuan += tempvalue.pointValue;
          }
        }

        if (ortalamapuan !== 0) {
          ortalamapuan = ortalamapuan / point.length;
          templete["rate"] = ortalamapuan;
        } else {
          templete["rate"] = "-";
        }
      }

      this.setState({
        data: yedek,
      });

      this.setState({ loading: false });

      this.setState({
        columns: [
          {
            title: "Rate",
            field: "rate",
            type: "string",
            editable: "never",
            cellStyle: (rowData) => ({
              // if (rowData.rate > 3) {
              // backgroundColor: "red", //todo
              // }
              fontSize: 35,
              fontWeight: "bold",
              fontStyle: "italic",
            }),
          },
          {
            title: "Photo",
            field: "photo",
            type: "string",
            editable: "never",
          },
          {
            title: "eMail",
            field: "email",
          },
          {
            title: "Name",
            field: "name",
            editable: "never",
          },
          {
            title: "Surname",
            field: "surname",
            editable: "never",
          },
          {
            title: "BirthYear",
            field: "birthyear",
            type: "numeric",
            editable: "never",
          },
          {
            title: "Department",
            field: "department",
            editable: "never",
          },
          {
            title: "Phone",
            field: "phone",
            type: "numeric",
            editable: "never",
          },
        ],
      });
    }
  }

  deletePers() {
    if (temp !== null) {
      const personnel = {
        email: temp.email,
      };
      deletePersonnel(personnel).then((res) => {
        console.log(res);
      });
    }
  }

  addPers() {
    if (temp !== null) {
      var temppass = Math.random().toString(36).slice(-8);
      const personnel = {
        email: temp.email,
        password: temppass,
        admin: this.state.admin,
      };
      console.log(personnel);
      addPersonnel(personnel).then((res) => {
        console.log(res);
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
          title="Personnel List"
          columns={this.state.columns}
          data={this.state.data}
          isLoading={this.state.loading}
          localization={{
            header: {
              actions: "Action",
            },
            toolbar: {
              searchPlaceholder: "Search Personnel",
            },
            body: {
              addTooltip: "Add new Personnel",
              emptyDataSourceMessage: "You dont have personnels for list",
              filterRow: {
                filterTooltip: "Filter Personnel",
              },
              editRow: {
                deleteText: "Personnel will be delete. Are you sure that?",
              },
            },
          }}
          style={{
            backgroundColor: "#f7f7f7",
          }}
          options={{
            pageSizeOptions: [2, 5],
            // paging: false,
            rowStyle: (rowData) => {
              if (rowData.rate === "-") {
                return { backgroundColor: "rgba(255,255,0, 0.5)" };
              } else {
                var ort = rowData.rate / 5;
                console.log(ort);
                if (ort < 0.1) {
                  return { backgroundColor: "rgba(255, 0, 0, 0.5)" };
                } else if (ort < 0.2) {
                  return { backgroundColor: "rgba(255, 0, 0, 0.6)" };
                } else if (ort < 0.3) {
                  return { backgroundColor: "rgba(255, 0, 0, 0.7)" };
                } else if (ort < 0.4) {
                  return { backgroundColor: "rgba(255, 0, 0, 0.8)" };
                } else if (ort < 0.5) {
                  return { backgroundColor: "rgba(255, 0, 0, 0.9)" };
                } else if (ort < 0.6) {
                  return { backgroundColor: "rgba(0, 204, 102,0.6)" };
                } else if (ort < 0.7) {
                  return { backgroundColor: "rgba(0, 204, 102,0.7)" };
                } else if (ort < 0.8) {
                  return { backgroundColor: "rgba(0, 204, 102,0.8)" };
                } else if (ort < 0.9) {
                  return { backgroundColor: "rgba(0, 204, 102,0.9)" };
                } else {
                  return { backgroundColor: "rgba(0, 204, 102,1)" };
                }
              }
            },
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  newData.submitted = true;
                  if (!newData.email) {
                    this.setState({
                      alertText: "Personnel email must be add!",
                    });
                    this.setState({ showAlert: true });
                    reject();
                    return;
                  }
                  if (!newData.email.includes("@")) {
                    this.setState({
                      alertText: "Personnel email must be include '@'",
                    });
                    this.setState({ showAlert: true });
                    reject();
                    return;
                  }
                  resolve();
                  this.setState({
                    alertText:
                      "Personnel login password will be sending to " +
                      newData.email,
                  });
                  this.setState({ showAlert: true });
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    console.log(newData);
                    temp = newData;
                    this.addPers();
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
                    this.deletePers();
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 500);
              }),
          }}
          actions={[
            {
              icon: "poll",
              tooltip: "Show Points Detail",
              onClick: (event, rowData) => {
                if (rowData.rate === "-") {
                  this.setState({
                    alertText:
                      "Your personnel doesnt have any point for display",
                  });
                  this.setState({ showAlert: true });
                } else {
                  this.props.history.push({
                    pathname: `/personnel/` + rowData._id,
                    state: rowData._id,
                  });
                }
              },
            },
          ]}
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
