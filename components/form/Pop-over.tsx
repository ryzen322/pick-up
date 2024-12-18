import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Svg from "../svg/svg";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Svg
            size="size-5"
            icon="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-1">
            <div className=" grid grid-cols-2 gap-1">
              <div className=" flex items-center justify-center flex-col gap-1 py-2 rounded-md cursor-pointer">
                <Svg icon="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                <p className=" text-xs font-medium">Saved</p>
              </div>
              <div className=" flex items-center justify-center flex-col gap-1 py-2 rounded-md cursor-pointer">
                <Svg icon="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                <p className=" text-xs font-medium">Remix</p>
              </div>
            </div>
            <Button variant={"ghost"} className=" flex justify-start">
              <p>About this account</p>
            </Button>
            <Button variant={"ghost"} className=" flex justify-start">
              Hide
            </Button>
            <Button variant={"ghost"} className=" flex justify-start">
              Report
            </Button>
            <Button variant={"ghost"} className=" flex justify-start">
              Delete
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
