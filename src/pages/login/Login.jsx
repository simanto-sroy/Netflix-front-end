import './login.scss';

function Login() {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone number"  />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
                    <span>New to Netflix <b>Sign Up Now.</b></span>
                    <small>
                        This is page protected by Google reCaptcha to ensure you aren't a bot <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login;
