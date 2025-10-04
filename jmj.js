var jmjChara;
var stopBtn;
var startBtn;
var hairBtn;
var shirtBtn;
var jacketBtn;
var flBtn;
var outerImg;
var innerImg;
var hairImg;
var backImg;
var topImg;
var numH;
var numI;
var numO;
var numFL = 0;
var numStartbtn = 1;
var numHbtn = 0;
var numSbtn = 0;
var numJbtn = 0;
// var w = 300;
// var h = 300/1000*1200;
var time = 200;
var roll;
var rollH;
var rollI;
var rollO;

var o = {
  o1: "out01.png",
  o2: "out02.png",
  o3: "out03.png",
  o4: "blank.png",
  o5: "out05.png",
  o6: "out06.png",
  o7: "out07.png",
  o8: "out08.png",
  o9: "blank.png",
  o10: "out10.png",
  o11: "out11.png",
  o12: "out12.png",
  o13: "out13.png",
  o14: "out14.png",
  o15: "blank.png",
  o16: "out16.png",
  o17: "out17.png",
  o18: "blank.png",
  o19: "out19.png",
  o20: "blank.png",
  o21: "blank.png",
  o22: "out22.png",
  o23: "out23.png",
  o24: "out24.png",
  o25: "out25.png",
  o1201w:
    "out12-1whitre.png",
  o1202b:
    "out12-2black.png",
  o1203namu:
    "out12-3namu.png",
  o1204bl:
    "out12-4blue.png",
};
var outerA = [
  o.o1,
  o.o2,
  o.o3,
  o.o4,
  o.o5,
  o.o6,
  o.o7,
  o.o8,
  o.o9,
  o.o10,
  o.o11,
  o.o12,
  o.o13,
  o.o14,
  o.o15,
  o.o16,
  o.o17,
  o.o18,
  o.o19,
  o.o20,
  o.o21,
  o.o22,
  o.o23,
  o.o24,
  o.o25,
];
var outer12 = [o.o12, o.o1201w, o.o1202b, o.o1203namu, o.o1204bl];

var i = {
  o1: "in01.png",
  o2: "in02.png",
  o3: "in03.png",
  o4: "in04.png",
  o5: "in05.png",
  o6: "in06.png",
  o7: "in07.png",
  o8: "in08.png",
  o9: "in09.png",
  o10: "in10.png",
  o11: "in11.png",
  o12: "in12.png",
  o13: "in13.png",
  o14: "in14.png",
  o15: "in15.png",
  o16: "in16.png",
  o17: "in17.png",
  o18: "in18.png",
  o19: "in19.png",
  o20: "in20.png",
  o21: "in21.png",
  o22: "in22.png",
  o23: "in23.png",
  o24: "in24.png",
  o25: "in25.png",
};
var innerA = [
  i.o1,
  i.o2,
  i.o3,
  i.o4,
  i.o5,
  i.o6,
  i.o7,
  i.o8,
  i.o9,
  i.o10,
  i.o11,
  i.o12,
  i.o13,
  i.o14,
  i.o15,
  i.o16,
  i.o17,
  i.o18,
  i.o19,
  i.o20,
  i.o21,
  i.o22,
  i.o23,
  i.o24,
  i.o25,
];

var h = {
  o1: "hair01.png",
  o2: "hair02.png",
  o3: "hair03.png",
  o4: "hair04.png",
  o5: "hair05.png",
  o6: "hair06.png",
  o7: "hair07.png",
  o8: "hair08.png",
  o9: "hair09.png",
  o10: "hair10.png",
  o11: "hair11.png",
  o12: "hair12.png",
  o13: "hair13.png",
  o14: "hair14.png",
  o15: "hair15.png",
  o16: "hair16.png",
  o17: "hair17.png",
  o18: "hair18.png",
  o19: "hair19.png",
  o20: "hair20.png",
  o21: "hair21.png",
  o22: "hair22.png",
  o23: "hair23.png",
  o24: "hair24.png",
  o25: "hair25.png",
};
var hairA = [
  h.o1,
  h.o2,
  h.o3,
  h.o4,
  h.o5,
  h.o6,
  h.o7,
  h.o8,
  h.o9,
  h.o10,
  h.o11,
  h.o12,
  h.o13,
  h.o14,
  h.o15,
  h.o16,
  h.o17,
  h.o18,
  h.o19,
  h.o20,
  h.o21,
  h.o22,
  h.o23,
  h.o24,
  h.o25,
];

