import axios from 'axios';
import Constants from './constant.js';

var constants = new Constants();

export default class Orders {
    async ListOrder(id) {
        const res = await axios({
            url: constants.listOrders,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }

     async EditOrder(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.listOrders,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddOrder(data) {
        const res = await axios({
            url: constants.listOrders,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

     async SearchOrder(data) {
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
