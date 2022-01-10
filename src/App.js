import './App.css';
import store from './redux/redux'
import { Provider } from 'react-redux'
import Cake from './Cake';
function App() {
  return (
    <Provider store={store} >
        <div className="App">
          <Cake />
        </div>
    </Provider>
  );
}

export default App;
