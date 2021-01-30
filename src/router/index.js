import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Layout from '../site/layout'
import ButtonPage from '../site/pages/Button'
import Index from '../site/pages/Index'
import SelectPage from '../site/pages/Select'
import InputPage from '../site/pages/Input'
import IconPage from '../site/pages/Icon'
import GridPage from '../site/pages/Grid'
import DividerPage from '../site/pages/Divider'
import CheckboxPage from '../site/pages/Checkbox'
import RadioPage from '../site/pages/Radio'
import TablePage from '../site/pages/Table'
function AppRouter(props) {
  return (
    <Layout>
      <Switch>
        <Route exact path='/button' component={ButtonPage}/>
        <Route exact path='/icon' component={IconPage}/>
        <Route exact path='/divider' component={DividerPage}/>
        <Route exact path='/grid' component={GridPage}/>
        <Route exact path='/select' component={SelectPage}/>
        <Route exact path='/checkbox' component={CheckboxPage}/>
        <Route exact path='/radio' component={RadioPage}/>
        <Route exact path='/input' component={InputPage}/>
        <Route exact path='/table' component={TablePage}/>
        <Redirect to="button"/>
      </Switch>
    </Layout>

  );
}
export default AppRouter;
