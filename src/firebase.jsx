// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAuAKF6IQdM5s_fp8c4qp2fDfwRTe8GHeo",
	authDomain: "gateremark.firebaseapp.com",
	projectId: "gateremark",
	storageBucket: "gateremark.appspot.com",
	messagingSenderId: "651139787571",
	appId: "1:651139787571:web:1c2d9ec540da30bff3ac46",
	measurementId: "G-N9EJ1HXKXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
