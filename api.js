import {data} from './data';
import {AsyncStorage} from 'react-native';

const URL = "http://canbaz.westeurope.cloudapp.azure.com:3001/"
  export default api = {
    fetchData(apiKey) {
      return fetch(URL + 'studentsAndClassesAndActivities', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":apiKey
        }
      }).then(res => {
        return res.json();
      }).catch((e) => {})
    },
    deleteStudent(data, path) {
      return fetch(URL + path, {
        method: "POST",
        body: JSON.stringify({id: data.id}),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
    },
    genericUpdate(data, path) {
      return fetch(URL + path, {
        method: "POST",
        body: JSON.stringify({data}),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
    },
    genericAuthFetch(data, path,apiKey) {
      return fetch(URL + path, {
        method: "POST",
        body: JSON.stringify({data}),
        headers: {
          "Content-Type": "application/json",
          "Authorization":apiKey
        }
      }).then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
    },
  async genericSaveToDisk(data, key) {
      try {
        await AsyncStorage.setItem('@MySuperStore:'+key, JSON.stringify(data));
      } catch (error) {
        // Error saving data
      }
  },
  async genericFetchFromDisk(key) {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:'+key);

      return  value

    } catch (error) {
      // Error retrieving data
    }
  },
  filterInside(key,fieldName, array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i][fieldName].indexOf(key) == 0) {
      results.push(array[i]);
    }
  }
  return results;
}
}
