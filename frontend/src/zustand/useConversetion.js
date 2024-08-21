import {create} from "zustand"

const useConversetion=create((set)=>({
    selectedConversetion:null,
    setselectedConversetion:(selectedConversetion)=>set({selectedConversetion}),
    messages:[],
    setmessages:(messages)=>set({messages})
}))

export default useConversetion;