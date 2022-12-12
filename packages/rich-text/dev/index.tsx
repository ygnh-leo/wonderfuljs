import React from "react"
import { createRoot } from "react-dom/client"
import App from "./app"
import "./style.css"

const root = document.querySelector("#root")
const rootNode = createRoot(root!)
rootNode.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

export {}
