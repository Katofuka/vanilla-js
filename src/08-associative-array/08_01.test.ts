import {usersObj, UsersType} from './08_01'

let users: UsersType

beforeEach( () => {
    users = {
        '1001': {id: 1001, name: "Anka"},
        '54542': {id: 54542, name: "Petka"},
        '1112': {id: 1112, name: "Chapaev"},
        '10': {id: 10, name: "Cheburashka"},
    }
})

test("Should update corresponding user from obj", () => {
    users['10'].name = 'Vasilisa'
    expect(users['10'].name).toBe("Vasilisa");
})

test("Should delete corresponding user from obj", () => {
    delete users['10']
    expect(users['10']).toBe(undefined);
})



