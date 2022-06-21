function imagefun() {
  var Image_Id = document.getElementById('getImage');
  if (Image_Id.src.match("img1.jpg")) {
      Image_Id.src = "img2.jpg";
  }
  else {
      Image_Id.src = "img1.jpg";
  }
}