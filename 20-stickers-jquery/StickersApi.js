class StickersApi {
    static URL = 'https://62054479161670001741b708.mockapi.io/api/stickers';
  
    static request(uri = '', method = 'GET', data) {
      return fetch(`${this.URL}${uri}`, {
        method,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: data ? JSON.stringify(data) : undefined,
      })
        .then((res) => {
          if(res.ok) {
            return res.json();
          }

          return Promise.reject(new Error('Can not exequte request.'));
        });
    }
    
    static getList() {
      return this.request()
        .catch((e) => {
        throw new Error(`Can not get list`)
      });
    }
    
    static getOne(id) {
      return this.request(`/${id}`)
        .catch((e) => {
        throw new Error(`Can not get one list`)
      });
    }
  
    static create(data) {
      return this.request('', 'POST', data)
        .catch((e) => {
        throw new Error(`Can not create stick`)
      });
    }
  
    static update(id, data) {
      return this.request(`/${id}`, 'PUT', data)
        .catch((e) => {
        throw new Error(`Can not update sticky`)
      });
    }
  
    static delete(id) {
      return this.request(`/${id}`, 'DELETE')
        .catch((e) => {
        throw new Error(`Can not delete sticky`)
      });
    }
  }
  
  export default StickersApi;