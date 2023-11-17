import {createRoot} from "react-dom/client"
import Header from "./src/components/Header.jsx"
const App = () => {

    return (
        <div>
        <h1>
            This is React.
        </h1>
            <Header/>
        </div>
    )
}
const root = createRoot(document.getElementById("root"))
root.render(<App/>)