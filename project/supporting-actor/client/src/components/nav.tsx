import { useState } from "react";
import { SearchInput } from "./ui/searchInput";
import { Switch } from "./ui/switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Nav() {
    const [userInput, setUserInput] = useState("")

    function inputChangeHandler(event: any) {
        setUserInput(event.target.value)
    }

    return (
        <div className="w-full flex justify-between items-center">
            <Switch/>

            <SearchInput className="self-center col-span-5" type="search" placeholder="Search for your next movie or TV show..." value={userInput} onChange={inputChangeHandler} />

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}