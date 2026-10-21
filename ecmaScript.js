// Fa102AHLdjFS8kDz

// 1) https://zkkoisemutylfxupgwev.supabase.co
// 2) sb_publishable_BWG_rDS_7v1Gx4sDPT6uUA_jCi9lwyy


const input = document.querySelector("#todo-input");
const ul = document.querySelector("#todos-output");



const supabasUrl = 'https://zkkoisemutylfxupgwev.supabase.co';

const supabasKey = 'sb_publishable_BWG_rDS_7v1Gx4sDPT6uUA_jCi9lwyy';

const connect_DataBase = supabase.createClient(supabasUrl,supabasKey);

// const getData = async () => {
//     const response = await connect_DataBase.from('todos').select('*');
// }

const getData = async () => {
  ul.innerHTML = "";

  const response = await connect_DataBase.from("todos").select("*");
  const todos = response.data;

  for (let i = 0; i < todos.length; i++) {

    ul.innerHTML += `<li>${todos[i].todo} <button onclick="deleteTodo(${todos[i].id})"><i class="fa-regular fa-trash-can fa-float"></i></button> </li>`;

  }
};
getData();


const addTodo = async (event) => {
    event.preventDefault();

    const todo = input.value

    // console.log(todo);

    await connect_DataBase.from("todos").insert({ todo: todo })

    input.value = "";

    getData();

}



const deleteTodo = async (id) => {
  const response = await connect_DataBase.from("todos").delete().eq("id", id);

  if (!response.error) {
    getData();
  }
};