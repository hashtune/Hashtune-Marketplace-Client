import React from 'react';

interface TabnavProps {
    tabs: string[],
    selected: string,
    setSelected: (tab: string)=> void
}

const TabNav: React.FC<TabnavProps> = ({
  tabs,
  selected,
  setSelected,
  children,
}) => {
  return( 
      <div style={{ width: '30%' }}>
        <ul>
        {
            tabs.map(tab => {
            const active = (tab === selected ? 'active ' : '' );
            return (
            <li key={ tab }>
              <a onClick={ () => setSelected(tab)}>
                {tab}
                </a>
            </li>
            );
            })
        }
        </ul>
        {children}
        </div>
    )
  
}
export default TabNav;