import './scss/main.scss'
const tbody = document.querySelector(".tbody");

const Data = Array.from({ length: 15 }, (v, i) => ({
  id: i + 1,
  name: "Christmas 2020",
  advertiser: "Food Market",
  group: "Krab",
  description: "holiday night during christmas",
  price: "$2000",
  startTime: "2020/12/24 19:30",
  endTime: "2021/01/03"
}));

// Render資料列表
function generateTableRow() {
  let rawHTML = "";
  Data.forEach((item) => {
    rawHTML += `
            <tr class="table-row">
              <th scope="row"><input type="checkbox" class="table-checkbox"></th>
              <td class="col-id">${item.id}</td>
              <td class="col-name">${item.name}</td>
              <td class="col-ad">${item.advertiser}<br><span class="group">${item.group}</span></td>
              <td class="description">${item.description}</td>
              <td class="col-price">${item.price}</td>
              <td class="col-start">${item.startTime}</td>
              <td class="col-end">${item.endTime}</td>
              <td class="col-action">
               <div class="action-toggle" id="action-toggle-${item.id}" data-item-id="${item.id}"></div>
                <div class="action-wrapper toggle-hidden" id="action-wrapper-${item.id}">
                  <ul class="action-list">
                    <li class="action-item d-flex align-items-center"><img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/main/icons/duplicate.svg" alt="duplicate"><span>Duplicate</span></li>
                    <li class="action-item d-flex align-items-center"><img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/main/icons/edit.svg" alt="edit"><span>Edit</span></li>
                    <li class="action-item d-flex align-items-center"><img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/main/icons/delete.svg" alt="delete"><span>Delete</span></li>
                    <ul />
                </div>
              </td>
            </tr>
    `;
  });
  tbody.innerHTML = rawHTML;
}
generateTableRow();

// darkmode切換
const darkmodeToggle = document.getElementById("darkmode-toggle");
const darkmodeHandler = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

// table-row Input checked 被景色變橘色
const tableSelected = document.querySelectorAll(".table-checkbox");
tableSelected.forEach((row) => {
  row.addEventListener("change", (event) => {
    event.target.parentNode.parentNode.classList.toggle("selected");
  });
});

// action按鈕被觸發,跳出action list
const actionToggle = document.querySelectorAll(".action-toggle");
actionToggle.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    const itemId = event.target.getAttribute("data-item-id");
    console.log(itemId);
    const toggle = document.querySelector(`#action-wrapper-${itemId}`);
    toggle.classList.toggle("toggle-hidden");
});
});
  
  
darkmodeToggle.addEventListener("change", darkmodeHandler);