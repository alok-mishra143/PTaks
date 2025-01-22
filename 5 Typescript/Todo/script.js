document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    var todos = JSON.parse(localStorage.getItem("todos") || "[]");
    var filter = "all";
    var input = document.querySelector(".todo-input");
    var list = document.querySelector(".todo-list");
    var footer = document.querySelector(".footer");
    var count = document.querySelector(".todo-count");
    var darrow = document.getElementById("darrow");
    var editingTodoId = null;
    var saveTodosToLocalStorage = function () {
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    var editTodo = function (_a) {
        var id = _a.id, oldText = _a.oldText;
        var todoItem = document.querySelector("[data-id='".concat(id, "']"));
        if (!todoItem)
            return;
        var todoText = todoItem.querySelector(".todo-text");
        // Replace the text with an input field for editing
        if (!todoText)
            return;
        todoText.innerHTML = "<input type=\"text\" class=\"edit-input\" value=\"".concat(oldText, "\" />");
        var editInput = todoItem.querySelector(".edit-input");
        // Focus on the input field
        if (editInput) {
            editInput.focus();
        }
        // Save the changes when "Enter" is pressed
        editInput && editInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter" && editInput.value.trim()) {
                var newText = editInput.value.trim();
                updateTodoText(id, newText);
            }
            else if (e.key === "Escape") {
                // Cancel edit on "Escape" key
                cancelEdit();
            }
        });
        // Save changes when input field loses focus (clicking outside)
        editInput && editInput.addEventListener("blur", function () {
            var newText = editInput.value.trim();
            if (newText) {
                updateTodoText(id, newText);
            }
            else {
                cancelEdit(); // Cancel edit if input is empty
            }
        });
    };
    var updateTodoText = function (id, newText) {
        var todo = todos.find(function (t) { return t.id === id; });
        if (todo) {
            todo.text = newText;
            saveTodosToLocalStorage();
            render(); // Re-render the todos after updating the text
        }
    };
    // Cancel editing
    var cancelEdit = function () {
        editingTodoId = null; // Reset the editingTodoId
        render(); // Re-render the todos to restore the original text
    };
    var addTodo = function (text) {
        todos.push({
            id: Date.now(),
            text: text,
            completed: false,
        });
        saveTodosToLocalStorage();
        render();
    };
    var toggleTodo = function (id) {
        var todo = todos.find(function (t) { return t.id === id; });
        if (todo) {
            todo.completed = !todo.completed;
            saveTodosToLocalStorage();
            render();
        }
    };
    var deleteTodo = function (id) {
        todos = todos.filter(function (t) { return t.id !== id; });
        saveTodosToLocalStorage();
        render();
    };
    var setFilter = function (newFilter) {
        filter = newFilter;
        document.querySelectorAll(".filter-btn").forEach(function (btn) {
            btn.classList.toggle("active", btn.dataset.filter === newFilter);
        });
        render();
    };
    var clearCompleted = function () {
        // Ask the user for confirmation
        var isConfirmed = confirm("Are you sure you want to delete all completed todos?");
        // If the user confirms, proceed with filtering and rendering
        if (isConfirmed) {
            todos = todos.filter(function (t) { return !t.completed; });
            saveTodosToLocalStorage();
            render();
        }
    };
    var getFilteredTodos = function () {
        switch (filter) {
            case "active":
                return todos.filter(function (t) { return !t.completed; });
            case "completed":
                return todos.filter(function (t) { return t.completed; });
            default:
                return todos;
        }
    };
    var render = function () {
        if (!list)
            return;
        list.innerHTML = getFilteredTodos()
            .map(function (todo) { return "\n             <div class=\"todo-item\" data-id=\"".concat(todo.id, "\">\n        <input type=\"checkbox\" class=\"todo-checkbox\" id=\"checkbox-").concat(todo.id, "\" ").concat(todo.completed ? "checked" : "", ">\n        <label for=\"checkbox-").concat(todo.id, "\" class=\"todo-checkbox-label\"></label>\n        <span class=\"todo-text\">").concat(todo.text, "</span>\n        <button class=\"delete-btn\">Delete</button>\n      </div>\n          "); })
            .join("");
        list.querySelectorAll(".todo-item").forEach(function (item) {
            var _a, _b, _c;
            var id = parseInt(item.dataset.id || "0");
            // Double-click to edit todo text (only one todo can be edited at a time)
            (_a = item.querySelector(".todo-text")) === null || _a === void 0 ? void 0 : _a.addEventListener("dblclick", function () {
                var _a;
                if (editingTodoId && editingTodoId !== id) {
                    cancelEdit(); // Cancel any ongoing edit if a new todo is double-clicked
                }
                if (editingTodoId === id)
                    return; // Prevent multiple edits on the same todo
                editingTodoId = id; // Set the editing ID
                var oldText = ((_a = todos.find(function (todo) { return todo.id === id; })) === null || _a === void 0 ? void 0 : _a.text) || "";
                editTodo({ id: id, oldText: oldText });
            });
            (_b = item
                .querySelector(".todo-checkbox")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", function () { return toggleTodo(id); });
            (_c = item
                .querySelector(".delete-btn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return deleteTodo(id); });
        });
        var activeCount = todos.filter(function (todo) { return !todo.completed; }).length;
        count.textContent = "".concat(activeCount, " item").concat(activeCount !== 1 ? "s" : "");
        if (footer)
            footer.style.display = todos.length ? "flex" : "none";
        // Show or hide the arrow based on the number of todos
        if (darrow) {
            darrow.style.display = todos.length > 0 ? "block" : "none"; // Show or hide the arrow
        }
    };
    // add event listener to the down-arrow that completes all tasks
    darrow === null || darrow === void 0 ? void 0 : darrow.addEventListener("click", function () {
        todos.forEach(function (todo) {
            todo.completed = true;
        });
        saveTodosToLocalStorage();
        render();
    });
    input === null || input === void 0 ? void 0 : input.addEventListener("keypress", function (e) {
        if (e.key === "Enter" && e.target.value.trim()) {
            addTodo(e.target.value.trim());
            e.target.value = "";
        }
    });
    (_a = document.querySelector(".filters")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
        if (e.target.classList.contains("filter-btn")) {
            setFilter(e.target.dataset.filter);
        }
    });
    (_b = document
        .querySelector(".clear-completed")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", clearCompleted);
    render();
});
