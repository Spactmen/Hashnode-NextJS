import {create} from "zustand"


const userDataStore = (set) => ({
    userData : [],
    addUserData : (data) => {
        set((state) => ({
            userData : [...data,...state.userData]
        }))
    }
})

const useUserData  = create(userDataStore)

export default useUserData