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
