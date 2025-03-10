import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getUserInfo } from "@/store/auth";
import { getInitials } from "@/utils/helper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProfileDropDown({
    sidebar
}) 

{
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser();
    }, [])

    useEffect(() => {
        if (user) {
            fetchUser();
        }
    }, [user]);

    const fetchUser = async () => {
        const token = localStorage.getItem('token');
        const userInfo = await getUserInfo(token)
        if(userInfo === 'Unauthorized'){
            localStorage.removeItem('token');
            navigate('/login')
        }
        else {
            setUser(userInfo)
        };
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {sidebar ?
                <div className="flex items-center gap-2 cursor-pointer w-[220px] h-[50px] mx-[10px] my-2 p-2 rounded-sm hover:bg-background drop-shadow-sm">
                    <div className='flex h-[32px] w-[32px] rounded-full justify-center items-center text-[12px] text-background bg-foreground cursor-pointer border'>
                        {getInitials(user?.name)}
                    </div>
                    <div className="text-[14px]">
                        {user?.name}
                    </div>
                </div>
                :
                <div className='flex h-[32px] w-[32px] rounded-full justify-center items-center text-[12px] text-background bg-foreground cursor-pointer'>
                    {getInitials(user?.name)}
                </div>}
            </DropdownMenuTrigger>
            <DropdownMenuContent 
            className="w-56"
            side={sidebar ? "right" : "bottom"}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        Settings
                        {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    Log out
                    {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
