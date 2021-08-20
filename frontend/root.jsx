import React from "react";
import Clock from "./clock";

const Root = (props) =>{
    const tabList = [
        {title: "kevin", content: "I am kevin"},
        {title: "hansaem", content: "I am hansaem"}
    ];

    return(
        <div>
            hi
            <Clock/>
            <Tab tabList = {tabList}/>
        </div>
    );
}

export default Root;