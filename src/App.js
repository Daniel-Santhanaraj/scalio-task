import React, {useEffect, useState} from "react";
import './App.scss';
import Search from './components/Search';
import Results from './components/Results';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function App() {
  const classes = useStyles();
  const perPage = 9;
  const [result, setResult ] = useState([]);
  const [loader, setLoader ] = useState(false);
  const [currentPageCount, setCurrentPageCount ] = useState(1);
  const [totalPage, setTotalPage ] = useState(0);
  const [message, setMessage ] = useState("");
  const [login, setLogin] = useState('');

  const dataCall = () => {
      setLoader(true);
      let url = 'https://api.github.com/search/users?q='+login+'%20in:login&per_page='+perPage+'&&page='+currentPageCount;
      fetch(url)
      .then((res) => res.json())
      .then((d) => {
        if(d.message) {
          setMessage(d.message);
        } else {
          setResult(d);
          setTotalPage(Math.round(d.total_count/9));
          setMessage('');
        }
        setLoader(false);
      });
  }
  useEffect(dataCall, [login, currentPageCount]);
 
  return (
    <div className="App">
      <div className="body-wrap">
        <div className="container">
          <Search getLogin = { login => setLogin(login)}  setPage = { currentPageCount => setCurrentPageCount(currentPageCount) }/>
          { (!loader) ?
              <div>
                {(login !== '') ? 
                <Results result={result} message={message}/>
                : <p className="no-data">{ "No Data... Continue search"}</p>
                }
                {
                  (totalPage > 0 && login !== '') ? 
                  <div className={classes.root+" padding15"}>
                    <Pagination 
                    count={totalPage}
                    page = { currentPageCount }
                    size = "medium"
                    onChange={(e, v) =>  setCurrentPageCount(v) }
                    variant="outlined" color="secondary"
                     />
                  </div>
                  : null
                }   
              </div>
          :
            <div className="lds-roller loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
