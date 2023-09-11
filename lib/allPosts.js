import Link from "next/link"

export default function AllPosts({featuredOnly, allPostsData}) {
    return <>
        <ul className="grid gap-4 grid-cols-1 mlg:grid-cols-3">
            {allPostsData.map(({ id, title, description, featured, draft }, i) => 
                (featuredOnly ? featured : true) && (!draft) &&
                (
                <Link key={i} href={`/posts/${id}`}>
                    <div className="group w-full h-full p-5 border-8 border-purple hover:border-purple hover:bg-purple">
                    <span className="block truncate text-xl pb-2 font-sans font-extrabold text-black group-hover:text-yellow">{title}</span>
                    <span className="font-sans text-sm text-black font-semibold group-hover:text-yellow">{description}</span>
                    </div>
                </Link>
                )
            )}
        </ul>
    </>;
}