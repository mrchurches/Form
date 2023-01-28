import {collection, addDoc, doc, getDoc} from "firebase/firestore"
import { db } from "../firebase-config";

const formsCollectionRef = collection(db, "forms")
 
export const GET_FORM_DB = "GET_FORM_DB";
export const POST_FORM_DB = "POST_FORM_DB";

export function postForm(input) {
  return async (dispatch) => {
    await addDoc(formsCollectionRef, input)
    .then((res)=>{
        dispatch({
            type: POST_FORM_DB,
            //De esta forma obtengo el nombre de la collection de firebase y el id del documento.
            payload: res._key.path.segments
        })
    })
  };
}

export function getForm(id) {
  return async (dispatch) => {
    const docRef= doc(db,"forms", id);
    await getDoc(docRef)
    // console.log(docSnap)
    .then((res)=>{
      const responseFinal = []
      const responseParcial = res._document.data.value.mapValue.fields
        for(let key in responseParcial){
          responseFinal.push({name: key,value:responseParcial[key].stringValue})
        }
      dispatch({
            type: GET_FORM_DB,
            payload: responseFinal
        })
    })
  }
}
