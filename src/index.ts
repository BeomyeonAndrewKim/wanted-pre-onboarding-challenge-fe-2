interface TtodoItem {
  id: number;
  title: string;
  isDone: boolean;
  category: string;
  tags?: Ttag[]
}

interface Ttag {
  id: number;
  title: string
}

interface TdeleteTodoParam {
  id: number;
  tags?: Ttag[];
}


// Create new todo at todos list.
function createItem(todoList: TtodoItem[], todoItem: TtodoItem): void { }

// Read todo list or specific item of todo list.
function readList(todoList: TtodoItem[], todoId: number): void { }

// Update todo list item with new item which will be replaced
function updateItem(todoList: TtodoItem[], updatedTodoItem: TtodoItem): void { }

// Delete todo list item based on id. 
// If you delete whole tags or specific tag, pass new tags list(specific tag or whole tags deleted) at second param.
function deleteItem(todoList: TtodoItem[], deletedTodoItem: TdeleteTodoParam): void { }