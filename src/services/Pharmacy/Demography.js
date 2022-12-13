import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Demography {
    async listDemography(id) {
        const res = await axios({
            url: constants.list_demography,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }

     async EditDemography(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.list_demography,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddDemography(data) {
        const res = await axios({
            url: constants.list_demography,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
