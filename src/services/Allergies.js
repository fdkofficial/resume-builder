import axios from 'axios';
import Constants from './constant.js';

var constants = new Constants();

export default class Allergies {
    async ListAllergie(id) {
        const res = await axios({
            url: constants.listallergies,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }

     async EditAllergie(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.listallergies,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddAllergie(data) {
        const res = await axios({
            url: constants.listallergies,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

     async SearchAllergie(data) {
        const res = await axios({
            url: constants.listallergies,
            headers:{
                "Authorization": constants.token
              },
            params: data,
            method: "GET",
        });
        return res;
    }

    
}
