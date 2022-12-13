import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class PrintedReport{
    async listPrintedReport(id) {
        const res = await axios({
            url: constants.listprintedreports,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditPrintedReport(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.listprintedreports,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddPrintedReport(data) {
        const res = await axios({
            url: constants.listprintedreports,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
