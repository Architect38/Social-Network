//Типы action====================================
const add_post = "add_post";
const change_post = "change_post";
const add_message = "add_message";
//===============================================

//Конструкторы action============================
export const addPostActionCreator = function(newPost){
  return {type: add_post, newPost:newPost}
}
export const changePostActionCreator = function(){
  return {type: change_post}
}
export const addMessageActionCreator = function(message){
  return {type:add_message, message: message}
}
//=================================================
const store = {
  state:{
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
            {id:1, post:"Post#1", status:"added"},
            {id:2, post:"Post#2", status:"added"},
            {id:3, post:"Post#3", status:"added"},
        ]
    }
  },

  _rerenderTree(){},//после каждого события мы перерисовываем UI
  subscribe(observer){ //паттерн наблюдатель. Вот так мы прокинули функцию из другого файла не используя импорт. Иначе была бы циркулярная зависимость, это плохо.
    this._rerenderTree = observer;
  },
  //Методы============================================================
  _addPost(newPost){
    this.state.profilePage.posts.push({id:5,post:newPost, status:"added"});
    this._rerenderTree();
  },
  _changePost(){
    this._rerenderTree();
  },
  _addMessage(message){
    this.state.dialogsPage.messages.push({id:7, message:message});
    this._rerenderTree();
  },
  //=================================================================
  
  dispatch(action){
    if (action.type===add_post) this._addPost(action.newPost);
    if (action.type===change_post) this._changePost();
    if (action.type===add_message) this._addMessage(action.message);
  }
}
export default store;