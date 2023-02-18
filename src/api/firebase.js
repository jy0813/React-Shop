import { initializeApp } from "firebase/app";
import {v4 as uuid} from 'uuid';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

provider.setCustomParameters({
  prompt: "select_account",
});

export function login() {
  signInWithPopup(auth, provider).catch(error => console.error(error));
}

export function logout() {
  signOut(auth).catch(error => console.error(error));
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser)
  });
}

export async function addNewProduct(product, imageUrl) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price:parseInt(product.price),
    image:imageUrl,
    options:product.options.split(','),

  })
}

async function adminUser(user) {

  return get(ref(database, 'admins'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const admins = snapshot.val();
          const isAdmin = admins.includes(user.uid);
          return {...user, isAdmin}
        }
        return user;
  });
}