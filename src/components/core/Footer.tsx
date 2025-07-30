import React from 'react';

const Footer: React.FC<{
  componentName: string;
  children?: React.ReactNode;
}> = ({
  componentName,
  children
}) => {
  return (
    <div>{children}</div>
  );
};

export default Footer;
