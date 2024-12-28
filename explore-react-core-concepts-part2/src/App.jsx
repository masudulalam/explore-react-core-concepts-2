import './App.css'

function App() {

  function handleClick(){
    alert('button clicked!');
  }

  const handleClick2 = () => {
    alert('button clicked 2');
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={handleClick2}>Click Me 2!</button>
      <button onClick={() => {alert('Click me 3 is clicked')}}>Click Me 3!</button>
    </>
  )
}

export default App
