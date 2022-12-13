import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Allergies {
    async ListNew_Born(id) {
        const res = await axios({
            url: constants.list_new_born,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditNew_Born(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_new_born,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddNew_Born(data) {
        const res = await axios({
            url: constants.list_new_born,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
}