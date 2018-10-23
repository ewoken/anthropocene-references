import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Select } from 'antd';
import queryString from 'query-string';

import { ALL, typesSelector } from '../store/types';
import { tagsSelector } from '../store/tags';
import ReferencesView from '../views/references';
import HomeView from '../views/home';

import GitHubLink from './GitHubLink';

function AppLayout(props) {
  // TODO
  const { location, types, tags } = props;
  const query = queryString.parse(location.search);
  const queryTags = query.tags ? [].concat(query.tags) : [];

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
                <strong>Accueil</strong>
              </Link>
            </Menu.Item>
            <Menu.Item key="references">
              <Link to="/references">
                <strong>Réferences</strong>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Select
                className="AppLayout__tagSelect"
                mode="multiple"
                placeholder="Filtrer"
                notFoundContent="Aucun tag"
                maxTagCount={2}
                value={queryTags}
                onChange={newTags => {
                  props.history.push(
                    `/references?${queryString.stringify({
                      tags: newTags,
                      type: query.type,
                    })}`,
                  );
                }}
                allowClear
              >
                {tags.map(t => (
                  <Select.Option key={t}>{t}</Select.Option>
                ))}
              </Select>
            </Menu.Item>
            <Menu.Item key="type">
              <Select
                style={{ width: '100px' }}
                value={query.type || ALL}
                onChange={type =>
                  props.history.push(
                    `/references?${queryString.stringify({
                      tags: queryTags,
                      type,
                    })}`,
                  )
                }
              >
                {types.map(type => (
                  <Select.Option key={type.value}>{type.label}</Select.Option>
                ))}
              </Select>
            </Menu.Item>
            <Menu.Item key="github">
              <GitHubLink />
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Switch>
            <Route path="/home" exact component={HomeView} />
            <Route path="/references" exact component={ReferencesView} />
            <Route component={() => <Redirect to={{ pathname: '/home' }} />} />
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
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(
  connect(state => ({
    types: typesSelector(state),
    tags: tagsSelector(state),
  }))(AppLayout),
);
