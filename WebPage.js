let modeBtn = document.querySelector(".Button");
let currMode = "light";//dark   

modeBtn.addEventListener("click", () => {
    if(currMode==="light")
    {
        currMode="dark";
        document.querySelector("body").style.backgroundColor="#212529";
        document.querySelector("body").style.color="#f0f8ff";
        // document.querySelectorAll(".new").style.color = "#f0f8ff";
        var text1 = document.getElementsByClassName("line3_1");
        text1[0].style.color = "white";
        for(var i = 0;i<text1.length;i++){
            console.log(text1[i].color);
           text1[i].style.color="blue";
        }
    } 
    
    else 
    {
        currMode="light";
        document.querySelector("body").style.backgroundColor= "#f0f8ff";
        document.querySelector("body").style.color="#212529";
        // document.querySelectorAll(".new").style.color = "#212529";
        var text1 = document.getElementsByClassName("line3_1");
        text1[0].style.color = "white";
        for(var i = 0;i<text1.length;i++){
            console.log(text1[i].color);
           text1[i].style.color="red";
        //    text1[i].style.backgroundColor = "red";
        }
    }

    console.log(currMode);
});