// Database creation
console.log("Sdsd");
let db;



window.onload = function () {
    let request = window.indexedDB.open("notes_os", 1);

    request.onerror = function () {
        console.log('Database failed to open');
    };
    request.onsuccess = function () {
        console.log('Database opened successfully');

        db = request.result;

        displayData();
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

export { db };
const interval = setInterval(function() {
    //addData();
    //console.log('sdsd');
}, 1000);
export function addData(e) {
    console.log('sdsssssssssd');
    let tasksHtml = document.getElementById('u0').innerHTML;


    let newItem = {
        tasks: tasksHtml,
        date: "",
        time: "",
        Priority: "Low",
    }
    let transaction = db.transaction(['notes_os'], 'readwrite');

    let objectStore = transaction.objectStore('notes_os');

    let request = objectStore.add(newItem);
    request.onsuccess = function () {
        // clear form
    }

    transaction.oncomplete = function () {
        console.log('Database modification finished');
        displayData();
    }

    transaction.onerror = function () {
        console.log('Transaction not opened due to error');
    };
}
let list = document.getElementById("tableBody");
let x = 0;
function displayData() {

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    let objectStore = db.transaction('notes_os').objectStore('notes_os');
    objectStore.openCursor().onsuccess = function(e) {

        let cursor = e.target.result;
        if(cursor) {
            const listItem = document.createElement('tr');
            listItem.setAttribute('class', 'mdc-data-table__row');
            //listItem.setAttribute('data-row-id', 'u0');
            const td1 = document.createElement('td');
            td1.setAttribute('class', 'mdc-data-table__cell mdc-data-table__cell--checkbox');
            td1.setAttribute('data-row-id', 'u0');
            //td1.setAttribute('id', 'u0');
            td1.setAttribute('scope', 'row');
            const div = document.createElement('div');
            div.setAttribute('class', 'mdc-checkbox mdc-data-table__row-checkbox');
            div.setAttribute('data-row-id', 'u0');
            const input = document.createElement('input');
            input.setAttribute('class', 'mdc-checkbox__native-control');
            //input.setAttribute('aria-labelledby', 'u0');
            input.setAttribute('type', 'checkbox');
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'mdc-checkbox__background');
            const svg = document.createElement('svg');
            svg.setAttribute('class', 'mdc-checkbox__checkmark');
            svg.setAttribute('viewBox', '0 0 24 24');
            const path = document.createElement('path');
            path.setAttribute('class', 'mdc-checkbox__checkmark-path');
            path.setAttribute('d', 'M1.73,12.91 8.1,19.28 22.79,4.59');
            path.setAttribute('fill', 'none');
            const div3 = document.createElement('div');
            div3.setAttribute('class', 'mdc-checkbox__mixedmark');
            const div4 = document.createElement('div');
            div4.setAttribute('class', 'mdc-checkbox__ripple');

            const td2 = document.createElement('td');
            td2.setAttribute('class', 'mdc-data-table__cell');
            td2.setAttribute('contenteditable', 'true');
            td2.textContent = "Enter note here";
            td2.setAttribute('id', 'u' + x);
            x = x+1;

            const td3 = document.createElement('td');
            td3.setAttribute('class', 'mdc-data-table__cell');
            const input2 = document.createElement('input');
            input2.setAttribute('type', 'date');

            const td4 = document.createElement('td');
            td4.setAttribute('class', 'mdc-data-table__cell');
            const input3 = document.createElement('input');
            input3.setAttribute('type', 'time');
            input3.setAttribute('id', 'time');
            input3.setAttribute('name', 'appt');
            input3.setAttribute('value', '00:00');

            const td5 = document.createElement('td');
            td5.setAttribute('class', 'mdc-data-table__cell mdc-data-table__header-cell--numeric')
            const select = document.createElement('select');
            select.setAttribute('id', 'priority');
            select.setAttribute('name', 'priority');
            const option1 = document.createElement('option');
            option1.setAttribute('value', 'high');
            option1.textContent = "High";
            const option2 = document.createElement('option');
            option2.setAttribute('value', 'med');
            option2.textContent = "Medium";
            const option3 = document.createElement('option');
            option3.setAttribute('value', 'low');
            option3.textContent = "Low";

            const th = document.createElement('th');
            th.setAttribute('class', 'mdc-data-table__cell');
            th.setAttribute('id', 'wrapper');
            const span = document.createElement('span');
            span.setAttribute('class', 'material-icons mdc-list-item__graphic');
            span.textContent = "close";
            span.setAttribute('id', 'xBox');


            // Checkbox
            div2.appendChild(svg);
            div2.appendChild(div3)
            svg.appendChild(path);
            div.appendChild(input);
            div.appendChild(div2);
            div.appendChild(div4)
            td1.appendChild(div);
            listItem.appendChild(td1);

            // Task
            listItem.appendChild(td2);

            // Date
            td3.appendChild(input2);
            listItem.appendChild(td3);

            // Time
            td4.appendChild(input3);
            listItem.appendChild(td4);

            // Priority
            select.appendChild(option1);
            select.appendChild(option2);
            select.appendChild(option3);
            td5.appendChild(select);
            listItem.appendChild(td5);

            // Delete
            th.appendChild(span);
            listItem.appendChild(th);
            th.onclick = deleteItem;

            // Parent
            list.appendChild(listItem);
            listItem.setAttribute('data-note-id', cursor.value.id);

            //td1.textContent = cursor.value.title;
            //td2.textContent = cursor.value.body;
            console.log(cursor.value.id.length);
            for (let i = 0; i <  cursor.value.id.length; i++) {
                let tasksHtml = document.getElementById('u' + i).innerHTML;

                tasksHtml.textContent = tasksHtml;
            }
 


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

function deleteData() {
    let transaction = db.transaction(['notes_os'], 'readwrite');
    let objectStore = transaction.objectStore('notes_os');
    objectStore.clear();
    displayData();
}

let deleteAll = document.getElementById('deleteButton');
deleteAll.onclick = deleteData;

function deleteItem(e) {
    console.log(e.target.parentNode.getAttribute('data-note-id'));
    let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));
    console.log(noteId);

    let transaction = db.transaction(['notes_os'], 'readwrite');
    let objectStore = transaction.objectStore('notes_os');

    let request = objectStore.delete(noteId);

    transaction.oncomplete = function() {
        //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
    displayData();
    
}
