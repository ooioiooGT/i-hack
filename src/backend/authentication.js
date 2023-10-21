import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "@firebase/app";
import { initializeApp } from "firebase/app";
const app = initializeApp(process.env);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export const SingInWithGoogle = () =>{
   try {
        signInWithPopup(auth, provider);
        console.log("success login");
   } catch(error){
    console.log(error)
   }
}

export const SingIn = async (email , password) => {
    setLoding(true);
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response)
        console.log(success)
    } catch (error) {
        console.log(error);
        alert("The email or password invaild")
    }finally{
    setLoding(false)
    }
}

export const SignUp = async () => {
    setLoding(true);
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response)
    }catch{
        console.log(error);
        alert("someting was wrong");
    }finally{
        setLoding (false);
    }
}

// export const LogOut = () => {
//     singout 

// }