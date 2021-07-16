import bcrypt from 'bcrypt'

const users = [
    {
        name : 'Admin User' ,
        email : 'admin@example.com' ,
        password : bcrypt.hashSync('12345' , 10) ,
        isAdmin : true ,
        isSuperAdmin : true ,
    } ,
    {
        name : 'John Doe' ,
        email : 'john@example.com' ,
        password : bcrypt.hashSync('12345' , 10) ,
    } ,
    {
        name : 'Jane Doe' ,
        email : 'jane@example.com' ,
        password : bcrypt.hashSync('12345' , 10) ,
        isAdmin : true ,
    } ,
]

export default users