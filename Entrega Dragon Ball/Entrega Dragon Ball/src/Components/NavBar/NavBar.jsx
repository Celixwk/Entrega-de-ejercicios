import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>        
        <Link to={"/"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">Home</Button>
        </Link>
        <Link to={"/character/Human"}>
          <Button sx={{marginTop: 4, width: 150, background: "#b8c252"}} variant="contained">Humanos</Button>  
        </Link>
        <Link to={"/character/No Human"}>
          <Button sx={{marginTop: 4, width: 150, background: "#563c85"}} variant="contained">No Humanos</Button>
        </Link>
        <Link to={"/details"}>
          <Button sx={{marginTop: 4, width: 150, background: "#52c2bf"}} variant="contained">Acerca de...</Button>
        </Link>
    </nav>
  )
}

export default NavBar