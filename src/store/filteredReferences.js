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

const REFERENCE_PER_PAGE = 20;

function filteredReferencesSelector(page, state) {
  const references = referencesSelector(state);
  const referenceIndex = referenceIndexSelector(state);
  const search = removeDiacritics(searchSelector(state));
  const startIndex = (page - 1) * REFERENCE_PER_PAGE;
  const ids = referenceIndex
    .filter(({ title }) => title.includes(search))
    .map(({ id }) => id);

  return {
    total: ids.length,
    references: references
      .filter(({ id }) => ids.includes(id))
      .slice(startIndex, startIndex + REFERENCE_PER_PAGE),
    pageSize: REFERENCE_PER_PAGE,
  };
}

export default filteredReferencesSelector;
