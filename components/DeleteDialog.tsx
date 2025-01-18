import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MessageCircleWarning } from "lucide-react";

const DeleteDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className=" flex items-center justify-between  rounded-md h-10 px-4 py-2 sm:h-9  sm:px-3 lg:h-11 lg:px-8"
        onClick={(e) => e.stopPropagation}
      >
        <p className=" font-semibold text-red-600 text-sm pl-1">Delete</p>
        <MessageCircleWarning size={"18px"} className=" mr-1" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