var b = {
  o1: "back01.png",
  o2: "back02.png",
  o3: "back03.png",
  o4: "back04.png",
  o5: "back05.png",
  o6: "back06.png",
  o7: "back07.png",
  o8: "back08.png",
  o9: "back09.png",
  o10: "back10.png",
  o11: "back11.png",
  o12: "back12.png",
  o13: "back13.png",
  o14: "back14.png",
  o15: "back15.png",
  o16: "back16.png",
  o17: "back17.png",
  o18: "back18.png",
  o19: "back19.png",
  o20: "back20.png",
  o21: "back21.png",
  o22: "back22.png",
  o23: "back23.png",
  o24: "back24.png",
  o25: "back25.png",
};
var backA = [
  b.o1,
  b.o2,
  b.o3,
  b.o4,
  b.o5,
  b.o6,
  b.o7,
  b.o8,
  b.o9,
  b.o10,
  b.o11,
  b.o12,
  b.o13,
  b.o14,
  b.o15,
  b.o16,
  b.o17,
  b.o18,
  b.o19,
  b.o20,
  b.o21,
  b.o22,
  b.o23,
  b.o24,
  b.o25,
];

var l = {
  o1: "light01.png",
  o2: "light02.png",
  o3: "light03.png",
  o4: "light04.png",
  o5: "light05.png",
  o6: "light06.png",
  o7: "light07.png",
  o8: "light08.png",
  o9: "light09.png",
  o10: "light10.png",
  o11: "light11.png",
  o12: "light12.png",
  o13: "light13.png",
  o14: "light14.png",
  o15: "light15.png",
  o16: "light16.png",
  o17: "light17.png",
  o18: "light18.png",
  o19: "light19.png",
  o20: "light20.png",
  o21: "light21.png",
  o22: "light22.png",
  o23: "light23.png",
  o24: "light24.png",
  o25: "light25.png",
};
var lightA = [
  l.o1,
  l.o2,
  l.o3,
  l.o4,
  l.o5,
  l.o6,
  l.o7,
  l.o8,
  l.o9,
  l.o10,
  l.o11,
  l.o12,
  l.o13,
  l.o14,
  l.o15,
  l.o16,
  l.o17,
  l.o18,
  l.o19,
  l.o20,
  l.o21,
  l.o22,
  l.o23,
  l.o24,
  l.o25,
];

var t = {
  o1: "blank.png",
  o2: "blank.png",
  o3: "blank.png",
  o4: "top04.png",
  o5: "blank.png",
  o6: "blank.png",
  o7: "blank.png",
  o8: "blank.png",
  o9: "blank.png",
  o10: "blank.png",
  o11: "top11.png",
  o12: "top12.png",
  o13: "top13.png",
  o14: "blank.png",
  o15: "top15.png",
  o16: "blank.png",
  o17: "top17.png",
  o18: "blank.png",
  o19: "blank.png",
  o20: "blank.png",
  o21: "blank.png",
  o22: "top22.png",
  o23: "blank.png",
  o24: "blank.png",
  o25: "blank.png",
};
var topA = [
  t.o1,
  t.o2,
  t.o3,
  t.o4,
  t.o5,
  t.o6,
  t.o7,
  t.o8,
  t.o9,
  t.o10,
  t.o11,
  t.o12,
  t.o13,
  t.o14,
  t.o15,
  t.o16,
  t.o17,
  t.o18,
  t.o19,
  t.o20,
  t.o21,
  t.o22,
  t.o23,
  t.o24,
  t.o25,
];

var lFull = {
  o1: "001.png",
  o2: "002.png",
  o3: "003.png",
  o4: "004.png",
  o5: "005.png",
  o6: "006.png",
  o7: "007.png",
  o8: "008.png",
  o9: "009.png",
  o10: "010.png",
  o11: "011.png",
  o12: "012.png",
  o13: "013.png",
  o14: "014.png",
  o15: "015.png",
  o16: "016.png",
  o17: "017.png",
  o18: "018.png",
  o19: "019.png",
  o20: "020.png",
  o21: "021.png",
  o22: "022.png",
  o23: "023.png",
  o24: "024.png",
  o25: "025.png",
};
var lFullA = [
  lFull.o1,
  lFull.o2,
  lFull.o3,
  lFull.o4,
  lFull.o5,
  lFull.o6,
  lFull.o7,
  lFull.o8,
  lFull.o9,
  lFull.o10,
  lFull.o11,
  lFull.o12,
  lFull.o13,
  lFull.o14,
  lFull.o15,
  lFull.o16,
  lFull.o17,
  lFull.o18,
  lFull.o19,
  lFull.o20,
  lFull.o21,
  lFull.o22,
  lFull.o23,
  lFull.o24,
  lFull.o25,
];

