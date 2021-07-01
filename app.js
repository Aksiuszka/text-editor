const buttons = document.querySelectorAll("button");
textFrame.document.designMode="on";
let show=false;

for(let i=0; i<buttons.length;i++){
buttons[i].addEventListener("click", ()=>{
let cmd=buttons[i].getAttribute('data-cmd');
if(cmd === "insertImage" || cmd === "createLink")
{
    let url= prompt("Wklej URL", "");
    textFrame.document.execCommand(cmd, false, url);

    if(cmd === "insertImage"){
        const images = textFrame.document.querySelectorAll('img');
        images.forEach(item => {
            item.style.maxWidth="400px";
            
        });
      
    }
    else
    {
        const link = textFrame.document.querySelectorAll('a');
        link.forEach(item =>{
            item.target="_blank";
            item.addEventListener("mouseover", ()=>{
                textFrame.document.designMode="off";
            });
            item.addEventListener("mouseout", ()=>{
                textFrame.document.designMode="on";
            });
        });
        }
}
else{
    textFrame.document.execCommand(cmd, false, null);
}
if(cmd === "showCode"){
    const code = textFrame.document.querySelector('body');
    if(show){
        code.innerHTML=code.textContent;
        show=false;
}else{
    code.textContent=code.innerHTML;
    show=true;
}
}
})
}
