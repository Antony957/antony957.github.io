import React, {useState, useEffect} from 'react';
import Papa from 'papaparse';

function News() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const loadData = async () => {
            try {
                const resp = await fetch("/news.csv", {})
                if (!resp.ok) {
                    throw new Error(`Error: Failed to fetch news file`);
                }
                const csvText = await resp.text();
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    dynamicTyping: true,
                    delimitersToGuess: [',', '\t', '|', ';'],
                    complete: (results) => {
                        if (results.errors.length > 0) {
                            console.warn('CSV parsing warnings:', results.errors);
                        }
                        // Clean headers by trimming whitespace
                        const cleanedData = results.data.map(row => {
                            const cleanedRow = {};
                            Object.keys(row).forEach(key => {
                                const cleanKey = key.trim();
                                cleanedRow[cleanKey] = row[key];
                            });
                            return cleanedRow;
                        });
                        setData(cleanedData);
                    },
                    error: (error) => {
                        setError(`CSV parsing error: ${error.message}`);
                    }
                });
            } catch (err) {
                setError(`Error loading CSV: ${err.message}`);
            }
        };
        loadData();
    }, [])

    if (error) {
        return (
            <div className="p-6 max-w-4xl mx-auto">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h2 className="text-red-800 font-semibold">Error</h2>
                    <p className="text-red-600">{error}</p>
                    <p className="text-sm text-red-500 mt-2">
                        Make sure the news.csv file is placed in the public folder of your project.
                    </p>
                </div>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className="p-6 max-w-4xl mx-auto">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h2 className="text-yellow-800 font-semibold">No Data</h2>
                    <p className="text-yellow-600">No news items found in the CSV file.</p>
                </div>
            </div>
        );
    }

    return (
        <div id={"news"} className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">News</h1>
            <div>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between text-sm mb-4"
                    >
                        <div className="flex gap-4">
                            <span>[{item["time"]}]</span>
                            <span>
                            <span className="italic">{item["title"]}</span>
                            {item["content"]}
                            </span>
                        </div>
                        <a
                            href={item["link"]}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            link
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;