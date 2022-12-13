import axios from 'axios';
import Constants from './constant.js';

var constants = new Constants();

export default class Practitioner {
    async ListPractitioner(id) {
        const res = await axios({
            url: constants.list_practitioner,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }
    

     async EditPractitioner(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.list_practitioner,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddPractitioner(data) {
        const res = await axios({
            url: constants.list_practitioner,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

     async SearchPractitioner(data) {
        const res = await axios({
            url: constants.searchpatient,
            headers:{
                "Authorization": constants.token
              },
            params: data,
            method: "GET",
        });
        return res;
    }

    
}
