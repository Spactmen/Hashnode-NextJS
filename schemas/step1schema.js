import *  as Yup from "yup"


export const step1schema = Yup.object({
    name: Yup.string().required("Please enter your full name"),
  username: Yup.string().required("Please enter a valid username"),
  tagline: Yup.string()
})