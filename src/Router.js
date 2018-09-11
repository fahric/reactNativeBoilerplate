import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const RouterComponent = () => {
  return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" initial />
          </Scene>
          <Scene key="main">

            <Scene
                key="employeeCreate"
                component={Home}
                title="Create Employee"
                initial/>

          </Scene>
        </Scene>
      </Router>
  );
};

export default RouterComponent;
