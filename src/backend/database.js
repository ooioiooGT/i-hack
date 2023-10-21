import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import app from "./firebase";

const provider = new GoogleAuthProvider();

class Database{

    constructor(){
        this.auth = getAuth(app);
    }

    SingInWithGoogle = () =>{
        try {
             signInWithPopup(auth, provider);
             console.log("success login");
        } catch(error){
         console.log(error)
        }
    }
     
    SignIn = async (email , password) => {
        try{
            await signInWithEmailAndPassword(this.auth,email, password)
            return true
        }catch(err){
            return false
        }
    }
     
    SignUp = async (email, password) => {
        try{
            await createUserWithEmailAndPassword(this.auth,email, password)
            return true
        }catch(err){
            return false
        }
     }
     
     // export const LogOut = () => {
     //     singout 
     
     // }

}


export default Database;