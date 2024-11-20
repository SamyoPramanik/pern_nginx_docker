import React, { Fragment } from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { OtherPage } from "./OtherPage.js";
import { MainComponent } from "./MainComponent.js";

function App() {
    return (
        <BrowserRouter>
            <header>
                <div>This is multicontainer application</div>
                <Link to="/">Home</Link>
                <Link to="/otherpage">Other Page</Link>
            </header>
            <Routes>
                <Route path="/" element={<MainComponent />} />
                <Route path="/otherpage" element={<OtherPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
