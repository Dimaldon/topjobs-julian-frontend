class Api {
	constructor(options) {
		// cuerpo del constructor
		this._baseURL = options.baseUrl;
		this._headers = options.headers;
	}

	_handleFetch(endPoint, method = "GET", body = null) {
		return fetch(this._baseURL + endPoint, {
			method: method,
		}).then((res) => {
			if (res.ok) {
				return res.json();
			}
			// si el servidor devuelve un error, rechaza el promise
			return Promise.reject(`Error: ${res.status}`);
		});
	}

	getInitialJobs(token) {
		return this._handleFetch("?page=1", "GET", null, token);
	}
}

const api = new Api({
	baseUrl: "https://www.themuse.com/api/public/jobs",
});

export default api;
