import React, { useState } from "react";

const Search = (props) => {
    const [user, setUser ] = useState(null);

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          props.getLogin(user) ;
          props.setPage(1);
        }
      }
   
    return (
        <div className="search">
            <div>
                <h1>Search result</h1>
            </div>
            <div>
                <input type="text" className="input" placeholder="Login" onChange={ (e) => setUser(e.target.value)} onKeyDown={(e) => _handleKeyDown(e)}/>
                <button type="button" onClick={() => { props.getLogin(user); props.setPage(1)} }>Submit</button>
            </div>
        </div>
    )
}

export default Search;