import Test from './page/test'
import Main from './page/Main'
import MenuReg from './page/MenuReg'
import MenuChoice from './page/MenuChoice'
import UserChoice from './page/UserChoice'
import MenuCompleted from './page/MenuCompleted'
import MenuRegList from './page/MenuRegList'
import MenuRegDetail from './page/MenuRegDetail'
import Login from './view/user/Login'
import SignUp from './view/user/SignUp'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/test" component={Test} />
        <Route path="/menuReg" component={MenuReg} />
        <Route path="/menuChoice" component={MenuChoice} />
        <Route path="/userChoice" component={UserChoice} />
        <Route path="/menuCompleted" component={MenuCompleted} />
        <Route path="/menuRegList" component={MenuRegList} />
        <Route path="/menuRegDetail" component={MenuRegDetail} />
        <Route path="/user/login" component={Login} />
        <Route path="/user/signUp" component={SignUp} />
      </Router>
    </>
  );
}

export default App;
