export const vadidation =(email,password)=>{
    const emailvadidation=/^\S+@\S+\.\S+$/.test(email);

    const passwordvalid=/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);

 
    if(!emailvadidation)
    {
        return "email is not valid"
    }

    if(!passwordvalid)
    {
        return "password is not valid"
    }

    

    return null;

}