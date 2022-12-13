import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Revenue {
    async ListBatch(id) {
        const res = await axios({
            url: constants.list_batch,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditBatch(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_batch,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddBatch(data) {
        const res = await axios({
            url: constants.list_batch,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    async ListReport(id) {
        const res = await axios({
            url: constants.list_report,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditReport(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_report,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddReport(data) {
        const res = await axios({
            url: constants.list_report,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}