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
        // clear
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

        
