import { uniq, sortBy } from 'ramda';
import data from '../references';

export const ALL = 'ALL';

const referencesTypes = uniq(data.map(d => d.type));
referencesTypes.push(ALL);

const typesLabel = {
  ALL: 'Tous',
  ARTICLE: 'Article',
  ASSOCIATION: 'Association',
  BOOK: 'Livre',
  CHANNEL: 'Chaîne',
  PICTURE: 'Image',
  PODCAST: 'Podcast',
  MOVIE: 'Film',
  MUSIC: 'Musique',
  SERIES: 'Série',
  VIDEO: 'Vidéo',
  WEBSITE: 'Site Web',
};
const types = sortBy(
  t => t.label,
  referencesTypes.map(t => ({
    value: t,
    label: typesLabel[t] || t,
  })),
);

function typeReducer(state = types) {
  return state;
}

export function typesSelector(state) {
  return state.types;
}

export default typeReducer;
