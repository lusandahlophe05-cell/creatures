
        
function showHome()
{
    /*
        oop through all creatures
        
        if creature lives on land, background color green
        if creature lives in water, blue
        if creature lives in air, yellow
        
        */
        document.querySelectorAll("div.creature").forEach(el => {
          //el.style.backgroundColor = "yellow";
            let myHome = el.dataset.home;
            alert(myHome); 
            switch(home){
                case land:
                    el.style.backgroundColor = "green";
                break;
                case water:
                    el.style.backgroundColor = "blue";
                break;
                case air:
                    el.style.backgroundColor = "yellow";
            }
        });
        

    
}//end showHome()

function showType()
{
    /*
        loop through all creatures
        
        if creature is an animal, border color solid red
        if creature is an insect, border color is dashed orange
    */
    alert("showType()");
}//end showType()

function clearAll()
{
    /*
        loop through all creatures
        
        clear border back to 1px solid black
        clear background color to white
        
    */
    alert("clearAll()");
}//end clearAll()