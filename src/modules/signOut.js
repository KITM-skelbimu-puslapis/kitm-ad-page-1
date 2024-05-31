import { getAuth, signOut } from "firebase/auth";

let logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Signed out successfully');
    }).catch((error) => {
        // An error happened.
        console.error('Sign out error:', error);
    });
}

export { logOut }