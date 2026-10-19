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

const addTodo = async (event) => {
    event.preventDefault();

    const todo = input.value

    console.log(todo);

    await connect_DataBase.from("todos").insert({ todo: todo })

}