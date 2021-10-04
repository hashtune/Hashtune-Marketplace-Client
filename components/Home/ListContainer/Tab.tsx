import React from 'react';

interface TabProps {
    isSelected: boolean
}
const Tab: React.FC<TabProps> = ({
    isSelected,
    children
}) => {
    if (isSelected) {
      return (
        <div>
          {children }
        </div>
      );
    }
return null;
}
export default Tab;