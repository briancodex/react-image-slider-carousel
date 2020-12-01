import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

function App() {
  return <ImageSlider slides={SliderData} />;
}

export default App;
