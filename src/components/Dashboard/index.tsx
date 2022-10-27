import { Board } from "../Board";
import { Container } from "./styles";

export function Dashboard() {
  const board = [

  ];

  return (
    <Container>
      <h1 className="title">Projects</h1>
      <div className="boards">
        <Board title={"To do"} count={2}/>
        <Board title={"In Progress"} count={2}/>
        <Board title={"Review"} count={1} />
        <Board title={"Completed"} count={0} />
      </div>
    </Container>
  );
}
// Title, count, task -> {type, text }