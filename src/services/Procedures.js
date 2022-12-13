import axios from 'axios';
import Constants from './constant.js';

var constants = new Constants();



export default class Document {
    async ListProcedures(id) {
        const res = await axios({
            url: constants.listprocedures,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }
    async ListForm(id) {
        const res = await axios({
            url: constants.listformbrowser,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }
    

     async EditProcedures(data) {
        const res = await axios({
            url: constants.listprocedures,
            headers:{
                "Authorization": constants.token
              },
            params: {'reviewed':data},
            method: "PUT",
        });
        return res;
    }

     async AddProcedures(data) {
        const res = await axios({
            url: constants.listprocedures,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
}
