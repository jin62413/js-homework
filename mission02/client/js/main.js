
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/



// 이미지 변경
function setImage(index) {
  const visualImage = getNode('.visual img');
  
  attr(visualImage, 'src', `./assets/${data[index-1].name}.jpeg`);
  attr(visualImage, 'alt', data[index-1].alt);
}

// 배경색 변경
function setBgColor(index) {
  const back = getNode('body');
  const colorA = `${data[index-1].color[0]}`;
  const colorB = `${data[index-1].color[1]}`;

  back.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

// 이름 변경
function setNameText(index) {
  const nickName = getNode('.nickName');
  
  nickName.textContent = data[index-1].name;
}

// 오디오 설정
function setAudio(index) {
  const path = `./assets/audio/${data[index-1].name}.m4a`;
  const audioPlayer = new AudioPlayer(path);

  audioPlayer.play();
}


function handleSlider(e) {
  e.preventDefault();
  
  const list = getNodes('.nav li');

  const target = e.target.closest('li');
  
  if(!target) return;
  
  const index = attr(target, 'data-index');

  // 이미지 테두리 설정
  list.forEach(li => removeClass(li, 'is-active'));
  addClass(target, 'is-active');

  setImage(index);
  setBgColor(index);
  setNameText(index);
  setAudio(index);
}

(function handleEvent() {
  const nav = getNode('.nav');
  
  nav.addEventListener('click', handleSlider);
})();

// (function () {
//   const nav = getNode(".navEl")
//   ...
// })()