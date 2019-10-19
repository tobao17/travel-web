//start js by kienz
document.addEventListener("DOMContentLoaded", function(){

    var iconList = document.getElementsByClassName('itemList');
    var iconList1 = document.getElementById('icon1');
    var iconList2 = document.getElementById('icon2');
    var menuShow = document.getElementById('menu');

    console.log(menuShow);
    console.log(iconList1);
    console.log(iconList2);
    iconList[0].onclick = function(){
        iconList1.classList.toggle('hiddenIcon1');
        iconList2.classList.toggle('showIcon2');
        menuShow.classList.toggle('showul');
        demoBody[0].classList.toggle("showBody");
    }


    var btnPlay = document.getElementsByClassName('iconPlay');
    var showVideo = document.getElementsByClassName('maldives');

    var demoBody = document.getElementsByClassName("demoBody");

    btnPlay[0].onclick = function(){
        showVideo[0].classList.add("showVideo");

        
         demoBody[0].classList.add("showBody"); 
    }


    demoBody[0].onclick = function(){
        showVideo[0].classList.remove("showVideo");
        demoBody[0].classList.remove("showBody");
    }
    
})
//end js by kienz