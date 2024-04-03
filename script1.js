document.addEventListener("DOMContentLoaded", function() {
    var arr = [
        {item: "Charger"},
        {item: "Apple"},
        {item: "Android"},
        {item: "Nokia"}
    ];

    var left = document.querySelector(".left .main-list");
    var right = document.querySelector(".right .added-list");
    var addButton = document.querySelector("button");

    // Render initial list
    arr.forEach(function(elem,idx) {
        var itemContainer = document.createElement("div");
        itemContainer.classList.add("list");
        itemContainer.innerHTML = `
            <form action="">
                <label class="item">
                    ${idx + 1}. ${elem.item} 
                </label>
                <input type="checkbox" name="checkBox">
            </form>
        `;
        left.appendChild(itemContainer);
    });

    addButton.addEventListener("click", function() {
        var selectedItems = document.querySelectorAll('.left input[type="checkbox"]:checked');

        selectedItems.forEach(function(item) {
            // console.log(item.parentElement.querySelector('.item').textContent)
            var labelContent = item.parentElement.querySelector('.item').textContent;
            var newItem = document.createElement("div");
            newItem.textContent = labelContent;
            newItem.classList.add("added-item");
            right.appendChild(newItem);
        });
    });
});
