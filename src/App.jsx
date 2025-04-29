import { Provider } from "react-redux"
import Body from "./components/Body"
import AppStore from "./utilits/AppStore"

function App() {
  

  return (
    <>
    <Provider store={AppStore}>
      <Body/>
    </Provider>
    </>
  )
}

export default App
