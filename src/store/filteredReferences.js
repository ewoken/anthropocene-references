import { referencesSelector } from './references';

const REFERENCE_PER_PAGE = 20;

function filteredReferencesSelector({ page, type: filteredType }, state) {
  const references = referencesSelector(state);
  const startIndex = (page - 1) * REFERENCE_PER_PAGE;
  const filteredReferences =
    filteredType === 'ALL'
      ? references
      : references.filter(({ type }) => type === filteredType);

  return {
    total: filteredReferences.length,
    references: filteredReferences.slice(
      startIndex,
      startIndex + REFERENCE_PER_PAGE,
    ),
    pageSize: REFERENCE_PER_PAGE,
  };
}

export default filteredReferencesSelector;
