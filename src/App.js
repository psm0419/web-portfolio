import './App.css';

function App() {
  return (
    <div className="App">
      <h1>박수민의 포트폴리오</h1>
      <div className="main-container">
        <div className="port-info">
          <h3>주제: 운동 기록을 제공하는 사용자 건강 관리 서비스</h3>
          <p>일정: 2024.11.25 ~ 2024.12.12</p>
          <p>사용 기술: HTML, CSS, JavaScript, React, GitHub, VSCode</p>
          <p>프로젝트 목적</p>
          <p> MZ세대를 위한 맞춤형 운동 프로그램 구축</p>
          <p>초급자부터 숙련자까지 각 단계에 맞춘 맞춤형 운동 프로그램 제공</p>
          <p>운동 기록 시각화 및 분석 기능 제공</p>
          <p>운동 초보자를 위한 전문가 상담 서비스 제공</p>
          <p>사용자에게 중요 정보를 전달하는 공지 시스템 제공</p>
          <a href="https://github.com/psm0419/web-portfolio.git">깃허브 링크: https://github.com/psm0419/web-portfolio.git</a>
        </div>
        <br></br>
        <div className="port-container">
          <div className="port-video">
            <video className="video" src={"https://psm0419.github.io/web-portfolio/videos/FirstProject.mp4"} autoPlay muted loop></video>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="port-info">
          <h3>주제: 공공데이터를 활용한 여행지 추천 및 여행 기록 공유 커뮤니티 서비스</h3>
          <p>일정: 2025.01.31 ~ 2025.02.19</p>
          <p>사용 기술: HTML, CSS, JavaScript, Spring Framework, MyBatis, Oracle DB,
            Tomcat, GitHub, VSCode</p>
          <p>프로젝트 목적</p>
          <p>해외여행 증가에 따른 국내 여행 활성화의 필요성 대두</p>
          <p>국내 지역 축제 정보 제공 및 홍보로 국내 여행 활성화에 기여</p>
          <p>축제 주변 관광지, 맛집, 숙박 정보 제공</p>
          <p>후기 게시판 및 질문 게시판을 통한 커뮤니티 정보 공유</p>
          <a href="https://github.com/psm0419/web-portfolio.git">깃허브 링크: https://github.com/psm0419/web-portfolio.git</a>
        </div>
        <br></br>
        <div className="port-container">
          <div className="port-video">
            <video className="video" src={"https://psm0419.github.io/web-portfolio/videos/SecondProject.mp4"} autoPlay muted loop></video>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="port-info">
          <h3>주제: 주유소/충전소 정보제공 및 현재위치 기준 목적지 추천 시스템</h3>
          <p>일정: 2025.02.24 ~ 2025.03.19</p>
          <p>사용 기술: HTML, CSS, JavaScript, React, Spring Framework, MyBatis, Oracle DB, Tomcat, GitHub, VSCode</p>
          <p>프로젝트 목적</p>
          <p>내 위치 기준 5km 이내 주유소 및 충전소 정보 제공</p>
          <p>최단거리 및 교통상황을 반영한 최적 경로 추천</p>
          <p>최저가, 즐겨찾기, 필터링 기능으로 빠르게 원하는 정보 검색</p>
          <p>멤버십 가입 시 할인 혜택 제공</p>
          <p>단위 환산, 세금, 불법 주유소 정보 등 세부 사항 제공</p>
          <a href="https://github.com/psm0419/web-portfolio.git">깃허브 링크: https://github.com/psm0419/web-portfolio.git</a>
        </div>
        <br></br>
        <div className="port-container">
          <div className="port-video">
            <video className="video" src={"https://psm0419.github.io/web-portfolio/videos/ThirdProject.mp4"} autoPlay muted loop></video>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
