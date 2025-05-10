import React from "react";
import reactDom from "react-dom/client";

function App(){
    return (
        <>Welcome to Yajurveer</>
    )
}

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<App></App>);