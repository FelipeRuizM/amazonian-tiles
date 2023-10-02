import { Slider } from './Slider.js';
import slides from '../assets/mock/mock.json';

export const Home = () => {

  return (
    <div id='home'>
      <Slider slides={slides} />
    </div>
  );
};