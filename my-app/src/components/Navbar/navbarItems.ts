interface NavBarItem {
    id : number,
    name : string ,
    url :string ,
}

export const navBarList : NavBarItem[] = [
    {
        id : 0 ,
        name : "List of Selected Jobs",
        url : "empty"
    } , 
    {
        id : 1 ,
        name : "Add new jobs",
        url : "empty"
    }
]