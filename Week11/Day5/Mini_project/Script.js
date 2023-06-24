// function displayTasks() {
//     var tasks = localStorage.getItem("tasks");
//     if (tasks) {
//       tasks = JSON.parse(tasks);
//     } else {
//       tasks = [];
//     }

//     var taskList = document.getElementById("taskList");
//     taskList.innerHTML = ""; // Clear previous list

//     tasks.forEach(function(task, index) {
//       var listItem = document.createElement("div");
//       listItem.classList.add("task");

//       var nameElement = document.createElement("div");
//       nameElement.classList.add("name");
//       nameElement.textContent = task.name;
//       listItem.appendChild(nameElement);

//       var datesElement = document.createElement("div");
//       datesElement.classList.add("dates");
//       datesElement.textContent = "Start: " + task.startDate + " | End: " + task.endDate;
//       listItem.appendChild(datesElement);

//       var daysLeftElement = document.createElement("div");
//       daysLeftElement.classList.add("days-left");
//       daysLeftElement.textContent = getDaysLeft(task.endDate) + " days left";
//       listItem.appendChild(daysLeftElement);

//       if (task.isCompleted) {
//         listItem.classList.add("completed");
//       }

//       listItem.addEventListener("click", function() {
//         alert(task.description);
//       });

//       var buttonsContainer = document.createElement("div");
//       buttonsContainer.classList.add("buttons");

//       var deleteButton = document.createElement("button");
//       deleteButton.textContent = "Delete";
//       deleteButton.addEventListener("click", function(event) {
//         event.stopPropagation();
//         if (confirm("Are you sure you want to delete this task?")) {
//           tasks.splice(index, 1);
//           localStorage.setItem("tasks", JSON.stringify(tasks));
//           displayTasks(); // Refresh the task list
//         }
//       });
//       buttonsContainer.appendChild(deleteButton);

//       var editButton = document.createElement("button");
//       editButton.textContent = "Edit";
//       editButton.addEventListener("click", function(event) {
//         event.stopPropagation();
//         // Add your logic for editing a task here
//         var editedTaskName = prompt("Edit task name:", task.name);
//         var editedTaskDescription = prompt("Edit task description:", task.description);
//         var editedStartDate = prompt("Edit start date:", task.startDate);
//         var editedEndDate = prompt("Edit end date:", task.endDate);

//         if (editedTaskName !== null) {
//           task.name = editedTaskName;
//         }
//         if (editedTaskDescription !== null) {
//           task.description = editedTaskDescription;
//         }
//         if (editedStartDate !== null) {
//           task.startDate = editedStartDate;
//         }
//         if (editedEndDate !== null) {
//           task.endDate = editedEndDate;
//         }

//         localStorage.setItem("tasks", JSON.stringify(tasks));
//         displayTasks(); // Refresh the task list
//       });
//       buttonsContainer.appendChild(editButton);

//       var completeButton = document.createElement("button");
//       completeButton.textContent = task.isCompleted ? "Uncomplete" : "Complete";
//       completeButton.addEventListener("click", function(event) {
//         event.stopPropagation();
//         task.isCompleted = !task.isCompleted;
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//         displayTasks(); // Refresh the task list
//       });
//       buttonsContainer.appendChild(completeButton);

//       listItem.appendChild(buttonsContainer);

//       taskList.appendChild(listItem);
//     });
//   }

//   function getDaysLeft(endDate) {
//     var today = new Date();
//     var end = new Date(endDate);
//     var timeDiff = end.getTime() - today.getTime();
//     var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
//     return daysLeft;
//   }

//   displayTasks(); // Display tasks on page load

//   document.getElementById("taskForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
//     var taskName = document.getElementById("taskName").value;
//     var taskDescription = document.getElementById("taskDescription").value;
//     var startDate = document.getElementById("startDate").value;
//     var endDate = document.getElementById("endDate").value;

//     var task = {
//       name: taskName,
//       description: taskDescription,
//       startDate: startDate,
//       endDate: endDate,
//       isCompleted: false
//     };

//     var tasks = localStorage.getItem("tasks");
//     if (tasks) {
//       tasks = JSON.parse(tasks);
//     } else {
//       tasks = [];
//     }

//     tasks.push(task);
//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     alert("Task added successfully!");
//     document.getElementById("taskForm").reset(); // Clear the form
//     displayTasks(); // Refresh the task list
//   });