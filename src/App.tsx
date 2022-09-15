import { getIssues } from 'libs/apis/getIssues';
import GlobalStyles from 'libs/styles/globalStyles';
import theme from 'libs/styles/theme';
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Issue } from 'types/issue';
import Routing from './routes/Routing';

export const issuesContext = createContext<Issue[]>([]);

function App() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const loadIssues = async () => {
      const issues = await getIssues();
      setIssues(issues);
    };
    loadIssues();
  }, []);

  return (
    <issuesContext.Provider value={issues}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routing />
        </ThemeProvider>
      </BrowserRouter>
    </issuesContext.Provider>
  );
}

export default App;
