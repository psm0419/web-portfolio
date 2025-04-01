import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>박수민의 포트폴리오</h1>
        <p>신입 개발자로서의 여정을 소개합니다.</p>
      </header>

      <section className="project-section">
        <div className="main-container">
          <div className="port-info">
            <h3>운동 기록을 제공하는 사용자 건강 관리 서비스</h3>
            <p><strong>기간:</strong> 2024.11.25 ~ 2024.12.12</p>
            <p><strong>기술 스택:</strong> HTML, CSS, JavaScript, React, GitHub, VSCode</p>
            <div className="project-details">
              <h4>프로젝트 목표</h4>
              <ul>
                <li>MZ세대를 위한 맞춤형 운동 프로그램 구축</li>
                <li>초급자부터 숙련자까지 단계별 운동 프로그램 제공</li>
                <li>운동 기록 시각화 및 분석 기능 구현</li>
                <li>전문가 상담 서비스와 공지 시스템 제공</li>
              </ul>
              <p><strong>기여:</strong> 프로그램 소개, 회원가입, 로그인, 상담페이지 구현</p>
              <a href="https://github.com/psm0419/Pentagon.git" target="_blank" rel="noopener noreferrer">
                GitHub: Pentagon 프로젝트
              </a>
            </div>
          </div>
          <div className="port-video">
            <video className="video" src="https://psm0419.github.io/web-portfolio/videos/FirstProject.mp4" autoPlay muted loop />
          </div>
        </div>

        <div className="main-container">
          <div className="port-info">
            <h3>공공데이터를 활용한 여행지 추천 및 커뮤니티 서비스</h3>
            <p><strong>기간:</strong> 2025.01.31 ~ 2025.02.19</p>
            <p><strong>기술 스택:</strong> HTML, CSS, JavaScript, Spring Framework, MyBatis, Oracle DB, Tomcat, GitHub, VSCode</p>
            <div className="project-details">
              <h4>프로젝트 목표</h4>
              <ul>
                <li>국내 여행 활성화를 위한 지역 축제 정보 제공</li>
                <li>축제 주변 관광지, 맛집, 숙박 정보 통합</li>
                <li>커뮤니티 게시판을 통한 사용자 소통 기능 구현</li>
              </ul>
              <p><strong>기여:</strong> 공공API를 활용한 축제 주변 정보 지도 구현, 검색기능 구현</p>
              <a href="https://github.com/psm0419/TravelMaker.git" target="_blank" rel="noopener noreferrer">
                GitHub: TravelMaker 프로젝트
              </a>
            </div>
          </div>
          <div className="port-video">
            <video className="video" src="https://psm0419.github.io/web-portfolio/videos/SecondProject.mp4" autoPlay muted loop />
          </div>
        </div>

        <div className="main-container">
          <div className="port-info">
            <h3>주유소/충전소 정보 제공 및 경로 추천 시스템</h3>
            <p><strong>기간:</strong> 2025.02.24 ~ 2025.03.19</p>
            <p><strong>기술 스택:</strong> HTML, CSS, JavaScript, React, Spring Framework, MyBatis, Oracle DB, Tomcat, GitHub, VSCode</p>
            <div className="project-details">
              <h4>프로젝트 목표</h4>
              <ul>
                <li>내 위치 기준 5km 내 주유소/충전소 정보 제공</li>
                <li>최단거리 및 교통 상황 반영 경로 추천</li>
                <li>최저가 검색, 필터링, 멤버십 혜택 기능 구현</li>
              </ul>
              <p><strong>기여:</strong> 오피넷 API 활용 주유소, 충전소 지도 구현, 소셜 로그인 구현</p>
              <a href="https://github.com/psm0419/Juvo.git" target="_blank" rel="noopener noreferrer">
                GitHub: Juvo 프로젝트
              </a>
            </div>
          </div>
          <div className="port-video">
            <video className="video" src="https://psm0419.github.io/web-portfolio/videos/ThirdProject.mp4" autoPlay muted loop />
          </div>
        </div>
      </section>

      <footer>
        <p>문의: sm8804@naver.com | GitHub: <a href="https://github.com/psm0419" target="_blank" rel="noopener noreferrer">psm0419</a></p>
      </footer>
    </div>
  );
}

export default App;