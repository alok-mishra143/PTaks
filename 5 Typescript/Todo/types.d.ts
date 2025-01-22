// type.d.ts

interface TodosProps {
    id: number;       // The unique identifier for each todo (timestamp-based)
    text: string;     // The content of the todo item
    completed: boolean; // Whether the todo is completed or not
}

type FilterType = "all" | "active" | "completed";  // Filter types for the todos

interface editTodoProps {
    id: number;        // The ID of the todo item to edit
    oldText: string;   // The old text content of the todo item
}

