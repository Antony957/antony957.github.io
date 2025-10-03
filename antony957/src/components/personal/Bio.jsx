import React from "react";

function Bio() {

    return (
        <div id="bio" className="p-6 max-w-6xl mx-auto">
            {/* 主内容区域 */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Bio</h1>
            <div>
                <p>
                    I am a Master student at Duke University (ECE, GPA 4.0/4.0), passionate about building robust systems and applying AI technologies to real-world problems. My interests lie in AI infrastructure, large-scale distributed systems, LLM safety, and developing tools that accelerate human creativity and productivity.
                </p>
                <br/>
                <p>
                    I worked with the guidance of Professor{" "}
                    <a
                        href="https://sites.google.com/view/kaizhu-huang-homepage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-80"
                    >
                        Kaizhu Huang
                    </a>
                    , Duke Kunshan University, on{" "}
                    <a href={"https://github.com/Antony957/LLM_Safety"}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="underline hover:opacity-80"
                    >
                        mechanisms of large language models</a>

                    . Previously, I was a software engineer at Meituan, where I built large-scale dispatching and simulation platforms for shared mobility, including an{" "}
                    <a
                        href="https://github.com/Antony957/meituan_dispatch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-80"
                    >
                        AI-powered dispatch system for shared bikes
                    </a>
                    . I also worked at Simpleway.AI, developing an LLM-powered real-time voice interaction app and an AI resume matching system. At Premilab, I focused on LLM safety engineering, reducing jailbreak attack success rates from 70% to 5%.
                </p>
                <br/>
                <p>
                    Outside of academics and work, I enjoy building side projects, contributing to open source, and exploring how AI can reshape the interaction between humans and the world. Skilled in backend systems (Python, Java, C++), distributed computing (Flink, Kafka, HBase), and full-stack development (React, Next.js), I like creating scalable AI-driven tools. I obtained my B.S. in Computer Science from Hohai University in 2022.
                </p>

            </div>
    </div>);
}

export default Bio;