// 入力テキストボックス
const todoInputText = document.getElementById("input_todo");

// 追加ボタン
const todoAddButton = document.getElementById("add_todo");

// TODO一覧
const todoList = document.getElementById("todo_list");

// 追加ボタンクリック時のイベントを登録
todoAddButton.addEventListener('click', () => {

  // 入力した内容が空だったら
  if (todoInputText.value == "") {
    alert("TODOを入力してください");
    return;
  }

  // TODO作成処理
  addTodo(todoInputText.value);

  // 入力初期化
  todoInputText.value = "";
});

function addTodo(todo) {
  // liを作成します
  const listItem = document.createElement("li");
  listItem.className = "todo_li";
  listItem.innerHTML = todo;

  // 削除ボタンを作成します
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "DELETE";

  // liに対して、削除ボタンを追加します
  listItem.appendChild(deleteButton);
  
  // ulに対して liを追加します
  todoList.appendChild(listItem);

  // 削除ボタンクリック時のイベントを登録する
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });
}
