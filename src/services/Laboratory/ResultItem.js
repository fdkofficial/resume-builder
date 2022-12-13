import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class ResultItem {
    async listResultItem(id) {
        const res = await axios({
            url: constants.listresultlimits,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditResultItem(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.listresultlimits,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddResultItem(data) {
        const res = await axios({
            url: constants.listresultlimits,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
