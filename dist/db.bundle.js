/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "addData": () => (/* binding */ addData)
/* harmony export */ });
// Database creation
console.log("Sdsd");
let db;
window.onload = function () {
    let request = window.indexedDB.open('notes_db', 1);

    request.onerror = function () {
        console.log('Database failed to open');
    };
    request.onsuccess = function () {
        console.log('Database opened successfully');

        db = request.result;

        //displayData();
    };
    request.onupgradeneeded = function (e) {
        let db = e.target.result;
        let objectStore = db.createObjectStore('notes_os', {
            keyPath: 'id',
            autoIncrement: true
        });

        objectStore.createIndex('tasks', 'tasks', {
            unique: false
        });
        objectStore.createIndex('date', 'date', {
            unique: false
        });
        objectStore.createIndex('time', 'time', {
            unique: false
        });
        objectStore.createIndex('priority', 'priority', {
            unique: false
        });

        console.log('Database setup complete');
    };
};



function addData() {
    let newItem = {
        tasks: 'Task',
        date: "",
        time: "",
        Priority: "Low",
    }

    let transaction = db.transaction = db.transaction(['notes_os'], 'readwrite');

    let objectStore = transaction.objectStore('notes_os');

    let request = objectStore.add(newItem);
    request.onsuccess = function () {

    }

    transaction.oncomplete = function () {
        console.log('Database modification finished');

        //displayData();

    }

    transaction.onerror = function () {
        console.log('Transaction not opened due to error');
    };
}

function displayData() {
    while (ListeningStateChangedEvent.firstChild) {
        ListeningStateChangedEvent.removeChild(list.firstChild);
    }
    let objectStore = db.transaction('notes_os').objectStore('notes_os');
    objectStore.openCursor().onsuccess = function(e) {

        let cursor = e.target.result;
        if(cursor) {
            const listItem = document/createElement('li');
            const h3 = document.createAttribute('h3');
            const para = document.createElement('p')

            listItem.appendChild(h3);
            listItem.appendChild(para);
            list.appendChild(listItem);

            h3.textContent = cursor.value.title;
            para.textContent = cursor.value.body;

            listItem.setAttribute('data-note-id', cursor.value.id);

            const deleteBtn = document.createElement('button');
            listItem.appendChild(deleteBtn)
            deleteBtn.textContnet = 'Delete';

            deleteBtn.onclick = deleteItem;

            cursor.continue();
        } else {
            if(!list.firstChild) {
                const listItem = document.createElement('li');
                listItem.textContent = 'No notes stored.';
                list.appendChild(listItem);
            }
            console.log('Notes all displayed');
        }
    };
}

        

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVjOztBQUVQO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRiLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gRGF0YWJhc2UgY3JlYXRpb25cbmNvbnNvbGUubG9nKFwiU2RzZFwiKTtcbmxldCBkYjtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHJlcXVlc3QgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4oJ25vdGVzX2RiJywgMSk7XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBmYWlsZWQgdG8gb3BlbicpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5Jyk7XG5cbiAgICAgICAgZGIgPSByZXF1ZXN0LnJlc3VsdDtcblxuICAgICAgICAvL2Rpc3BsYXlEYXRhKCk7XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBkYiA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ25vdGVzX29zJywge1xuICAgICAgICAgICAga2V5UGF0aDogJ2lkJyxcbiAgICAgICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ3Rhc2tzJywgJ3Rhc2tzJywge1xuICAgICAgICAgICAgdW5pcXVlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoJ2RhdGUnLCAnZGF0ZScsIHtcbiAgICAgICAgICAgIHVuaXF1ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCd0aW1lJywgJ3RpbWUnLCB7XG4gICAgICAgICAgICB1bmlxdWU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgncHJpb3JpdHknLCAncHJpb3JpdHknLCB7XG4gICAgICAgICAgICB1bmlxdWU6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBzZXR1cCBjb21wbGV0ZScpO1xuICAgIH07XG59O1xuXG5leHBvcnQgeyBkYiB9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF0YSgpIHtcbiAgICBsZXQgbmV3SXRlbSA9IHtcbiAgICAgICAgdGFza3M6ICdUYXNrJyxcbiAgICAgICAgZGF0ZTogXCJcIixcbiAgICAgICAgdGltZTogXCJcIixcbiAgICAgICAgUHJpb3JpdHk6IFwiTG93XCIsXG4gICAgfVxuXG4gICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbJ25vdGVzX29zJ10sICdyZWFkd3JpdGUnKTtcblxuICAgIGxldCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdub3Rlc19vcycpO1xuXG4gICAgbGV0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5hZGQobmV3SXRlbSk7XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRGF0YWJhc2UgbW9kaWZpY2F0aW9uIGZpbmlzaGVkJyk7XG5cbiAgICAgICAgLy9kaXNwbGF5RGF0YSgpO1xuXG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RyYW5zYWN0aW9uIG5vdCBvcGVuZWQgZHVlIHRvIGVycm9yJyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheURhdGEoKSB7XG4gICAgd2hpbGUgKExpc3RlbmluZ1N0YXRlQ2hhbmdlZEV2ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgTGlzdGVuaW5nU3RhdGVDaGFuZ2VkRXZlbnQucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgbGV0IG9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24oJ25vdGVzX29zJykub2JqZWN0U3RvcmUoJ25vdGVzX29zJyk7XG4gICAgb2JqZWN0U3RvcmUub3BlbkN1cnNvcigpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICBsZXQgY3Vyc29yID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICBpZihjdXJzb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQvY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKCdoMycpO1xuICAgICAgICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gICAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChoMyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgICAgICAgICBoMy50ZXh0Q29udGVudCA9IGN1cnNvci52YWx1ZS50aXRsZTtcbiAgICAgICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBjdXJzb3IudmFsdWUuYm9keTtcblxuICAgICAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLW5vdGUtaWQnLCBjdXJzb3IudmFsdWUuaWQpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udG5ldCA9ICdEZWxldGUnO1xuXG4gICAgICAgICAgICBkZWxldGVCdG4ub25jbGljayA9IGRlbGV0ZUl0ZW07XG5cbiAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoIWxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9ICdObyBub3RlcyBzdG9yZWQuJztcbiAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3RlcyBhbGwgZGlzcGxheWVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4gICAgICAgIFxuIl0sInNvdXJjZVJvb3QiOiIifQ==