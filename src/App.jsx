import './App.css';

function App() {
  // State - react componento specialus kintamasis nuo kurio gali priklausyti kaip atvsivaizduoja jsx
  console.log('<App /> ran');
  let isLoggedIn = true;

  setTimeout(() => {
    isLoggedIn = false;
    console.log('isLoggedIn ===', isLoggedIn);
  }, 3000);

  return (
    <div className='App container'>
      <h1>App</h1>
      <h2>isLoggedIn: {isLoggedIn.toString()}</h2>
      <h2>{isLoggedIn ? 'is logged' : 'is not logged in'}</h2>
    </div>
  );
}

export default App;
