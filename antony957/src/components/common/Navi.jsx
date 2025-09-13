import React from "react";

function Navi() {
    return (
        <div>

            <div className="w-full bg-gray-100 p-4 shadow sticky top-0 z-50">
                <nav className="flex justify-center space-x-6">
                    <a href="#bio" className="font-bold hover:text-blue-600">Bio</a>
                    <a href="#news" className="font-bold hover:text-blue-600">News</a>
                    <a href="#project" className="font-bold hover:text-blue-600">Project</a>
                    <a href="#lifestyle" className="font-bold hover:text-blue-600">Lifestyle</a>
                </nav>
            </div>


        </div>
    );
}

export default Navi;
