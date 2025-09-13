import React from "react";

function Navi() {
    return (
        <div>

            <div className="w-full bg-gray-100 p-4 shadow sticky top-0 z-50">
                <nav className="flex justify-center space-x-6">
                    <a href="#bio" onClick={() => scrollTo("bio")} className="font-bold hover:text-blue-600 cursor-pointer">Bio</a>
                    <a href="#news" onClick={() => scrollTo("news")} className="font-bold hover:text-blue-600 cursor-pointer">News</a>
                    <a href="#project" onClick={() => scrollTo("project")} className="font-bold hover:text-blue-600 cursor-pointer">Project</a>
                    <a href="#lifestyle" onClick={() => scrollTo("lifestyle")} className="font-bold hover:text-blue-600 cursor-pointer">Lifestyle</a>
                </nav>
            </div>


        </div>
    );
}

export default Navi;
