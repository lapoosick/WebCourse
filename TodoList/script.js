"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const newTodoTextField = document.getElementById("new-todo-text-field");
    const newTodoForm = document.getElementById("new-todo-form");

    newTodoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        newTodoTextField.classList.remove("invalid");

        let newTodoText = newTodoTextField.value.trim();

        if (newTodoText.length === 0) {
            newTodoTextField.classList.add("invalid");

            return;
        }

        const newTodoItem = document.createElement("li");

        function setViewMode() {
            newTodoItem.innerHTML = `
                <div class="new-todo-item">
                    <div class="todo-text"></div>
                    <button class="edit-button" type="button">Редактировать</button>
                    <button class="delete-button" type="button">Удалить</button>
                </div>
            `;

            newTodoItem.querySelector(".todo-text").textContent = newTodoText;

            newTodoItem.querySelector(".delete-button").addEventListener("click", function () {
                newTodoItem.remove();
            });

            newTodoItem.querySelector(".edit-button").addEventListener("click", function () {
                newTodoItem.innerHTML = `
                    <form class="edit-todo-item-form">
                        <div class="todo-text">
                            <input class="edit-todo-text-field" type="text">
                            <div class="error-message">Необходимо добавить значение</div>
                        </div>
                       
                        <button class="save-button" type="submit">Сохранить</button>
                        <button class="cancel-button" type="button">Отмена</button>
                    </form>
                `;

                const editTodoTextField = newTodoItem.querySelector(".edit-todo-text-field");
                editTodoTextField.value = newTodoText;

                newTodoItem.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });

                const editTodoItemForm = newTodoItem.querySelector(".edit-todo-item-form");

                editTodoItemForm.addEventListener("submit", function (e) {
                    e.preventDefault();

                    const editedTodoText = editTodoTextField.value.trim();

                    if (editedTodoText.length === 0) {
                        editTodoTextField.classList.add("invalid");

                        return;
                    }

                    newTodoText = editedTodoText;
                    setViewMode();
                });
            });
        }

        setViewMode();

        todoList.appendChild(newTodoItem);

        newTodoTextField.value = "";
    });
});