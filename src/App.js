import { Provider } from "react-redux";
import "./App.css";
import CustomerAdd from "./CustomerAdd";
import { store } from "./store";
import CustomerView from "./CustomerView";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Redux Practice</h2>
        <CustomerAdd />
        <CustomerView/>
      </div>
    </Provider>
  );
}

export default App;
