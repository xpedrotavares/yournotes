import { Container } from "./styles";
import profileImg from '../../assets/profileImg.jpg'
export function ProfileDrawer() {
  return (
    <Container>
      <div>
        <section className="profile-photo-container">
          <img src={profileImg} alt="Profile Image" />
        </section>
        <nav>
          <a>Account settings</a>
          <a>Preferences</a>
          <a>I don't know</a>
        </nav>
        <button type="button">
          Logout
        </button>
      </div>
    </Container>
  );
}