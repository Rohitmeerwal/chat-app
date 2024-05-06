"use clinet"
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Avatar, AvatarImage } from "../ui/avatar";

const Profile = () => {
  const userProfile = useSelector((state: RootState) => state.profile);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="rounded-full mx-2 ">
            <Avatar>
              <AvatarImage src={userProfile.profilePic} />
            </Avatar>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            {/* <DialogTitle>Edit</DialogTitle> */}
            {/* <DialogDescription>
              Make changes to your profile here. Click save when done.
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={userProfile.fullName}
                className="col-span-3"

              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                value={userProfile.userName}
                className="col-span-3"
              />
            </div>
          </div>
          {/* <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
