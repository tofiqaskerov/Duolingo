import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
  activeCourse: {title:string, imageSrc:string};
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex flex-items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button>
          <Image
            className="rounded-md border"
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
          />
        </Button>
      </Link>
    </div>
  );
};
