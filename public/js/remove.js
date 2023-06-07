function remove() {
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
    var removeButtonCount = document.querySelectorAll(".removeButton");
    if (removeButtonCount.length ===0){
    for (var i = 0; i < items.length; i++) {

      var removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.classList.add("removeButton");
      removeButton.addEventListener("click", function() {
        var listItem = this.parentNode;
        var index = Array.prototype.indexOf.call(items, listItem);
        list.removeChild(listItem);
        removeRemoveButtons(); 
      });
  
      items[i].appendChild(removeButton);
      
    }
  }
  }
  document.addEventListener("click", function(event) {
    var target = event.target;
    if (!target.matches(".removeButton") && !target.matches(".deleteButton")) {
      removeRemoveButtons()
    }
  })
  function removeRemoveButtons() {
    var removeButtons = document.querySelectorAll(".removeButton");

    for (var i = 0; i < removeButtons.length; i++) {
      removeButtons[i].remove();
    }
  }