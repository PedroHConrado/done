import { Container } from "./styles";
import { Calendar, ChartBar, ChatDots, FolderOpen, Gear, House, SignOut } from "phosphor-react";

interface TabButtonProps {
  text: string;
}

export function TabButton({ text }: TabButtonProps) {
  function renderIcon() {
    switch(text) {
      case 'Overview': return <House color="#999999" size={24}/>;
      case 'Stats': return <ChartBar color="#999999" size={24} />;
      case 'Projects': return <FolderOpen color="#999999" size={24} />;
      case 'Chat': return <ChatDots color="#999999" size={24} />;
      case 'Calendar': return <Calendar color="#999999" size={24} />;
      case 'Settings': return <Gear color="#999999" size={24} />;
      case 'Log out': return <SignOut color="#999999" size={24} />;
    }
  }
  
  return (
    <Container>
      <button>
        {renderIcon()}
        <span>{text}</span>
      </button>
    </Container>
  );
}
