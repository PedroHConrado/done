import { Plus } from "phosphor-react";
import { Task } from "../Task";
import { Container } from "./styles";

export function Board(props: any) {
  return (
    <Container>
      <div className="header">
        <strong>{props.title}</strong>
        <span className="count">{props.count}</span>
      </div>

      <button className="add">
        <Plus color="#52ab9a" size={15} weight="bold"/>
      </button>

      <div className="task">
        <Task />
        <Task />
      </div>
    </Container>
  );
}
