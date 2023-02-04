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
 * Create new todo at todos list.
 * @param {TtodoItem[]} todoList - The list of todos.
 * @param {TtodoItem} todoItem - The todo which will be added at todos.
 */
function createItem(todoList, todoItem) {}

/**
 * Read todo list or specific item of todo list.
 * @param {TtodoItem[]} todoList - The list of todos.
 * @param {number} todoId - The identifier of item user want to read.
 */
function readList(todoList, todoId) {}

// Update todo list item with new item which will be replaced
/**
 * @param {TtodoItem[]} todoList 
 * @param {TtodoItem} updatedTodoItem
 */
function updateItem(todoList, updatedTodoItem) {}

// Delete todo list item based on id
/**
 * @param {TtodoItem[]} todoList
 * @param {TtodoItem} deletedTodoItem
 */
function deleteItem(todoList, deletedTodoItem) {}