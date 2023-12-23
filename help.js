var menu = document.getElementById("menu");
var box = document.querySelector(".box");
var subbox = document.querySelector(".subbox");
var cancel = document.getElementById("cancel");


menu.addEventListener("click", function () {
    box.style.display = "block";
    box.style.transition = "all 1s ease-in-out";
    box.style.transform = "translatey(-20%)";
    box.style.position = "fixed";
    box.style.width = "100%";
    box.style.zIndex = "1";
});

cancel.addEventListener("click", function () {
    box.style.display = "none";
    box.style.transition = "all 1s ease-in-out";
});


var form_check = [
    { subq: "User Account:", checka1: "Issues with account registration", checka2: "Issues with account login" },
    { subq: "Notification Issues:", checka1: "Not receiving email notifications", checka2: "Incorrect or irrelevant notifications" },
    { subq: "Book Issues:", checka1: "Issues with book search", checka2: "Issues with book reading" },
    { subq: "Mobile Responsiveness:", checka1: "Site not displaying properly on mobile devices", checka2: "Issues with mobile navigation" },
    { subq: "Language/Localization:", checka1: "Issues with language selection", checka2: "Content not available in my preferred language" },
];

function formcreate() {
    var hole_tab = document.querySelector(".hole-tab");
    var help_tab = document.querySelector(".help-tab");

    form_check.forEach(function (f) {
        var form = document.createElement("div");

        var sub_ques1 = document.createElement("p");
        sub_ques1.className="sub-ques";
        sub_ques1.textContent = f.subq;
        form.appendChild(sub_ques1);
        sub_ques1.style.fontFamily="Roboto","sans-serif";
        sub_ques1.style.fontSize="14px";
        sub_ques1.style.textDecoration="underline";
        sub_ques1.style.letterSpacing="0.9px";
        sub_ques1.style.color="black";
        sub_ques1.style.fontWeight="600";

        var checkDiv1 = document.createElement("div");
        checkDiv1.className="check-div";
        checkDiv1.innerHTML = `<input type="checkbox" id="check-box" value="${f.checka1}"><p>${f.checka1}</p>`;
        form.appendChild(checkDiv1);
        checkDiv1.style.fontFamily="Roboto","sans-serif";

        var checkDiv2 = document.createElement("div");
        checkDiv2.classList.add("check-div");
        checkDiv2.innerHTML = `<input type="checkbox" id="check-box" value="${f.checka2}"><p>${f.checka2}</p>`;
        form.appendChild(checkDiv2);
        checkDiv2.style.fontFamily="Roboto","sans-serif";

        const form1=document.createElement("form");
        const div_form=document.createElement("div");

        form1.innerHTML=`<input type="text" id="text-box" placeholder="If Other Please Specify" required>`;
        form1.style.marginTop="10px";

        const submit=document.createElement("button");
        submit.innerHTML=`<input type="submit" id="submit" value="Submit">`;

        

        form1.appendChild(div_form);
        hole_tab.appendChild(form);
        help_tab.appendChild(form);
        help_tab.appendChild(form1);

    });
}

formcreate();

function submit(){
   
}
submit();
