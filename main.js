// tamrine aval
// let myVariabe=10
// console.log(typeof myVariabe);

// tamrine dovom
// let name='nastaran'
// let age=19
// console.log(typeof name);
// console.log(typeof age);

// tamrine sevom
// let isStudent=true
// console.log(typeof isStudent);

// tamrine charom
// let number=Number(prompt('write a number'));
// console.log(2*number+number**4);

// Object
// let student={
//     name:'nastaran',
//     lastname:'loghmani',
//     age:19,
//     grade:12,

//     getyear: function(){
//         return 1403 - student.age;
//     }
// }
// console.log(student.getyear());
// console.log(student,typeof student);

// function
// function calculator(x,y){
//     return (x+y)
// }
// function calculator2(x,y){
//     return (x-y)
// }
// let x=Number(prompt('write x'));
// let y=Number(prompt('write y'));
// console.log(calculator(x,y) , calculator2(x,y));

// let car={
//     model:'s class',
//     brand:'mercedes benz',
//     year:2023,
// }
// console.log(car,typeof car);


// let book={
//     author:'saadi',
//     title:'golestan',
//     pages:345,
// }
// console.log(book);
// console.log(book.author);
// console.log(book["author"]);


// let books=[
//     {names:'javascript',
// price:350},
//     {names:'bootstrap and sass',
// price:420},
// {names:'html and css',
// price:280},
// {names:'python',
// price:300},
// {names:'python',
// price:237},
// {names:'ux/ui',
// price:200}
// ]
// let res=books.filter(function(i){
//     return i.names == 'python'
// })
// console.log(books,typeof books);
// console.log(res);


// let grades=[12,7,19,17,15]
// console.log(grades.every(i=>i>=10));
// console.log(grades.some(i=>i>=10));
// console.log(grades.map(i=>i/2));


// let sentence='welcome to js class'
// console.log(sentence.replace(/Js/i,'javascript'));

// const cars = {
//     color:'black',
//     model:'tesla',
// };
// const newCar=car;
// const newCar=structuredClone(car);
// const newCar={...cars};

// newCar.model='sclass';
// console.log(car);
// console.log(newCar);


// functions types

// declration
// function esm(name,lastname){
//     return `${name} ${lastname}`
// }
// console.log(esm('nastaran','loghmani'));

// expression
// let esm=function(name,lastname){
//     return `${name} ${lastname}`
// }
// console.log(esm('nastaran','loghmani'));


// arrow
// let esm=(name,lastname)=>`${name} ${lastname}`;
// console.log(esm('nastaran','loghmani'));


// iife
// (function(){
//     console.log('hi IIFE');
// })();

// ((x)=>console.log(x))('nastaran');

// if
// let x1=Number(prompt('enter x'));
// let y1=Number(prompt('enter y'));
// if (x1>y1){
//     console.log((x1+y1)/2);
// }


// let x2=Number(prompt('enter x2'));
// let y2=Number(prompt('enter y2'));
// if (x2%2==0){
//     let y2=7
//     console.log(y2);
// }
// else{
//     console.log(x2*y2);
// }




// const items= document.querySelectorAll("img#x")
// items.forEach((item, index)=>{item.src="https://www.rahatyad.ir/images/Figma.png"})


// let ax=[
//     {n:'ax1' , ad:'https://www.rahatyad.ir/images/JS.png'} ,
//    {n:'ax2' , ad:'https://www.rahatyad.ir/images/Sass.png'} ,
//     {n:'ax3' , ad:'https://www.rahatyad.ir/images/CCourse.png'} ,
// ]
// const item=document.querySelectorAll('img');
// item.forEach((im,ind)=>{im.src=`${ax[ind].ad}`})



// let persons=[
//     {name:'ali' , login:true},
//     {name:'sara', login:false},
//     {name:'mina',login:true},
// ]
// let ul=document.querySelector('ul.c');
// persons.forEach(p=>{
//     if(p.login){
//         ul.innerHTML+= `<li>${p.name}<span class="btn">login</span></li>`
//     }
//     else{
//         ul.innerHTML+=`<li>${p.name}</li>`
//     }
// })




// let doreha=[
//     {
//         img:'https://www.rahatyad.ir/images/Figma.png',
//         status:'در حال ظبط',
//         name:'دوره جامع فیگما',
//         see:'مشاهده',
//         price:'رایگان',
//     },{
//         img:'https://www.rahatyad.ir/images/MATLAB.png',
//         status:'تکمیل شده',
//         name:'دوره آموزش جامع متلب',
//         see:'مشاهده',
//         price:'رایگان',
//     },{
//         img:'https://www.rahatyad.ir/images/CSSHTML.png',
//         status:'درحال ضبط',
//         name:'آموزش جامع HTML CSS',
//         see:'مشاهده',
//         price:' 390,000 تومان',

