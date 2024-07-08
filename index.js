const btn = document.getElementById('btn');
var addTodo = document.getElementById('inputValue');
var result = document.getElementById('result');

btn.addEventListener('click', addlist);

loadTodo();

// 1. 할 일 추가 함수 작성
    function addlist(){
        if(addTodo.value == false){
            alert('내용을 입력하세요.');
        }else {
            var list = document.createElement('li');
            var del = document.createElement('button');
            
            // 3. 할 일 목록 화면에 출력 
            list.innerHTML = addTodo.value;
            result.appendChild(list);
            list.appendChild(del);

            del.innerText = "x";
            del.style.fontSize = "20px";
            del.style.border = "none";
            del.style.float = "right";
            del.style.marginTop = "10px";
            del.style.right = "17px";
            del.style.cursor = "pointer";
            del.addEventListener('click', deletelist);
            del.style.position = "relative";

            saveTodo();
            addTodo.value = "";
            addTodo.focus();
        }
    }
// 2. 할 일 삭제 함수 작성
function deletelist(e){
    var removeli = e.target.parentElement;
    removeli.remove();
    saveTodo();
}
// 로컬스토리지
function saveTodo(){
    const todos = [];
    result.querySelectorAll('li').forEach((li) => {
        todos.push(li.firstChild.textContent);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}