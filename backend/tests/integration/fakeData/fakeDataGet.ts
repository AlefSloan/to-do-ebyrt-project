const fakeGetAllData = {
  mock: [ {
		id: 1,
		createdAt: "2022-05-18T21:52:00.757Z",
		title: "Arrumar o quarto",
		status: "pronto"
	},
	{
		id: 2,
		createdAt: "2022-05-18T21:56:38.786Z",
		title: "Correr 30 minutos",
		status: "pronto"
	} ],
  response: [ {
		id: 1,
		createdAt: "2022-05-18T21:52:00.757Z",
		title: "Arrumar o quarto",
		status: "pronto"
	},
	{
		id: 2,
		createdAt: "2022-05-18T21:56:38.786Z",
		title: "Correr 30 minutos",
		status: "pronto"
	} ],
  request: { }
}

export const fakeGetAllByIdData = {
  mock: {
		id: 1,
		createdAt: "2022-05-18T21:52:00.757Z",
		title: "Arrumar o quarto",
		status: "pronto"
	},
  response: {
		id: 1,
		createdAt: "2022-05-18T21:52:00.757Z",
		title: "Arrumar o quarto",
		status: "pronto"
	},
  request: { }
}

export default fakeGetAllData;
