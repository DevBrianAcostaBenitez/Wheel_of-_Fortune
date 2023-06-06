let generatedAddElements = []; 
function add() {
  var list = document.getElementById("list");
  var newListItem = document.createElement("li");
  var newListName = document.createElement("li");
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  var confirmButton = document.createElement("button");
  confirmButton.innerHTML = "Confirm";
  confirmButton.classList.add("confirmAddButton");
  confirmButton.addEventListener("click", function() {
    var newName = nameInput.value;
    if (newName.trim() !== "") {
      var newParagraph = document.createElement("p");
      newParagraph.innerHTML = newName;
      newListItem.remove()
      newListName.appendChild(newParagraph);
      list.appendChild(newListName);
      generatedAddElements =[]
    }
  });
  if (generatedAddElements .length == 0){
  newListItem.appendChild(nameInput);
  newListItem.appendChild(confirmButton);
  list.appendChild(newListItem);
  generatedAddElements.push(newListItem);
  }
  document.body.addEventListener('click', handleClickOutside.bind(null, newListItem));
}

function handleClickOutside(newListItem, event) {
  const target = event.target;
  const isGeneratedElement = generatedAddElements .some(element => element.contains(target));
  const isAddButton = target.classList.contains('addButton');
  const isConfirmButton = target.classList.contains('confirmAddButton');
  if (!isGeneratedElement && !isAddButton && !newListItem.contains(target) && !isConfirmButton ) {
    newListItem.remove();
    generatedAddElements =[]
  }
  
}