import React from "react";
import queen from "../../imgs/queen.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";
import './login.css'

const Login = () => {
  return (
    <div className="text-center" >
      <div className="text-center">
        <img src={queen} className="img-fluid mt-5" alt="Logo BQ" />
      </div>
    <br></br><br></br>

      <ButtonReturn
        ruta="/roles"
        btnStyles="btn btn-warning btn-lg"
        text="Entrar"
      />
    </div>
  );
};

export default Login;
