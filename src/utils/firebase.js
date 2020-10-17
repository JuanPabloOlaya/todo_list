import { initializeApp } from "firebase";
import { firebaseConfig } from "../config";

const app = initializeApp(firebaseConfig);

export const db = app.database();
export const auth = app.auth();