var full = {
  o1: "101.png",
  o2: "102.png",
  o3: "103.png",
  o4: "104.png",
  o5: "105.png",
  o6: "106.png",
  o7: "107.png",
  o8: "108.png",
  o9: "109.png",
  o10: "110.png",
  o11: "111.png",
  o12: "112.png",
  o13: "113.png",
  o14: "114.png",
  o15: "115.png",
  o16: "116.png",
  o17: "117.png",
  o18: "118.png",
  o19: "119.png",
  o20: "120.png",
  o21: "121.png",
  o22: "122.png",
  o23: "123.png",
  o24: "124.png",
  o25: "125.png",
};
var fullA = [
  full.o1,
  full.o2,
  full.o3,
  full.o4,
  full.o5,
  full.o6,
  full.o7,
  full.o8,
  full.o9,
  full.o10,
  full.o11,
  full.o12,
  full.o13,
  full.o14,
  full.o15,
  full.o16,
  full.o17,
  full.o18,
  full.o19,
  full.o20,
  full.o21,
  full.o22,
  full.o23,
  full.o24,
  full.o25,
];

setUpChara();
start();
console.log(rand(2));

startBtn.onclick = startNum;
hairBtn.onclick = hbtnNum;
shirtBtn.onclick = sbtnNum;
jacketBtn.onclick = jbtnNum;
flBtn.onclick = fullLightNum;

function fullLightNum(){
    console.log(numFL);
  if (numFL != 0){
    numFL = 0;
    numStartbtn = 0;
    numHbtn = 0;
    numSbtn = 0;
    numJbtn = 0;
    flBtn.innerText = "Exclude the Outer";
    jacketBtn.disabled = false;
    jacketBtn.style.backgroundColor = "rgb(125, 149, 170)";
    btnStyle(startBtn);
    btnStyle(hairBtn);
    btnStyle(shirtBtn);
    btnStyle(jacketBtn);
    startBtn.innerText = "Start!";
    hairBtn.innerText = "Hair";
    shirtBtn.innerText = "Inner";
    jacketBtn.innerText = "Outer";
  }else{
    numFL++;
    numStartbtn = 0;
    numHbtn = 0;
    numSbtn = 0;
    numJbtn = 0;
    flBtn.innerText = "Include the Outer";
    jacketBtn.disabled = true;
    jBtnDisabledStyle();
    btnStyle(startBtn);
    btnStyle(hairBtn);
    btnStyle(shirtBtn);
    startBtn.innerText = "Start!";
    hairBtn.innerText = "Hair";
    shirtBtn.innerText = "Inner";
    jacketBtn.innerText = "Outer";
  };
  changeChara();
  stop();
}

function jBtnDisabledStyle(){
  jacketBtn.style.backgroundColor = "hsla(208, 21%, 58%, 0.2)";
  jacketBtn.style.border = "1px solid white";
  jacketBtn.style.color = "white";
}
function btnStyle(btn){
    btn.style.color = "white";
    btn.style.border = "1px solid white";
    btn.style.backgroundColor = "rgb(125, 149, 170)";
}

function stopBtnStyle(btn){
    btn.innerText = "Stop!";
    btn.style.color = "rgb(88, 55, 55)";
    btn.style.border = "1px dotted rgb(88, 55, 55)";
    btn.style.backgroundColor = "rgb(228, 218, 196)";
}

function startNum(){
    if(numStartbtn != 0){
        numStartbtn = 0;
        numHbtn = 0;
        numSbtn = 0;
        numJbtn = 0;
        stop();
        startBtn.innerText = "Start!";
        btnStyle(startBtn);
      }else{
        start();
        stopBtnStyle(startBtn);
        btnStyle(hairBtn);
        btnStyle(shirtBtn);
        hairBtn.innerText = "Hair";
        shirtBtn.innerText = "Inner";
        jacketBtn.innerText = "Outer";
        if(numFL == 0){
        btnStyle(jacketBtn);
        }else{jBtnDisabledStyle();}
        numStartbtn++;
      };
    }
function hbtnNum(){
    if(numHbtn != 0){
        numStartbtn = 0;
        numHbtn = 0;
        numSbtn = 0;
        numJbtn = 0;
        stop();
        hairBtn.innerText = "Hair";
        btnStyle(hairBtn);
      }else{
        hairStart();
        stopBtnStyle(hairBtn);
        btnStyle(startBtn);
        btnStyle(shirtBtn);
        if(numFL == 0){
          btnStyle(jacketBtn);
          }else{jBtnDisabledStyle();}
        startBtn.innerText = "Start!";
        shirtBtn.innerText = "Inner";
        jacketBtn.innerText = "Outer";
        numHbtn++;
      };
    }

