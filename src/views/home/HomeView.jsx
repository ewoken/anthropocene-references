import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Card, Icon } from 'antd';

import filteredReferencesSelector from '../../store/filteredReferences';

function TypeIcon({ type }) {
  switch (type) {
    case 'VIDEO':
    case 'CHANNEL':
      return <Icon type="youtube" theme="outlined" />;
    case 'MUSIC':
    case 'PODCAST':
      return <Icon type="customer-service" theme="outlined" />;
    case 'BOOK':
      return <Icon type="book" theme="outlined" />;
    case 'MOVIE':
      return <Icon type="video-camera" theme="outlined" />;
    case 'WEBSITE':
      return <Icon type="global" theme="outlined" />;
    case 'PICTURE':
      return <Icon type="picture" theme="outlined" />;
    default:
      return null;
  }
}

function Cover({ reference }) {
  if (reference.coverUrl) {
    return (
      <img
        className="Cover"
        src={reference.coverUrl}
        alt={`logo of ${reference.title}`}
      />
    );
  }

  if (reference.url && reference.url.startsWith('https://youtu.be/')) {
    const code = reference.url.split('/')[3];
    return (
      <iframe
        className="Cover"
        title={`youtube-${code}`}
        src={`https://www.youtube.com/embed/${code}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    );
  }

  if (reference.url && reference.url.endsWith('.pdf')) {
    return (
      <object className="Cover" data={reference.url} type="application/pdf">
        <p>Viewer de pdf - Cliquez pour télécharger</p>
      </object>
    );
  }

  return <div className="Cover" />;
}

Cover.propTypes = {
  reference: PropTypes.shape({
    url: PropTypes.string,
    coverUrl: PropTypes.string,
  }).isRequired,
};

function ReferenceCard({ reference }) {
  return (
    <div className="ReferenceCard">
      <a href={reference.url} target="_blank" rel="noopener noreferrer">
        <Card hoverable cover={<Cover reference={reference} />}>
          <Card.Meta
            avatar={<TypeIcon type={reference.type} />}
            title={reference.title}
          />
        </Card>
      </a>
    </div>
  );
}
ReferenceCard.propTypes = {
  reference: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

function HomeView(props) {
  const { references } = props;
  return (
    <div className="HomeView">
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 3 }}
        dataSource={references}
        locale={{ emptyText: 'Aucune référence' }}
        renderItem={reference => (
          <List.Item key={reference.title}>
            <ReferenceCard reference={reference} />
          </List.Item>
        )}
      />
    </div>
  );
}

HomeView.propTypes = {
  references: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(state => ({
  references: filteredReferencesSelector(state),
}))(HomeView);
