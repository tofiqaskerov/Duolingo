"use client"

import { courses, userProgress } from "@/db/schema";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsetUserProgress } from "@/actions/user-progress";
import { toast } from "react-toastify";
import Image from "next/image";

type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}


export const List = ({courses, activeCourseId}: Props) =>{
    const router = useRouter()
 
    const [pending, startTransition] = useTransition()

    const onClick = (id:number) =>{
   
        
        if(pending) return 
        if(id === activeCourseId){
            return router.push("/learn")
        }

        startTransition(() => {
            upsetUserProgress(id).catch(() => toast.error("Something went wrong", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }))
        })
    }
    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card
                   key={course.id}
                   id={course.id}
                   title={course.title}
                   imageSrc={course.imageSrc}
                   onClick={onClick}
                   disabled={pending}
                   active={course.id === activeCourseId}
                />
            ))}
        </div>
    )
}