function sbtnNum(){
    if(numSbtn != 0){
        numStartbtn = 0;
        numHbtn = 0;
        numSbtn = 0;
        numJbtn = 0;
        stop();
        shirtBtn.innerText = "Inner";
        btnStyle(shirtBtn);
      }else{
        innerStart();
        stopBtnStyle(shirtBtn);
        btnStyle(startBtn);
        btnStyle(hairBtn);
        if(numFL == 0){
          btnStyle(jacketBtn);
          }else{jBtnDisabledStyle();}
        startBtn.innerText = "Start!";
        hairBtn.innerText = "Hair";
        jacketBtn.innerText = "Outer";
        numSbtn++;
      };
    }

function jbtnNum(){
    if(numJbtn != 0){
        numStartbtn = 0;
        numHbtn = 0;
        numSbtn = 0;
        numJbtn = 0;
        stop();
        jacketBtn.innerText = "Outer";
        btnStyle(jacketBtn);
        }else{
        outerStart();
        stopBtnStyle(jacketBtn);
        btnStyle(startBtn);
        btnStyle(hairBtn);
        btnStyle(shirtBtn);
        startBtn.innerText = "Start!";
        hairBtn.innerText = "Hair";
        shirtBtn.innerText = "Inner";
        numJbtn++;
        };
    }

function collectNumO(){
    if(numO == 3 || numO == 8 || numO == 14 || numO == 17 || numO == 19 || numO == 20){
        numO = 3;
        if( rand(4) != 1 ){
            changeOuter();
        }
    }else if(numO == 10 || numO == 23){
        numO = 10;
            if( rand(2) != 1 ){
                changeOuter();
            }
    }else if(numO == 4 || numO == 21){
        numO = 4;
            if( rand(2) != 1 ){
                changeOuter();
            }
    };
}
function collectNumI(){
    if(numI == 10 || numI == 23){
        numI = 10;
                    if( rand(2) != 1){
                        changeInner();
                    }
    };
}

function collectNumH(){
    if(numH == 5 || numH == 7 || numH == 9 || numH == 12 || numH == 13 || numH == 14 || numH == 15 || numH == 19 || numH == 24 ){
        numH = 0;
        if( rand(8) != 1){
            changeHair();
        }
    }else if(numH == 2){
        numH = 1;
        if( rand(2) != 1){
            changeHair();
        }
    }else if(numH == 6 || numH == 23){
        numH = 3;
        if( rand(2) != 1){
            changeHair();
        }
    }else if(numH == 21){
        numH = 4;
        if( rand(2) != 1){
            changeHair();
        }
    }else if(numH == 19){
        numH = 18;
        if( rand(2) != 1){
            changeHair();
        }
    };
}
function stop(){
    clearInterval(roll);
    clearInterval(rollH);
    clearInterval(rollI);
    clearInterval(rollO);
    if(numFL != 0 || numO == 3){
        if(numH == 0){
            if(numI == 0 || numI == 5 || numI == 7 || numI == 9 || numI == 12 || numI == 13 || numI == 14 || numI == 15 || numI == 19 || numI == 24)
            {
                topImg.src = lFullA[numI];
            }else{
                changeChara();
            };
        }else if(numH == 1){
            if( numI == 1 || numI == 2){
                topImg.src = lFullA[numI];
            }else{
                changeChara();
            };
        }else if(numH == 3){
            if(numI == 3 || numI == 6 || numI == 23){
                topImg.src = lFullA[numI];
            }else{
                changeChara();
            };
        }else if(numH == 4){
            if(numI == 4 || numI == 21){
                topImg.src = lFullA[numI];
            }else{
                changeChara();
            };
        }else if(numH == 18){
            if(numI == 18 || numI == 19){
                topImg.src = lFullA[numI];
            }else{
                changeChara();
            };
        }else if(numH == 23){
            if(numI == 10){
                topImg.src = lFullA[23];                
            }else{
                changeChara();
            };
        }else if(numH == numI){
            topImg.src = lFullA[numI];
        }else{
            changeChara();
        };
    }else if(numI == numO){
        if(numH == 0){
            if(numI == 0 || numI == 5 || numI == 7 || numI == 9 || numI == 12 || numI == 13 || numI == 14 || numI == 15 || numI == 19 || numI == 24){
                topImg.src = fullA[numI];
            }else{
                changeChara();
            };
        }else if(numH == 1){
            if( numI == 1 || numI == 2){
                topImg.src = fullA[numI];
            }else{
                changeChara();
            };
        }else if(numH == 3){
            if(numI == 3 || numI == 6 || numI == 23){
                topImg.src = fullA[numI];
            }else if(numI == 22){
                topImg.src = fullA[6]
            }else{
                changeChara();
            };
        }else if(numH == 4){
            if(numI == 4 || numI == 21){
                topImg.src = fullA[numI];
            }else{
                changeChara();
            };
        }else if(numH == 18){
            if(numI == 18 || numI == 19){
                topImg.src = fullA[numI];
            }else{
                changeChara();
            };
        }else if(numH == 23 && numI == 10){
            topImg.src = fullA[23];
        }else if(numH == numI){
                topImg.src = fullA[numI];
        }else if(numH == 22 && numI == 6){
                topImg.src = fullA[22]
        }else{
            changeChara();
        };
    }else if(numO == 6 || numO == 22){
        if(numI == 6 || numI == 22){
            if(numH == 3){
                topImg.src = fullA[6]
            }else if(numH == 22){
                topImg.src = fullA[22]
            }else{
                changeChara();
            };
        }else{
            changeChara();
        };
    }else{
        changeChara();
    };
}

