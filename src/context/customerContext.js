import React from 'react';
import student_data from 'src/data/student_data';

const CostumerContext = React.createContext();

export const CostumerProvider = CostumerContext.Provider;

export const CostumerConsumer = CostumerContext.Consumer;

export default CostumerContext;