//     },{
//         img:'https://www.rahatyad.ir/images/Bootstrap.png',
//         status:'درحال ضبط',
//         name:'آموزش جامع بوت استرپ5',
//         see:'مشاهده ',
//         price:'440,000 تومان',
//     },{
//         img:'https://www.rahatyad.ir/images/JS.png',
//         status:' درحال ضبط',
//         name:'آموزش جامع جاوااسکریپت',
//         see:'مشاهده',
//         price:'800,000 تومان',
//     },{
//         img:'https://www.rahatyad.ir/images/Sass.png',
//         status:'درحال ضبط',
//         name:'دوره جامع آموزش Sass',
//         see:'مشاهده',
//         price:'220,000 تومان',
//     },{
//         img:'https://www.rahatyad.ir/images/CCourse.png',
//         status:' تکمیل شده',
//         name:'دوره جامع آموزش زبان C',
//         see:'مشاهده',
//         price:'رایگان',
//     },

// ]

// let p = document.getElementById("product");

// doreha.forEach(i=>{
//     p.innerHTML += `<div class="card" style="width: 18rem;">
//     <img src="${i.img}" class="card-img-top img-fluid margintop-4" alt="...">
//     <div class="card-body">
//       <a href="" class="text-decoration-none text-black align-items-center d-flex"><span class="wpf--record"></span>
//        ${i.status}</a>
//      <a href="" class="text-decoration-none text-black"><h5 class="card-title ">${i.name}</h5></a> 
//       <a href="" class="text-decoration-none fs-4 d-flex align-items-center justify-content-center">${i.see}
//         <span class="lets-icons--glasses"></span> </a>
//         <br>
//         <span class="bitcoin-icons--star-filled"></span><span class="bitcoin-icons--star-filled"></span><span class="bitcoin-icons--star-filled"></span><span class="bitcoin-icons--star-filled"></span><span class="bitcoin-icons--star-outline"></span>
//         <hr>
//         <div class="d-flex align-items-center justify-content-between bg-secondary-subtle p-1 rounded-1">
//           <p class="d-flex align-items-center" style="color: #2196F3;">1:00:00
//             <span class="mdi-light--clock"></span>
//           </p>
//           <p class="text-success fs-5">${i.price}</p>
//         </div>
//     </div>
//   </div>`
// })


// let main=document.querySelector(".main");
// main.className="text-secondary";

// let div=document.createElement("div")

// let h2=document.createElement("h2");
// let img=document.createElement("img");
// img.src="https://www.rahatyad.ir/images/leftPic.png";
// h2.textContent="hi";
// img.classList.add("w-25")
// div.className="d-flex align-items-center flex-column"

// div.appendChild(img);
// div.appendChild(h2);
// main.appendChild(div);

// console.log(div);

// let main=document.querySelector(".main");
// let img=document.createElement("img");
// img.src="https://www.rahatyad.ir/Photos/Home/Images/book_c.jpg?2";

// main.appendChild(img);

// let newimg=document.createElement("img");
// newimg.src="https://www.rahatyad.ir/Photos/Home/Images/book_m.jpg?2";
// newimg.className="w-25";
// main.replaceChild(newimg,img);




// let btn=document.querySelector("#btn");
// let light=true;
// btn.addEventListener("click" ,function(){
//   if(light){
//     document.body.style.backgroundColor="#000"
//   btn.textContent="dark"
//   light=false

//   }
//   else{
//     document.body.style.backgroundColor="#fff"
//   btn.textContent="light"
//   light=true
//   }

// })

// document.querySelector(".clear-tasks").addEventListener("click" ,function(event){
//   console.log('welcome');
//   event.preventDefault()
// })


// const form=document.querySelector("form");
// const taskInput=document.getElementById("task");
// const heading=document.querySelector("h5");

// taskInput.addEventListener('keyup',runEvent);
// function runEvent(e){
//   heading.innerText= e.target.value;

// }

// let p1 =document.querySelectorAll("p");

// p1.forEach((item)=>{
//   if(item.textContent.toLowerCase().includes("js")){
//     console.log(item);
//     item.remove();
//   }


// })

// const products=[
//   {product: 'A', isExist: true , photo:'https://www.netsolutions.com/insights/wp-content/uploads/2022/02/future-trends-in-software-development-in-2022.webp'},
//   {product: 'b', isExist: true , photo:'https://www.netsolutions.com/insights/wp-content/uploads/2022/02/future-trends-in-software-development-in-2022.webp'},
//   {product: 'A', isExist: false , photo:'https://www.netsolutions.com/insights/wp-content/uploads/2022/02/future-trends-in-software-development-in-2022.webp'},
//   {product: 'c', isExist: true , photo:'https://www.netsolutions.com/insights/wp-content/uploads/2022/02/future-trends-in-software-development-in-2022.webp'},
// ]
// const existproducts=products.filter(item=>item.isExist==true);
// const div=document.querySelector("div.main");
// const message=document.createElement("h4");
// message.textContent="exists :";
// div.appendChild(message);

