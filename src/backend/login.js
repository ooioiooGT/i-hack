import auth from '@react-native-firebase/auth';


export const handleLogin = async (email , password) => {
    try {
    await auth().signInWithEmailAndPassword(email, password);
    // Login successful, navigate to the next screen.
    } catch (error) {
    // Handle login error (e.g., display an error message).
    }
}