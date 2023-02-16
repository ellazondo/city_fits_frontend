import './LogIn.scss'

const LogIn = () => {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet"/> 

<div class="container">
  <form id='form'>
    <p>Welcome</p>
    <input type="email" placeholder="Email"/><br></br>
    <input type="password" placeholder="Password"/><br></br>
    <input type="button" value="Log In"/><br></br>
    <a href="#">Forgot Password?</a>
  </form>
  

  <div class="drops">
    <div class="drop drop-1"></div>
    <div class="drop drop-2"></div>
    <div class="drop drop-3"></div>
    <div class="drop drop-4"></div>
    <div class="drop drop-5"></div>
  </div>
</div>
        </div>
    )
}

export default LogIn