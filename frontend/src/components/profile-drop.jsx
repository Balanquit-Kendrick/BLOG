import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axiosInstance from "@/utils/axiosInstance";
import { getInitials } from "@/utils/helper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function DropdownMenuDemo() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            const userInfo = await getUserInfo(token)
            setUser(userInfo);
        }
        fetchUser();
    }, [])

    const getUserInfo = async (token) => {
        try {
            const response = await axiosInstance.get("/users/auth/get-user", {
                headers: {
                    authorization: `Bearer ${token}`,
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error:', error.response.data);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='flex h-[32px] w-[32px] rounded-full justify-center items-center text-[12px] text-background bg-foreground cursor-pointer'>
                    {getInitials(user?.name) ?? "Loading..."}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
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
