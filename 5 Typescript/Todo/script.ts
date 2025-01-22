document.addEventListener('DOMContentLoaded', function () {

    let todos: TodosProps[] = JSON.parse(localStorage.getItem("todos") || "[]") as TodosProps[];

    let filter: FilterType = "all";

    const input = document.querySelector(".todo-input") as HTMLInputElement | null;
    const list = document.querySelector(".todo-list") as HTMLElement | null;
    const footer = document.querySelector(".footer") as HTMLElement | null;
    const count = document.querySelector(".todo-count") as HTMLElement | null;
    const darrow = document.getElementById("darrow") as HTMLElement | null;
    let editingTodoId: number | null = null;

    const saveTodosToLocalStorage = (): void => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const editTodo = ({ id, oldText }: editTodoProps): void => {
        const todoItem = document.querySelector(`[data-id='${id}']`) as HTMLElement | null;
        if (!todoItem) return;
        const todoText = todoItem.querySelector(".todo-text");

        // Replace the text with an input field for editing
        if (!todoText) return;
        todoText.innerHTML = `<input type="text" class="edit-input" value="${oldText}" />`;
        const editInput = todoItem.querySelector(".edit-input") as HTMLInputElement | null;

        // Focus on the input field
        if (editInput) {
            editInput.focus();
        }

        // Save the changes when "Enter" is pressed
        editInput && editInput.addEventListener("keypress", (e: KeyboardEvent) => {
            if (e.key === "Enter" && editInput.value.trim()) {
                const newText = editInput.value.trim();
                updateTodoText(id, newText);
            } else if (e.key === "Escape") {
                // Cancel edit on "Escape" key
                cancelEdit();
            }
        });

        // Save changes when input field loses focus (clicking outside)
        editInput && editInput.addEventListener("blur", () => {
            const newText = editInput.value.trim();
            if (newText) {
                updateTodoText(id, newText);
            } else {
                cancelEdit(); // Cancel edit if input is empty
            }
        });
    };

    const updateTodoText = (id: number, newText: string): void => {
        const todo = todos.find((t) => t.id === id);
        if (todo) {
            todo.text = newText;
            saveTodosToLocalStorage();
            render(); // Re-render the todos after updating the text
        }
    };

    // Cancel editing
    const cancelEdit = (): void => {
        editingTodoId = null; // Reset the editingTodoId
        render(); // Re-render the todos to restore the original text
    };

    const addTodo = (text: string): void => {
        todos.push({
            id: Date.now(),
            text,
            completed: false,
        });
        saveTodosToLocalStorage();
        render();
    };

    const toggleTodo = (id: number): void => {
        const todo = todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            saveTodosToLocalStorage();
            render();
        }
    };

    const deleteTodo = (id: number): void => {
        todos = todos.filter((t) => t.id !== id);
        saveTodosToLocalStorage();
        render();
    };

    const setFilter = (newFilter: FilterType): void => {
        filter = newFilter;
        document.querySelectorAll(".filter-btn").forEach((btn) => {
            (btn as HTMLElement).classList.toggle("active", (btn as HTMLElement).dataset.filter === newFilter);
        });
        render();
    };

    const clearCompleted = (): void => {
        // Ask the user for confirmation
        const isConfirmed = confirm("Are you sure you want to delete all completed todos?");

        // If the user confirms, proceed with filtering and rendering
        if (isConfirmed) {
            todos = todos.filter((t) => !t.completed);
            saveTodosToLocalStorage();
            render();
        }
    };

    const getFilteredTodos = (): TodosProps[] => {
        switch (filter) {
            case "active":
                return todos.filter((t) => !t.completed);
            case "completed":
                return todos.filter((t) => t.completed);
            default:
                return todos;
        }
    };

    const render = (): void => {
        if (!list) return;
        list.innerHTML = getFilteredTodos()
            .map(
                (todo) => `
             <div class="todo-item" data-id="${todo.id}">
        <input type="checkbox" class="todo-checkbox" id="checkbox-${todo.id}" ${
                    todo.completed ? "checked" : ""
                }>
        <label for="checkbox-${todo.id}" class="todo-checkbox-label"></label>
        <span class="todo-text">${todo.text}</span>
        <button class="delete-btn">Delete</button>
      </div>
          `
            )
            .join("");

        list.querySelectorAll(".todo-item").forEach((item) => {
            const id = parseInt((item as HTMLElement).dataset.id || "0");

            // Double-click to edit todo text (only one todo can be edited at a time)
            item.querySelector(".todo-text")?.addEventListener("dblclick", () => {

                if (editingTodoId && editingTodoId !== id) {
                    cancelEdit(); // Cancel any ongoing edit if a new todo is double-clicked
                }

                if (editingTodoId === id) return; // Prevent multiple edits on the same todo
                editingTodoId = id; // Set the editing ID
                const oldText = todos.find((todo) => todo.id === id)?.text || "";
                editTodo({ id, oldText });
            });

            item
                .querySelector(".todo-checkbox")
                ?.addEventListener("change", () => toggleTodo(id));
            item
                .querySelector(".delete-btn")
                ?.addEventListener("click", () => deleteTodo(id));
        });

        const activeCount = todos.filter((todo) => !todo.completed).length;
        count!.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""}`;

        if (footer) footer.style.display = todos.length ? "flex" : "none";

        // Show or hide the arrow based on the number of todos
        if (darrow) {
            darrow.style.display = todos.length > 0 ? "block" : "none"; // Show or hide the arrow
        }
    };

    // add event listener to the down-arrow that completes all tasks
    darrow?.addEventListener("click", () => {
        todos.forEach((todo) => {
            todo.completed = true;
        });
        saveTodosToLocalStorage();
        render();
    });

    input?.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && (e.target as HTMLInputElement).value.trim()) {
            addTodo((e.target as HTMLInputElement).value.trim());
            (e.target as HTMLInputElement).value = "";
        }
    });

    document.querySelector(".filters")?.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).classList.contains("filter-btn")) {
            setFilter((e.target as HTMLElement).dataset.filter as FilterType);
        }
    });

    document
        .querySelector(".clear-completed")
        ?.addEventListener("click", clearCompleted);

    render();
});
