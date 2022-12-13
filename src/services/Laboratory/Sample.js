import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Sample {
    async listSample(id) {
        const res = await axios({
            url: constants.list_type_sample,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

    async EditlistSample(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.list_type_sample,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddlistSample(data) {
        const res = await axios({
            url: constants.list_type_sample,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async Sample(id) {
        const res = await axios({
            url: constants.sample,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

    async EditSample(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.sample,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddSample(data) {
        const res = await axios({
            url: constants.sample,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }


    async ListTypeSamplePanel(id) {
        const res = await axios({
            url: constants.list_type_sample_panel,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

    async EditlistSamplePanel(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.list_type_sample_panel,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddlistSamplePanel(data) {
        const res = await axios({
            url: constants.list_type_sample_panel,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }


    async listSampleTest(id) {
        const res = await axios({
            url: constants.list_type_sample_test,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

    async EditlistSampleTest(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.list_type_sample_test,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddlistSampleTest(data) {
        const res = await axios({
            url: constants.list_type_sample_test,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async listSampleTestStatus(id) {
        const res = await axios({
            url: constants.type_of_test,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

    async EditlistSampleTestStatus(data) {
        let id = {'id': data.id}
        const res = await axios({
            url: constants.type_of_test,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddlistSampleTestStatus(data) {
        const res = await axios({
            url: constants.type_of_test,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    
}