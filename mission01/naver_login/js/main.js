
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{10,16}$/;
  return re.test(String(text).toLowerCase());
}


const userEmail = document.querySelector('.user-email-input');
const userPw = document.querySelector('.user-password-input');
const loginBtn = document.querySelector('.btn-login');

// 입력받은 값이 조건에 부합하는지 확인 후 경고메세지 조절
let checkInputValue = (func, input) => {
  func(input.value) == false ? input.classList.add('is--invalid') : input.classList.remove('is--invalid') }


// 경고창 메세지 사용, 등록된 유저인지 확인하고 알림창 띄우기
function checkUser(email, password) {
  checkInputValue(emailReg, email);
  checkInputValue(pwReg, password);
  
  if(email.value === "" || password.value === "") {
    alert('빈 칸을 입력해주세요!');

  } else if(user.id === email.value && user.pw === password.value) {
    window.location.href = 'welcome.html';

  } else if(user.id !== email.value) {
    alert('잘못된 아이디입니다!');
    
  } else if(user.pw !== password.value) {
    alert('잘못된 비밀번호입니다!');
  }
}

// 버튼 클릭 시 함수 실행
let handleLogin = event => {
  event.preventDefault(); // submit의 기본 동작(action의 url로 페이지 넘어가기) 막기
  checkUser(userEmail, userPw);
}

loginBtn.addEventListener('click', handleLogin);






/* 
function checkInputValue(input) {
  if(emailReg(input.value) == true) {
    input.classList.add('is--invalid');

  } else {
    input.classList.remove('is--invalid');

  }
}
 */

/* 
if(emailReg(userEmail.value) == true) {
  userEmail.classList.add('is--invalid');
  console.log(true);
} else {
  userEmail.classList.remove('is--invalid');
  console.log(false);
}

if(pwReg(userPw.value) == true) {
  userPw.classList.add('is--invalid');
  console.log(true);
} else {
  userPw.classList.remove('is--invalid');
  console.log(false);
} */

/* let handleLogin = event => {
  event.preventDefault(); // submit의 기본 동작(action의 url로 페이지 넘어가기) 막기
  if(user.id === userEmail.value && user.pw === userPw.value) {
    window.location.href = 'welcome.html';
  } else if(user.id !== userEmail.value) {
    alert('잘못된 아이디');
  } else if(user.pw !== userPw.value) {
    alert('잘못된 비밀번호');
  }
} */

/* 
function checkUser(email, password) {
  if(email.value === "" || password.value === "") {
    alert('빈 칸을 입력해주세요!');

  } else if(user.id === email.value && user.pw === password.value) {
    window.location.href = 'welcome.html';

  } else if(user.id !== email.value) {
    checkInputValue(emailReg, userEmail);
    alert('잘못된 아이디입니다!');
    
  } else if(user.pw !== password.value) {
    
    checkInputValue(pwReg, userPw);
    alert('잘못된 비밀번호입니다!');
  }
} */