import { difference } from 'ramda';
import { referencesSelector } from './references';

const REFERENCE_PER_PAGE = 20;

function filteredReferencesSelector(
  { page, type: filteredType, tags: filteredTags },
  state,
) {
  const references = referencesSelector(state);
  const startIndex = (page - 1) * REFERENCE_PER_PAGE;
  const typefilteredReferences =
    filteredType === 'ALL'
      ? references
      : references.filter(({ type }) => type === filteredType);
  const resultReferences =
    filteredTags.length > 0
      ? typefilteredReferences.filter(
          ({ tags = [] }) => difference(filteredTags, tags).length === 0,
        )
      : typefilteredReferences;

  return {
    total: resultReferences.length,
    references: resultReferences.slice(
      startIndex,
      startIndex + REFERENCE_PER_PAGE,
    ),
    pageSize: REFERENCE_PER_PAGE,
  };
}

export default filteredReferencesSelector;
