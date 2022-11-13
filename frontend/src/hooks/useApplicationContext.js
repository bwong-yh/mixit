import { useContext } from 'react';
import { ApplicationContext } from '../context/ApplicationContext';

const useApplication = () => {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error('useApplicationContext must be used within a provider');
  }

  return [context.state, context.dispatch];
};

export default useApplication;
