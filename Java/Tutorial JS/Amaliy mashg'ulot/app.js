

// let ism=prompt("Ismingizni kiriting")

// let birinchiHarf=ism.charAt().toUpperCase()

// let davomi=ism.slice(1).toLowerCase()

// let result=birinchiHarf + davomi

// alert(`Salom ${result}`)


// const ism=prompt("Ismingizni kiriting");

// const yosh=+prompt("Yoshingizni kiriting");


// const result=`Qadirli ${ism}. Siz ${2023-yosh} yilda tugilgansiz
// Siz, ${yosh*12}, ${yosh*52} hafta, ${yosh*365} kun`;


const ismlar=['Ahror','Sardor','Doniyor']

// let name=prompt("Ismingizni kiriting")

// if(ismlar.includes(name))
// {
//     console.log('ha bor')
// }
// else
// {
//     console.log('yoq')
// }

// let uzunlik=ismlar.length;
// for(let i=0;i<uzunlik;i++)
// {
//     console.log(ismlar[i]+'bek')
// }

const viloyat=prompt('Qaysi viloyat kerak')

switch (viloyat)
{
    case "Farg'ona":
        alert("2mln aholi bor")
        break
    case "Namangan":
        alert("Namanganda 1.5mln ahloi bor")
        break
    default:
        alert(" bu viloyat haqida bizda ma'lumot yo'q")
}