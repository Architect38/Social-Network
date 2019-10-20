let state = {
  dialogsPage:{
    users: [
        {id:1, name:"Andrew"},
        {id:2, name:"Katya"},
        {id:3, name:"Nastya"},
        {id:4, name:"Peter"}
    ],
    messages: [
        {id:1, message:"Hi, Im fine!"},
        {id:2, message:"Hello!"},
        {id:3, message:"How are u?"},
        {id:4, message:"Where are you from?"},
        {id:5, message:"It's so cool!"}, 
        {id:6, message:"I'm from volgograd"} 
    ]
  },
  profilePage:{
      posts: [
          {id:1, post:"Post#1"},
          {id:2, post:"Post#2"},
          {id:3, post:"Post#3"},
      ]
  }
}

let rerenderTree;
export function addPost(newPost){
  state.profilePage.posts.push({id:5,post:newPost});
  rerenderTree();
}
export function changePost(newText){
  
  rerenderTree();
}
export function subscribe(observer){ //паттерн наблюдатель. Вот так мы прокинули функцию из другого файла не используя импорт. Иначе была бы циркулярная зависимость, это плохо.
  rerenderTree = observer;
}

export default state;