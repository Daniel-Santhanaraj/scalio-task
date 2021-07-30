import React, {useEffect, useState} from "react";
import './App.scss';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  const [login, setLogin] = useState('');
  const [result, setResult ] = useState([]);

  const dataCall = () => {
   // https://api.github.com/search/users?q=foo%20in:login&per_page=3
    if(login !== '') {
      let url = 'https://api.github.com/search/users?q='+login+'%20in:login';
      fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setResult(d);
      })
    }
  }

  useEffect(dataCall, [login]);



  return (
    <div className="App">
      <div className="container">
        <Search getLogin = { login => setLogin(login) }/>
        <Results result={result}/>
      </div>
    </div>
  );
}

export default App;
