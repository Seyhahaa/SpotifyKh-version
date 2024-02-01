import Login from "./components/Auth/login";
import HomePage from "./components/HomePage/HomePage";

function App() {

  const isAuthenticated = true;
  return (
    <div className="App">
      {isAuthenticated ? <HomePage /> : <Login />}
    </div>
  );
}

export default App;
