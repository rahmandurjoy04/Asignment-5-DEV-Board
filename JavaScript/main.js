const workButtons = document.querySelectorAll('.working-button');
// const workTitles = document.querySelectorAll('.work-title');
let clickCount = 0;
let leftCount = 6;
let rightCount = 23;


for(let i = 0; i < workButtons.length;i++){
    const workBtn = workButtons[i];
    workBtn.addEventListener('click',function(event){
        event.preventDefault();
        const workTitle = document.getElementsByClassName('work-title');
        const workTitleInnerText=workTitle[0].innerText;
       
        
        if(!workBtn.disabled === true){
            clickCount= clickCount+1;
            workBtn.setAttribute('disabled','true');
            workBtn.classList.add('bg-slate-200');
            alert('Board Updated Successfully!');

            // Adding Work Title
            // const workTitle = document.getElementsByClassName('work-title').innerText;
            // console.log(workTitle)
            // Removing count from left div
            leftCount--;
            document.getElementById('left-count').innerText=leftCount;
            
            // Adding Count to the right counter
            rightCount++;
            document.getElementById('right-count').innerText= rightCount;


            

            const container = document.getElementById('activity-div');
            const div =document.createElement('div');
            div.innerHTML=`
            <h1 class="bg-[#F4F7FF] p-4 m-4 text-sm rounded-xl">You Have completed the task "<span class="font-bold">${workTitleInnerText}</span>" at ${hour}:${minute}:${second} ${period}</h1>`
            // container.appendChild(div)
            container.insertBefore(div, container.firstChild);
            
        }
        if(clickCount === 6){
            alert('Congrats!!! You Have Completed All the current task');

        }

        


        // console.log(workBtn)
        // console.log(typeof workBtn)
        
    })
}
// Clearing the Activity Log
document.getElementById('activity-completed').addEventListener('click',function () {
    const container = document.getElementById('activity-div');
    container.innerHTML='';
    
});

// Generating Random BG color
document.getElementById('bg-changing').addEventListener('click',function(){
    const red =Math.floor(Math.random()*256);
    const green =Math.floor(Math.random()*256);
    const blue =Math.floor(Math.random()*256);
    const randomBG=`rgb(${red},${green},${blue})`

    // Changing the full html color
    document.getElementById('main-body').style.backgroundColor=randomBG;


})