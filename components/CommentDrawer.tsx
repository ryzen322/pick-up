import * as React from "react";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import AnimatedCounter from "./ui/animate-number";
import { CommentsForm } from "./form/CommentsForm";
import { PostsType } from "@/server/schema";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";

export interface CommentDrawerProps {
  PostsType: PostsType;
  totaComment: number;
}

export function CommentDrawer(props: CommentDrawerProps) {
  const {
    totaComment,
    PostsType: { name, content, image, id },
  } = props;
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="stone"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke=""
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={(e) => e.stopPropagation}>
            <div className=" flex items-center gap-1 cursor-pointer">
              <MessageCircle color="grey" />
              <p className="text-xs items-center relative text-black/80  font-mono">
                <AnimatedCounter from={totaComment} to={totaComment} />
              </p>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[600px]"
          onClick={(e) => e.stopPropagation}
        >
          <DrawerHeader className=" flex gap-2 px-0">
            <div className=" flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center">
              {image ? (
                svg
              ) : (
                <Avatar>
                  <AvatarImage src={image!} />
                  <AvatarFallback>{svg}</AvatarFallback>
                </Avatar>
              )}
            </div>
            <div className=" flex flex-col text-left">
              <DrawerTitle className=" text-base flex items-center gap-2">
                <p>{name}</p>
                <span className=" text-stone-400 font-normal text-sm">21h</span>
              </DrawerTitle>
              <DrawerDescription className=" text-stone-700">
                {content}
              </DrawerDescription>
            </div>
          </DrawerHeader>
          <CommentsForm name={name} postId={id} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild onClick={(e) => e.stopPropagation}>
        <Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className=" flex items-center gap-1 cursor-pointer">
            <MessageCircle color="grey" />
            <p className="text-xs items-center relative text-black/80  font-mono">
              <AnimatedCounter from={totaComment} to={totaComment} />
            </p>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent onClick={(e) => e.stopPropagation}>
        <DrawerHeader className=" flex gap-2 ">
          <div className=" flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center overflow-hidden">
            {image ? (
              <Avatar>
                <AvatarImage src={image!} />
                <AvatarFallback>{svg}</AvatarFallback>
              </Avatar>
            ) : (
              svg
            )}
          </div>
          <div className=" flex flex-col text-left">
            <DrawerTitle className=" text-base flex items-center gap-2">
              <p>{name}</p>
              <span className=" text-stone-400 font-normal text-sm">21h</span>
            </DrawerTitle>
            <DrawerDescription className=" text-stone-700">
              {content}
            </DrawerDescription>
          </div>
        </DrawerHeader>
        <CommentsForm className="px-4" name={name} postId={id} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
