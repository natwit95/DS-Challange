//fetch client information
//map through client enviroments to get back an array of dates
//platform-api has "-" symbol and needs to be placed in square bracket since dot notation doesn suppoer "-"[]

fetch(
	"https://gist.githubusercontent.com/gretchenziegler/853c4f709d45176aa44c8e5aee864cac/raw/010a4c44455ffc93b8039935cfc4e0dff41ae502/hcsc.json"
)
	.then((resp) => resp.json())
	.then((data) =>
		console.log(
			data.client_environments.map(
				(item) => item.most_recent_deploys["platform-api"].deployed_at
			)
		)
);
    
