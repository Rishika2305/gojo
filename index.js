var hehe = document.querySelector("h3");
var btnn = document.querySelector("#add");
var flag = 0;
//var remfr=document.querySelector("#remove")

btnn.addEventListener("click", function () {
  if (flag == 0) {
    hehe.innerHTML = "Gojo Satoru is your friend now";
    hehe.style.color = "green";
    flag = 1;
    btnn.innerHTML = "Remove Friend";
  } else {
    hehe.innerHTML = "Sent you a request";
    hehe.style.color = "red";
    flag = 0;
    btnn.innerHTML = "Add Friend";
  }
});

// remfr.addEventListener("click",function(){
//   hehe.innerHTML="Gojo Satoru is not your Friend"
//   hehe.style.color="red"
//  })
