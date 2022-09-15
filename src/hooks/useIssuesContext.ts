import { issuesContext } from 'App';
import { useContext } from 'react';

function useIssuesContext() {
  const issues = useContext(issuesContext);
  if (issues === undefined) {
    throw new Error(
      'issuesContext should be used within issuesContext.Provider'
    );
  }
  return issues;
}

export default useIssuesContext;
