import {getAuth} from "firebase/auth/"




export const SingIn = async (email , password) => {
    setLoding(true);
    try {
        const response = await signInWithEmailAndPassword(email, password);
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
        const response = await createUserWithEmailAndPassword(email, password);
        console.log(response)
    }catch{
        console.log(error);
        alert("someting was wrong");
    }finally{
        setLoding (false);
    }
}

export const LogOut = () => {
    singout 

}