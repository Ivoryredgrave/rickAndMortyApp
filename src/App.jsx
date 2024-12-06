import React from 'react';
import { ConfigProvider, theme } from 'antd';
import CharactersTable from './components/charactersTable';

export const App = () => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <CharactersTable />
    </ConfigProvider>
  );
};

export default App;