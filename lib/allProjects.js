import Link from "next/link"

export default function AllProjects({featuredOnly, allProjectsData}) {
    return <>
        <ul class="grid gap-4 grid-cols-1 mlg:grid-cols-3">
            {allProjectsData.map(({ id, title, description, featured, draft }) => 
                (featuredOnly ? featured : true) && (!draft) && (
                <Link href={`/projects/${id}`}>
                    <div class="group w-full h-full p-5 border-8 border-blue hover:border-blue hover:bg-blue">
                    <span class="block truncate text-xl pb-2 font-sans font-extrabold text-black group-hover:text-red">{title}</span>
                    <span class="font-sans text-sm font-semibold text-black group-hover:text-red">{description}</span>
                    </div>
                </Link>
                )
            )}
        </ul>
    </>;
}