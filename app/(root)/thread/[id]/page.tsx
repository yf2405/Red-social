import ThreadCard from "@/components/cards/ThreadCard";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { threadId } from "worker_threads";

const page = async ({ params }: { params: { id: string } }) => {
    if (!params.id) return null;

    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id)
    if (!userInfo?.onboarded) redirect('/onboarding')

    const thread = await fetchThreadById(params.id)

    return (
        <section className="relative">
            <div>
                <ThreadCard
                    key={threadId._id}
                    id={threadId._id}
                    currentUserId={user.id}
                    parentId={threadId.parentId}
                    content={threadId.text}
                    author={threadId.author}
                    community={threadId.community}
                    createdAt={threadId.createdAt}
                    comments={threadId.children}
                />
            </div>
        </section>
    )
}

export default page;