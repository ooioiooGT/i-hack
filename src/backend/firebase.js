import { initializeApp } from 'firebase/app';
import fireabaseConfig from '../../firebaseConfig';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConf =  fireabaseConfig;

const app = initializeApp(firebaseConf);

export default app;