function start(){
  clearInterval(roll);
  clearInterval(rollH);
  clearInterval(rollI);
  clearInterval(rollO);
  roll = setInterval(cA, time);
}
function hairStart(){
  clearInterval(roll);
  clearInterval(rollH);
  clearInterval(rollI);
  clearInterval(rollO);
  rollH = setInterval(cH, time);
}
function innerStart(){
  clearInterval(roll);
  clearInterval(rollH);
  clearInterval(rollI);
  clearInterval(rollO);
  rollI = setInterval(cI, time);
}
function outerStart(){
  clearInterval(roll);
  clearInterval(rollH);
  clearInterval(rollI);
  clearInterval(rollO);
  rollO = setInterval(cO, time);
}

function cA(){
    changeAll();
    changeChara();
}
function changeAll(){
  numH = rand(25);
  numI = rand(25);
  numO = rand(25);
  collectNumH();
  collectNumO();
  collectNumI();
}

function cO(){
    changeOuter();
    changeChara();
}
function changeOuter(){
  numO = rand(25);
  collectNumO();
}

function cI(){
    changeInner();
    changeChara();
}
function changeInner(){
  numI = rand(25);
  collectNumI();
}

function cH(){
    changeHair();
    changeChara();
}
function changeHair(){
  numH = rand(25);
  collectNumH();
}

function changeChara(){
  if(numFL != 0 || numO == 3 || numO == 8 || numO == 14 || numO == 17 || numO == 19 || numO == 20){
    innerImg.src = lightA[numI];
    topImg.src = topA[0];
    outerImg.src = outerA[3];
    backImg.src = backA[3];
    console.log(numO, numH, numI);
  }else if(numO == 11){
      if(numI == 3 || numI == 11 || numI == 21){
        outerImg.src = outer12[1];
        innerImg.src = innerA[numI];
        topImg.src = topA[numI];
        backImg.src = backA[numO];
      }else if(numI == 8 || numI == 12 || numI == 13 || numI == 14){
        outerImg.src = outer12[2];
        innerImg.src = innerA[numI];
        topImg.src = topA[numI];
        backImg.src = backA[numO];
      }else if(numI == 24){
        outerImg.src = outer12[3];
        innerImg.src = innerA[numI];
        topImg.src = topA[numI];
        backImg.src = backA[numO];
      }else if(numI == 17){
        outerImg.src = outer12[4];
        innerImg.src = innerA[numI];
        topImg.src = topA[numI];
        backImg.src = backA[numO];
      }else{
        outerImg.src = outer12[0];
        innerImg.src = innerA[numI];
        topImg.src = topA[numI];
        backImg.src = backA[numO];
      }}else{
      innerImg.src = innerA[numI];
      topImg.src = topA[numI];
      outerImg.src = outerA[numO];
      backImg.src = backA[numO];
    };
    hairImg.src = hairA[numH];
  }

function setUpChara(){
  outerImg = document.querySelector("#outPng");
  innerImg = document.querySelector("#inPng");
  hairImg = document.querySelector("#hairPng");
  backImg = document.querySelector("#backPng");
  topImg = document.querySelector("#topPng");
  stopBtn = document.querySelector("#stopButton");
  startBtn = document.querySelector("#startButton");
  hairBtn = document.querySelector("#hairButton");
  shirtBtn = document.querySelector("#shirtButton");
  jacketBtn = document.querySelector("#jacketButton");
  flBtn = document.querySelector("#flButton");
}

function rand(num){
  return Math.floor(Math.random() * num);
}

console.log("JMJ Characters");
