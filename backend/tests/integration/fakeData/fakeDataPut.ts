const fakePutData = {
  mock: {
		id: 1,
		createdAt: "2022-05-18T21:52:00.757Z",
		title: "Comer pipoca",
		status: "em andamento"
	},
  response: {
		id: 1,
		createdAt: "2022-05-18T21:52:00.757Z",
		title: "Comer pipoca",
		status: "em andamento"
	},
  request: { title: "Comer pipoca", status: "em andamento" }
}

export const fakePutDataWithWrongStatus = {
  mock: {
		id: 1,
		createdAt: "2022-05-18T21:52:00.757Z",
		title: "Arrumar o quarto",
		status: "pendente"
	},
  response: {
		message: 'Fields "Status" must be "pendente", "em andamento" or "pronto"'
	},
  request: { title: "Arrumando o quarto", status: "Empinando pipa" }
}

export const fakePutDataWithoutStatus = {
  mock: {
		id: 1,
		createdAt: "2022-05-18T21:52:00.757Z",
		title: "Arrumar o quarto",
		status: "pendente"
	},
  response: {
		message: 'Fields "Status" must be filled'
	},
  request: { title: "Arrumando o quarto" }
}

export default fakePutData;