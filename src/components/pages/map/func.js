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
        document.querySelector("#park2-b1").style.animationName =
          "anima_b1_pull";
        document.querySelectorAll(".location_b1").forEach((ele) => {
          ele.style.display = "block";
        });
        // 切換樓層隱藏店家提示
        document.querySelectorAll(".arrow1F").forEach((e) => {
          e.style.display = "none";
        });
        boolean = !boolean;
      } else {
        // 前往1f (身處b1)
        document.getElementById("btn_text").innerText = "1F";
        document.querySelector("#park2-1f").style.opacity = "1";
        document.querySelector("#park2-b1").style.opacity = ".3";
        document.querySelector("#park2-1f").style.animationName =
          "anima_1f_pull";
        document.querySelector("#park2-b1").style.animationName =
          "anima_b1_push";
        document.getElementById("park2-1f-2").style.display = "none";
        document.getElementById("park2-1f").style.display = "block";
        document.querySelectorAll(".location_b1").forEach((ele) => {
          ele.style.display = "none";
        });
        // 切換樓層隱藏店家提示
        document.querySelectorAll(".arrowB1").forEach((e) => {
          e.style.display = "none";
        });
        boolean = !boolean;
      }
    };

    // 點擊地標/小卡切換
    var myLocation_1f = document.querySelectorAll(".location_1f");
    var myLocation_b1 = document.querySelectorAll(".location_b1");
    let arrow1F = document.querySelectorAll(".arrow1F");
    let arrowB1 = document.querySelectorAll(".arrowB1");

    for (let i = 0; i < myLocation_1f.length; i++) {
      myLocation_1f[i].onclick = function () {
        // 資訊欄圖片及文字
        document.getElementById("cardImg").src = myImg_1f[i];
        document.getElementById("storeName").innerHTML = myStore_1f[i];
        document.getElementById("cardText").innerHTML = myStoreText_1f[i];

        document.querySelectorAll(".arrow1F").forEach((e) => {
          e.style.display = "none";
        });
        arrow1F[i].style.display = "block";

        // 資訊小卡連結
        document.getElementById("cardAncher").href = myAncher_1f[i];

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
        document.getElementById("cardImg").src = myImg_b1[i];
        document.getElementById("storeName").innerHTML = myStore_b1[i];
        document.getElementById("cardText").innerHTML = myStoreText_b1[i];

        document.querySelectorAll(".arrowB1").forEach((e) => {
          e.style.display = "none";
        });
        arrowB1[i].style.display = "block";

        // 資訊小卡連結
        document.getElementById("cardAncher").href = myAncher_b1[i];

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
          if (boolean === false) {
            layerswitch.onclick();
            myLocation_1f[i].onclick();
          } else {
            myLocation_1f[i].onclick();
          }
        } else if (mapSearch.value === "暫無店家") {
          console.log("搜尋失敗");
        }
      }

      // b1
      for (let i = 0; i < myStore_b1.length; i++) {
        if (mapSearch.value === myStore_b1[i]) {
          if (boolean === true) {
            layerswitch.onclick();
            myLocation_b1[i].onclick();
          } else {
            myLocation_b1[i].onclick();
          }
        } else if (mapSearch.value === "暫無店家") {
          console.log("搜尋失敗");
        }
      }
      // 執行搜尋後清空input
      mapSearch.value = "";
    };

    //// 卡片、搜尋選項資訊

    // 篩選有效資料，並將缺少的店家物件填入store
    let detectArray = [
      "101",
      "102",
      "103",
      "104",
      "105",
      "106",
      "107",
      "108",
      "B101",
      "B102",
      "B103",
      "B104",
      "B105",
      "B106",
      "B107",
    ];

    let store = detectArray.map((e) => {
      let result = data.filter((j) => {
        if (j.sto_location == e) {
          return j;
        } else {
          return false;
        }
      });
      return result;
    });



    // 不存在店家的物件
    let mapData = store.map((e) => {
      if (e.length != 0) {
        return e[0];
      } else {
        return {
          // sto_floor: "1f",
          sto_name: "暫無店家",
          sto_class: "",
        };
      }
    });

    console.log(mapData)

    // 資訊卡文字
    mapData.forEach((e) => {
      if (e.sto_class == 1) {
        e.sto_class = "咖啡輕食";
      } else if (e.sto_class == 2) {
        e.sto_class = "藝術設計";
      } else if (e.sto_class == 3) {
        e.sto_class = "餐廳";
      } else if (e.sto_class == 4) {
        e.sto_class = "購物";
      }
    });

    // 宣告資料變數、格式
    var myStore_1f = [];
    var myStore_b1 = [];
    var myStoreText_1f = [];
    var myStoreText_b1 = [];
    let myImg_1f = [];
    let myImg_b1 = [];
    let myAncher_1f = [];
    let myAncher_b1 = [];
    var tempOption;

    for (let i = 0; i < 15; i++) {
      // 搜尋選項
      tempOption = document.createElement("option");
      tempOption.value = `${mapData[i].sto_name}`;
      document.querySelector("#searchShop").appendChild(tempOption);
    }

    // 資料分類(根據樓層)
    for (let i = 0; i < 8; i++) {
      myStore_1f.push(mapData[i].sto_name);
      if (mapData[i].sto_first_img) {
        myImg_1f.push(mapData[i].sto_first_img);
        myStoreText_1f.push(mapData[i].sto_class);
        myAncher_1f.push(`/store/${mapData[i].sto_id}`);
      } else {
        myImg_1f.push("/map/noStore.jpg");
        myStoreText_1f.push("暫無店家");
        myAncher_1f.push("*");
      }
    }
    for (let i = 8; i < 15; i++) {
      myStore_b1.push(mapData[i].sto_name);
      if (mapData[i].sto_first_img) {
        myImg_b1.push(mapData[i].sto_first_img);
        myStoreText_b1.push(mapData[i].sto_class);
        myAncher_b1.push(`/store/${mapData[i].sto_id}`);
      } else {
        myImg_b1.push("/map/noStore.jpg");
        myStoreText_b1.push("暫無店家");
        myAncher_b1.push("*");
      }
    }

    // 公設
    document.getElementById("toilet_icon").addEventListener("mouseover", () => {
      document.getElementById("wcArrow").style.display = "block";
    });
    document.getElementById("toilet_icon").addEventListener("mouseout", () => {
      document.getElementById("wcArrow").style.display = "none";
    });
    document
      .getElementById("basketball_icon")
      .addEventListener("mouseover", () => {
        document.getElementById("basketballArrow").style.display = "block";
      });
    document
      .getElementById("basketball_icon")
      .addEventListener("mouseout", () => {
        document.getElementById("basketballArrow").style.display = "none";
      });
    document
      .getElementById("parking_icon")
      .addEventListener("mouseover", () => {
        document.querySelectorAll("#parkingArrow path").forEach((e) => {
          e.style.fill = "#FCFF55";
        });
      });
    document.getElementById("parking_icon").addEventListener("mouseout", () => {
      document.querySelectorAll("#parkingArrow path").forEach((e) => {
        e.style.fill = "#B8F4D4";
      });
    });
    document
      .getElementById("elevator_icon")
      .addEventListener("mouseover", () => {
        document.getElementById("elevatorArrow").style.display = "block";
      });
    document
      .getElementById("elevator_icon")
      .addEventListener("mouseout", () => {
        document.getElementById("elevatorArrow").style.display = "none";
      });

    // end of func
}