// existproducts.forEach((item)=>{
//   const img=document.createElement("img");
//   img.src=item.photo;
//   img.className="w-25"
//   div.appendChild(img);
// })

// let myclock= ()=>{
//   let clock=document.querySelector("#clock");
//   let date= new Date();
//   clock.textContent=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`


// }
// myclock();
// setInterval(myclock, 1000);


// let ketab=[
//   {
//     img:"https://www.rahatyad.ir/Photos/Home/Images/IMG_5756.png",
//     name: "جاوااسکریپت حرفه‌ای", pc:'350,000 تومان' ,
//   },{
//     img:"https://www.rahatyad.ir/Photos/Home/Images/IMG_5638.png",
//     name: "طراحی با Bootstrap & Sass", pc:'420,000 تومان',
//   },{
//     img:"https://www.rahatyad.ir/Photos/Home/Images/IMG_5639.png",
//     name: "طراحی حرفه ای وبسایت", pc:"280,000 تومان",
//   },{
//     img:"https://www.rahatyad.ir/Photos/Home/Images/book_z.jpg?2",
//     name: "زبان تخصصی برق", pc:"200,000 تومان",
//   },{
//     img:"https://www.rahatyad.ir/Photos/Home/Images/book_m.jpg?2",
//     name:'متلب حرفه‌ای به بیانی ساده' , pc:"250,000 تومان",
//   },
// ]

// let bk=document.getElementById("book");

// ketab.forEach((item)=>{
//   bk.innerHTML += `<div class="card d-flex shadow flex-column col-9 col-sm-6 col-md-4 col-lg-3 h-50 rounded-4 " style="width: 18rem;">
//   <img src=${item.img} alt="...">
//   <div class="card-body">
//    <a href="" class="text-decoration-none text-black"><h5 class="card-title ">${item.name}</h5></a> 
//     <a href="" class="text-decoration-none fs-4 d-flex align-items-center justify-content-center text-white bg-info rounded-3">خرید </a>
//       <br>
//       <span class="bitcoin-icons--star-filled"></span><span class="bitcoin-icons--star-filled"></span><span class="bitcoin-icons--star-filled"></span><span class="bitcoin-icons--star-filled"></span><span class="bitcoin-icons--star-outline"></span>
//       <hr>
//       <div class="d-flex align-items-center justify-content-center bg-secondary-subtle p-1 rounded-1">
//         <p class="text-danger fs-5">${item.pc}</p>
//       </div>
//   </div>
// </div>`
// })



// regex
 let form=document.querySelector(".form");
 let username=document.querySelector("#username");
let password=document.querySelector("#password");
let seepassword=document.getElementById("see-password");
let passPattern=0;
let eu=false;
let userPattern=/^[a-zA-Z][\w._]{4,11}$/;

form.addEventListener("submit", (e)=>{
  if (!(eu && passPattern===5))
e.preventDefault();
// if form is empty red border
if(!eu){
  form.Uname.classList.add('is-invalid')
}
if(passPattern!==5){
  form.Pword.classList.add("is-invalid")
}});

form.Uname.addEventListener("keyup",(e)=>{
  if (e.target.value){
    username.textContent=e.target.value.toLowerCase();
    if (userPattern.test(e.target.value)){
      e.target.classList.add("is-valid");
      e.target.classList.remove("is-invalid");
      eu=true;
    }
    else{
      e.target.classList.add('is-invalid');
      eu=false;
    }
   } else {
      username.innerHTML=`<i>please username</i>`
    }
  }
);

form.Pword.addEventListener("keyup",(e)=>{
  if (e.target.value) {
    password.textContent="*".repeat(e.target.value.length);
    seepassword.textContent=e.target.value;

    passPattern=0;
    passPattern+= /[A-Z]/.test(e.target.value) ? 1 : 0;
    passPattern+= /[a-z]/.test(e.target.value)? 1 : 0;
    passPattern+= /[0-9]/.test(e.target.value)? 1 : 0;
    passPattern+= /\W/.test(e.target.value)? 1 : 0;
    passPattern+= e.target.value.length >=6 ? 1 : 0;

    if (passPattern===5){
      e.target.classList.add("is-valid");
      e.target.classList.remove("is-invalid");
    }
    else{
      password.innerHTML=`<i>please password</i>`
      password.innerHTML=`<span>please enter the password</span>`;
      e.target.classList.add("is-invalid");
    }
  }
});



// internet
let div = document.createElement("div");
div.textContent='project';
document.querySelector("p").append(div);


