import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

import user from './modules/user'
import notes from './modules/notes'

const userState = createPersistedState({
  key: 'indigo-app-user',
  paths: ['user.authenticated','user.user','user.token'],
  storage: {
    getItem: key => Cookies.get(key),
    setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
    removeItem: key => Cookies.remove(key),
  },
});

const notesState = createPersistedState({
  key: 'indigo-app-notes',
  paths: ['notes.notes'],
  storage: {
    getItem: key => Cookies.get(key),
    setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
    removeItem: key => Cookies.remove(key),
  },
});

export default createStore({
    
    modules:{
        user,
        notes
    },
    plugins:[userState,notesState]
})

 