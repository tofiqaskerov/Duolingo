import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"
import { getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"

const ShopPage = async() =>{
    const userProgressData = getUserProgress()
    const [userProgress] = await Promise.all([userProgressData])

        if(!userProgress || !userProgress.activeCourse){
            redirect("/courses")
        }



    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full f">

                </div>
            </FeedWrapper>
        </div>
    )
}

export default ShopPage