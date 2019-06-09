import React from 'react'

export default function Hello(props) {
    const {name} = props;

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Hello, {name}</h1>
            </div>
        </div>
    )
}
