import React from 'react';
import { Icon } from 'antd';

function GitHubLink() {
  return (
    <a
      href="https://github.com/ewoken/anthropocene-references"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'GitHub '}
      <Icon type="github" theme="outlined" />
    </a>
  );
}

export default GitHubLink;
