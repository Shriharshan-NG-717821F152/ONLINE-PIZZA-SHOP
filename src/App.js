import "./App.css";
import { Container,Image} from "react-bootstrap";
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Topbar from "./components/Topbar";
//import Aboutus from "./components/Aboutus";
import Pizza from "./components/Pizza";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavigationBar from "./components/NavigationBar";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <NavigationBar />
      <Switch>
      <Route path="/Contact" component={Contact} exact/>
      <Route path="/Policy" component={Policy} exact/>
      <Route path="/" component={HomeScreen} exact/>
      </Switch>
    </BrowserRouter>
  );
 }
export default App;