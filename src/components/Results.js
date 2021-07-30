import React from 'react';

const result = (props) => {
    return (
        <div>
            {
                (props.result.items) ?
                props.result.items.map((item, i) => {
                    return (
                        <div key={i}>
                            <img src={item.avatar_url} alt="avatar" />
                            <h3>{item.login}</h3>
                            <p>{item.type}</p>
                        </div>
                    )
                })
                : null
            }

            {/* <table>
                <thead>
                    <tr>
                        <td>avatar_url</td>
                        <td>login</td>
                        <td>type</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        (props.result.items) ?
                        props.result.items.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <img src={item.avatar_url} alt="avatar" /> 
                                    </td>
                                    <td>{item.login}</td>
                                    <td>{item.type}</td>
                                </tr>
                            )
                        })
                        : null
                    }
                    
                </tbody>
            </table> */}
        </div>
    )
}

export default result;