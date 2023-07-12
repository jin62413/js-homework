
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
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


let userEmail = document.querySelector('.user-email-input');
let userPw = document.querySelector('.user-password-input');
let loginBtn = document.querySelector('.btn-login');


let checkInputValue = (func, input) => {
  let user = func(input.value) ? input.classList.add('is--invalid') : input.classList.remove('is--invalid');
}

checkInputValue(emailReg, userEmail);
checkInputValue(pwReg, userPw);


function checkUser(email, password) {
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
