function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    
    if (task === '') {
      alert("Please enter a task");
      return;
    }
    
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
      li.remove();
    };
    
    li.appendChild(deleteButton);
    ul.appendChild(li);
    
    input.value = '';
  }
  