const fakePostData = {
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
  request: { title: "Arrumar o quarto" }
}

export const fakePostDataWithWrongTitle = {
  mock: {	},
  response: {
		message: 'Fields "Title" must be at least 5 characters long'
	},
  request: { title: "Arru" }
}

export const fakePostDataWithoutTitle = {
  mock: { },
  response: {
		message: 'Fields "Title" must be filled'
	},
  request: { }
}

export default fakePostData;