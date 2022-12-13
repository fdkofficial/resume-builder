import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Medication {
    async listMedication(id) {
        const res = await axios({
            url: constants.list_pharmacy_medication,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }
    async EditMedication(id) {
        const res = await axios({
            url: constants.list_pharmacy_medication,
            headers:{
                "Authorization": constants.token
              },
            method: "PUT",
            params:{'id':id}
        });
        
        return res;
    }
    async AddMedication(data) {
        const res = await axios({
            url: constants.list_pharmacy_medication,
            headers:{
                "Authorization": constants.token
              },
            method: "POST",
            data:data
        });
        
        return res;
    }
    async listMedication_category(id) {
        const res = await axios({
            url: constants.list_medication_category,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }
    async EditMedication_category(id) {
        const res = await axios({
            url: constants.list_medication_category,
            headers:{
                "Authorization": constants.token
              },
            method: "PUT",
            params:{'id':id}
        });
        
        return res;
    }
    async AddMedication_category(data) {
        const res = await axios({
            url: constants.list_medication_category,
            headers:{
                "Authorization": constants.token
              },
            method: "POST",
            data:data
        });
        
        return res;
    }
    
    async listDispence_location(id) {
        const res = await axios({
            url: constants.list_dispence_location,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }
    async EditDispence_location(id) {
        const res = await axios({
            url: constants.list_dispence_location,
            headers:{
                "Authorization": constants.token
              },
            method: "PUT",
            params:{'id':id}
        });
        
        return res;
    }
    async AddDispence_location(data) {
        const res = await axios({
            url: constants.list_dispence_location,
            headers:{
                "Authorization": constants.token
              },
            method: "POST",
            data:data
        });
        
        return res;
    }
    
}