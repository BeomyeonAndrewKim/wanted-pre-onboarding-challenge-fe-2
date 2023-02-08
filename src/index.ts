/**
 * @typedef TtodoItem
 * @type {object}
 * @property {number} id
 * @property {string} title
 * @property {boolean} isDone
 * @property {string} category
 * @property {Ttag[]} [tags]
 */

/**
 * @typedef Ttag
 * @type {object}
 * @property {number} id
 * @property {string} title
 */

/**
 * @typedef TdeleteTodoParam
 * @type {object}
 * @property {number} id
 * @property {Ttag[]} [tags]
 */

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


/**
 * Create new todo at todos list.
 * @param {TtodoItem[]} todoList - The list of todos.
 * @param {TtodoItem} todoItem - The todo which will be added at todos.
 * @returns {void}
 */

function createItem(todoList: TtodoItem[], todoItem: TtodoItem): void { }

/**
 * Read todo list or specific item of todo list.
 * @param {TtodoItem[]} todoList - The list of todos.
 * @param {number} todoId - The identifier of item user want to read.
 * @returns {void}
 */
function readList(todoList: TtodoItem[], todoId: number) { }

// Update todo list item with new item which will be replaced
/**
 * @param {TtodoItem[]} todoList 
 * @param {TtodoItem} updatedTodoItem
 * @returns {void}
 */
function updateItem(todoList: TtodoItem[], updatedTodoItem: TtodoItem) { }

// Delete todo list item based on id. 
// If you delete whole tags or specific tag, pass new tags list(specific tag or whole tags deleted) at second param.
/**
 * @param {TtodoItem[]} todoList
 * @param {TdeleteTodoParam} deletedTodoItem 
 * @returns {void}
 */
function deleteItem(todoList: TtodoItem[], deletedTodoItem: TdeleteTodoParam) { }