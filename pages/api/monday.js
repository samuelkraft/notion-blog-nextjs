// let query = '{boards (ids: 3665794329) { name id description  groups { id title color position } views { id name type } items { name column_values{title id type text } } } }';
// let query = '{boards (ids: 3665794329) { name id description  groups  { id title color position items { id } } views { id name type } items { name column_values {title id type text } } } }';

// fetch("https://api.monday.com/v2", {
//     method: 'post',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIxNzYyMzg4NCwidWlkIjozNzM1NzE5NywiaWFkIjoiMjAyMy0wMS0wNVQxNTo1MzoxNC4xOTVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM4MDUzMTAsInJnbiI6InVzZTEifQ.9f82Bwpp6MVBJPfNquB67KLlKQDienG_gXPHVAki7Ug'
//     },
//     body: JSON.stringify({
//         'query': query
//     })
// })
//     .then(res => res.json())
//     .then(res => console.log(JSON.stringify(res, null, 2)));



//3693183895 CRM
// 3665794329 CONTACTS



module.exports = async (req, res) => {

    const body = req.body;
    console.log(body)
    // TO DO - add comment field

    let createNewItem = `mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id: 3665794329, group_id: "topics", item_name: $myItemName, column_values: $columnVals) { id } }`;
    let vars = {
        "myItemName": body.firstName + " " + body.lastName,
        "columnVals": JSON.stringify({
            "text": body.lastName,
            "text7": body.firstName,
            "phone": body.phone,
            "email": { "email": body.email, "text": body.email },
        })
    };


    fetch("https://api.monday.com/v2", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.MONDAY_API_KEY
        },
        body: JSON.stringify({
            'query': createNewItem,
            'variables': JSON.stringify(vars)
        })
    })
        .then(res => res.json())
        .then(res => console.log(JSON.stringify(res, null, 2)));

}


