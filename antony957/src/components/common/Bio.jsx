import React from "react";

function Bio() {

    return (
        <div id="bio" className="p-6 max-w-6xl mx-auto">
            {/* 主内容区域 */}
            <div className="flex flex-col md:flex-row">
                {/*照片*/}

                {/*介绍*/}
                <div className="flex flex-col max-w-lg mx-auto bg-white p-12">
                    <div className="text-center mb-12">
                        <p className="text-base text-gray-700 mb-3">
                            Master Student at Duke University
                        </p>
                        <p className="text-base text-gray-700">
                            CEO at MindAurora
                        </p>
                    </div>

                    <div className="space-y-8 mb-16">
                        <div className="flex">
                            <span className="font-semibold text-gray-800 w-24">Email:</span>
                            <span className="text-gray-600">cz207@duke.edu</span>
                        </div>

                        <div className="flex">
                            <span className="font-semibold text-gray-800 w-24">Interests:</span>
                            <span className="text-gray-600">Model Self-Learning, Deep Learning Interpretable, Robot Learning</span>
                        </div>
                    </div>


                </div>

            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-6">Bio</h1>
            <div>
                <p>
                    I am a Master student at Duke University. I am interested in implementation of AI technologies,
                    self-learning of model, and deep learning principle research. I am willing to change the interaction
                    between human and the world, and build tools for accelerating the prolificacy.
                    I believe that in the future human beings will be liberated from long-term production and have more time and freedom.
                </p>
                <br/>
                <p>
                    I worked with the guidance of Professor Kaizhu Huang, Duke Kunshan University in topic of jailbreak mechanism of large language model.
                    Before that, I was a software engineer at Meituan, focusing on AI powered dispatch process of sharing bikes.
                </p>
                <br/>
                <p>
                    I obtained my B.S. of Computer Science from Hohai University, 2022.
                </p>
            </div>
    </div>);
}

export default Bio;