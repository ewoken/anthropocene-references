import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Menu, Popover, Button } from 'antd';
import SearchComponent from './SearchComponent';
import GitHubLink from './GitHubLink';
import AddComponent from './AddComponent';

import HomeView from '../views/home/HomeView';

function AppLayout() {
  return (
    <div className="AppLayout">
      <Layout>
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu
            mode="horizontal"
            theme="dark"
            selectable={false}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">
              <strong>Références</strong>
            </Menu.Item>
            <Menu.Item key="search">
              <SearchComponent />
            </Menu.Item>
            <Menu.Item>
              <Popover content={<AddComponent />} trigger="click">
                <Button type="primary">Ajouter une référence</Button>
              </Popover>
            </Menu.Item>
            <Menu.Item key="github">
              <GitHubLink />
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content style={{ padding: '0 50px', marginTop: 64 }}>
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
