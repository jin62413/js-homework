const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{10,16}$/;
  return re.test(String(text).toLowerCase());
}

const userEmail = document.querySelector(".user-email-input");
const userPw = document.querySelector(".user-password-input");
const loginBtn = document.querySelector(".btn-login");

let checkUser = false;

function checkEmail() {
  if (emailReg(this.value) || userEmail.value == "") {
    this.classList.remove("is--invalid");
    checkUser = true;
  } else {
    this.classList.add("is--invalid");
    checkUser = false;
  }
}

function checkPw() {
  if (pwReg(this.value) || userPw.value == "") {
    this.classList.remove("is--invalid");
    checkUser = true;
  } else {
    this.classList.add("is--invalid");
    checkUser = false;
  }
}

userEmail.addEventListener("input", checkEmail);
userPw.addEventListener("input", checkPw);

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (checkUser && user.id === userEmail.value && user.pw === userPw.value) {
    window.location.href = "welcome.html";

  } else if (userEmail.value === "" || userPw.value === "") {
    alert("빈 칸을 입력해주세요!");

  } else if (user.id !== userEmail.value) {
    alert("잘못된 아이디입니다!");

  } else if (user.pw !== userPw.value) {
    alert("잘못된 비밀번호입니다!");
  }
});