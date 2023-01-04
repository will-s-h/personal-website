import Link from "next/link"

export default function AllPosts({featuredOnly, allPostsData}) {
    return <>
        <ul class="grid gap-4 grid-cols-1 mlg:grid-cols-3">
            {allPostsData.map(({ id, title, description, featured }) => 
                (featuredOnly ? featured : true) && (
                <Link href={`/posts/${id}`}>
                    <div class="group w-full h-full p-5 border-8 border-purple hover:border-purple hover:bg-purple">
                    <span class="block truncate text-xl pb-2 font-sans font-extrabold text-black group-hover:text-yellow">{title}</span>
                    <span class="font-sans text-sm text-black font-semibold group-hover:text-yellow">{description}</span>
                    </div>
                </Link>
                )
            )}
        </ul>
    </>;
}