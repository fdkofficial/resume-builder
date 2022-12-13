import axios from 'axios';
import Constants from './constant.js';

var constants = new Constants();

export default class Patients {
    async ListPatients(id) {
        const res = await axios({
            url: constants.listPatients,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }
    
    async ListEncounter(id,from_date,to_date) {
        const res = await axios({
            url: constants.listEncounter,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id,'from_date':from_date,'to_date':to_date}
        });
        
        return res;
    }
    

     async EditPatients(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.listPatients,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddPatients(data) {
        const res = await axios({
            url: constants.listPatients,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

     async SearchPatients(data) {
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
