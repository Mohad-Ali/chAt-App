import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"

const SocketContext =createContext()

export const useSocketContext =()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider =({children})=>{
    const [socket, setsocket] = useState(null);
    const [onlineUsers, setonlineUsers] = useState([]);
    const {authUser} =useAuthContext();

    useEffect(() => {
        if(authUser){
            const socket = io("https://chat-app-by-ma.onrender.com",{
                query:{
                    userId:authUser._id,
                },
            });
            setsocket(socket);

            socket.on("getOnlineUser",(users)=>{
                setonlineUsers(users);
            })

            return ()=> socket.close();
        }else{
            if(socket){
                socket.close();
                setsocket(null);
            }
        }
    }, [authUser])
    

    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
}
