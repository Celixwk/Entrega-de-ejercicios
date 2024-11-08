import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://cdn.atomix.vg/wp-content/uploads/2018/05/dbz-logo.jpg" alt="Logo Dragon Ball Z" />
        <h1>Personajes</h1>
        <p>Serie</p>
        <NavBar/>
    </header>
  )
}

export default Header