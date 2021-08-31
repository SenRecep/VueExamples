import Home from './components/Home.vue'
import Header from './components/Header.vue'
//TEST TEST TEST
const customRequire = (path, resolve) => {
    require.ensure([path], () => {
        resolve(require(path));
    });
};


const User = resolve =>{
    require.ensure(['./components/user/User.vue'],()=>{
        resolve(require('./components/user/User.vue'));
    },'User');
}

const UserStart = resolve =>{
    require.ensure(['./components/user/UserStart.vue'],()=>{
        resolve(require('./components/user/UserStart.vue'));
    },'User');
}

const UserEdit = resolve =>{
    require.ensure(['./components/user/UserEdit.vue'],()=>{
        resolve(require('./components/user/UserEdit.vue'));
    },'UserDetail');
}


const UserDetail = resolve =>{
    require.ensure(['./components/user/UserDetail.vue'],()=>{
        resolve(require('./components/user/UserDetail.vue'));
    },'UserDetail');
}

const NotFound = resolve =>{
    require.ensure(['./components/NotFound.vue'],()=>{
        resolve(require('./components/NotFound.vue'));
    });
}

//TEST TEST TEST
// const User = resolve => { customRequire('./components/user/User.vue', resolve); }
// const UserStart = resolve => { customRequire('./components/user/UserStart.vue', resolve); }
// const UserEdit = resolve => {customRequire('./components/user/UserEdit.vue', resolve);}
// const UserDetail = resolve => {customRequire('./components/user/UserDetail.vue', resolve);}
// const NotFound = resolve => {customRequire('./components/NotFound.vue', resolve);}


// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserEdit from './components/user/UserEdit.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import NotFound from './components/NotFound.vue'


// {path: '/', name: 'home', component: Home }
export default [
    {
        path: '/', name: 'home', components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user', name: 'user', children: [
            { path: "", component: UserStart },
            {
                path: ":id", component: UserDetail, beforeEnter: (to, from, next) => {
                    next();
                }
            },
            { path: "edit/:id", component: UserEdit, name: 'userEdit' },
        ],
        components: {
            default: User,
            // 'header-bottom': Header
            'header-top': Header
        }
    },
    {
        path: '/404',
        name: 'notfound',
        component: NotFound
    },
    {
        path: '/users',
        redirect: '/user'
    },
    {
        path: '/home',
        redirect: { name: 'home' }
    },
    {
        path: '*',
        redirect: { name: 'notfound' }
    }
]