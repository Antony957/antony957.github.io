import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "github-markdown-css";           // GitHub 风格 Markdown 样式
import "highlight.js/styles/github.css"; // 代码块 GitHub 主题样式

// 一次性导入所有 Markdown 文件
const posts = import.meta.glob("./content/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
});

function BlogDetail() {
    const { slug } = useParams();
    const filePath = `./content/${slug}.md`;
    const raw = posts[filePath];

    if (!raw) {
        return (
            <div className="max-w-3xl mx-auto p-6 text-red-600">
                ❌ 未找到文章：{slug}.md
            </div>
        );
    }

    // 提取标题
    const match = raw.match(/^#\s+(.+)/m);
    const title = match ? match[1] : slug;
    const content = raw.replace(/^#\s+(.+)/m, "").trim();

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6">{title}</h1>
            <article className="markdown-body"> {/* 使用 GitHub 样式类 */}
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                >
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
}

export default BlogDetail;
