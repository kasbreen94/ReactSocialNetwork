import avatar from './avatar.svg'

let state = {
    sidebar: {
        navbar: [
            {id: 1, select: 'Profile', address: 'profile', icon: avatar},
            {id: 2, select: 'Messages', address: 'dialogs', icon: avatar},
            {id: 3, select: 'News', address: 'news', icon: avatar},
            {id: 4, select: 'Music', address: 'music', icon: avatar},
            {id: 5, select: 'Settings', address: 'settings', icon: avatar}
        ],

        friends: [
            {id: 1, avatar: avatar, name: 'Dmitriy'},
            {id: 2, avatar: avatar, name: 'Andrey'},
            {id: 3, avatar: avatar, name: 'Svetlana'},
            {id: 4, avatar: avatar, name: 'Sasha'},
            {id: 5, avatar: avatar, name: 'Viktor'},
            {id: 6, avatar: avatar, name: 'Valera'}
        ]
    },

    profilePage: {
        posts: [
            {id: 1, message: 'tincidunt nunc pulvinar sapien et', like: 13},
            {id: 2, message: 'tellus molestie nunc non blandit', like: 3},
            {id: 3, message: 'donec ac odio tempor orci', like: 7},
            {id: 4, message: 'lacus sed viverra tellus in', like: 21},
            {id: 5, message: 'mauris a diam maecenas sed', like: 16}
        ]
    },
    dialogsPage:{
        messages: [
            {id: 1, message: 'tincidunt nunc pulvinar sapien et'},
            {id: 2, message: 'tellus molestie nunc non blandit'},
            {id: 3, message: 'donec ac odio tempor orci'},
            {id: 4, message: 'lacus sed viverra tellus in'},
            {id: 5, message: 'mauris a diam maecenas sed'},
            {id: 6, message: 'euismod quis viverra nibh cras'}
        ],
        dialogs: [
            {id: 1, name: 'Dmitriy', avatar: avatar},
            {id: 2, name: 'Andrey', avatar: avatar},
            {id: 3, name: 'Svetlana', avatar: avatar},
            {id: 4, name: 'Sasha', avatar: avatar},
            {id: 5, name: 'Viktor', avatar: avatar},
            {id: 6, name: 'Valera', avatar: avatar}
        ]
    },
}

export default state;