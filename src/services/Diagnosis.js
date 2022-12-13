import axios from 'axios';
import Constants from './constant.js';

var constants = new Constants();



export default class Diagnosis {
    async ListDiagnosis(id) {
        const res = await axios({
            url: constants.listdiagnosis,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: { 'mrn': id }
        });

        return res;
    }
    async ListProblem(id) {
        const res = await axios({
            url: constants.listproblems,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: { 'mrn': id }
        });

        return res;
    }


    async EditDiagnosis(id, data) {
        let mrn = { 'mrn': id }
        const res = await axios({
            url: constants.listdiagnosis,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            params: mrn,
            method: "PUT",
        });
        return res;
    }

    async AddDiagnosis(data) {
        const res = await axios({
            url: constants.listdiagnosis,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            method: "POST",
        });
        return res;
    }
    async AddProblem(data) {
        const res = await axios({
            url: constants.listproblems,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
