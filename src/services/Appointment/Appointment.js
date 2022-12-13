import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Allergies {
    async ListAppointment(id) {
        const res = await axios({
            url: constants.list_appointment,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }

     async EditAppointment(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.list_appointment,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddAppointment(data) {
        const res = await axios({
            url: constants.list_appointment,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async ListAppointment_type(id) {
        const res = await axios({
            url: constants.list_appointment_type,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }

     async EditAppointment_type(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.list_appointment_type,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddAppointment_type(data) {
        const res = await axios({
            url: constants.list_appointment_type,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

 async Listlocation(id) {
        const res = await axios({
            url: constants.list_location,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }

     async Editlocation(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.list_location,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async Addlocation(data) {
        const res = await axios({
            url: constants.list_location,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    
}
