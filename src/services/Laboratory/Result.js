import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Result{
    async listResult(id) {
        const res = await axios({
            url: constants.listresults,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditResult(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.listresults,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddResult(data) {
        const res = await axios({
            url: constants.listresults,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
