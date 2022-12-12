export const userArray = ["Anka", "Petka", "Chapaev", "Cheburashka"]

export type UsersType = {
    [key: string]: { id: number, name: string }
}

//обычный массив
export const usersObj = {
    "0": "Anka",
    "1": "Petka",
    "2": "Chapaev",
    "3": "Cheburashka"
}
const users = {
    '1001': {id: "1001", name: "Anka"},
    '54542': {id: "54542", name: "Petka"},
    '1112': {id: "1112", name: "Chapaev"},
    '10': {id: "10", name: "Cheburashka"},
}

const user = {id: "11544", name: "Sweety"}
users[user.id.toString()] = user

const user2 = {id: "11544", name: "Sweety"}
users[user.id.toString()] = user

//ассоциативный массив


export const usersArray = [
    {id: "1001", name: "Anka"},
    {id: "54542", name: "Petka"},
    {id: "1112", name: "Chapaev"},
    {id: "10", name: "Cheburashka"},
]