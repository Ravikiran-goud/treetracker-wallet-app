import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'; // Optional: for analytics
import { getAuth } from 'firebase/auth'; // For authentication

const firebaseConfig = {
  apiKey: "AIzaSyCj-o_JJbdF7_KiRu1QXQTemnuS1XrH4NE",
  authDomain: "treetracker-wallet-app.firebaseapp.com",
  projectId: "treetracker-wallet-app",
  storageBucket: "treetracker-wallet-app.appspot.com",
  messagingSenderId: "753452510092",
  appId: "1:753452510092:android:0618eb392ee153f6e084a9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional
const auth = getAuth(app);

export { app, analytics, auth };