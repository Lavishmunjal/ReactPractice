import "./App.css";
import Usercontextprovider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Usercontextprovider>
        <h1>hello ji</h1>
        <Login />
        <Profile />
      </Usercontextprovider>
    </>
  );
}

export default App;
