import { Bell, CaretDown, Question } from "phosphor-react";
import { Container } from "./styles";

export function Header() {
  
  return (
    <Container>
      <div className="search">
        <input type="text" />
      </div>

      <div className="buttons">
        <button className="support">
          <Question size={18}/>
        </button>
        <button className="notification">
          <Bell size={18}/>
        </button>
        <button className="config">
          <span>Pedro Conrado</span> 
          <CaretDown color="#999999" size={18}/>
        </button>
        <img className="avatar" src="https://avatars.githubusercontent.com/u/69021966?v=4" alt="Foto de perfil" />
      </div>
    </Container>
  );
}
