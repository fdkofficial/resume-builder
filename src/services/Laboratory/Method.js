import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Method {
    async listMethod(id) {
        const res = await axios({
            url: constants.listmethod,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditMethod(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.listmethod,
            headers:{
                "Authorization": constants.token
              },
            method: "PUT",
            data: data,
            params:id,
        });
        return res;
    }

     async AddMethod(data) {
        const res = await axios({
            url: constants.listmethod,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
