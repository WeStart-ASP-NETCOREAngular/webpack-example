/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ToDo.ts":
/*!*********************!*\
  !*** ./src/ToDo.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ToDo {
    constructor() {
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
        return todo;
    }
    removeToDo(id) {
        // const index = this.todos.findIndex((object) => {
        //   return object.id === id;
        // });
        // console.log(index);
        this.todos = this.todos.filter((el) => {
            return el.id !== id;
        });
        // this.todos.slice(index, 1);
        // delete this.todos[index];
    }
    getList() {
        return this.todos;
    }
}
exports["default"] = ToDo;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ToDo_1 = __importDefault(__webpack_require__(/*! ./ToDo */ "./src/ToDo.ts"));
const ToDoListItems = document.getElementById("ToDoListItems");
const btnAdd = document.getElementById("btnAdd");
const todoInput = document.getElementById("todoInput");
btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    if (todoInput.value == "")
        return;
    const todoItem = todo.addTodo({
        id: todo.getList().length + 1,
        title: todoInput.value,
        isCompleted: false,
    });
    addItem(todoItem);
    todoInput.value = "";
});
const todo = new ToDo_1.default();
todo.addTodo({ id: 1, title: "title", isCompleted: true });
todo.addTodo({ id: 2, title: "test2", isCompleted: true });
todo.addTodo({ id: 3, title: "title", isCompleted: false });
todo.addTodo({ id: 4, title: "title", isCompleted: true });
todo.removeToDo(1);
console.log(todo.getList());
function addItem(todoItem) {
    const elementLI = document.createElement("li");
    elementLI.innerText = todoItem.title;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", (event) => {
        todo.removeToDo(todoItem.id);
        elementLI.remove();
        console.log(todo.getList());
    });
    const chkBox = document.createElement("input");
    chkBox.setAttribute("type", "checkbox");
    chkBox.classList.add("myCheckbox");
    elementLI.prepend(chkBox);
    elementLI.appendChild(deleteButton);
    ToDoListItems.appendChild(elementLI);
}
todo.getList().forEach((todoItem) => {
    addItem(todoItem);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxZQUFZLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUNsQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRW5DLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVwQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7SUFDbEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O1VDdkRIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVG9Eby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElUb0RvIGZyb20gXCIuL0lUb0RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcclxuICBwdWJsaWMgdG9kb3M6IElUb0RvW10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGFkZFRvZG8odG9kbzogSVRvRG8pOiBJVG9EbyB7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICByZXR1cm4gdG9kbztcclxuICB9XHJcblxyXG4gIHJlbW92ZVRvRG8oaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgob2JqZWN0KSA9PiB7XHJcbiAgICAvLyAgIHJldHVybiBvYmplY3QuaWQgPT09IGlkO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKGVsKSA9PiB7XHJcbiAgICAgIHJldHVybiBlbC5pZCAhPT0gaWQ7XHJcbiAgICB9KTtcclxuICAgIC8vIHRoaXMudG9kb3Muc2xpY2UoaW5kZXgsIDEpO1xyXG4gICAgLy8gZGVsZXRlIHRoaXMudG9kb3NbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGlzdCgpOiBJVG9Eb1tdIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgSVRvRG8gZnJvbSBcIi4vSVRvRG9cIjtcclxuaW1wb3J0IFRvRG8gZnJvbSBcIi4vVG9Eb1wiO1xyXG5cclxuY29uc3QgVG9Eb0xpc3RJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVG9Eb0xpc3RJdGVtc1wiKSE7XHJcbmNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuQWRkXCIpISBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvSW5wdXRcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5idG5BZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmICh0b2RvSW5wdXQudmFsdWUgPT0gXCJcIikgcmV0dXJuO1xyXG5cclxuICBjb25zdCB0b2RvSXRlbSA9IHRvZG8uYWRkVG9kbyh7XHJcbiAgICBpZDogdG9kby5nZXRMaXN0KCkubGVuZ3RoICsgMSxcclxuICAgIHRpdGxlOiB0b2RvSW5wdXQudmFsdWUsXHJcbiAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgfSk7XHJcbiAgYWRkSXRlbSh0b2RvSXRlbSk7XHJcblxyXG4gIHRvZG9JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbn0pO1xyXG5cclxuY29uc3QgdG9kbyA9IG5ldyBUb0RvKCk7XHJcblxyXG50b2RvLmFkZFRvZG8oeyBpZDogMSwgdGl0bGU6IFwidGl0bGVcIiwgaXNDb21wbGV0ZWQ6IHRydWUgfSk7XHJcbnRvZG8uYWRkVG9kbyh7IGlkOiAyLCB0aXRsZTogXCJ0ZXN0MlwiLCBpc0NvbXBsZXRlZDogdHJ1ZSB9KTtcclxudG9kby5hZGRUb2RvKHsgaWQ6IDMsIHRpdGxlOiBcInRpdGxlXCIsIGlzQ29tcGxldGVkOiBmYWxzZSB9KTtcclxudG9kby5hZGRUb2RvKHsgaWQ6IDQsIHRpdGxlOiBcInRpdGxlXCIsIGlzQ29tcGxldGVkOiB0cnVlIH0pO1xyXG5cclxudG9kby5yZW1vdmVUb0RvKDEpO1xyXG5jb25zb2xlLmxvZyh0b2RvLmdldExpc3QoKSk7XHJcblxyXG5mdW5jdGlvbiBhZGRJdGVtKHRvZG9JdGVtOiBJVG9Ebykge1xyXG4gIGNvbnN0IGVsZW1lbnRMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBlbGVtZW50TEkuaW5uZXJUZXh0ID0gdG9kb0l0ZW0udGl0bGU7XHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcclxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgdG9kby5yZW1vdmVUb0RvKHRvZG9JdGVtLmlkKTtcclxuICAgIGVsZW1lbnRMSS5yZW1vdmUoKTtcclxuICAgIGNvbnNvbGUubG9nKHRvZG8uZ2V0TGlzdCgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2hrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNoa0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgY2hrQm94LmNsYXNzTGlzdC5hZGQoXCJteUNoZWNrYm94XCIpO1xyXG5cclxuICBlbGVtZW50TEkucHJlcGVuZChjaGtCb3gpO1xyXG4gIGVsZW1lbnRMSS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICBUb0RvTGlzdEl0ZW1zLmFwcGVuZENoaWxkKGVsZW1lbnRMSSk7XHJcbn1cclxuXHJcbnRvZG8uZ2V0TGlzdCgpLmZvckVhY2goKHRvZG9JdGVtKSA9PiB7XHJcbiAgYWRkSXRlbSh0b2RvSXRlbSk7XHJcbn0pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9