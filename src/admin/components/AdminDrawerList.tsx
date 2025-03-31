import React from "react";
import DrawerList from "../../component/DrawerList.tsx";

const AdminDrawerList = ({menu,menu2,toggleDrawer}:any) => {
    return(
        <div>
          <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer}/>
        </div>
    )
}

export default AdminDrawerList;