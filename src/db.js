// Database creation
console.log("Sdsd");
let db;

deleteButton = document.getElementById("deleteButton");

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

export function addData() {
    let newItem = {
        tasks: 'Task',
        date: "",
        time: "",
        Priority: "Low",
    }
    console.log(db.transaction(['notes_os']));
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

function displayData() {

    let list = document.getElementById("tableBody");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    let objectStore = db.transaction('notes_os').objectStore('notes_os');
    objectStore.openCursor().onsuccess = function(e) {

        let cursor = e.target.result;
        if(cursor) {
            const listItem = document.createElement('tr');
            listItem.setAttribute('class', 'mdc-data-table__row');
            listItem.setAttribute('data-row-id', 'u0');
            const td1 = document.createElement('td');
            td1.setAttribute('class', 'mdc-data-table__cell mdc-data-table__cell--checkbox');
            td1.setAttribute('data-row-id', 'u0');
            const td2 = document.createElement('td');
            td2.setAttribute('class', 'mdc-data-table__cell');
            td2.setAttribute('contenteditable', 'true');
            const div = document.createElement('div');
            div.setAttribute('class', 'mdc-checkbox mdc-data-table__row-checkbox');
            div.setAttribute('data-row-id', 'u0');
            const input = document.createElement('input');
            input.setAttribute('class', 'mdc-checkbox__native-control');
            input.setAttribute('aria-labelledby', 'u0');
            input.setAttribute('type', 'checkbox');
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'mdc-checkbox__background');
            const svg = document.createElement('svg');
            svg.setAttribute('class', 'mdc-checkbox__checkmark');
            svg.setAttribute('viewBox', '0 0 24 24');
            const path = document.createElement('svg');
            path.setAttribute('class', 'mdc-checkbox__checkmark-path');
            path.setAttribute('d', 'M1.73,12.91 8.1,19.28 22.79,4.59');
            path.setAttribute('fill', 'none');
            const div3 = document.createElement('div');
            div3.setAttribute('class', 'mdc-checkbox__mixedmark');
            const div4 = document.createElement('div');
            div4.setAttribute('class', 'mdc-checkbox__ripple');


            div.appendChild(div4)
            div2.appendChild(div3)
            svg.appendChild(path);
            div2.appendChild(svg);
            div.appendChild(div2);
            div.appendChild(input);
            td1.appendChild(div);
            listItem.appendChild(td1);
            listItem.appendChild(td2);

            list.appendChild(listItem);

            //td1.textContent = cursor.value.title;
            //td2.textContent = cursor.value.body;

            //listItem.setAttribute('data-note-id', cursor.value.id);

            //const deleteBtn = document.createElement('button');
            //listItem.appendChild(deleteBtn)
            //deleteBtn.textContent = 'Delete';

            //deleteBtn.onclick = deleteItem;



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

