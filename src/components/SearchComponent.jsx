import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'antd';

import { updateSearch } from '../store/search';

function SearchComponent(props) {
  const { onSearch } = props;
  return (
    <div className="SearchComponent">
      <Input.Search
        placeholder="Recherche"
        style={{ width: '50em' }}
        onSearch={onSearch}
      />
    </div>
  );
}

SearchComponent.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default connect(
  null,
  { onSearch: updateSearch },
)(SearchComponent);
