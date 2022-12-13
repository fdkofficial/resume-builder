import axios from 'axios';
import Constants from './constant.js';

var constants = new Constants();

export default class Medications {
    async ListMedication(id) {
        const res = await axios({
            url: constants.listMedications,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }

     async EditMedication(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.listMedications,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddMedication(data) {
        const res = await axios({
            url: constants.listMedications,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

     async SearchMedication(data) {
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

    async Mar_Summary(id,from_date,to_date) {
        const res = await axios({
            url: constants.listMar_summary,
            headers:{
                "Authorization": constants.token
              },
              method: "GET",
              params:{'mrn':id,'from_date':from_date,'to_date':to_date}
        });
        return res;
    }

    
    
}
