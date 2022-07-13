export function myJS(data) {
  // 判定使用者是否為行動裝置
  function isMobileDevice() {
    var mobileDevices = [
      "Android",
      "webOS",
      "iPhone",
      "iPad",
      "iPod",
      "BlackBerry",
      "Windows Phone",
    ];
    var isMobileDevice = false;
    for (var i = 0; i < mobileDevices.length; i++) {
      if (navigator.userAgent.match(mobileDevices[i])) {
        isMobileDevice = true;
      }
    }
    return isMobileDevice;
  }
  isMobileDevice();

  // mobile功能
  var infoCard = document.getElementById("infoCard");
  var mobile_bg = document.getElementById("mobile_bg");

  // 行動裝置初始化
  if (isMobileDevice() === true) {
    infoCard.style.display = "none";
  }

  // 資訊小卡關閉
  document.getElementById("mobile_bg").onclick = () => {
    infoCard.style.display = "none";
    mobile_bg.style.display = "none";
  };

  // 樓層初始化
  var boolean = true;
  document.querySelector("#park2-1f").style.opacity = "1";
  document.querySelector("#park2-b1").style.opacity = ".3";
  document.querySelectorAll(".location_b1").forEach((ele) => {
    ele.style.display = "none";
  });

  // 樓層切換。
  var layerswitch = document.getElementById("layerSwitch");
  layerswitch.onclick = () => {
    if (boolean === true) {
      // 前往b1 (身處1f)
      document.getElementById("btn_text").innerHTML = "B1";
      document.querySelector("#park2-1f-2").style.opacity = ".3";
      document.querySelector("#park2-b1").style.opacity = "1";
      document.getElementById("park2-1f").style.display = "none";
      document.getElementById("park2-1f-2").style.display = "block";
      document.querySelector("#park2-1f-2").style.animationName =
        "anima_1f_push";
      document.querySelector("#park2-b1").style.animationName = "anima_b1_pull";

      document.querySelectorAll(".location_b1").forEach((ele) => {
        ele.style.display = "block";
      });
      boolean = !boolean;
    } else {
      // 前往1f (身處b1)
      document.getElementById("btn_text").innerText = "1F";
      document.querySelector("#park2-1f").style.opacity = "1";
      document.querySelector("#park2-b1").style.opacity = ".3";
      document.querySelector("#park2-1f").style.animationName = "anima_1f_pull";
      document.querySelector("#park2-b1").style.animationName = "anima_b1_push";
      document.getElementById("park2-1f-2").style.display = "none";
      document.getElementById("park2-1f").style.display = "block";

      document.querySelectorAll(".location_b1").forEach((ele) => {
        ele.style.display = "none";
      });
      boolean = !boolean;
    }
  };

  // 點擊地標/小卡切換
  var myLocation_1f = document.querySelectorAll(".location_1f");
  var myLocation_b1 = document.querySelectorAll(".location_b1");
  // var myStore_1f = document.querySelectorAll('.store_1f')

  for (let i = 0; i < myLocation_1f.length; i++) {
    myLocation_1f[i].onclick = function () {
      // 圖片及內文
      document.getElementById("cardImg").src = myImg[i];
      document.getElementById("storeName").innerHTML = myStore_1f[i];
      document.getElementById("cardText").innerHTML = myStoreText_1f[i];

      // svg商店圖示變化
      if (document.querySelector(".selected") != null) {
        document.querySelectorAll(".selected").forEach((ele) => {
          ele.classList.remove("selected");
        });
      }
      myLocation_1f[i].classList.add("selected");
      // myStore_1f[i].classList.add('selected')

      // 資訊小卡連結
      document.getElementById(
        "cardAncher"
      ).href = `http://localhost:3000/store/${i + 1}`;

      // monile功能(資訊小卡顯示切換)
      if (infoCard.style.display === "none") {
        infoCard.style.display = "block";
        mobile_bg.style.display = "block";
      }
    };
  }

  // b1商家點擊功能
  for (let i = 0; i < myLocation_b1.length; i++) {
    myLocation_b1[i].onclick = function () {
      document.getElementById("cardImg").src = myImg[i];
      document.getElementById("storeName").innerHTML = myStore_b1[i];
      document.getElementById("cardText").innerHTML = myStoreText_b1[i];

      if (document.querySelector(".selected") != null) {
        document.querySelector(".selected").classList.remove("selected");
      }
      myLocation_b1[i].classList.add("selected");

      // 資訊小卡連結
      document.getElementById(
        "cardAncher"
      ).href = `http://localhost:3000/store/${i + 1 + myLocation_1f.length}`;

      // monile功能(資訊小卡顯示切換)
      if (infoCard.style.display === "none") {
        infoCard.style.display = "block";
        mobile_bg.style.display = "block";
      }
    };
  }

  // 搜尋功能
  var mapSearch = document.getElementById("search");

  document.getElementById("searchBtn").onclick = function () {
    // note (  boolean=true:1f ; boolean=flase:b1  )
    // 1f
    for (let i = 0; i < myStore_1f.length; i++) {
      if (mapSearch.value === myStore_1f[i]) {
        myLocation_1f[i].onclick();
        if (boolean === false) {
          layerswitch.onclick();
        }
      }
    }

    // b1
    for (let i = 0; i < myStore_b1.length; i++) {
      if (mapSearch.value === myStore_b1[i]) {
        myLocation_b1[i].onclick();
        if (boolean === true) {
          layerswitch.onclick();
        }
      }
    }
    // 執行搜尋後清空input
    mapSearch.value = "";
  };

  //// 卡片、搜尋選項資訊

  // 宣告資料變數、格式
  var myStore_1f = [];
  var myStore_b1 = [];
  var myStoreText_1f = [];
  var myStoreText_b1 = [];
  var tempCardText = "";
  var tempOption;

  data.forEach((e) => {
    // 小卡內容
    tempCardText = "";
    if (e.sto_class.includes("1")) {
      tempCardText = tempCardText + "咖啡輕食、";
    }
    if (e.sto_class.includes("2")) {
      tempCardText = tempCardText + "藝術設計、";
    }
    if (e.sto_class.includes("3")) {
      tempCardText = tempCardText + "餐廳、";
    }
    if (e.sto_class.includes("")) {
      tempCardText = tempCardText + "購物、";
    }
    tempCardText = tempCardText.substring(0, tempCardText.length - 1);

    // 搜尋選項
    tempOption = document.createElement("option");
    tempOption.value = `${e.sto_name}`;
    document.querySelector("#searchShop").appendChild(tempOption);

    // 資料分類(根據樓層)
    if (e.sto_floor === "1f") {
      myStore_1f.push(e.sto_name);
      myStoreText_1f.push(tempCardText);
    } else if (e.sto_floor === "b1") {
      myStore_b1.push(e.sto_name);
      myStoreText_b1.push(tempCardText);
    }
  });

  // console.log(document.querySelector("#searchShop"));
  // console.log(myStore_1f);
  // console.log(myStore_b1);
  // console.log(myStoreName)
  // console.log(myStoreText_b1);

    // 公設
    document.getElementById("toilet_icon").addEventListener('mouseover', ()=>{
      document.getElementById('wc').style.fill = '#ABFF21'
    })
    document.getElementById("toilet_icon").addEventListener('mouseout', ()=>{
      document.getElementById('wc').style.fill = 'black'
    })
    document.getElementById("basketball_icon").addEventListener('mouseover', ()=>{
      document.querySelector('#basketball path').style.fill = '#ABFF21'
    })
    document.getElementById("basketball_icon").addEventListener('mouseout', ()=>{
      document.querySelector('#basketball path').style.fill = '#E6875B'
    })
    document.getElementById("parking_icon").addEventListener('mouseover', ()=>{
      document.querySelector('#arrow path').style.fill = '#ABFF21'
    })
    document.getElementById("parking_icon").addEventListener('mouseout', ()=>{
      document.querySelector('#arrow path').style.fill = '#B8F4D4'
    })
    document.getElementById("elevator_icon").addEventListener('mouseover', ()=>{
      document.getElementById('elevator').style.fill = '#ABFF21'
    })
    document.getElementById("elevator_icon").addEventListener('mouseout', ()=>{
      document.getElementById('elevator').style.fill = 'black'
    })
  

  var myImg = [
    "/map/店家/1F/泱茶.jpg",
    "/map/店家/1F/MISATO.jpg",
    "/map/店家/1F/12AM.jpg",
    "/map/店家/1F/每果發光.jpg",
    "/map/店家/1F/para coffee.jpg",
    "/map/店家/1F/正面奶酥.png",
    "/map/店家/1F/COFFEE AND JOHN.png",
    "/map/店家/1F/酉 5pm.twcaudex.jpg",
  ];





  // end of func
}
