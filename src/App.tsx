import React from "react";
import "./App.css";
import { Gift, Search, ShoppingBag, User } from "lucide-react";

function App() {
  return (
    <div className="page">
      <div>
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
        </nav>
      </div>
    </div>
  );
}

export default App;
