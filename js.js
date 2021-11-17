
    document.getElementById("bottom_item_button_title").onclick = function () {
        let test = document.getElementById("bottom_item_form");
        let up = document.querySelector(".up");
        if(test.style.display == "none"){
          test.style.display = "flex";
          up.style.transform = "rotate(0deg)"
        }else {
          test.style.display = "none"
          up.style.transform = "rotate(-90deg)"
        }
    };


    document.getElementById("bottom_item_button_title1").onclick = function () {
      let test = document.getElementById("bottom_item_form1");
      let up = document.querySelector(".up1");
      if(test.style.display == "none"){
        test.style.display = "flex";
        up.style.transform = "rotate(0deg)"
      }else {
        test.style.display = "none"
        up.style.transform = "rotate(-90deg)"
      }
  };

  document.getElementById("bottom_item_button_title2").onclick = function () {
    let test = document.getElementById("bottom_item_form2");
    let up = document.querySelector(".up2");
    if(test.style.display == "none"){
      test.style.display = "flex";
      up.style.transform = "rotate(0deg)"
    }else {
      test.style.display = "none"
      up.style.transform = "rotate(-90deg)"
    }
};

document.getElementById("bottom_item_button_title3").onclick = function () {
  let test = document.getElementById("bottom_item_form3");
  let up = document.querySelector(".up3");
  if(test.style.display == "none"){
    test.style.display = "flex";
    up.style.transform = "rotate(0deg)"
  }else {
    test.style.display = "none"
    up.style.transform = "rotate(-90deg)"
  }
};