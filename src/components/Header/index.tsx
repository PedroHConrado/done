import { Bell, CaretDown, MagnifyingGlass, Question } from "phosphor-react";
import { Container } from "./styles";

export function Header() {
  
  return (
    <Container>
      <div className="search">
        <MagnifyingGlass size={22} className="icon-search"/>
        <input type="text" placeholder="Search" className="input-search"/>
      </div>

      <div className="buttons">
        <button className="support">
          <Question size={25} />
        </button>

        <button className="notification">
          <Bell size={25} />
        </button>

        <button className="config">
          <strong className="name">Pedro Conrado</strong> 
          <CaretDown size={13} weight="bold"/>
        </button>

        <img className="avatar" src="https://avatars.githubusercontent.com/u/69021966?v=4" alt="Foto de perfil" />
      </div>
    </Container>
  );
}
