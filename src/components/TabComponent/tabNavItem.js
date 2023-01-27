import React from "react";
import "./../../styles/Tabs/tabs.css"

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 /* Here is the functionality for setting a tab to active. The tab is active if it has
 the green background color */
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
 );
};
export default TabNavItem;