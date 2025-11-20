import { cn } from "@/lib/utils"


export default function Page() {
    return (
        <div>
            {/* TODO: can make this a card */}
            <figure className={cn(
                "relative w-full cursor-pointer overflow-hidden rounded-xl border p-34",
                "border-blue-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-blue-50[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}>
                <div className="bg-yellow-400">tite</div>
            </figure>
        </div>
    )
}




