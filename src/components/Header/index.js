import react from "react";
import './styles.css'

export default ({ black }) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src="./assets/netflix-logo.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="./assets/logo-user.png" alt="Usuário"/>
                </a>
            </div>
        </header>
    )
}