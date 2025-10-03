import 'react'
import React from "react";

function SelfIntro() {
    return (
        <div className="w-full h-full p-8 bg-blue-50 items-center flex flex-col z-10 space-y-8">
            <img src="/avatar.jpg" alt={"avatar"} className={"w-32 h-32 !rounded-full mb-3 shadow-lg mt-10"}/>
            <div className={"text-xl font-bold"}>
                Chongwen Zhao
            </div>

            <p className="text-gray-600 text-sm italic text-center mt-6">
                "Driving hardcore technology<br/> toward eureka moments."
            </p>
            <p className="text-base text-gray-700 mt-8">Master Student at Duke University</p>

            <div className="space-y-8 mb-8 mt-8">
                <div className="flex">
                    <span className="font-semibold text-gray-800 w-24">Email:</span>
                    <span className="text-gray-600">cz207@duke.edu</span>
                </div>

                <div className="flex">
                    <span className="font-semibold text-gray-800 w-24">Interests:</span>
                    <span className="text-gray-600"> Software Development,  <br/>Robust System, <br/> AI Application </span>
                </div>

                <div className="flex">
                    <span className="font-semibold text-gray-800 w-24">Resume:</span>
                    <span className="text-gray-600"><a
                        href="/Chongwen_Resume_SDE.pdf"
                        target={"_blank"}
                        className="underline hover:opacity-80"
                    >
                      Download
                    </a>   </span>
                </div>
            </div>


            {/*</div>*/}
            <div className="flex flex-1 flex-row items-center gap-4 text-gray-700 text-2xl">
                    {/* Mail */}
                    <a href="mailto:cz207@duke.edu" className="hover:text-blue-500" aria-label="Email">
                        <svg t="1756092209210" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="5618" width="20" height="20">
                            <path
                                d="M869.065302 152.648632l-715.495694 0c-49.195445 0-89.436962 40.532135-89.436962 90.085738l0 540.501124c0 49.548486 40.241516 90.085738 89.436962 90.085738l715.495694 0c49.196469 0 89.436962-40.537252 89.436962-90.085738L958.502263 242.73437C958.502263 193.180767 918.260747 152.648632 869.065302 152.648632L869.065302 152.648632 869.065302 152.648632zM869.065302 332.819085l-357.747847 225.208205-357.747847-225.208205 0-90.085738 357.747847 225.208205 357.747847-225.208205L869.065302 332.819085 869.065302 332.819085 869.065302 332.819085zM869.065302 332.819085"
                                fill="#333333" p-id="5619"></path>
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/antony957" target="_blank" rel="noopener noreferrer"
                       className="hover:text-blue-600" aria-label="LinkedIn">
                        <svg t="1756092258935" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="6596" width="20" height="20">
                            <path
                                d="M852 0 172 0C77.408 0 0 77.408 0 172l0 680c0 94.592 77.408 172 172 172l680 0c94.592 0 172-77.408 172-172L1024 172C1024 77.408 946.592 0 852 0zM384 832l-128 0L256 384l128 0L384 832zM320 320c-35.36 0-64-28.64-64-64s28.64-64 64-64 64 28.64 64 64S355.36 320 320 320zM832 832l-128 0L704 576c0-35.36-28.64-64-64-64s-64 28.64-64 64l0 256-128 0L448 384l128 0 0 79.456C602.4 427.2 642.752 384 688 384c79.52 0 144 71.648 144 160L832 832z"
                                fill="#333333" p-id="6597"></path>
                        </svg>
                    </a>

                    {/* Google Scholar */}
                    <a href="https://scholar.google.com/citations?user=Hr0h1ogAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
                       className="hover:text-purple-600" aria-label="Google Scholar">
                        <svg t="1756092369110" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="19294" width="20" height="20">
                            <path
                                d="M781.8 597s0 0.2 0.2 0.2c18.4 38.8 28.8 82.2 28.8 128C810.6 890.2 677 1024 512 1024s-298.6-133.8-298.6-298.6c0-45.8 10.4-89.2 28.8-128 3.4-7.2 7.2-14.4 11.2-21.4 8.8-15.2 18.8-29.4 30-42.6 54.8-65.2 137-106.6 228.8-106.6 67.2 0 129.2 22.2 179.2 59.8 18.2 13.8 34.8 29.4 49.6 47 11.2 13.2 21.2 27.6 30 42.6 4 6.8 7.6 14 11 21z m52.8-37.6c-60.2-116.8-182-196.8-322.6-196.8s-262.4 80-322.6 196.8L0 405.4 512 0l512 405.4-189.4 154.2z"
                                fill="#333333" p-id="19295"></path>
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/antony957" target="_blank" rel="noopener noreferrer"
                       className="hover:text-gray-900" aria-label="GitHub">
                        <svg t="1756092382339" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="20267" width="20" height="20">
                            <path
                                d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z"
                                fill="#333333" p-id="20268"></path>
                        </svg>
                    </a>
            </div>
        </div>
    )
}

export default SelfIntro;
