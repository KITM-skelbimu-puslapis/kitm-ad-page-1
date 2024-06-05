import { getAuth, signOut } from "firebase/auth";
let signOutCreate = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Signed out successfully');
    }).catch((error) => {
        // An error happened.
        console.error('Sign out error:', error);
    });
}
export { signOutCreate }