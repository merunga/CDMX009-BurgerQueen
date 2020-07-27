import { firebase } from "./firebase";
require("firebase/auth");
const moment = require("moment");
const db = firebase.firestore();

export const createTable = async (element) => {
  let dates = moment(new Date());
  let dateIni = dates.hour() * 60 + dates.minute();
  const newTable = {
    ...element,
    status: "Enviado a cocina",
    timeOut: "",
    timePrep: dateIni,
    timeFinal: "",
  };
  return db.collection("tables").add(newTable);
};

//export const showTables = async()=>{
//  const db = firebase.firestore()
//  const data = await db.collection('tables').orderBy('date', 'asc').get()
//  const arrayData= data.docs.map(doc=>({id : doc.id, ...doc.data()}))
//  console.log(arrayData)
//  return arrayData
//}

export const showTables2 = (cb) => {
  //const db = firebase.firestore()
  return db
    .collection("tables")
    .orderBy("date", "asc")
    .onSnapshot(function (querySnapshot) {
      const result = [];
      querySnapshot.forEach(function (doc) {
        let arrayData = { id: doc.id, ...doc.data() };
        result.push(arrayData);
      });

      cb(result);
    });
};

export const showInfoTables2 = (cb, id) => {
  return db
    .collection("tables")
    .doc(id)
    .onSnapshot(function (doc) {
      const result = doc.data();
      cb(result);
    });
};

export const showInfoTables = async (id) => {
  const docRef = db.collection("tables").doc(id);
  const info = await docRef.get();
  if (info.exists) {
    return info.data();
  } else {
    return console.log("No such document!");
  }
};

export const register = async (email, pass) => {
  const res = await firebase.auth().createUserWithEmailAndPassword(email, pass);
  if (res.user) {
    await db.collection("usuarios").doc(res.user.uid).set({
      fechaCreacion: Date.now(),
      email: res.user.email,
      uid: res.user.uid,
    });
    return res.user;
  } else {
    console.log("hay un error");
  }
};

export const login = async (email, pass) => {
  const res = await firebase.auth().signInWithEmailAndPassword(email, pass);
  if (res.userSigned) {
    return res.userSigned;
  } else if (res.error) {
    return (res.error);
  }
};

export const userLog = () => {
  let logedUser = firebase.auth().currentUser;
  if (logedUser) {
    return logedUser;
  } else {
    console.log("no existe");
  }
};

export const edit = async (id, tarea) => {
  await db.collection("tables").doc(id).update({
    status: tarea,
  });
};

export const editTime = async (id, tarea) => {
  await db.collection("tables").doc(id).update({
    timeOut: tarea,
  });
};
export const editTimeFinal = async (id, tarea) => {
  await db.collection("tables").doc(id).update({
    timeFinal: tarea,
  });
};

export const deleteOrden = async (id) => {
  //const db = firebase.firestore()
  await db.collection("tables").doc(id).delete();
};

export function createUser(emailNew, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailNew, password)
    .catch((error) => {
      const errorCode = error.code;
    });
}

export const theWatcher = (state) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("active user");
      state(user);
      let userSigned = firebase.auth().currentUser;
      return userSigned;
    } else {
      state(null);
    }
  });
};

export const getOut = () => {
  firebase.auth().signOut();
};
