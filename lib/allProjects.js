import Link from "next/link"

export default function AllProjects({featuredOnly, allProjectsData}) {
    return <>
        <ul className="grid gap-4 grid-cols-1 mlg:grid-cols-3">
            {allProjectsData.map(({ id, title, description, featured, draft }, i) => 
                (featuredOnly ? featured : true) && (!draft) && (
                <Link key={i} href={`/projects/${id}`}>
                    <div className="group w-full h-full p-5 border-8 border-blue hover:border-blue hover:bg-blue">
                    <span className="block truncate text-xl pb-2 font-sans font-extrabold text-black dark:text-white group-hover:text-red">{title}</span>
                    <span className="font-sans text-sm font-semibold text-black dark:text-white group-hover:text-red">{description}</span>
                    </div>
                </Link>
                )
            )}
        </ul>
    </>;
}