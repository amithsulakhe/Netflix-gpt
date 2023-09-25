import Body from "./Body"
import "./App.css"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Shimmer from "./Shimmer"

function App() {
  return (
    <>
      <div >
        <Provider store={appStore}>
        <Body/>
        {/* <Shimmer/> */}
        </Provider>
      </div>
    </>
  )
}

export default App
