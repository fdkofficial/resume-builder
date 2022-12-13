import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Physician {
    async listPhysician(id) {
        const res = await axios({
            url: constants.list_physician,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }
    async EditPhysician(id_,data) {
        const res = await axios({
            url: constants.list_physician,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:{'id':id_},
            method: "PUT",
        });
        return res;
    }

     async AddPhysician(data) {
        const res = await axios({
            url: constants.list_physician,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

}