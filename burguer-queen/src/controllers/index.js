import { firebase } from '../components/firebase'

export const createTable = async (element) => {
  console.log('element', element)
  const db = firebase.firestore();
  const newTable = {
    ...element,
    date: Date.now(),
    status: "",
    timeIn: Date.now(),
    timeOut: "",
    //total: element.orden,
    //price: element.price
  }
  console.log(newTable)
  return db.collection('tables').add(newTable)
}

export const showTables = async()=>{
  const db = firebase.firestore()
  const data = await db.collection('tables').orderBy('number', 'desc').get()
  const arrayData= data.docs.map(doc=>({id : doc.id, ...doc.data()}))
  return arrayData
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



/* export const showInfoTables = async(id)=>{
  const db = firebase.firestore()
        var docRef = db.collection("tables").doc(id);
        docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                //setDataTable(doc.data())
                const infoResul = doc.data()
                return infoResul
            } else {
                // doc.data() will be undefined in this case
                return console.log("No such document!");
            }
        }).catch(function (error) {
            return console.log("Error getting document:", error);
        });
} */
