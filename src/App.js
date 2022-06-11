import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Results from './components/Results/Results';

const App = () => {
  const [data, setData] = useState([]); 
  
  const onInput = (fetchedData) => {
    setData(fetchedData);
  }

  return (
    <div className="App">
      <Header onInput={onInput}/>
      <Results data={data}/>
    </div>
  );
}

export default App;
