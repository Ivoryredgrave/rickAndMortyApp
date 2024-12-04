import React from 'react';
import { ConfigProvider, theme } from 'antd';
import TablaPersonajes from './componentes/TablaPersonajes';

export const App = () => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <TablaPersonajes />
    </ConfigProvider>
  );
};

export default App;