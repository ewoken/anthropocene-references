import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import HomeView from '../views/home/HomeView';

function AppLayout() {
  return (
    <div className="AppLayout">
      <Layout>
        <Layout.Header>
          <h1>References</h1>
        </Layout.Header>
        <Layout.Content>
          <Switch>
            <Route path="/" exact component={() => <HomeView />} />
            <Route component={() => <Redirect to={{ pathname: '/' }} />} />
          </Switch>
        </Layout.Content>
        {/* <Layout.Footer>Footer</Layout.Footer> */}
      </Layout>
    </div>
  );
}

export default AppLayout;
