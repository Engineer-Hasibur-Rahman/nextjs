export async function generateStaticParams() {
    const blogs = [{ id: '1' }, { id: '2' }]; // Replace with an API call
    return blogs.map((blog) => ({
        blogId: blog.id,
    }));
}

const BlogDetails = async ({ params }: { params: { blogId: string } }) => {
    const blogData = { id: params.blogId, title: `Blog Title ${params.blogId}` }; // Replace with API call

    return (
        <main>
            <h1>{blogData.title}</h1>
            <p>Blog ID: {blogData.id}</p>
        </main>
    );
};

export default BlogDetails;
