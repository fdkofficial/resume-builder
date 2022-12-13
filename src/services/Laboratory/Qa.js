import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Qa{
    async listQa(id) {
        const res = await axios({
            url: constants.listqa,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditQa(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.listqa,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddQa(data) {
        const res = await axios({
            url: constants.listqa,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
