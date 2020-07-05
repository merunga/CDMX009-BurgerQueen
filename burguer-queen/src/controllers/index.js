import { firebase } from '../components/firebase'
const moment = require('moment')

export const createTable = async (element) => {
  let dates = moment(new Date())
  let dateIni= (dates.hour()*60) + dates.minute();
  console.log('element', element)
  const db = firebase.firestore();
  const newTable = {
    ...element,

    status: "Enviado a cocina",
    timeOut: "",
    timePrep: dateIni,
    timeFinal: ""

  }
  console.log(newTable)
  return db.collection('tables').add(newTable)
}

//export const showTables = async()=>{
//  const db = firebase.firestore()
//  const data = await db.collection('tables').orderBy('date', 'asc').get()
//  const arrayData= data.docs.map(doc=>({id : doc.id, ...doc.data()}))
//  console.log(arrayData)
//  return arrayData
//} 

export const showTables2 = (cb)=>{
const db = firebase.firestore()
 return  db.collection("tables").orderBy("date", "asc").onSnapshot(function(querySnapshot) {
     const result = []
          querySnapshot.forEach(function(doc) {
          let arrayData =  {id : doc.id, ...doc.data()}
          console.log (arrayData)
          result.push( arrayData)
          
           
        });
        
      cb(result)
    });
   
  }
 
  export const showInfoTables2 = (cb,id)=>{
        const db = firebase.firestore()
    return  db.collection("tables").doc(id).onSnapshot(function(doc) {
      const result = doc.data()
 
   cb(result)
         });
     
     
  }
  

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
  export const editTimeFinal= async (id, tarea) => {
    const db = firebase.firestore()
   await db.collection('tables').doc(id).update({
     timeFinal: tarea

   })
   
 }
  
  
  export const deleteOrden = async (id) => {
    const db = firebase.firestore()
    await db.collection('tables').doc(id).delete()
    
  }
      export const addMoreElements = async (id, product, price) => {
        const db = firebase.firestore()
       await db.collection('tables').doc(id).update({
         orden: product,
         price: price
       })
       
     }
