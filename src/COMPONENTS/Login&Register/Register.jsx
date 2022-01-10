import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";
import img from '../../images/img.png';

const Register = () => {
  const Container = styled('div')({
    
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    width: "80%",
    height : "100vh",
    margin: "auto",
    fontFamily: " 'Noto Sans Mono', monospace"
  });
 

  const url = app_config.api_url
  const Registerform = {
    fullname: "",
    email: "",
    username: "",
    password: "",
    created: new Date(),
  };

  const formSubmit = (values) => {
    console.log(values);
    const reqOptions = {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    };

    fetch(url + "/Login/add", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Welldone!",
          text: "You have successfully registered",
        }).then( () => {
          window.location.replace('/login');
        } )
      });
      
  };

  return (
    <div>
      <Container>
        <div className="card">
          <div className="row">
            <div className="col-md">
              <img src={img} alt="" className="img-fluid"/>
            </div>
            <div className="col-md">
              <h1 style={{textAlign: 'center'}}>Register</h1>
              <div className="card-body">
                <Formik initialValues={Registerform} onSubmit={formSubmit}>
                  {({ values, handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                      <input 
                      placeholder="FullName"
                        className="form-control"
                        id="fullname"
                        onChange={handleChange}
                        value={values.fullname}
                      />

                      
                      <input
                      placeholder="Email"
                        className="form-control"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                      />

                      
                      <input
                      placeholder="UserName"
                        className="form-control"
                        id="username"
                        onChange={handleChange}
                        value={values.username}
                      />

                      
                      <input
                        className="form-control"
                        placeholder="*******"
                        id="password"
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.password}
                      />
                        <Button variant="contained" color="success" type="submit">register</Button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
