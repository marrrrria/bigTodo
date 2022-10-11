class API {
  _apiBase = 'http://127.0.0.1:5000/'

  async getData(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok) {
      throw new Error('Could not fetch')
    }
    const body = await res.json();
    return body;
  }

  async getTasks() {
    const res = await this.getData('getTasks')
    return res;
  }

  async getAccess(login, password) {
    const res = await this.getData(`getAccess/${login}/${password}`)
    return res;
  }

}

const apiClient = new API();

// export default apiClient;
export default API;