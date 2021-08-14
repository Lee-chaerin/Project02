const quotes = [
  {
    quote: "피할수 없으면 즐겨라.",
    author: "로버트 엘리엇",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
    author: "F.스콧 핏제랄드",
  },
  {
    quote: "계단을 밟아야 계단 위에 올라설 수 있다.",
    author: "터키 속담",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
    author: "찰스다윈",
  },
  {
    quote: "계획 없는 목표는 한낱 꿈에 불과하다.",
    author: "생텍쥐페리",
  },
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
    author: "나폴레옹",
  },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    author: "이소룡",
  },
  {
    quote: "실패하는 것은 곧 성공으로 한 발짝 더 나아가는 것이다.",
    author: "메리 케이 애쉬",
  },
  {
    quote: "위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다.",
    author: "워싱턴 어빙",
  },
  {
    quote: "성공이란 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다.",
    author: "윈스턴 처칠",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuoto = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuoto.quote;
author.innerText = todaysQuoto.author;