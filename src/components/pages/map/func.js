export function myJS() {
  var x = true;
  // 樓層切換。
  document.getElementById("layerSwitch").onclick = () => {
    if (x == true) {
      // 樓層切換半透明
      document.querySelector("#park2-1f").style.opacity = "1";
      document.querySelector("#park2-b1").style.opacity = ".2";

      document.getElementById("park2-1f-2").style.display = "none";
      document.getElementById("park2-1f").style.display = "block";
      document.querySelectorAll(".location_b1").forEach((ele) => {
        ele.style.display = "none";
      });
      // 樓層切換全透
      // document.getElementById("park2-1f").style.display = "block";
      // document.getElementById("park2-b1").style.display = "none";

      x = !x;
    } else {
      // 樓層切換半透明
      document.querySelector("#park2-1f-2").style.opacity = ".2";
      document.querySelector("#park2-b1").style.opacity = "1";

      document.getElementById("park2-1f-2").style.display = "block";
      document.getElementById("park2-1f").style.display = "none";
      document.querySelectorAll(".location_b1").forEach((ele) => {
        ele.style.display = "block";
      });
      // 樓層切換全透
      // document.getElementById("park2-1f").style.display = "none";
      // document.getElementById("park2-b1").style.display = "block";
      x = !x;
    }
  };

  // 樓層初始化
  document.getElementById("layerSwitch").onclick();

  // 顯示小卡
  var myLocation = document.querySelectorAll(".location_1f");

  for (let i = 0; i < myLocation.length; i++) {
    myLocation[i].onclick = function () {
      document.getElementById("infoCard").style.display = "block";
      document.getElementById("cardImg").src = myImg[i];
      document.getElementById("cardText").innerHTML = myShopText[i];
    };
  }

  // 搜尋功能
  // 搜尋提示初始化
  var mapSearch = document.getElementById("search");
  // if (mapSearch.value == "") {
  //   document.querySelector("#search").setAttribute("list", "searchInit");
  // } else {
  //   console.log(123);
  //   document.querySelector("#search").setAttribute("list", "searchShop");
  // }

  document.getElementById("searchBtn").onclick = function () {
    // 搜尋店家
    for (let i = 0; i < myShop.length; i++) {
      if (mapSearch.value == myShop[i]) {
        myLocation[i].onclick();
      }
    }

    // 執行搜尋後清空input
    mapSearch.value = "";
  };

  // 小卡取消選取
  document.getElementById("cancel").onclick = function () {
    document.getElementById("infoCard").style.display = "none";
  };

  // 卡片資訊 (開發用，之後改由後台抓取)
  var myShop = [
    "泱茶",
    "MISATO",
    "12AM",
    "每果發光",
    "para coffee",
    "正面奶酥",
    "COFFEE AND JOHN",
    "酉 5pm.twcaude",
  ];

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
  var myShopText = [
    "泱茶<br><br>📩品牌諮詢專線0800-520-066<br>📍台中草悟店-台中市英才路534號<br>📍竹北遠百店-竹北大遠百B2 誠品<br>📍日本池袋店-池袋東口PARCO本館B2<br>📍日本大阪店-大阪市日本橋一丁目17-22",
    `MISATO<br><br>日式傳統、全新呈現。<br>電話 - 047776250<br> 每日營業、售完為止`,
    "12AM<br><br>12AM代表著一日紛亂的結尾，也象徵著即將迎接新日光的起點。<br>在這私隱的時刻，不拋擲任何評述，讓每份思緒都能恣意生長，並以溫柔的方式陪伴你們度過陰晴起伏。",
    "每果發光<br><br>以最純粹的食物撫慰身心   散發真我光彩<br>You may glow.",
    "Para coffee<br><br>超越想像，新型態精緻咖啡，<br>為快生活，帶來一杯慢咖啡。",
    "正面奶酥<br><br> NO MORE CRYING<br><br>這世界太負面 太複雜 我們都需要正面奶酥。",
    "「COFFEE AND JOHN」<br><br>是一個以 JOHN 為主角，結合美、日的街頭文化、音樂、咖啡的空間。",
    "「酉」<br><br>台灣第一間專為塊根植物所建立的專門店，從店內到店外及建築物均為老闆一手設計，簡約的幾何清水模建築及透亮的玻璃溫室，並搭配戶外的沙漠造景，營造出原始生態的生長樣貌。",
  ];

  // end of func
}
