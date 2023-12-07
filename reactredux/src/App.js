import { Provider } from 'react-redux';
import './App.css';
import store from "./utils/store";
import VideoCard from './components/videoCard';




function App() {
  return (
    <Provider store={store}>
    <div>
      <VideoCard/>
    </div>
    </Provider>
  );
}


export default App;