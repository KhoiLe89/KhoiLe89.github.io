var myImage = document.querySelector('section');
    myImage.onclick = function () {
        var mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/IMG_0003.jpg'){
            myImage.setAttribute ('src','images/IMG_0076.jpg');
        } else {
            myImage.setAttribute ('src','images/IMG_0003.jpg');
        }
    }

    $(".one").on("click", function(){
    $(".one").addClass("active")

  })
  $(".one").on("dblclick", function(){
    $(".one").addClass("nonactive")
  })
