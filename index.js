let myLeads = []

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("save-tab")

let LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(LeadsFromLocalStorage)
{
   myLeads = LeadsFromLocalStorage
   renderLeads()
}


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

tabbtn.addEventListener("click", function(){
    chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads()

    })

})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    alert("Local storage data has been cleared.")
    myLeads = []
    renderLeads()
})



function renderLeads(){
    let listItems = ""
    for(let i =0;i<myLeads.length;i++)
    {
        listItems+= `<li><a href = '${myLeads[i]}' target ='_blank'>  ${myLeads[i]}  </a></li>`
        console.log(listItems)
    }

    ulEl.innerHTML = listItems
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
}




    


