import React from "react";
import "./App.css";
import { ArrowRight, Gift, Search, ShoppingBag, User } from "lucide-react";

function App() {
  const getUrlArr = (n: number): string[] => {
    const newArr = [];
    for (let i = 0; i < n; i++) {
      newArr[i] = `https://picsum.photos/600?random=${i}`;
    }
    return newArr;
  };

  const urlArr = getUrlArr(30);

  const getGrid = (n: number): React.ReactElement => {
    return (
      <div className="grid">
        {Array.from({ length: n }).map((_, i) => (
          <img key={i} src={urlArr[i + 3]} alt="" />
        ))}
      </div>
    );
  };

  return (
    <div className="page">
      {/* 헤더 */}
      <div className="fixed">
        <header>
          {/* 왼쪽 */}
          <div className="left">
            {/* 로고 */}
            <div>
              <a className="logo" href="">
                kakaopage
              </a>
            </div>
            {/* 메뉴 */}
            <div className="menuBox">
              <a className="menu" href="">
                추천
              </a>
              <a className="menu" href="">
                웹툰
              </a>
              <a className="menu" href="">
                웹소설
              </a>
              <a className="menu" href="">
                책
              </a>
              <a className="menu" href="">
                바로가기
              </a>
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="right">
            <div className="search">
              <input type="text" placeholder="제목, 작가를 입력하세요" />
              <button>
                <Search></Search>
              </button>
            </div>
            <div className="buttons">
              <button>
                <ShoppingBag size={24}></ShoppingBag>
              </button>
              <button>
                <Gift></Gift>
              </button>
              <button>
                <User></User>
              </button>
            </div>
          </div>
        </header>
        <nav>
          <div className="buttons">
            <button>지금핫한</button>
            <button>실시간 랭킹</button>
            <button>오늘신작</button>
            <button>이벤트</button>
            <button>남성인기</button>
            <button>완결추천</button>
            <button>완결판</button>
            <button>여성인기</button>
            <button>TV속 작품</button>
            <button>브랜드</button>
          </div>
        </nav>
      </div>
      {/* 배너 */}
      <div className="contents">
        <div className="banner">
          <div className="left">
            <img src="../../public/img.jpg" alt="" />
            <p>#럭키위크 #마지막 캐시 선물!</p>
          </div>
          <button className="right">
            <ArrowRight />
          </button>
        </div>
      </div>
      {/* 1층 */}
      <div className="first">
        {/* left */}
        <div className="left">
          <img src={`${urlArr[0]}`} alt="" />
        </div>
        {/* mid */}
        <div className="mid">
          <img src={`${urlArr[1]}`} alt="" />
        </div>
        {/* right */}
        <div className="right">
          <img src={`${urlArr[2]}`} alt="" />
        </div>
      </div>
      {/* 2층 */}
      <div>{getGrid(6)}</div>
    </div>
  );
}

export default App;
