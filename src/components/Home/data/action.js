const homeActions = {
    state: {
        currentUser: {},
    },
    actions: {
        USER_DATA: function ({
            commit
        }, userData) {
            commit("USER_DATA_MUTATION", userData);
        },
    },
    mutations: {
        USER_DATA_MUTATION: function (state, userData) {
            state.currentUser = {
                ...userData
            };
        },
    },
    getters: {
        getUserDetails: state => {
            return state.currentUser;
        }
    }
}

export default homeActions;