import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Layout, Menu, Popover, Button } from 'antd';
import SearchComponent from './SearchComponent';
import GitHubLink from './GitHubLink';
import AddComponent from './AddComponent';

import HomeView from '../views/home/HomeView';

function AppLayout(props) {
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
              <SearchComponent resetPage={() => props.history.push('/1')} />
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
            <Route path="/:page(\d+)" exact component={HomeView} />
            <Route component={() => <Redirect to={{ pathname: '/1' }} />} />
          </Switch>
        </Layout.Content>
        {/* <Layout.Footer>Footer</Layout.Footer> */}
      </Layout>
    </div>
  );
}

AppLayout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(AppLayout);
