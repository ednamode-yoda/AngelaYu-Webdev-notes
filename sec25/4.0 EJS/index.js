import express from "express"

const app = express()

app.get("/",(req,res)=>{
    const d = new Date()
    let num = d.getDay()
    let day = ""
    switch(num){
        case 0:
            day = "Sunday"
            break
        case 1:
            day = "Monday"
            break
        case 2:
            day = "Tuesday"
            break
        case 3:
            day = "Wednesday"
            break
        case 4:
            day = "Thursday"
            break
        case 5:
            day = "Friday"
            break
        case 6:
            day = "Saturday"
            break
        default:
            day = "Error"
            break
    }
    let task = ""
    if(num==0||num==6){
        task = "have fun"
    }
    else{
        task = "work hard"
    }
    res.render("index.ejs",{
        day:day,
        task:task,
    })
}
)

app.listen(3000,()=>console.log("Server started on port:3000"))