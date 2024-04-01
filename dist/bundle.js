(()=>{"use strict";const t=document.querySelector(".tbody"),e=Array.from({length:15},((t,e)=>({id:e+1,name:"Christmas 2020",advertiser:"Food Market",group:"Krab",description:"holiday night during christmas",price:"$2000",startTime:"2020/12/24 19:30",endTime:"2021/01/03"})));!function(){let a="";e.forEach((t=>{a+=`\n            <tr class="table-row">\n              <th scope="row"><input type="checkbox" class="table-checkbox"></th>\n              <td class="col-id">${t.id}</td>\n              <td class="col-name">${t.name}</td>\n              <td class="col-ad">${t.advertiser}<br><span class="group">${t.group}</span></td>\n              <td class="description">${t.description}</td>\n              <td class="col-price">${t.price}</td>\n              <td class="col-start">${t.startTime}</td>\n              <td class="col-end">${t.endTime}</td>\n              <td class="col-action">\n               <div class="action-toggle" id="action-toggle-${t.id}" data-item-id="${t.id}"></div>\n                <div class="action-wrapper toggle-hidden" id="action-wrapper-${t.id}">\n                  <ul class="action-list">\n                    <li class="action-item d-flex align-items-center"><img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/main/icons/duplicate.svg" alt="duplicate"><span>Duplicate</span></li>\n                    <li class="action-item d-flex align-items-center"><img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/main/icons/edit.svg" alt="edit"><span>Edit</span></li>\n                    <li class="action-item d-flex align-items-center"><img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/main/icons/delete.svg" alt="delete"><span>Delete</span></li>\n                    <ul />\n                </div>\n              </td>\n            </tr>\n    `})),t.innerHTML=a}();const a=document.getElementById("darkmode-toggle");document.querySelectorAll(".table-checkbox").forEach((t=>{t.addEventListener("change",(t=>{t.target.parentNode.parentNode.classList.toggle("selected")}))})),document.querySelectorAll(".action-toggle").forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-item-id");console.log(e),document.querySelector(`#action-wrapper-${e}`).classList.toggle("toggle-hidden")}))})),a.addEventListener("change",(t=>{t.target.checked?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}))})();