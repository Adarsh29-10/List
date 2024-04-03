var arr = [
    {item: "Bag"},
    {item: "Apple"},
    {item: "Android"}
]


var selected = 0;
var left = document.querySelector(".left .main-list")
var clutter = ' '
var listArr = []
var checkBoxes = document.querySelectorAll('input[name="checkBox"]');

arr.forEach(function(elem,idx){
    clutter += `
    <div class="list">
                    <form action="">
                        <label class="item" for="items">
                            ${idx + 1}. ${elem.item} 
                        </label>
                        <input type="checkbox" name="checkBox" id="items">
                    </form>
</div>
    `
    console.log(elem)
    
})
left.innerHTML = clutter;
