import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import ReactMarkdown from "react-markdown";

const posts = import.meta.glob("./content/*.md", {
    eager: true,
    query: "?raw",
    import: "default"
});

export default function BlogList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const loaded = Object.entries(posts).map(([path, content]) => {
            return {
                slug: path.split("/").pop().replace(".md", ""),
                content: content,
                title: path.split("/").pop().replace(".md", ""),
                intro: content.slice(0, 300),
            };
        });
        setArticles(loaded);
        console.log(articles)
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <h1 className="text-3xl font-bold mb-2">Blog</h1>
            <ul className="space-y-6">
                {articles.map(p => (
                    <li key={p.slug} className="border-b pb-4">
                        <Link to={`/${p.slug}`} className="text-xl font-semibold hover:underline">
                            {p.title}
                        </Link>
                        <div className="text-sm text-gray-500 mt-1">{p.intro}</div>
                        {p.excerpt && <p className="mt-2 text-gray-700">{p.excerpt}</p>}
                        <div className="mt-2">
                            <Link to={`/${p.slug}`} className="underline text-sm hover:opacity-80">
                                Read more →
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}