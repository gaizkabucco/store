import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
// const app = initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
