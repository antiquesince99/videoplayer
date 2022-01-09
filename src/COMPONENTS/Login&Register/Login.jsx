import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { Formik } from "formik";
import app_config from "../../config";
import styled from "styled-components";
const Container = styled.div`
    display: flex;
    justify-content : center;
    margin-top: 4rem;

`;

const LogIn = () => {
  const url = app_config.api_url;


  const loginform = {
    email: "",
    password: "",
  };

  const loginSubmit = (values) => {
    console.log(values);

    fetch(url + "/Login/getbyemail/" + values.email)
      .then((res) => res.json())
      .then((userdata) => {
        console.log(userdata);
        if (userdata) {
          if (userdata.password === values.password) {
            Swal.fire({
              icon: "success",
              title: "Hurray",
              text: "Logged in Successfully",
            });

            return;
          }
        }

        Swal.fire({
          icon: "error",
          title: "OOps!",
          text: "Email or Password Invalid!!",
        });
      });
  };
  return (
    <div>
      <Container>
        <div className="card">
          <div className="row">
            <div className="col-md">
              <img
                src="https://images.unsplash.com/photo-1573247374056-ba7c8c5ca4fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md">
              <div>
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <div className="card-body">
                  <Formik
                    initialValues={loginform}
                    onSubmit={loginSubmit}
                  >
                    {({ values, handleChange, handleSubmit }) => (
                      <form onSubmit={handleSubmit} className="form-control">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          onChange={handleChange}
                          value={values.email}
                          placeholder="Email"
                          required
                        />
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          onChange={handleChange}
                          value={values.password}
                          placeholder="Password"
                          required
                        />
                        <Button
                          variant="contained"
                          color="secondary"
                          type="submit"
                          style={{ marginTop: "2rem" }}
                        >
                          Login
                        </Button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default LogIn;
