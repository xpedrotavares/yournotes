import { Dashboard } from "./components/Dashboard";
import { ProfileDrawer } from "./components/ProfileDrawer";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/structure";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ProfileDrawer />
      <Dashboard />
    </Container>
  );
}

export default App;
