import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Test {
    async listTest(id) {
        const res = await axios({
            url: constants.listtest,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditTest(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.listtest,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddTest(data) {
        const res = await axios({
            url: constants.listtest,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
