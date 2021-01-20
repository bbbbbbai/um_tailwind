import React from 'react';
import {
  SmileOutlined,
  UserOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';

export default function Icon({
  type,
  ...args
}: {
  type: string;
  className?: string;
  onClick?: () => void;
}) {
  switch (type) {
    case 'user':
      return <UserOutlined {...args} />;
    case 'success':
      return <CheckCircleOutlined {...args} />;
    case 'delete':
      return <DeleteOutlined {...args} />;
    case 'edit':
      return <EditOutlined {...args} />;
    case 'return':
      return <ArrowLeftOutlined {...args} />;
    default:
      return <SmileOutlined {...args} />;
  }
}
