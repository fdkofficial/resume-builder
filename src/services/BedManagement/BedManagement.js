import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Allergies {
    async ListBed_management(id) {
        const res = await axios({
            url: constants.list_bed_management,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditBed_management(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_bed_management,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddBed_management(data) {
        const res = await axios({
            url: constants.list_bed_management,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async ListDiscahrge(id) {
        const res = await axios({
            url: constants.list_discharge,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditDiscahrge(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_discharge,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddDiscahrge(data) {
        const res = await axios({
            url: constants.list_discharge,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async ListIsolation(id) {
        const res = await axios({
            url: constants.list_isolation,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditIsolation(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_isolation,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddIsolation(data) {
        const res = await axios({
            url: constants.list_isolation,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}