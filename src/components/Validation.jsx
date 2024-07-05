export default function LoginValidation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.user === ""){
        error.user = "Username should not be empty"
    } else{
        error.user = ""
    }

    if(values.pass === ""){
        error.pass = "Password should not be empty"
    } else if(!password_pattern.test(values.pass)){
        error.pass = "Password didn't match"
    } else {
        error.pass = ""
    }
    return error;
}