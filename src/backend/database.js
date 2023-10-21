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
        signInWithEmailAndPassword(this.auth,email, password)
        .then((userCredential) => {
          // Sign-in was successful
          const user = userCredential.user; // User information
          console.log('Signed in as:', user.email);
        })
        .catch((error) => {
          // Sign-in failed
          console.error('Error:', error);
        });
    }
     
    SignUp = async (email, password) => {
        createUserWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
     }
     
     // export const LogOut = () => {
     //     singout 
     
     // }

}


export default database;