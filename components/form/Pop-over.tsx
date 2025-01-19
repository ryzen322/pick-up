"use client";
import { Button } from "@/components/ui/button";
import { Bookmark, EyeOff, Users, Users2, Link, Flag } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Svg from "../svg/svg";
import DeleteDialog from "../DeleteDialog";
import { useSession } from "@/app/SessionProvider";

export function PopoverDemo({
  userId,
  email,
}: {
  userId: number;
  email: string;
}) {
  const user = useSession();
  console.log(user);

  const deletePost = user.email === email;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"link"}
          className=" h-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Svg
            size="size-5"
            icon="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" max-w-[15rem] ">
        <div className="flex flex-col gap-4">
          <div className=" flex flex-col">
            <Button
              variant={"ghost"}
              className=" flex items-center justify-between"
            >
              <p className=" font-semibold">Save</p>
              <Bookmark />
            </Button>
            <Button
              variant={"ghost"}
              className=" flex items-center justify-between"
            >
              <p className=" font-semibold">Not Interested</p>
              <EyeOff />
            </Button>
          </div>
          <div className=" flex flex-col">
            <Button
              variant={"ghost"}
              className=" flex items-center justify-between"
            >
              <p className=" font-semibold">Mute</p>
              <Users />
            </Button>
            <Button
              variant={"ghost"}
              className=" flex items-center justify-between "
            >
              <p className=" font-semibold">Unfollow</p>
              <Users2 />
            </Button>
            {deletePost ? (
              <DeleteDialog userId={userId} />
            ) : (
              <Button
                variant={"ghost"}
                className=" flex items-center justify-between "
              >
                <p className=" font-semibold text-red-600">Report</p>
                <Flag className=" text-red-600" />
              </Button>
            )}
          </div>
          <Button
            variant={"ghost"}
            className=" flex items-center justify-between"
          >
            <p className=" font-semibold">Copy Link</p>
            <Link />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
