export function myJS(data) {
  // 資料載入完成才執行
  if (data[0]) {
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
        document.querySelectorAll(".selected").forEach((e) => {
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
        document.querySelectorAll(".selected").forEach((e) => {
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
        // 圖片及內文
        document.getElementById("cardImg").src = myImg_1f[i];
        document.getElementById("storeName").innerHTML = myStore_1f[i];
        document.getElementById("cardText").innerHTML = myStoreText_1f[i];

        // svg商店圖示變化
        // if (document.querySelector(".selected") != null) {
        //   document.querySelectorAll(".selected").forEach((ele) => {
        //     ele.classList.remove("selected");
        //   });
        // }
        document.querySelectorAll(".selected").forEach((e) => {
          e.style.display = "none";
        });
        arrow1F[i].classList.add("selected");
        arrow1F[i].style.display = "block";

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
        document.getElementById("cardImg").src = myImg_b1[i];
        document.getElementById("storeName").innerHTML = myStore_b1[i];
        document.getElementById("cardText").innerHTML = myStoreText_b1[i];

        document.querySelectorAll(".selected").forEach((e) => {
          e.style.display = "none";
        });
        arrowB1[i].classList.add("selected");
        arrowB1[i].style.display = "block";

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
        } else if (mapSearch.value === "暫無店家") {
          console.log("搜尋失敗")
        }
      }

      // b1
      for (let i = 0; i < myStore_b1.length; i++) {
        if (mapSearch.value === myStore_b1[i]) {
          myLocation_b1[i].onclick();
          if (boolean === true) {
            layerswitch.onclick();
          }
        } else if (mapSearch.value === "暫無店家") {
          console.log("搜尋失敗")
        }
      }
      // 執行搜尋後清空input
      mapSearch.value = "";
    };

    //// 卡片、搜尋選項資訊

    // 篩選有效資料(根據sto_sta)，並將缺少的店家物件填入myData
    let myData = data.filter((e) => e.sto_location != null);
    let lostStore =[]
    let lostFloor = [];
    let lostLocation = [];
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

    // for (let i = 0; i < detectArray.length; i++) {
    //   myData.forEach((e) => {
    //     if (detectArray[i] === e.sto_location) {
    //       detectArray.splice(i, 1);
    //     }
    //   });
    // }

    lostStore = detectArray.filter((e) => {
      return myData.every((ele) => {
        console.log(ele);
        return ele.sto_location != e;
      });
    });

    // lostStore = ["108", "B106"]

    lostStore.forEach((e) => {
      lostFloor.push(e.slice(0, 1));
      lostLocation.push(Number(e.slice(e.length - 1, e.length)));
    });

    // detectArray.forEach((e) => {
    // lostFloor.push(e.slice(0, 1));
    // lostLocation.push(Number(e.slice(e.length - 1, e.length)));
    // });

    // console.log(lostStore);
    // console.log(lostFloor);
    // console.log(lostLocation);



    for (let i = 0; i < lostFloor.length; i++) {
      if (lostFloor[i] === "1") {
        myData.splice(lostLocation[i] - 1, 0, {
          sto_floor: "1f",
          sto_name: "暫無店家",
          sto_class: "",
        });
      } else if (lostFloor[i] === "B") {
        myData.splice(lostLocation[i] + 7, 0, {
          sto_floor: "b1",
          sto_name: "暫無店家",
          sto_class: "",
        });
      }
    }

    // 宣告資料變數、格式
    var myStore_1f = [];
    var myStore_b1 = [];
    var myStoreText_1f = [];
    var myStoreText_b1 = [];
    let myImg_1f = [];
    let myImg_b1 = [];
    var tempCardText = "";
    var tempOption;

    for (let i = 0; i < 15; i++) {
      // 小卡內容
      tempCardText = "";
      if (myData[i].sto_class.includes("1")) {
        tempCardText = tempCardText + "咖啡輕食、";
      }
      if (myData[i].sto_class.includes("2")) {
        tempCardText = tempCardText + "藝術設計、";
      }
      if (myData[i].sto_class.includes("3")) {
        tempCardText = tempCardText + "餐廳、";
      }
      if (myData[i].sto_class.includes("4")) {
        tempCardText = tempCardText + "購物、";
      }
      tempCardText = tempCardText.substring(0, tempCardText.length - 1);

      // 搜尋選項
      tempOption = document.createElement("option");
      tempOption.value = `${myData[i].sto_name}`;
      document.querySelector("#searchShop").appendChild(tempOption);

      console.log(myData)

      // 資料分類(根據樓層)

      if (myData[i].sto_floor === "1f") {
        if (myData[i].sto_location === `10${i + 1}`) {
          myStore_1f.push(myData[i].sto_name);
          myStoreText_1f.push(tempCardText);
          myImg_1f.push(myData[i].sto_first_img);
        } else {
          myStore_1f.push("");
          myStoreText_1f.push("暫無店家");
          myImg_1f.push("/map/noStore.jpg");
        }
      } else if (myData[i].sto_floor === "b1") {
        if (myData[i].sto_location === `B10${i - 7}`) {
          myStore_b1.push(myData[i].sto_name);
          myStoreText_b1.push(tempCardText);
          myImg_b1.push(myData[i].sto_first_img);
        } else {
          myStore_b1.push("");
          myStoreText_b1.push("暫無店家");
          myImg_b1.push("/map/noStore.jpg");
        }
      }
    }

    // 開發用
    // classList:arrow1F, arrowB1, arrowPublic, location_1f, location_b1
    // console.log(myImg_1f);
    // console.log(myStore_1f);
    // console.log(myStore_b1);
    // console.log(myStoreText_1f);

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
}
