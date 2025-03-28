
import { Provider } from "./components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/home"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Home />
    </Provider>
  </React.StrictMode>,
)