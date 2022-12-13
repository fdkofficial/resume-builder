import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Allergies {
    async ListSchedule(id) {
        const res = await axios({
            url: constants.list_schedule,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditSchedule(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_schedule,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddSchedule(data) {
        const res = await axios({
            url: constants.list_schedule,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    async ListCheckin(id) {
        const res = await axios({
            url: constants.list_checkin,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditCheckin(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.list_checkin,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddCheckin(data) {
        const res = await axios({
            url: constants.list_checkin,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
    
}
