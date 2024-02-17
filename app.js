const tasks = [
    {
      _id: '5d2ca9e2e03d40b326596aa7',
      completed: true,
      body:
        'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
      title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
      _id: '5d2ca9e29c8a94095c1288e0',
      completed: false,
      body:
        'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
      title:
        'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
    {
      _id: '5d2ca9e2e03d40b3232496aa7',
      completed: true,
      body:
        'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
      title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
      _id: '5d2ca9e29c8a94095564788e0',
      completed: false,
      body:
        'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
      title:
        'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
  ];
  
  (function(arrOfTasks) {
    const objOfTasks = arrOfTasks.reduce((acc, task) => {
      // acc[key] = value;
      acc[task._id] = task;
      // acc = {
      //   task._id: 0
      // }
      return acc;
    }, {});
  
    const themes = {
      default: {
        '--base-text-color': '#212529',
        '--header-bg': '#007bff',
        '--bg-theme': '#fff',
        '--header-text-color': '#fff',
        '--default-btn-bg': '#007bff',
        '--default-btn-text-color': '#fff',
        '--default-btn-hover-bg': '#0069d9',
        '--default-btn-border-color': '#0069d9',
        '--danger-btn-bg': '#dc3545',
        '--danger-btn-text-color': '#fff',
        '--danger-btn-hover-bg': '#bd2130',
        '--danger-btn-border-color': '#dc3545',
        '--input-border-color': '#ced4da',
        '--input-bg-color': '#fff',
        '--input-text-color': '#495057',
        '--input-focus-bg-color': '#fff',
        '--input-focus-text-color': '#495057',
        '--input-focus-border-color': '#80bdff',
        '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
      },
      dark: {
        '--base-text-color': '#212529',
        '--header-bg': '#343a40',
        '--bg-theme': '#161616',
        '--header-text-color': '#fff',
        '--default-btn-bg': '#58616b',
        '--default-btn-text-color': '#fff',
        '--default-btn-hover-bg': '#292d31',
        '--default-btn-border-color': '#343a40',
        '--default-btn-focus-box-shadow':
          '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        '--danger-btn-bg': '#b52d3a',
        '--danger-btn-text-color': '#fff',
        '--danger-btn-hover-bg': '#88222c',
        '--danger-btn-border-color': '#88222c',
        '--input-border-color': '#ced4da',
        '--input-bg-color': '#fff',
        '--input-text-color': '#495057',
        '--input-focus-bg-color': '#fff',
        '--input-focus-text-color': '#495057',
        '--input-focus-border-color': '#78818a',
        '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      },
      light: {
        '--base-text-color': '#212529',
        '--header-bg': '#fff',
        '--bg-theme': '#fff',
        '--header-text-color': '#212529',
        '--default-btn-bg': '#fff',
        '--default-btn-text-color': '#212529',
        '--default-btn-hover-bg': '#e8e7e7',
        '--default-btn-border-color': '#343a40',
        '--default-btn-focus-box-shadow':
          '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        '--danger-btn-bg': '#f1b5bb',
        '--danger-btn-text-color': '#212529',
        '--danger-btn-hover-bg': '#ef808a',
        '--danger-btn-border-color': '#e2818a',
        '--input-border-color': '#ced4da',
        '--input-bg-color': '#fff',
        '--input-text-color': '#495057',
        '--input-focus-bg-color': '#fff',
        '--input-focus-text-color': '#495057',
        '--input-focus-border-color': '#78818a',
        '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      },
    };
    let lastSelectedTheme = localStorage.appTheme || 'default';

    // новая переменная для хранения видимости задач
    let taskVisibility = 'all'; // 'all' - показать все, 'uncompleted' - показать незавершенные

  
    //Elements UI - user interface;
    const listContainer = document.querySelector('.tasks-list-section .list-group');
    const form = document.forms['addTask'];
    const inputTitle = form.elements['title'];
    const inputBody = form.elements['body'];
    const selectedTheme = document.getElementById('themeSelect');
  
    //events
    setTheme(lastSelectedTheme);
    selectedTheme.value = localStorage.getItem('appTheme');;  
    document.body.style.background = 'var(--bg-theme)';
    renderAllTasks(objOfTasks);
    form.addEventListener('submit', onSubmitHandler);
    listContainer.addEventListener('click', onDeleteHandler);
    selectedTheme.addEventListener('change', onThemeChangeHandler);
    // filterContainer.addEventListener('click', filterTodos);
  

function renderAllTasks(objOfTasks) {
  const isEmpty = Object.keys(objOfTasks).length === 0;

  // Проверка наличия задач
  if (isEmpty) {
    document.getElementById('noTasksMessage').style.display = 'block';
    listContainer.style.display = 'none';
  } else {
    document.getElementById('noTasksMessage').style.display = 'none';
    listContainer.style.display = 'block';

    const fragment = document.createDocumentFragment();
    const tasksArray = Object.values(objOfTasks);

    // Фильтрация задач в зависимости от видимости
    const filteredTasks = taskVisibility === 'uncompleted'
      ? tasksArray.filter(task => !task.completed)
      : tasksArray;

    // Сортировка задач для отображения завершенных в конце
    filteredTasks.sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });

    filteredTasks.forEach(task => {
      const list = listItemTemplate(task);
      fragment.appendChild(list);
    });

    listContainer.innerHTML = ''; // Очистим контейнер перед добавлением новых элементов
    listContainer.appendChild(fragment);
  }
}

// Обработчик кнопки "Show All Tasks"
document.getElementById('showAllTasks').addEventListener('click', () => {
  taskVisibility = 'all';
  renderAllTasks(objOfTasks);
});

// Обработчик кнопки "Show Uncompleted Tasks"
document.getElementById('showUncompletedTasks').addEventListener('click', () => {
  taskVisibility = 'uncompleted';
  renderAllTasks(objOfTasks);
});

    function listItemTemplate({ _id, title, body, completed }) {
        const listItem = document.createElement('li');
        listItem.classList.add(
          'list-group-item',
          'd-flex',
          'align-items-center',
          'flex-wrap',
          'mt-2',
          completed ? 'completed-task' : '0'
        );
        listItem.setAttribute('data-task-id', _id);
        const span = document.createElement('span');
        span.textContent = title;
        span.style.fontWeight = 'bold';
        span.style.fontSize = '1.5rem';
        const completeBtn = document.createElement('button');
        completeBtn.classList.add('btn', 'btn-success', 'ml-auto', 'complete-btn');
        completeBtn.textContent = 'Complete';
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
        deleteBtn.textContent = 'Delete task';
        const article = document.createElement('p');
        article.textContent = body;
        article.classList.add('mt-2', 'w-100');
        listItem.appendChild(span);
        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);
        listItem.appendChild(article);
      
        // обработчик события для кнопки "Выполнено"
        completeBtn.addEventListener('click', () => onCompleteHandler(_id));
      
        return listItem;
      }
      
      function onCompleteHandler(id) {
        const task = objOfTasks[id];
        task.completed = !task.completed;
      
        // Добавляем класс 'completed-task' и обновите стиль при выполнении задачи
        const listItem = document.querySelector(`[data-task-id="${id}"]`);
        listItem.classList.toggle('completed-task', task.completed);
      }
      
    function onSubmitHandler(e) {
      e.preventDefault();
      const titleValue = inputTitle.value;
      const bodyValue = inputBody.value;
      if (!titleValue || !bodyValue) {
        alert('Insert please your tasks in inputs!');
        return;
      };
      const listItem = createTask(titleValue, bodyValue);
      const created = listItemTemplate(listItem);
      listContainer.insertAdjacentElement('afterbegin', created);
      form.reset();
    }
    function createTask(title, body) {
      const newTask = {
        title,
        body,
        completed: false,
        _id: `task-${Math.random()}`,
      }
      objOfTasks[newTask._id] = newTask;
      return { ...newTask };
    }
    function deleteTask(id) {
      const { title } = objOfTasks[id];
      const isConfirm = confirm(`Do you want to delete task "${title}"?`);
      if(!isConfirm) return;
      delete objOfTasks[id];
      return isConfirm;
  }
    function onDeleteHandler({ target }) {
      if(target.classList.contains('delete-btn')) {
        const parent = target.parentElement;
        const id = parent.dataset.taskId;
        const confirmed = deleteTask(id);
        // Проверка наличия задач после удаления
      if (Object.keys(objOfTasks).length === 0) {
          document.getElementById('noTasksMessage').style.display = 'block';
          listContainer.style.display = 'none';
        }
        if (confirmed) parent.remove();
      }
    }
    function onThemeChangeHandler(e) {
      const selectedValue = selectedTheme.value;
      const isConfirm = confirm(`Do you want to change the theme to ${selectedValue}`);
      if(!isConfirm) {
        selectedTheme.value = lastSelectedTheme;
        return;
      };
      setTheme(selectedValue);
      lastSelectedTheme = selectedValue;
      localStorage.setItem('appTheme', lastSelectedTheme);  
    }
    function setTheme(name) {
      const selectedThemeObj = themes[name];
  
      Object.entries(selectedThemeObj).forEach(([key, value]) => {
        console.log(key, value);
        document.documentElement.style.setProperty(key, value);
      });
    }
  
  })(tasks);