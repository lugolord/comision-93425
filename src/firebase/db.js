import { 
  collection, 
  getDocs, 
  getFirestore, 
  doc, 
  getDoc, 
  query, 
  where,
  addDoc 
} from "firebase/firestore"
import { app } from './config'

const db = getFirestore(app)

export const getProducts = async () => {
  try {
    const coleccionRef = collection(db, "items")
    const querySnapshot = await getDocs(coleccionRef)
    const products = []
    
    querySnapshot.forEach((doc) => {
      products.push({...doc.data(), id: doc.id})
    })

    return products
  } catch (error) {
    console.error("Error al obtener los documentos: ", error)
    return []
  }
}

export const getCategories = async () => {
  try {
    const coleccionRef = collection(db, "categories")
    const querySnapshot = await getDocs(coleccionRef)
    const categories = []
    
    querySnapshot.forEach((doc) => {
      categories.push(doc.data().name)
    })

    return categories
  } catch (error) {
    console.error("Error al obtener los documentos: ", error)
    return []
  }
}

export const getDetail = async (id) => {
  try {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return {...docSnap.data(), id: docSnap.id}
    } else {
      return { image: '/', name: '', price: 0, description: '' }
    }
  } catch (error) {
    console.error("Error al obtener el documento específico: ", error)
  }
}

export const filterProducts = async (category) => {
  const q = query(collection(db, "items"), where("category", "==", category))
  const querySnapshot = await getDocs(q)
  const products = []
  
  querySnapshot.forEach((doc) => {
    products.push({...doc.data(), id: doc.id})
  })

  return products
}

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order)
    console.log("Documento creado exitosamente con ID: ", docRef.id)
  } catch (error) {
    console.error("Error al añadir el documento: ", error)
  }
}
