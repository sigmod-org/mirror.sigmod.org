

<!-- Rollover JavaScript functions relies on image replacement feature -->
<!-- of JavaScript 1.1 -->
<!-- 

function nbsp() {document.write("&nbsp;");}
function copy() {document.write("&copy;");}

bName = navigator.appName;
bVer = parseInt(navigator.appVersion);
if ((bName == "Netscape" && 3 <= bVer) || (bName == "Microsoft Internet Explorer" && bVer == 4)) {
             ver = "n3";
        } else {
             ver = "xx";
}

if (ver == "n3") {


       
        
        seaon = new Image();
        seaon.src = "images/nav_sear_ro.gif";
       
        seaoff = new Image();
        seaoff.src = "images/nav_sear.gif";
        
        
        joion = new Image();
        joion.src = "images/nav_join_ro.gif";
       
        joioff = new Image();
        joioff.src = "images/nav_join.gif";
        
        
        feeon = new Image();
        feeon.src = "images/nav_feed_ro.gif";
       
        feeoff = new Image();
        feeoff.src = "images/nav_feed.gif";
        
        
        whaon = new Image();
        whaon.src = "images/nav_what_ro.gif";
       
        whaoff = new Image();
        whaoff.src = "images/nav_what.gif";
        
        
        homon = new Image();
        homon.src = "images/nav_home_ro.gif";
       
        homoff = new Image();
        homoff.src = "images/nav_home.gif";
        

       
}
function rollon(imgName) {
        if (ver == "n3") {
        imgOn = eval(imgName + "on.src");
        document[imgName].src = imgOn;
        }
}
function rolloff(imgName) {
        if (ver == "n3") {
        document[imgName].src = eval(imgName + "off.src");
        }
}
// -->
