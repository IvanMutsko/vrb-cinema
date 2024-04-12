import { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import {
  Layout,
  HeaderEl,
  Image,
  Navigation,
  Link,
  Button,
} from "./Header.styled";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Layout>
      <HeaderEl>
        <NavLink to="/">
          <Image src={logo} alt="logo" height="30px" />
        </NavLink>
        <Button type="button" onClick={() => setMenu(!menu)}>
          {menu ? <IoClose /> : <RxHamburgerMenu />}
        </Button>
        <Navigation className={menu ? "open" : "hide"}>
          <Link to="/">Home</Link>
          <Link to="/favourites">Favourites</Link>
          <Link to="/movie/new-movie">Add movie</Link>
        </Navigation>
      </HeaderEl>
    </Layout>
  );
};

export default Header;
