import { firebase } from '../components/firebase'

export const createTable = async (element) => {
  console.log('element', element)
  const db = firebase.firestore();
  const newTable = {
    ...element,

    status: "Enviado a cocina",

    timeOut: "",
    //total: element.orden,
    //price: element.price
  }
  console.log(newTable)
  return db.collection('tables').add(newTable)
}

export const showTables = async()=>{
  const db = firebase.firestore()
  const data = await db.collection('tables').orderBy('date', 'asc').get()
  const arrayData= data.docs.map(doc=>({id : doc.id, ...doc.data()}))
  console.log(arrayData)
  return arrayData
}


//export const showTables = ()=>{
//  const db = firebase.firestore()
//db.collection("tables")
//    .onSnapshot(function(querySnapshot) {
//    const cities=[]
//    querySnapshot.forEach(function(doc) {
//      cities.push(doc.data());
//
//        //console.log("Current cities in CA: ", cities.join(", "));
//        return cities
//    });
//  });
//  }



export const showInfoTables = async(id)=>{
  const db = firebase.firestore()
  const docRef = db.collection('tables').doc(id)
  const info = await docRef.get()
  if (info.exists){
    return info.data()
  }else{
    return console.log("No such document!");

  }

}



export const edit = async (id, tarea) => {
     const db = firebase.firestore()
    await db.collection('tables').doc(id).update({
      status: tarea
    })

  } 

  export const editTime = async (id, tarea) => {
     const db = firebase.firestore()
    await db.collection('tables').doc(id).update({
      timeOut: tarea
    })

  }


  
  export const deleteOrden = async (id) => {
    const db = firebase.firestore()
   await db.collection('tables').doc(id).delete()

 }