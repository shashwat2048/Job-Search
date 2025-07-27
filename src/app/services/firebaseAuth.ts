import { DeleteAuthCookies, SetAuthCookies } from "../utils/authCookies";
import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, type User, onAuthStateChanged} from "firebase/auth";



const auth = getAuth(app);

  export async function SignUp(email:string, password:string): Promise<User>{
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }
    catch(error:any){
        return error;
    }
  }

  export async function LogIn(email:string, password:string): Promise<User>{
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();
        SetAuthCookies(token);
        return userCredential.user;
    }
    catch(error:any){
        return error;
    }
  }

  export async function LogOut(): Promise<void>{
    try{
        await signOut(auth);
        DeleteAuthCookies();
    }
    catch(error:any){
        return error;
    }
  }

  export function onAuthStateChangedListener(callback: (user: User | null) => void): () => void {
    return onAuthStateChanged(auth, callback);
  }
  export { auth };


