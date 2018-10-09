import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import SearchComponent from './SearchComponent';

import HomeView from '../views/home/HomeView';

function AppLayout() {
  return (
    <div className="AppLayout">
      <Layout>
        <Layout.Header>
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
            <Menu.Item key="github">
              <a
                href="https://github.com/ewoken/anthropocene-references"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'GitHub '}
                <Icon type="github" theme="outlined" />
              </a>
            </Menu.Item>
          </Menu>
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
