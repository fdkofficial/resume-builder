import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class TestResult {
    async listTestResult(id) {
        const res = await axios({
            url: constants.list_test_result,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

    async EditTestResult(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.list_test_result,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddTestResult(data) {
        const res = await axios({
            url: constants.list_test_result,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async listTestSection(id) {
        const res = await axios({
            url: constants.list_test_section,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

    async EditTestSection(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.list_test_section,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddTestSection(data) {
        const res = await axios({
            url: constants.list_test_section,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async listTypeTest(id) {
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

    async EditlistTypeTest(id,data) {
        let mrn = {'mrn':id}
        const res = await axios({
            url: constants.type_of_test,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddlistTypeTest(data) {
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
