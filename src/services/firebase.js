import dotenv from "dotenv";
import firebase from "firebase";
import { FireSQL } from "firesql";
import "firebase/auth";

dotenv.config();

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  });
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore();
const fireSql = new FireSQL(db);

// collections
const usersCollection = db.collection("users");
const presentationsCollection = db.collection("presentations");

// sign in with google
export const signInWithGoogle = async () => {
  try {
    const response = await auth.signInWithPopup(googleProvider);
    createUser(response.user);
  } catch (e) {
    console.log("Error: ", e);
  }
};

// sign out user
export const signOut = async () => {
  try {
    return await auth.signOut();
  } catch (e) {
    console.log(e);
  }
};

// current user
export const currentUser = async () => {
  try {
    return await auth.currentUser;
  } catch (e) {
    console.log(e);
  }
};

// create user document
export const createUser = async (user, additionalData = {}) => {
  if (!user) return null;
  const userRef = usersCollection.doc(user.uid);
  const snapshot = await userRef.get();
  // create if not exists
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({ displayName, email, photoURL, ...additionalData });
    } catch (e) {
      console.log(e);
    }
  }
};

// get user document
export const getUser = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await usersCollection.doc(uid).get();

    return { uid, ...userDocument.data() };
  } catch (e) {
    console.log(e);
  }
};

// generate uniq uid
export const uid = () => new Date().getTime();

/**
 * presentations
 */
// create presentation
export const createPresentation = async (presentation) => {
  if (!presentation) return null;

  try {
    await presentationsCollection.doc(uid().toString()).set(presentation);
  } catch (e) {
    console.log(e);
  }
};

// update presentation
export const updatePresentation = async (uid, presentation) => {
  if (!uid) return null;
  if (!presentation) return null;

  try {
    return await presentationsCollection.doc(uid).set(presentation);
  } catch (e) {
    console.log(e);
  }
};

// fetch all presentations
// .forEach((doc) => {
//   return { id: doc.id, ...doc.data() };
// });

export const fetchPresentations = async () => {
  try {
    const snapshot = await presentationsCollection.get();
    return snapshot.docs;
  } catch (error) {
    console.log(error);
  }
};

export const searchPresentations = async (keyword) => {
  try {
    const query = `select * from presentations where title LIKE '${keyword}%'`;
    const documents = await fireSql.query(query);
    return documents;
  } catch (e) {
    console.log(e);
  }
};
