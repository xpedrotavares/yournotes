import { useState } from "react";
import { Container, DrawerToggleButton, Menu } from "./styles";
import profileImg from '../../assets/profileImg.jpg';

export function ProfileDrawer() {
  let [toggle, setToggle] = useState(false);

  function DrawerToggle() {
    setToggle(!toggle);
  };

  return (
    <>
      <DrawerToggleButton className={toggle ? 'drawer-toggle-button active' : 'drawer-toggle-button'} type="button"  onClick={DrawerToggle}>
        -----&gt;
      </DrawerToggleButton>
      <Container className={toggle ? 'drawer-menu active' : 'drawer-menu'}>
        <div>
          <section className="profile-photo-container">
            <img src={profileImg} alt="Profile" />
          </section>
          <Menu>
            <span></span>
            <a>Account settings</a>
            <span></span>
            <a>Preferences</a>
            <span></span>
            <a>I don't know</a>
            <span></span>
          </Menu>
        <button type="submit">
          Logout
        </button>
      </div>
    </Container>
  </>
  );
}