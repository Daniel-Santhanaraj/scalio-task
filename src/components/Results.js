import React, {useState} from 'react';

const Result = (props) => {
    
    const [isSort, setSort] = useState(false)
    //const [cCount, setCount] = useState(1);
    console.log(props.message);
    var sorted = null;
    if( props.result.length !== 0 && props.result.items.length > 0) {
        sorted =  props.result.items.sort((a,b) => { 
            let a_login = a.login.toLowerCase();
            let b_login = b.login.toLowerCase();

            if(isSort) {
                if(a_login < b_login) { return -1; }
                if(a_login > b_login) { return 1; }
            } else {
                if(a_login < b_login) { return 1; }
                if(a_login > b_login) { return -1; }
            }
            return 0;
        });
    }

    return (
        <div className="result">
            {
                (sorted && !props.message) ? 
                <h2 className="sort">Sort By <span onClick={() => setSort(!isSort)} className={(isSort) ? 'active': ''}>Login</span></h2>
                : null
            }
           
            <div className="sortDiv">
            {  
                (sorted && !props.message) ?
                sorted.map((item, i) => {
                    return (
                        <div className="cardDiv" key={i}>
                            <div className="card">
                                <img src={item.avatar_url} alt="avatar" />
                                <h3>{(item.login.length > 23) ? item.login.substring(0, 25) + '...' : item.login }</h3>
                                <p>{item.type}</p>
                            </div>
                        </div>
                    )
                })
                : <p className="no-data">{(props.message) ? props.message : "No Data... Continue search"}</p>
            }
            </div>
        </div>
    )
}

export default Result;