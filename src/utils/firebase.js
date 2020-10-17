import Firebase from "firebase";
import { firebaseConfig } from "../config";

const app = Firebase.initializeApp(firebaseConfig);

export default app;
