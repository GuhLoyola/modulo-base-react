import './App.css';
// import Button from './components/button/button';
import Card from './components/card/card';

function App() {
  return (
    <>
      <Card>
        <h3>Titulo bem foda 🙂</h3>
        <p>Esse é um texto do card</p>
      </Card>

      <Card>
        <h3>Titulo mais ou menos 😐</h3>
        <p>Esse é um texto do card 2</p>
      </Card>

      <Card>
        <h3>Titulo ruim 😕</h3>
        <p>Esse é um texto do card 3</p>
      </Card>
    </>
  );
}

export default App;
