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
  o1: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out01.png?v=1660183426423 ",
  o2: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out02.png?v=1660183426029 ",
  o3: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out03.png?v=1660183425727 ",
  o4: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o5: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out05.png?v=1660183569051 ",
  o6: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out06.png?v=1660183569432 ",
  o7: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out07.png?v=1660183569485 ",
  o8: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out08.png?v=1660183569540 ",
  o9: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o10: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out10.png?v=1660183612877 ",
  o11: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out11.png?v=1660183613361 ",
  o12: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out12.png?v=1660183613092 ",
  o13: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out13.png?v=1660183616083 ",
  o14: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out14.png?v=1660183612811 ",
  o15: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o16: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out16.png?v=1660183700071 ",
  o17: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out17.png?v=1660183699305 ",
  o18: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o19: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out19.png?v=1660183699628 ",
  o20: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o21: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o22: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out22.png?v=1660183698777 ",
  o23: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out23.png?v=1660183700550 ",
  o24: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out24.png?v=1660183699428 ",
  o25: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out25.png?v=1660183699248 ",
  o1201w:
    " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out12-1whitre.png?v=1660183613707 ",
  o1202b:
    " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out12-2black.png?v=1660183615131 ",
  o1203namu:
    " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out12-3namu.png?v=1660183614063 ",
  o1204bl:
    " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/out12-4blue.png?v=1660183615563 ",
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
  o1: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in01.png?v=1660182969023 ",
  o2: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in02.png?v=1660182969167 ",
  o3: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in03.png?v=1660182969449 ",
  o4: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in04.png?v=1660182969895 ",
  o5: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in05.png?v=1660182970357 ",
  o6: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in06.png?v=1660182970856 ",
  o7: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in07.png?v=1660182971359 ",
  o8: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in08.png?v=1660182976399 ",
  o9: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in09.png?v=1660182971864 ",
  o10: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in10.png?v=1660182977009 ",
  o11: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in11.png?v=1660182976663 ",
  o12: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in12.png?v=1660182977449 ",
  o13: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in13.png?v=1660182979493 ",
  o14: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in14.png?v=1660182974441 ",
  o15: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in15.png?v=1660182972403 ",
  o16: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in16.png?v=1660182978487 ",
  o17: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in17.png?v=1660182978976 ",
  o18: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in18.png?v=1660182977998 ",
  o19: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in19.png?v=1660182972878 ",
  o20: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in20.png?v=1660182973433 ",
  o21: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in21.png?v=1660182973928 ",
  o22: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in22.png?v=1660182975633 ",
  o23: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in23.png?v=1660182976801 ",
  o24: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in24.png?v=1660182981039 ",
  o25: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/in25.png?v=1660182968846 ",
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
  o1: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair01.png?v=1660182772925 ",
  o2: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair02.png?v=1660182772394 ",
  o3: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair03.png?v=1660182773083 ",
  o4: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair04.png?v=1660182772883 ",
  o5: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair05.png?v=1660182779920 ",
  o6: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair06.png?v=1660182774621 ",
  o7: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair07.png?v=1660182781074 ",
  o8: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair08.png?v=1660182776516 ",
  o9: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair09.png?v=1660182779778 ",
  o10: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair10.png?v=1660182773662 ",
  o11: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair11.png?v=1660182777161 ",
  o12: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair12.png?v=1660182780768 ",
  o13: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair13.png?v=1660182776215 ",
  o14: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair14.png?v=1660182783128 ",
  o15: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair15.png?v=1660182777641 ",
  o16: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair16.png?v=1660182781805 ",
  o17: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair17.png?v=1660182782058 ",
  o18: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair18.png?v=1660182780004 ",
  o19: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair19.png?v=1660182782858 ",
  o20: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair20.png?v=1660182777920 ",
  o21: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair21.png?v=1660182775256 ",
  o22: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair22.png?v=1660182779030 ",
  o23: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair23.png?v=1660182775677 ",
  o24: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair24.png?v=1660182778512 ",
  o25: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/hair25.png?v=1660182772042 ",
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
  o1: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back01.png?v=1660182503393 ",
  o2: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back02.png?v=1660182503523 ",
  o3: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back03.png?v=1660182503916 ",
  o4: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back04.png?v=1660182504395 ",
  o5: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back05.png?v=1660182504842 ",
  o6: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back06.png?v=1660182506877 ",
  o7: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back07.png?v=1660182509470 ",
  o8: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back08.png?v=1660182508996 ",
  o9: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back04.png?v=1660182504395 ",
  o10: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back10.png?v=1660182505305 ",
  o11: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back11.png?v=1660182511885 ",
  o12: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back12.png?v=1660182512794 ",
  o13: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back13.png?v=1660182514167 ",
  o14: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back14.png?v=1660182513258 ",
  o15: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back04.png?v=1660182504395 ",
  o16: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back16.png?v=1660182505815 ",
  o17: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back17.png?v=1660182513712 ",
  o18: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back04.png?v=1660182504395 ",
  o19: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back19.png?v=1660182510948 ",
  o20: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back04.png?v=1660182504395 ",
  o21: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back04.png?v=1660182504395 ",
  o22: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back22.png?v=1660182507314 ",
  o23: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back23.png?v=1660182507766 ",
  o24: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back24.png?v=1660182508224 ",
  o25: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/back25.png?v=1660182503209 ",
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
  o1: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light01.png?v=1660183199634 ",
  o2: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light02.png?v=1660183200094 ",
  o3: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light03.png?v=1660183200506 ",
  o4: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light04.png?v=1660183201135 ",
  o5: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light05.png?v=1660183201596 ",
  o6: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light06.png?v=1660183202142 ",
  o7: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light07.png?v=1660183210890 ",
  o8: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light08.png?v=1660183204191 ",
  o9: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light09.png?v=1660183205803 ",
  o10: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light10.png?v=1660183205061 ",
  o11: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light11.png?v=1660183206314 ",
  o12: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light12.png?v=1660183206368 ",
  o13: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light13.png?v=1660183207609 ",
  o14: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light14.png?v=1660183206934 ",
  o15: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light15.png?v=1660183210098",
  o16: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light16.png?v=1660183207399 ",
  o17: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light17.png?v=1660183210275 ",
  o18: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light18.png?v=1660183208431 ",
  o19: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light19.png?v=1660183207836 ",
  o20: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light20.png?v=1660183210322 ",
  o21: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light21.png?v=1660183198550 ",
  o22: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light22.png?v=1660183198455 ",
  o23: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light23.png?v=1660183198823 ",
  o24: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light24.png?v=1660183199115 ",
  o25: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/light25.png?v=1660183199325 ",
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
  o1: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o2: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o3: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o4: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/top04.png?v=1660184672226 ",
  o5: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o6: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o7: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o8: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o9: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o10: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o11: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/top11.png?v=1660184674045 ",
  o12: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/top12.png?v=1660184673165 ",
  o13: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/top13.png?v=1660184672675 ",
  o14: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o15: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/top15.png?v=1660184673544 ",
  o16: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o17: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/top17.png?v=1660184671827 ",
  o18: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o19: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o20: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o21: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o22: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/top22.png?v=1660184671760 ",
  o23: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o24: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
  o25: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/blank.png?v=1660182504395 ",
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
  o1: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/001.png?v=1660181669231 ",
  o2: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/002.png?v=1660181668010 ",
  o3: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/003.png?v=1660181669587 ",
  o4: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/004.png?v=1660181671654 ",
  o5: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/005.png?v=1660181675193 ",
  o6: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/006.png?v=1660181666879 ",
  o7: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/007.png?v=1660181672399 ",
  o8: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/008.png?v=1660181671785 ",
  o9: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/009.png?v=1660181786609 ",
  o10: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/010.png?v=1660181673998 ",
  o11: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/011.png?v=1660181672093 ",
  o12: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/012.png?v=1660181674581 ",
  o13: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/013.png?v=1660181676305 ",
  o14: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/014.png?v=1660198335184 ",
  o15: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/015.png?v=1660181666711 ",
  o16: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/016.png?v=1660181674371 ",
  o17: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/017.png?v=1660181673115 ",
  o18: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/018.png?v=1660181673581 ",
  o19: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/019.png?v=1660181666559 ",
  o20: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/020.png?v=1660181669863 ",
  o21: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/021.png?v=1660181674348 ",
  o22: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/022.png?v=1660181673415 ",
  o23: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/023.png?v=1660181672639 ",
  o24: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/024.png?v=1660181675669 ",
  o25: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/025.png?v=1660181670024 ",
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
  o1: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/101.png?v=1660181963153 ",
  o2: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/102.png?v=1660181953337 ",
  o3: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/103.png?v=1660181954491 ",
  o4: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/104.png?v=1660181955810 ",
  o5: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/105.png?v=1660181959779 ",
  o6: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/106.png?v=1660181959723 ",
  o7: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/107.png?v=1660181960923 ",
  o8: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/108.png?v=1660181962787 ",
  o9: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/109.png?v=1660182063938 ",
  o10: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/110.png?v=1660181963422 ",
  o11: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/111.png?v=1660181956581 ",
  o12: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/112.png?v=1660181959598 ",
  o13: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/113.png?v=1660181956278 ",
  o14: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/114.png?v=1660198335098 ",
  o15: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/115.png?v=1660181961746 ",
  o16: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/116.png?v=1660181961682 ",
  o17: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/117.png?v=1660228104867 ",
  o18: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/118.png?v=1660181959198 ",
  o19: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/119.png?v=1660181960643 ",
  o20: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/120.png?v=1660181954183 ",
  o21: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/121.png?v=1660181956511 ",
  o22: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/122.png?v=1660181954300 ",
  o23: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/123.png?v=1660181954982 ",
  o24: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/124.png?v=1660181955910 ",
  o25: " https://cdn.glitch.global/b6576c36-f1e7-428f-893c-ad54b80eb4fe/125.png?v=1660181957111 ",
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
