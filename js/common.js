let form = document.querySelector(".form");
let num = document.querySelector(".num");
let name = document.querySelector(".name");
let tel = document.querySelector(".tel");
let address = document.querySelector(".address");
let day = document.querySelector(".day");
let rat = document.querySelector(".rat");
let code = document.querySelector(".code");
let submit = document.querySelector(".submit");
let inquiry = document.querySelector(".inquiry");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (num.value === "") {
        alert("회원번호가 입력되어 있지 않습니다");

        num.focus();
        return false;
    }
    if (name.value === "") {
        alert("회원성명가 입력되어 있지 않습니다");

        name.focus();
        return false;
    }
    if (tel.value === "") {
        alert("회원전화가 입력되어 있지 않습니다");

        tel.focus();
        return false;
    }
    if (address.value === "") {
        alert("회원주소가 입력되어 있지 않습니다");

        address.focus();
        return false;
    }
    if (day.value === "") {
        alert("가입일자가 입력되어 있지 않습니다");

        day.focus();
        return false;
    }
    if (rat.value === "") {
        alert("고객등급가 입력되어 있지 않습니다");

        rat.focus();
        return false;
    }
    if (code.value === "") {
        alert("도시코드가 입력되어 있지 않습니다");

        code.focus();
        return false;
    }

    alert("회원등록이 완료 되었습니다!");
    form.reset();

});

inquiry.addEventListener("click", function () {
    location.href = "inquiry.html";
})