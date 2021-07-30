
import React, { useState } from "react";

const Search = (props) => {
    const [user, setUser ] = useState(null);
   
    return (
        <div>
            <div>
                <input type="text" className="input" placeholder="Login" onChange={ (e) => setUser(e.target.value)}/>
                <button type="button" onClick={() =>  props.getLogin(user) }>Submit</button>
            </div>
        </div>
    )
}

export default Search;
/*
import React from 'react';

export default class Search extends  React.Component {
    state = {
        searchResult : null,
        login: ''
    }

    formSubmit = (e) => {
        e.preventDefault()
        //this.state.login
        fetch('https://api.github.com/search/users?q=Daniel-Santhanaraj%20in:login')
        .then((res) => res.json())
        .then((result) => {
            this.setState({searchResult: result});
            this.props.getResult(result);
        })
    }

    render() {
        return (
            <div>
                <div>
                    <form method="post" onSubmit={(e) => this.formSubmit(e)}>
                        <input type="text" className="input" placeholder="Login" onChange={ (e) => this.setState({login: e.target.value})}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div> 
        )
    }
}
*/
/*
import React, { useState, useEffect } from "react";

const formSubmit = (e) => {
    e.preventDefault();
    //alert(e.target.value)
}

const Search = () => {
   // const [data, setData ] = useState([]);
    const [login, setLogin ] = useState(null);
     
    useEffect(() => {
       
        fetch('https://api.github.com/search/users?q=Daniel-Santhanaraj%20in:login')
        .then((res) => res.json())
        .then((result) => {
            setData(result);
        })
        
        console.log(login);
    }, [login]);
    

   
    return (
        <div>
            <div>
                <form method="post" onSubmit={formSubmit(e)}>
                    <input type="text" className="input" placeholder="Login" onChange={ (e) => setLogin(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Search;
*/