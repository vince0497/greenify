import {create} from "zustand";

export const usePromptStore = create((set)=>({
prompts:{},
setPrompt: (prompts) => set({prompts}),
getPrompt: async(prm, bc) => {
    console.log("helllo ",prm," ",bc)
    const res = await fetch(`/api/prompts/${prm}/${bc}`)
    console.log(`/api/prompts/${prm}/${bc}`)
    //console.log(res)
    const data = await res.json();
    console.log(data.data)
    set({prompts: data.data});
    return {success: true, data: data.data}

}


})

)//end of usepromt