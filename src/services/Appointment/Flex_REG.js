import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Allergies {
    async ListLab_request(id) {
        const res = await axios({
            url: constants.list_lab_request,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditLab_request(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_lab_request,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddLab_request(data) {
        const res = await axios({
            url: constants.list_lab_request,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
}