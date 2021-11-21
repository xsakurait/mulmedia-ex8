let img_num;
let path = "./img/";
let count, mod_num;
let imgObj, capObj;
let bttnObj, resetObj;
// 画像のファイル配列
let img_file = ["Text.png", "Building.png", "BRIDGE.png", "BOAT.png"];
let img_alt_en = [
  "Photo of Text",
  "Photo of Building",
  "Photo of BRIDGE",
  "Photo of BOAT",
]; //alt要素の配列
let img_cap_en = [
  "This image is Text",
  "This image is Building",
  "This image is BRIDGE",
  "This image is BOAT",
]; //figcapの配列
// alt要素は発音させない
let img_alt_ja = [
  "この画像は文章です",
  "この画像は建物です",
  "この画像は橋です",
  "この画像は船です",
];
let img_cap_ja = [
  "この画像は文章です",
  "この画像は建物です",
  "この画像は橋です",
  "この画像は船です",
];
let langObj;

imgObj = document.getElementById("fig-img");
capObj = document.getElementById("fig-cap");
bttnObj = document.getElementById("change");
resetObj = document.getElementById("reset");
langObj = document.getElementById("select-lang");

img_num = img_file.length;
console.log("img_num=%d", img_num);

let speechObj = new SpeechSynthesisUtterance();
let speechEnObj = new SpeechSynthesisUtterance();
let speechJaObj = new SpeechSynthesisUtterance();

speechEnObj.lang = "en-US";
speechEnObj.volume = 1.0;
speechEnObj.rate = 1.0;
speechEnObj.pitch = 0.5;

speechJaObj.lang = "ja-JP";
speechJaObj.volume = 1.0;
speechJaObj.rate = 1.0;
speechJaObj.pitch = 0.5;

count = 0;
function bttn() {
  count = count + 1;
  mod_num = count % img_num;
  imgObj.src = path + img_file[mod_num];

  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      imgObj.alt = img_alt_en[mod_num];
      capObj.innerHTML = img_cap_en[mod_num];
      speechEnObj.text = "This image is changed.";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[mod_num];
      speak(speechEnObj);
      break;
    }
    case 2: {
      imgObj.alt = img_alt_ja[mod_num];
      capObj.innerHTML = img_cap_ja[mod_num];
      speechJaObj.text = "画像を変更します。";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[mod_num];
      speak(speechJaObj);
      break;
    }
  }
}

function reset() {
  imgObj.src = path + img_file[0];
  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      imgObj.alt = img_alt_en[0];
      capObj.innerHTML = img_cap_en[0];
      speechEnObj.text = "Resetted.";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[0];
      speak(speechEnObj);
      break;
    }
    case 2: {
      imgObj.alt = img_alt_ja[0];
      capObj.innerHTML = img_cap_ja[0];
      speechJaObj.text = "リセットします。";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[0];
      speak(speechJaObj);
      break;
    }
  }
}

function lang() {
  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      speechEnObj.text = "This page is guided in English.";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[mod_num];
      speak(speechEnObj);
      break;
    }
    case 2: {
      speechJaObj.text = "このページは日本語で案内されます。";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[mod_num];
      speak(speechJaObj);
      break;
    }
  }
}

function get_pitch() {
  moved_pitch = pitchObj;
  speechObj.pitch = moved_pitch;
  console("pitch:", moved_pitch);
  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      speechEnObj.text = "Voice pitch has changed";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[mod_num];
      speak(speechEnObj);
      break;
    }
    case 2: {
      speechJaObj.text = "声の高さが変更されました";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[mod_num];
      speak(speechJaObj);
      break;
    }
  }
}

function get_speed() {
  moved_speed = speedObj;
  speechObj.speed = moved_speed;
  console("speed:", moved_speed);
  speak();
  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      speechEnObj.text = "Voice speed has changed";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[mod_num];
      speak(speechEnObj);
      break;
    }
    case 2: {
      speechJaObj.text = "声の速さが変更されました";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[mod_num];
      speak(speechJaObj);
      break;
    }
  }
}

function get_volume() {
  moved_volume = volumeObj;
  speechObj.volume = moved_volume;
  console("volume:", moved_volume);
  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      speechEnObj.text = "Voice volume has changed";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[mod_num];
      speak(speechEnObj);
      break;
    }
    case 2: {
      speechJaObj.text = "声の大きさが変更されました";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[mod_num];
      speak(speechJaObj);
      break;
    }
  }
}

function speak(speechObj) {
  speechSynthesis.speak(speechObj);
}

bttnObj.addEventListener(
  "click",
  function () {
    bttn();
  },
  false
);
resetObj.addEventListener(
  "click",
  function () {
    reset();
  },
  false
);

langObj.addEventListener(
  "change",
  function () {
    lang();
  },
  false
);

pitchObj.addEventListener(
  "change",
  function () {
    get_pitch();
  },
  false
);

speedObj.addEventListener(
  "change",
  function () {
    get_speed();
  },
  false
);

volumeObj.addEventListener(
  "change",
  function () {
    get_volume();
  },
  false
);
