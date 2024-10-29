import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Result';
import { useState } from 'react';

const App = () => {
  const [city, setCity] = useState<string>('');
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      'https://api.weatherapi.com/v1/current.json?key=578a4942a2b7489c96670138242810&q=London&aqi=no',
    )
      .then((res) => console.log(res.json()))
      .then((data) => console.log(data));
  };
  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
};

export default App;
