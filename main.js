function setSrc() {
  var iframe = document.querySelector("#iframe");
  var mySource = document.querySelector("#srcInput").value;
  iframe.setAttribute("src", mySource);
  console.log(mySource);
}

////find the input field withh its id
////store the content of the input field in a variable
////apple that variable to the source of the iframe
