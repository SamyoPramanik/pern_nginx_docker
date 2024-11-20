import React from "react";
import { Link } from "react-router-dom";

export const OtherPage = () => {
    return (
        <div>
            <h1>Other Page</h1>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

// import React from "react";
// import { Route, Link, Routes } from "react-router-dom";
// import "./App.css";
// import { OtherPage } from "./OtherPage.js";
// import { MainComponent } from "./MainComponent.js";

// function App() {
//     return (
//         <Routes>
//             // {/* <Fragment> */}
//             //{" "}
//             {/* <header>
//         //             <div>This is multicontainer application</div>
//         //             <Link to="/">Home</Link>
//         //             <Link to="/otherpage">Other Page</Link>
//         //         </header>
//         //         <div> */}
//             // <Route exact path="/" component={<MainComponent />} />
//             // <Route path="/otherpage" component={<OtherPage />} />
//             // {/* </div> */}
//             // {/* </Fragment> */}
//             //{" "}
//         </Routes>
//     );
// }

// export default App;
