import './App.css';
import Header from "./header"
import SideBar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{user},dispatch] = useStateValue();
  return (
    //BEM 
    
    <div className="app">

      {!user ? (
          <Login />
      ) : (
        <>
      <Header/>

      <div className="app__body">
        <SideBar />
        <Feed />
        <Widgets />
      </div>
       </>
      )}
    </div>
  )}

export default App;
