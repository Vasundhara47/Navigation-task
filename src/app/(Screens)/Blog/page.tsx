import Link from "next/link"
export const metadata = {
    title: "Blogs"
}

function Page() {
    const blogs = [
        { name: "React Js", slug: "/Blog/react" },
        { name: "Next Js", slug: "/Blog/nextjs" },
        { name: "Typescript", slug: "/Blog/typescript" },
        { name: "Javascript", slug: "/Blog/javascript" },
    ];

    return (
        <div>
            <h1>My Blogs </h1>
            {
                blogs.map((blog) => (
                    <Link href={blog.slug} key={blog.name}><h4>{blog.name}</h4></Link>
                )
                )
            }
        </div>
    )
}

export default Page
