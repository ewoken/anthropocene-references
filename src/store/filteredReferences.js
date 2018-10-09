import { createSelector } from 'reselect';
import { searchSelector } from './search';
import { referencesSelector } from './references';

function removeDiacritics(string) {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const referenceIndexSelector = createSelector(referencesSelector, references =>
  references.map(reference => ({
    ...reference,
    title: removeDiacritics(reference.title.toLowerCase()),
  })),
);

function filteredReferencesSelector(state) {
  const search = removeDiacritics(searchSelector(state));
  const referenceIndex = referenceIndexSelector(state);
  const references = referencesSelector(state);
  const ids = referenceIndex
    .filter(({ title }) => title.includes(search))
    .map(({ id }) => id);

  return references.filter(({ id }) => ids.includes(id));
}

export default filteredReferencesSelector;
