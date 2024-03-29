import Login from "./Login"
import LoginForm from "./LoginForm"
import React from "react"
import UncontrolledLogin from "./UncontrolledLogin"
function App() {
  function handleLogin( {username, password}) {
    console.log(`You are logged as ${username}`)
    console.log(password)
  }

  return (
    <div>
        <Login onLogin={handleLogin}/>
        <LoginForm onLogin={handleLogin}/>
        <UncontrolledLogin></UncontrolledLogin>
    </div>
  )
}

export default App