import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Popover, Button, Select } from 'antd';
import queryString from 'query-string';

import { ALL, typesSelector } from '../store/types';
import HomeView from '../views/home/HomeView';

import GitHubLink from './GitHubLink';
import AddComponent from './AddComponent';

function AppLayout(props) {
  const { location, types } = props;
  const query = queryString.parse(location.search);

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
              <Link to="/">
                <strong>Références</strong>
              </Link>
            </Menu.Item>
            <Menu.Item key="type">
              <Select
                placeholder="Type"
                style={{ width: '100px' }}
                value={query.type || ALL}
                onChange={type => props.history.push(`/?type=${type}`)}
              >
                {types.map(type => (
                  <Select.Option key={type.value}>{type.label}</Select.Option>
                ))}
              </Select>
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
            <Route path="/" exact component={HomeView} />
            <Route component={() => <Redirect to={{ pathname: '/' }} />} />
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
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withRouter(
  connect(state => ({
    types: typesSelector(state),
  }))(AppLayout),
);
