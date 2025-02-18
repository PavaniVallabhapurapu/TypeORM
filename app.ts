import express, {Request , Response} from "express"
import "reflect-metadata"
import datasource from "./datasource/datasource"
import { User } from "./entities/User.entity"
import { Profile } from "./entities/Profile.entity"
// import { Test } from "./entities/test"



const app = express()
const PORT = 3000

datasource.initialize().then(()=>{
    console.log("DataSource sucessfully connected with the database!")
}).catch((err) =>{
    console.log("DataSource connection failed", err)
})

app.get('/',async(req : Request,res: Response)=>{
    let userRepo = datasource.getRepository(User)
    
    const user1 = new User()
    user1.firstName = 'Pavani'
    user1.lastName = 'Vallabhapurapu'
    user1.isActive = true

    const user2 = new User()
    user2.firstName = 'Mydhili'
    user2.lastName = 'Jujjuru'
    user2.isActive = true

    const user3 = new User()
    user3.firstName = 'Srija'
    user3.lastName = 'Vedulapalli'
    user3.isActive = true
    


    res.json(await userRepo.save([user1,user2,user3]))
})
// once it was entered into db after run if u remove the users and use find query then also u'll get the result
app.get('/users', async(req : Request, res : Response) =>{
    let userRepo = datasource.getRepository(User)

    res.json(await userRepo.find())
})

app.get('/users/c', async(req : Request, res :Response)=>{
    let userRepo = datasource.getRepository(User)
    res.json(await userRepo.find({
        select : ['firstName','id'],
        order : {
            id : "DESC"
        }
    }
    ))
})

app.get('/delete',async(req:Request,res:Response)=>{
    let userRepo = datasource.getRepository(User)
    res.json(await userRepo.delete(6))
})

app.get('/update',async(req:Request , res : Response)=>{
    let userRepo = datasource.getRepository(User)
    res.json(await userRepo.update(5,{firstName : 'Vishnu',lastName : "Allu"}))
})

app.get('/profile',async(req:Request,res:Response)=>{
    let profileRepo = datasource.getRepository(Profile)
    let userRepo = datasource.getRepository(User)

    let profile = new Profile()
    profile.gender = "female"
    profile.skills = "Photo Editor"

    let saveProfile = await profileRepo.save(profile)

    let user = new User()
    user.firstName = 'Pavani'
    user.lastName = 'Vallabhapurapu'
    user.isActive = true
    user.profile = saveProfile

    let saveUser = await userRepo.save(user)

    res.json(saveUser)
})

app.listen(PORT, () =>{
    console.log('Server is running on port')
})