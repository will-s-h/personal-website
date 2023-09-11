import Link from "next/link"

export default function AllPosts({featuredOnly, allPostsData}) {
    return <>
        <ul className="grid gap-4 grid-cols-1 mlg:grid-cols-3">
            {allPostsData.map(({ id, title, description, featured, draft }, i) => 
                (featuredOnly ? featured : true) && (!draft) &&
                (
                <Link key={i} href={`/posts/${id}`}>
                    <div className="group w-full h-full p-5 border-2 rounded-xl border-purple/50 hover:border-purple/50 hover:bg-purple/10">
                    <span className="block truncate text-xl pb-2 font-sans font-semibold text-black dark:text-white group-hover:text-slate-900 dark:group-hover:text-slate-100">{title}</span>
                    <span className="font-sans text-sm text-black dark:text-white font-light group-hover:text-slate-900 dark:group-hover:text-slate-100">{description}</span>
                    </div>
                </Link>
                )
            )}
        </ul>
    </>;
}