import '../../output.css';
import Navi from '../common/Navi.jsx';

import BlogList from "./BlogList.jsx";
import BlogDetail from "./BlogDetail.jsx";
import {Routes, Route, HashRouter} from "react-router-dom";
import React from "react";


function BlogHome() {
    return (
        <>
            <HashRouter>
                <div className="sticky inset-x-0 top-0 h-16 w-full bg-gray-100 p-4 shadow z-50">
                    <Navi />
                </div>

                {/* 主体内容区域 */}
                <main className="mt-16">
                    <Routes>
                        <Route path="/" element={<BlogList />} />
                        <Route path={"/:slug"}  element={<BlogDetail/>} />
                    </Routes>
                </main>
            </HashRouter>
        </>
    );
}

export default BlogHome;
