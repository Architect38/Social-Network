import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';

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
  
  dispatch(action){
    profileReducer(this.state.profilePage, action); 
    dialogsReducer(this.state.dialogsPage, action);
    this._rerenderTree();
  }
}
export default store;