document.getElementById(web_bg).style.backgroundImage = backimg[bgindex];
var bannerimg =[
  url(imgbg1.JPG),
  url(imgbg2.jpg),
  url(imgbg3.jpg),
  url(imgbg4.jpg)
];
var bannerindex =Math.ceil(Math.random()  (bannerimg.length-1));
document.getElementById(page-header).style.backgroundImage = bannerimg[bannerindex];