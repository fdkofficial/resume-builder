import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class MedOrder {
    async listMedOrder(id,mrn) {
        const res = await axios({
            url: constants.list_med_order,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id,'mrn':mrn}
        });
        
        return res;
    }
    async EditMedOrder(id_,data) {
        const res = await axios({
            url: constants.list_med_order,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:{'id':id_},
            method: "PUT",
        });
        return res;
    }

     async AddMedOrder(data) {
        const res = await axios({
            url: constants.list_med_order,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
    async listRetailOrder(id) {
        const res = await axios({
            url: constants.list_retail_orders,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }
    async EditRetailOrder(id_,data) {
        const res = await axios({
            url: constants.list_retail_orders,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:{'id':id_},
            method: "PUT",
        });
        return res;
    }

     async AddRetaileOrder(data) {
        const res = await axios({
            url: constants.list_retail_orders,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    async listDrug(id) {
        const res = await axios({
            url: constants.list_drugs,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }
    async EditDrug(id_,data) {
        const res = await axios({
            url: constants.list_drugs,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:{'id':id_},
            method: "PUT",
        });
        return res;
    }

     async AddDrug(data) {
        const res = await axios({
            url: constants.list_drugs,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    

}