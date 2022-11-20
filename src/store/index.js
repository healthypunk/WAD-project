import {createStore} from 'vuex'

export default createStore({
    state: {
        postList: [
            {
                "id": 1,
                "by": {"userId": 20004, "name": "Evaldas"},
                "dateCreated": "2022-10-25T12:00:00+2:00",
                "content": [
                    {"type": "pic", "value": "pen.jpg"},
                    {"type": "text", "value": "Who left a pen in the audience?"}
                ],
                "likes": 9
            },
            {
                "id": 2,
                "by": {"userId": 20005, "name": "Mark Fishel"},
                "dateCreated": "2022-10-25T12:00:00+2:00",
                "content": [
                    {"type": "text", "value": "How many homeworks do I need to submit to complete the course?"}
                ],
                "likes": 1
            },
            {
                "id": 3,
                "by": {"userId": 20006, "name": "Richard Kuklane"},
                "dateCreated": "2022-10-25T12:00:00+2:00",
                "content": [
                    {"type": "text", "value": "Are there any lectures tomorrow?"}
                ],
                "likes": 12
            },
            {
                "id": 4,
                "by": {"userId": 20007, "name": "Makima"},
                "dateCreated": "2022-10-25T12:00:00+2:00",
                "content": [
                    {
                        "type": "pic",
                        "value": "math.png"
                    },
                    {"type": "text", "value": "Here are my notes from maths' lecture"}
                ],
                "likes": 4
            },
            {
                "id": 5,
                "by": {"userId": 20008, "name": "quandale dingle"},
                "dateCreated": "2022-10-25T12:00:00+2:00",
                "content": [
                    {"type": "pic", "value": "capy.jpg"},
                    {"type": "text", "value": "Cute capybara pic from Japan xoxo"}
                ],
                "likes": 100
            },
            {
                "id": 6,
                "by": {"userId": 20009, "name": "User"},
                "dateCreated": "2022-10-25T12:00:00+2:00",
                "content": [
                    {"type": "text", "value": "Hi, Im User!"}
                ],
                "likes": 3
            },
            {
                "id": 7,
                "by": {"userId": 20010, "name": "User2"},
                "dateCreated": "2022-10-25T12:00:00+2:00",
                "content": [
                    {"type": "text", "value": "I think that Vue is better than React."}
                ],
                "likes": 8
            },
            {
                "id": 8,
                "by": {"userId": 20011, "name": "User3"},
                "dateCreated": "2022-10-25T12:00:00+2:00",
                "content": [
                    {"type": "pic", "value": "cat.jpg"},
                    {"type": "text", "value": "Guys look, a cat!!!"}
                ],
                "likes": 0
            },
            {
                "id": 9,
                "by": {"userId": 20012, "name": "User4"},
                "dateCreated": "2022-10-24T12:00:00+2:00",
                "content": [
                    {"type": "pic", "value": "book.jpg"},
                    {"type": "text", "value": "Just read this book, its great!"}
                ],
                "likes": 69
            },
            {
                "id": 10,
                "by": {"userId": 20013, "name": "User5"},
                "dateCreated": "2022-10-24T12:00:00+2:00",
                "content": [
                    {"type": "pic", "value": "javascript.jpg"},
                    {"type": "text", "value": "I love JavaScript!"}
                ],
                "likes": 11
            }
        ]
    },
    getters: {
        postList: state => state.postList,
    },
    mutations: {},
    actions: {},
    modules: {}
})
