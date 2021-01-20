import React from 'react';
import { Tooltip } from 'antd';

type TruncateProps = API.WithChildren<{
  showTooltip?: boolean;
  className?: string;
  style?: React.CSSProperties;
}>;

export default function Truncate({
  children,
  showTooltip = true,
  className = '',
  style = {},
}: TruncateProps) {
  return showTooltip ? (
    <Tooltip title={children}>
      <div className={`truncate ${className || ''}`} style={style}>
        {children}
      </div>
    </Tooltip>
  ) : (
    <div className={`truncate ${className || ''}`} style={style}>
      {children}
    </div>
  );
}
