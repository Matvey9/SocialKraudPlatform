import projectReducer from "./projectReducer";


let store = {
    _state: {
        projectsData: [
            {
                img: "http://dorinfo.ru/upload/iblock/84c/otremontirovana_doroga_k_selu_dvortsovskoe_ot_trassy_r_217_na_stavropole_dorogi_rossii.jpg",
                desc: "Description", headline: "Repair road", idProject: "1",
                money: [{
                    moneyRaised: [{id: 1, name: "Oleg", sum: "5"}, {id: 1, name: "Anton", sum: "7"}, {
                        id: 1,
                        name: "Diana",
                        sum: "8"
                    }, {id: 1, name: "Zhana", sum: "4"}]
                }, {moneyRaisedSum: "400"}, {moneyTotal: "10000"}]
            },
            {
                img: "https://avatars.mds.yandex.net/get-altay/1077949/2a00000168a0a4d091e7c69ff1f38c379546/XXL",
                desc: "Description", headline: "Build hospital", idProject: "2",
                money: [{moneyRaised: [{id: 1, name: "Oleg", sum: "5"}, {id: 1, name: "Anton", sum: "7"}, {
                        id: 1,
                        name: "Diana",
                        sum: "8"
                    }, {id: 1, name: "Zhana", sum: "4"}]}, {moneyRaisedSum: "20"}, {moneyTotal: "1000"}]
            },
            {
                img: "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/avengers-endgame-avatar-worldwide-box-office.jpg",
                desc: "Create FILM! Iron Avatar!", headline: "Filming Iron avatar", idProject: "3",
                money: [{moneyRaised: [{id: 1, name: "Oleg", sum: "5"}, {id: 1, name: "Anton", sum: "7"}, {
                        id: 1,
                        name: "Diana",
                        sum: "8"
                    }, {id: 1, name: "Zhana", sum: "4"}]}, {moneyRaisedSum: "20"}, {moneyTotal: "1000"}]
            }
        ]
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.projectsData= projectReducer(this._state.projectsData, action);
        this._callSubscriber(this._state);
    }
};


export default store;