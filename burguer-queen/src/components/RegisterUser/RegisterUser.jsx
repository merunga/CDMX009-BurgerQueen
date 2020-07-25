import React from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "../Form/Form";
import { login, register } from "../../controllers";
import { withRouter } from "react-router-dom";
import "./registerUser.css";

function RegisterUser(props) {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [boss, setBoss] = React.useState("");
  const [newRegister, setNewRegister] = React.useState(false);
  const [errPassManager, setErrPassManager] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const activeRegister = () => {
    setNewRegister(true);
  };

  const registerUserNew = async () => {
    if (boss === "gerente") {
      try {
        let newEmploy = await register(email, password);
        setEmail("");
        setPassword("");
        setBoss("");
        props.history.push("/roles");
      } catch (error) {
        console.log(error);
        // setError(error.message)
        if (error.code === "auth/email-already-in-use") {
          setError("Usuario ya registrado...");
          return;
        }
        if (error.code === "auth/invalid-email") {
          setError("Email no válido");
          return;
        }
        if (error.code === "auth/weak-password") {
          setError("La contraseña debe ser mayor de 6 caracteres");
          return;
        }
      }
    } else {
      const msgErr = "Necesitas la validación de tu gerente ";
      setErrPassManager(msgErr);
      setEmail("");
      setPassword("");
      setBoss("");
    }
  };

  const loginUser = async () => {
    try {
      let logiInUse = await login(email, password);
      setEmail("");
      setPassword("");
      props.history.push("/roles");
      console.log("estas dentro");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Usuario no registrado");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
      if (error.code === "auth/invalid-email") {
        setError("Email con formato equivocado");
      }
      
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <>
      <Button className="getIn" onClick={handleShow}>
        Entrar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errPassManager !== null && (
            <h3 className="alert alert-danger">{errPassManager}</h3>
          )}

          {error && <div className="alert alert-danger">{error} </div>}
          <Form
            types="email"
            text="Ingresa tu email"
            changeAction={(e) => setEmail(e.target.value)}
            val={email}
          />
          <Form
            types="password"
            text="Ingresa tu contraseña"
            changeAction={(e) => setPassword(e.target.value)}
            val={password}
          />
          {newRegister && (
            <Form
              types="password"
              text="Contraseña del gerente"
              changeAction={(e) => setBoss(e.target.value)}
              val={boss}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          {!newRegister && (
            <Button variant="secondary" onClick={() => activeRegister()}>
              ¿No tienes cuenta?
            </Button>
          )}
          {newRegister ? (
            <Button variant="primary" onClick={() => registerUserNew()}>
              Crear Usuario
            </Button>
          ) : (
            <Button variant="primary" onClick={() => loginUser()}>
              Ingresar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default withRouter(RegisterUser);
