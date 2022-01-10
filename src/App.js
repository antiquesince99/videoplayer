import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddVideo from "./COMPONENTS/video/AddVideo";
// import Header from './COMPONENTS/header';
import Register from "./COMPONENTS/Login&Register/Register";
import SignIn from "./COMPONENTS/Login&Register/Login";
import ListVideos from "./COMPONENTS/video/VideoList";
import ViewVideo from "./COMPONENTS/video/ViewVideo";
import Appbar from "./COMPONENTS/appbar";

function App() {
  return (
    <div>
      <Router>
        {/* <Header/> */}
        <Appbar />
        <Route component={SignIn} path="/Login"></Route>
        <Route component={Register} path="/Register"></Route>
        <Route component={ListVideos} path="/VideoList"></Route>
        <Route component={ViewVideo} path="/view/:id"></Route>
        <Route component={AddVideo} path="/AddVideo"></Route>
      </Router>
    </div>
  );
}

export default App;
