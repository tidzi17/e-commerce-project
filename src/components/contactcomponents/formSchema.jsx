import * as yup from "yup";



export const formSchema = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Z]+ [a-zA-Z]+$/, "Please enter first and last name.").required("First and Last names are required"),
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email invalid').required('Email is required'),
    message: yup.string().required("Please enter your message"),
});