

const user={
    name:'Ahror',
    age:25,
    email:"ali@gmail.com",
    location:'Fargona',
    langs:['uzbek','rus'],
    movies:[]

    login : function(){
        console.log("Siz bu saytdagi sahifangizga kirdingiz")
    },
    logout:function(){
        console.log("Siz saytni tark etdingiz")
    },
    speak:function(){
      
        console.log("I can speak")
        this.langs.forEach((lang)=>{
            console.log(lang)
        })

    }


}

// console.log(user)
// console.log(user.location)
// console.log(user['age'])

// user.login()
// user.logout();
// user.speak();



const movies=[
    {name:'Avatar',likes:456},
    {name:'jungli',likes:456},
    {name:'Xon',likes:456},
    {name:'Don',likes:456},
    {name:'Don2',likes:456},
    {name:'Don3',likes:456},

]

movies.forEach((movie)=>{
    console.log(`${movie.name}📽️,${movie.likes}💖`)
})
