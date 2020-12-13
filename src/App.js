import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { CostumerProvider } from './context/customerContext';
import { CourseProvider } from './context/courseContext';
import student_data from './data/student_data';
import course_data from './data/course_data';

const App = () => {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FirebaseDatabaseProvider>
      {routing}
      </FirebaseDatabaseProvider>
    </ThemeProvider>
  );
};

export default App;
