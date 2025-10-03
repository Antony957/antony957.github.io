import React from "react";

function Navi() {
    return (
            <div className="flex w-full items-center justify-between">
                <a href="#home" className="font-bold hover:text-blue-600">Chongwen Zhao</a>
                <nav className="flex space-x-6">
                    <a href="#home" className="font-bold hover:text-blue-600">About</a>
                    {/*<a href="#Project" className="font-bold hover:text-blue-600">Project</a>*/}
                    <a href="/Chongwen_Resume_SDE.pdf" className="font-bold hover:text-blue-600">Resume</a>
                    <a href="#Blogs" className="font-bold hover:text-blue-600">Blogs</a>
                </nav>
            </div>
    );
}

export default Navi;
