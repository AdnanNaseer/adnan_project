import React from 'react'

export default function ExampleView(props) {
  return (
    <div>
      <h1>Protected Page</h1>
      <div>
        You successfully Logged In 
      </div>
      <div>
        <button onClick={ props.loadProtectedData }>Load Protected Content</button>        
      </div>
      <div style={{ color: "red" }}>
        Result: <strong>{ props.someData }</strong>
      </div>
      
    </div>
  )
}