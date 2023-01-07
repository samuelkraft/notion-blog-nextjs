export default async function resolver(req, res) {
	const body = req.body;
	console.log(body);
	// TO DO - add comment field

	if (body === undefined || body === null || body === "" || body === 0) {
		return res.json({ message: "Bad Request" });
	} else {
		let createNewItem = `mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id: 3665794329, group_id: "topics", item_name: $myItemName, column_values: $columnVals) { id } }`;
		let vars = {
			myItemName: body.firstName + " " + body.lastName,
			columnVals: JSON.stringify({
				text: body.lastName,
				text7: body.firstName,
				phone: body.phone,
				email: { email: body.email, text: body.email },
			}),
		};

		await fetch("https://api.monday.com/v2", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				Authorization: process.env.MONDAY_API_KEY
			},
			body: JSON.stringify({
				query: createNewItem,
				variables: JSON.stringify(vars),
			}),
		})
			.then((res) => res.json())
			.then((res) => console.log(JSON.stringify(res, null, 2)));
	}
}
