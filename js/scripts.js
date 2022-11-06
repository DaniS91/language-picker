//business logic
function languagePicker(event) {
  event.preventDefault();
  //define input values

  const input1 = document.querySelector("input[name='question1']:checked").value;
  const input2 = document.querySelector("input[name='question2']:checked").value;
  const input3 = document.querySelector("input[name='question3']:checked").value;
  const input4 = document.querySelector("input[name='question5']:checked").value;
  console.log(input1);
  console.log(input2);
  console.log(input3);
  console.log(input4);
  if (input1 === "multi" && input4 === "generalist") {
    document.querySelector("div#result3").removeAttribute("class");
  } else if (input3 === "game") {
    document.querySelector("div#result1").removeAttribute("class");
  } else if (input2 === "low" || input2 === "generalist") {
    document.querySelector("div#result2").removeAttribute("class");
  } else {
    document.querySelector("div#result4").removeAttribute("class");
  }
  
};

//user interface logic

window.addEventListener("load", function() {
  const form = document.getElementById("quiz");
  form.addEventListener("submit", languagePicker)
})