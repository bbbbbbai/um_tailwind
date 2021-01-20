import React from 'react';
import { Spin } from 'antd';

const PageLoading: React.FC<{
  tip?: string;
}> = ({ tip }) => (
  <div style={{ textAlign: 'center', height: 'calc(100vh - 24px)', paddingTop: '40vh' }}>
    <Spin size="large" tip={tip} />
  </div>
);

export default PageLoading;
