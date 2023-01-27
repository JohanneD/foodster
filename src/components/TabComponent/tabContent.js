import React from "react";
 
const TabContent = ({id, activeTab, children}) => {
  /* if a tab is active then show the content, if not then show nothing. Here the child
  is what evere we have added in between the <TabContent>"CHILD"</TabContant> */
 return (
   activeTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
 );
};
 
export default TabContent;