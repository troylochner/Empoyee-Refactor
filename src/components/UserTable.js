import React, { useContext } from "react";
import DirectoryContext from "../utils/DirectoryContext";

const UserTable = () => {
    const context = useContext(DirectoryContext);

    return(
        <p>This P is on the table</p>
    )

    
}
export default UserTable;