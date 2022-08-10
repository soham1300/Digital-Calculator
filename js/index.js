var disp=document.querySelector(".output");
var hist=document.querySelector(".disp_hist");
var hist_data=document.querySelector(".hist_data");
var hist1=[];
var ans_hist=[];
flag=true;
function input(n)
{
    if(disp.value==0)
    {
        disp.value=n;
    }
    else
    {
        disp.value+=n;
    }
}
function reset()
{
    disp.value=0;
    hist.value="";
}
function ans()
{
    
    hist.value=disp.value+"=";
    hist1.push(hist.value);
    ans_hist.push(eval(disp.value));
    disp.value=eval(disp.value);
    history();
}
function history()
{
    hist_data.innerHTML="";
    for(var i=0;i<hist1.length;i++)
    {

       //console.log(hist1[i]);
       //console.log(ans_hist[i]);
       hist_data.innerHTML+="<div class='historyDiv'><p style='margin-right:5px; color:white;'>"+hist1[i]+"</p><p style='margin-right:5px;color:white;'>"+ans_hist[i]+"</p></div>";
    }
}
function backSpace()
{
    if(disp.value.length>1)
        disp.value=disp.value.slice(0,-1);
    else
        disp.value=0;
}

function showHistory()
{
    if (document.querySelector(".history").style.display=="none")
    {
        document.querySelector(".history").style.display="block";
        document.querySelector(".keys").style.display="none";
    }
    else
    {
        document.querySelector(".history").style.display="none";
        document.querySelector(".keys").style.display="block";
    }
}

function deleteHistory()
{
    let state=confirm(" Are You Sure Want To Delete History ? ");
    if(state==true)
    {
        document.querySelector(".hist_data").innerHTML="";
        ansHistory=[];
        equationHistory=[];
    }
}