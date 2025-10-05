// src/postsIndex.js
// 批量导入 MD 为原始字符串（Vite）
const modules = import.meta.glob('/src/content/*.md', { eager: true, as: 'raw' });

function parseFrontmatter(raw) {
    // 简单解析 --- frontmatter ---
    const fm = { title: '', date: '', excerpt: '' };
    const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!m) return { meta: fm, body: raw }; // 没 frontmatter

    const yaml = m[1];
    yaml.split('\n').forEach(line => {
        const [k, ...rest] = line.split(':');
        if (!k) return;
        const key = k.trim();
        const val = rest.join(':').trim().replace(/^"|"$/g, '');
        if (['title','date','excerpt'].includes(key)) fm[key] = val;
    });
    const body = raw.slice(m[0].length);
    return { meta: fm, body };
}

// 生成 posts 列表和索引
const all = Object.entries(modules).map(([path, raw]) => {
    const slug = path.split('/').pop().replace('.md', '');
    const { meta, body } = parseFrontmatter(raw);
    return {
        slug,
        title: meta.title || slug,
        date: meta.date || '',
        excerpt: meta.excerpt || '',
        content: body,
    };
});

// 可选：按日期倒序
all.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

// 方便详情页按 slug 查找
const bySlug = Object.fromEntries(all.map(p => [p.slug, p]));

export { all as posts, bySlug };
