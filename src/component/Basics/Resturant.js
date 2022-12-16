import React, { useState } from 'react';
import './style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  return (
    <>
      <MenuCard menuData={menuData}></MenuCard>
    </>
  );
};

export default Resturant;
