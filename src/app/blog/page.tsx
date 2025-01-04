import Link from 'next/link';

const BlogIndex = () => {
    const blogs = [
        { id: 1, title: 'First Blog' },
        { id: 2, title: 'Second Blog' },
    ];

    return (
        <main>
            <div>
                <h1>Blog List</h1>
                <ul>
                    {blogs.map((blog) => (
                        <li key={blog.id}>
                            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default BlogIndex;