addEventListener("online", (event)=>{
  div.textContent="online";
  div.className="alert alert-success w-25 bi bi-check-circle";
 
});

addEventListener("offline", (event)=>{
  div.textContent="offline";
  div.className="alert alert-danger w-25  bi-x-circle";
  
})


// background
let themes=document.querySelector(".themes");
let selection=document.getElementById("selection");
let selectedTheme=localStorage.getItem("theme")?localStorage.getItem("theme"):"dark";
selection.textContent=selectedTheme;
document.body.className=selectedTheme;

Array.from(themes.children).forEach((theme)=>{
  theme.addEventListener("click", (e)=>{
    let color=e.target.dataset.color;
    document.body.className=color;
    selection.textContent=color;
    localStorage.setItem("theme",color)
  })
})


// tarikh

let myDatetime=()=>{
  let clock=document.querySelector("#clock");

  let shamsiDate=document.querySelector("#shamsiDate");
  let date=new Date();
  let jy=date.getFullYear();
  let jm=date.getMonth();
  let jd=date.getDate();

  shamsiDate.textContent=gregorian_to_jalali(jy, jm, jd);
  clock.textContent=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
myDatetime();
setInterval(myDatetime, 1000);





// let f=async()=>{
//   const promise= new Promise((res,rej)=>{
//     setTimeout(()=>{
//       const err=false;
//       console.log('ejraye qeyre hamzaman');
//       if(!err){
//         res({
//           user:'nastaran',
//           id:19,
//           job:'student',
//           isMale:false,

//         })
//       }else{
//           rej('error')
//         }
//       },3000)
//   });
// }
// let res=await promise;
// console.log(res);
// f()
    




// api
// const Base_Url=`https://rawg.io`;
// const Api_Key=`d3e679c5ec714c65ba9a7e37be0be701`;
// const Games_Api=`${Base_Url}/api/games?key=${Api_Key}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;
// const root=document.getElementById("root");
// (async function handlegames(){
//   let data=await fetch(Games_Api);
//   let x =await data.json();
//   console.log(x);

//   x.results.forEach((element)=>{
//     let name=element.name;
//     let slug=element.slug;
//     let playtime=element.playtime;
//     let bg=element.background_image;
//     let div=document.createElement("div");
//     div.className="col-10 col-sm-6 col-md-4 my-3";
//     div.innerHTML=`
//     <div class="card card-h bg-info-subtle">
//     <div class="card-body shadow">
//     <img src =${bg} class="img-fluid w-25">
//     <h5 class="card-title text-dangedr">${name}</h5>
//     <p class="">${slug} </p>
//     </div>
//     <ul class="list-group list-group-flush">
//     ${
//       element.platforms.map(item=>`<li class="list-group-item list-unstyled">${item.platform.name}</li>`)
//     }
//     </ul>
//    </div>
//     `
//     root.appendChild(div);

//   })
// })();


// const url=`https://rickandmortyapi.com/api/character`;
// const root=document.getElementById("root");
// console.log("start");

// (async function handlegames() {
//      let data=await fetch(url);
//      let x =await data.json();
//     console.log(x);
//     console.log("hi");

//     x.results.forEach((element)=>{
//           let name=element.name;
//           let div=document.createElement("div");
//           div.className="col-10 col-sm-6 col-md-4 my-3";
//           div.innerHTML=`
//           <div class="card card-h bg-info-subtle">
//           <div class="card-body shadow">
//           <img src =${element.image} class="img-fluid">
//           <h5 class="card-title text-dangedr">${name}</h5>
//           <p class="">${element.gender} </p>
//           </div>
//          </div>
//           `
//           root.appendChild(div);
      

// });
// })();


// export  let ketab=[
//       {
//         img:"https://www.rahatyad.ir/Photos/Home/Images/IMG_5756.png",
//         name: "جاوااسکریپت حرفه‌ای", pc:'350,000 تومان' ,
//       },{
//         img:"https://www.rahatyad.ir/Photos/Home/Images/IMG_5638.png",
//         name: "طراحی با Bootstrap & Sass", pc:'420,000 تومان',
//       },{
//         img:"https://www.rahatyad.ir/Photos/Home/Images/IMG_5639.png",
//         name: "طراحی حرفه ای وبسایت", pc:"280,000 تومان",
//       },{
//         img:"https://www.rahatyad.ir/Photos/Home/Images/book_z.jpg?2",
//         name: "زبان تخصصی برق", pc:"200,000 تومان",
//       },{
//         img:"https://www.rahatyad.ir/Photos/Home/Images/book_m.jpg?2",
//         name:'متلب حرفه‌ای به بیانی ساده' , pc:"250,000 تومان",
//       },
//     ]



    // AOS.init();




// let musicInfoArray=[{
//   path
// }]

















