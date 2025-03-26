import './App.css';

function App() {
  return (
    <div className="App">
      <h1>박수민의 포트폴리오</h1>

      <div className="port-container">
        <div className="port-video">
          <video src={"https://psm0419.github.io/web-portfolio/videos/FirstProject.mp4"} autoPlay muted loop></video>
        </div>
      </div>
<div className="port-info">
    <h3>주제: 운동 기록</h3>
    <p>일정: </p>
    <p>사용 기술: </p>
    <p>설명: </p>
    <a>깃허브 링크: https://github.com/psm0419/web-portfolio.git</a>
</div>




    </div>
  );
}

export default App;
