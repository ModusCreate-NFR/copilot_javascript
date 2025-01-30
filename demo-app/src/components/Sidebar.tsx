import React from "react";
import Header from "./Header";

const Sidebar: React.FC = () => {
    return (
        <aside>
            <Header />
            <p>Sidebar Content</p>
        </aside>
    );
};

export default Sidebar;
