import { TabButton } from "../TabButton";
import { Container } from "./styles";

export function Sidebar() {
  return (
    <Container>
      
      <h3>.done</h3>
     
      <main>
        <TabButton text="Overview"/>
        <TabButton text="Stats"/>
        <TabButton text="Projects"/>
        <TabButton text="Chat"/>
        <TabButton text="Calendar"/>
      </main>

      <footer>
        <TabButton text="Settings"/>
        <TabButton text="Log out"/>
      </footer>

    </Container>
  );
}
