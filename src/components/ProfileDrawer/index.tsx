import { Container, Menu } from "./styles";
import profileImg from '../../assets/profileImg.jpg'
export function ProfileDrawer() {
  return (
    <Container>
      <div>
        <section className="profile-photo-container">
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
        <button type="button">
          Logout
        </button>
      </div>
    </Container>
  );
}