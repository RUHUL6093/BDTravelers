import Header from "./componentes/Header/Header";

import MediaCard from "./componentes/Transport1/Transport";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className="sty">
        <MediaCard></MediaCard>
        <MediaCard></MediaCard>
        <MediaCard></MediaCard>
        <MediaCard></MediaCard>
      </div>
    </div>
  );
}
