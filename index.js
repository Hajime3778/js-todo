// 入力テキストボックス
const todoInputText = document.getElementById("input_todo");

// 追加ボタン
const todoAddButton = document.getElementById("add_todo");

// TODO一覧
const todoList = document.getElementById("todo_list");

// 追加ボタンクリック時のイベントを登録
todoAddButton.addEventListener('click', () => {
  const todo = todoInputText.value;
  
  addTodo();
});

// TODO追加処理
function addTodo(todo) {
  // liを作成します
  const listItem = document.createElement("li");
  listItem.className = "todo_li";
  listItem.innerHTML = "ほげほげ";

  // 削除ボタンを作成します
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "DELETE";

  // liに対して、削除ボタンを追加します
  listItem.appendChild(deleteButton);
  
  // ulに対して liを追加します
  todoList.appendChild(listItem);
}
