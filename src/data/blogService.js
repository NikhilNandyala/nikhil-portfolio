import matter from "gray-matter";

const createBlogContext = () => {
  if (typeof require.context === "function") {
    return require.context("!!raw-loader!../blog", false, /\.md$/);
  }

  return null;
};

const blogPostsContext = createBlogContext();

const parseDate = (value) => {
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? 0 : time;
};

const posts = blogPostsContext
  ? blogPostsContext
      .keys()
      .map((filePath) => {
        const slug = filePath.replace("./", "").replace(".md", "");
        const fileContent = blogPostsContext(filePath).default || blogPostsContext(filePath);
        const { data, content } = matter(fileContent);

        return {
          slug,
          title: data.title || slug,
          date: data.date || "",
          summary: data.summary || "",
          tags: data.tags || [],
          content: content.trim(),
        };
      })
      .sort((a, b) => parseDate(b.date) - parseDate(a.date))
  : [];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
