import './App.css';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <ReactPlayer controls url="https://edge.stg-alefedge.com/v1/content?url=00c104e612cb7f461e6446d77125a0edb3b8a827df1bd1149f3a08cad05d4af7330bc06d85d2da3b753f00c9f4d3be95e4638711ca83c62bdbd0a0bd3d143d5e&api_key=6S5F6S6-4JZMFEG-KAJVWQ6-B5Q6117" playing="true"></ReactPlayer>
      {/* https://edge.stg-alefedge.com/v1/content?url=00c104e612cb7f461e6446d77125a0edb3b8a827df1bd1149f3a08cad05d4af7330bc06d85d2da3b753f00c9f4d3be95e4638711ca83c62bdbd0a0bd3d143d5e&api_key=6S5F6S6-4JZMFEG-KAJVWQ6-B5Q6117 */}
    </div>
  );
}

export default App;
