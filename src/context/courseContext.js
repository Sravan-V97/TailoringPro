import React from 'react';

const CourseContext = React.createContext();

export const CourseProvider = CourseContext.Provider;
export const CourseConsumer = CourseContext.Consumer;

export default CourseContext;
