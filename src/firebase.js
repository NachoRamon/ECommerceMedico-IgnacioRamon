import { initializeApp } from "firebase/app";
import { collection, query, doc, getDoc, getDocs, getFirestore, where } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAMhM5nK5QpLMdCpqGA__fWqAQqBXa2PzY",
  authDomain: "curso-coder-react.firebaseapp.com",
  projectId: "curso-coder-react",
  storageBucket: "curso-coder-react.appspot.com",
  messagingSenderId: "880421296125",
  appId: "1:880421296125:web:9633d817aebb6364d22b94"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const getProducts = async (categoryId) =>{
    if (categoryId) {
        getProductsByCategoryId(categoryId);
    }   else {
        return await getAllProducts();
    }
};

export const getProductById = async (productId) => {
    return (await getDoc(doc(db, "items", productId))).data();
};

export const getProductsByCategoryId = async (categoryId) => {
    const itemCollection = collection(db, "items");
    const q = query(itemCollection, where("category", "==", categoryId));
    return await getDocs(q);
};

export const getAllProducts = async () => {
    const itemCollection = collection(db, 'items');
    const q = query(itemCollection);
    return await getDocs(q);
};

export const getAllCategorias = async ()=>{
    const categoriasCollection=collection(db,"categorias");
    const q = query(categoriasCollection)
    return await (getDocs(q))
}