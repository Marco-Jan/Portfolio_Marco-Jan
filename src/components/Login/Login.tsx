
import { auth, provider } from '../../../firebaseConfig';
import { signInWithPopup } from "firebase/auth";
import styles from './Login.module.css';

export const Login = () => {
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            console.log("user Sign in");
            
        } catch(error) {
            console.error("Error Sign in with google", error);
        }

        
    }

    return (
        <div>
            <a className={styles.login} onClick={signInWithGoogle}>Log In</a>
        </div>
    )
}