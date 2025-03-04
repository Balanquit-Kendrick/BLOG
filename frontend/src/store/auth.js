import axiosInstance from "@/utils/axiosInstance";

export const getUserInfo = async (token) => {
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
        return error.response.data
    }
}