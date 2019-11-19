const ADD_POST = "ADD-POST";

const projectReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let arrayPeoples = state[action.idProject - 1].money[0].moneyRaised;//array Donate Peoples
            let newDonate = {
                id: arrayPeoples[arrayPeoples.length - 1].id + 1,//last id in array + 1
                name: action.name,
                sum: action.sum
            };
            arrayPeoples.push(newDonate);
            return state;
        default:
            return state;
    }

};

export const addDonateActionCreator =(name,sum,idProject) =>{
    return {type:ADD_POST, name:name, sum:sum, idProject:idProject}
};

export default projectReducer;