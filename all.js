
//navbar menu collapse
$(".navbar-btn").click(function(){
  $(".navbar-collapse").toggleClass("show")
})




//page
$(document).ready(function() {
    $('.next').click(function(event) {
        $(this).toggleClass('active');
    });
  });

//go to top btn
// $(document).ready(function() {
//     $('#scrollTop').click(function(e){
//         e.preventDefault();
//         $('html,body').animate({
//           scrollTop:0
//         },1000)
//       })
//   });



//service cards
// const serviceCardData=[
//     //card1
//     {
//         imgurl:`./image/serviceFastr.png`,
//         alt:`faster`,
//         title:`快速`,
//         text:`我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。`,
//     },
//     //card2
//     {imgurl:`./image/serviceFlex.png`,
//     alt:`flex`,
//     title:`靈活`,
//     text:`我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。`,
//     },
//     //card3
//     {imgurl:`./image/serviceExtension.png`,
//     alt:`extension`,
//     title:`擴充`,
//     text:`我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。`,
// },
// ]

// function serviceCard(){
// $('#serviceCards').empty().append(serviceCardData.map(
//     (e) =>`
//     <div class="card" >
                    
               
//     <img src="${e.imgurl}" class="card-img-top" alt="${e.alt}">
//     <div class="card-body">
//       <h5 class="card-title">${e.title}</h5>
//       <p class="card-text">${e.text}</p>
//     </div>
//     </div>
//     `
//     ))
// }
// serviceCard()




//aitool cardData
// const cardData =[
//     //card1
//     {
//         imgurl:`./image/ai01.png`,
//         title:`Chatbot Builder`,
//         content:`建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。`,
//         name:`卡卡`,
//         share:`#聊天`
//     },
//     //card2
//     {
//         imgurl:`./image/ai02.png`,
//         title:`Image Recognition Platform `,
//         content:`專業的圖像識別平台，識別圖像、分類、標記等。
//         `,
//         name:`杰杰`,
//         share:`#影像辨識`
//     },
//     //card3
//     {
//         imgurl:`./image/ai03.png`,
//         title:`Language Translation API`,
//         content:`專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。`,
//         name:`琪琪`,
//         share:`#翻譯`
//     },
//     //card4
//     {
//         imgurl:`./image/ai04.png`,
//         title:`  Sentiment Analysis API`,
//         content:` 自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。`,
//         name:`昊昊`,
//         share:`#行銷`
//     },
//     //card5
//     {
//         imgurl:`./image/ai05.png`,
//         title:`Fraud Detection Platform`,
//         content:`預防詐騙活動，適用於銀行、金融、電商等。
//         `,
//         name:`卡卡`,
//         share:`#客服`
//     },
//     //card6
//     {
//         imgurl:`./image/ai06.png`,
//         title:`Voice Assistant SDK`,
//         content:`通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。`,
//         name:`杰杰`,
//         share:`#生產力`
//     },
// ];
// function accordtionCardItem() {
//     $('#cardItem').empty().append(cardData.map(
//         (e) => `
//     <li class="aiToolCard">
//         <div class="aiToolCardImg">
//             <img src=${e.imgurl} alt="${e.title}>
//             <div class="aiContext">
//            </div> 
//             <div class="toolCardTitle">
//                <h3>${e.title}</h3>
//                <p>${e.content}</p>
//             </div>
//             <div class="toolCardBody ">
//                <p class="text">AI 模型</p>
//                <span class="name">${e.name}</span>
//             </div>
//             <div class="toolCardfooter">
//                 <p class="tag">${e.share}</p>
//                <img src="./image/shareIcon.svg" alt="" class="share"> 
//             </div>
//         </div>
//     </li>`
// ));
//   }
//   accordtionCardItem() 

//reviewer
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 24,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       768: {
//         slidesPerView: 1,
//         // spaceBetween: 10,
//       },
//       1200: {
//         slidesPerView: 3,
//         // spaceBetween: 20,
//       },
     
//     },
//   });




  // Q&A
  // $(document).ready(function(){
  //   $('.q-title').click(function(e){
  //       $('.ans').slideDown();

  // })})




//PRICE INDEX-
//API LIST
const apiPath = 'https://2023-engineer-camp.zeabur.app/api/v1/works';
const APIlist = document.querySelector('.APIlist')
//宣告一個陣列和物件空值來接收回傳的數據
let worksData = []
let pagesData = {}
//宣告一個物件給function getData 要帶入的參數
const data={
type: '',
sort:0,
page:1,
search: '',
}
//將資料渲染到畫面的function
function renderWorks(){
  let works ='';
  worksData.forEach((item)=>{
    works+= /*html*/` <li class="card">
    <div class="card-layer">
      <img class="card-img" src="${item.imageUrl}" alt="ai image">
    </div>
    <div class="card-body">
      <h4 class="card-title">${item.title}</h4>
      <p class="card-text">${item.description}</p>
    </div>
    <div class="card-body">
      <p class="card-subtitle">AI 模型</p>
      <p class="card-text">${item.model}</p>
    </div>
    <div class="card-body">
      <span class="card-text">#${item.type}</span>
      <a class="card-link" href="${item.link}" target="_blank">
        <span class="material-icons">
          share
        </span>
      </a>
    </div>
  </li>
   </li>`
  });
  APIlist.innerHTML=works;
}

//串接api後用一個函示包住來執行
//在單獨串接api時發生錯誤 但包在函式內就沒有出現錯誤
function getData({ type, sort, page, search}){
  const apiUrl=`${apiPath}?sort=${sort}&page=${page}&${type ? `type=${type}&` : ''}${search ? `search=${search}` : ''}`
// all.js:16 Uncaught ReferenceError: sort is not defined
//     at all.js:16:33

axios.get(`${apiPath}`)
    .then(function(res){
      console.log(res.data)
      worksData = res.data.ai_works.data;
      pagesData = res.data.ai_works.page;
    
      // console.log('worksData', worksData);
      // console.log('pagesData', pagesData);
     renderWorks();

    })}

getData(data);



// all.js:16 Uncaught ReferenceError: sort is not defined
//     at all.js:16:33
//如果只有下面的程式 就會出現上面的錯誤
// axios.get(`${apiPath}`)
//     .then(function(res){
//       console.log(res.data)
//       worksData = res.data.ai_works.data;
//       pagesData = res.data.ai_works.page;
    
//       console.log('worksData', worksData);
//       console.log('pagesData', pagesData);
//     })