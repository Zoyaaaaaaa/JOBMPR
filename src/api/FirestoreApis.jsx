import { firestore } from "../firebaseConfig"
import {addDoc,collection,} from "firebase/firestore"
let dbRef=collection(fi,"posts")
export const postStatus=(status)=>{
    let object={
        status:status,
    };
addDoc(dbRef,object)
.then((res)=>{
    console.log("data added!");
})
.catch((err)=>{
    console.log(err);
})
}