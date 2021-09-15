let state = {
    dialogsPage: {
        dialogs: [{
            name: 'Andrey', id: 1
        },
            {
                name: 'Dima', id: 2
            },
            {
                name: 'Anna', id: 3
            },
            {
                name: 'Lena', id: 4
            },
            {
                name: 'Lisa', id: 5
            },
        ],
        messages: [{
            message: 'Hi', id: 1
        },
            {
                message: 'Hello', id: 2
            },
            {
                message: 'How are you?', id: 3
            },
            {
                message: '', id: 4
            },
            {
                message: 'Dima', id: 5
            }
        ],
    },
    profilePage: {
        array: [{message: 'Hello', id: 1},
            {message: 'Anna', id: 2},
            {message: 'Lena', id: 2}]
    }

}
export let addPost = (post) => {
    let newPost = {
        id: 5,
        message: post
    }
    state.profilePage.array.push(newPost);
}
export default state;
