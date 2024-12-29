import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked!');
  }

  const handleClick2 = () => {
    alert('button clicked 2');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me!</button>
      <button onClick={handleClick2}>Click Me 2!</button>
      <button onClick={() => {alert('Click me 3 is clicked')}}>Click Me 3!</button>
      <button onClick = {() => addToFive(5)}>Add Five</button>
    </>
  )
}

export default App
