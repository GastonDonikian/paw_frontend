

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Connect</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/contracts">Professors</a>
                <a href="/register">Register</a>
                <a href="/Authentication/Login">Sign in</a>
            </div>
        </nav>
    );
}

export default Navbar;