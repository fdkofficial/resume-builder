import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class listUnitOfMeasure {
    async listUnitOfMeasure(id) {
        const res = await axios({
            url: constants.unit_of_measure,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

    async EditUnitOfMeasure(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.unit_of_measure,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddUnitOfMeasure(data) {
        const res = await axios({
            url: constants.unit_of_measure,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
}