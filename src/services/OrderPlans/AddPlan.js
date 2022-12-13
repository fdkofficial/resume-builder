import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class OrderPlans {
    async ListNonMedication(id) {
        const res = await axios({
            url: constants.list_non_medication,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: { 'mrn': id }
        });

        return res;
    }

    async EditNonMedication(id, data) {
        let mrn = { 'mrn': id }
        const res = await axios({
            url: constants.list_non_medication,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            params: mrn,
            method: "PUT",
        });
        return res;
    }

    async AddNonMedication(data) {
        const res = await axios({
            url: constants.list_non_medication,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            method: "POST",
        });
        return res;
    }


    async ListPlans(id) {
        const res = await axios({
            url: constants.list_plans,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: { 'id': id }
        });

        return res;
    }

    async EditPlans(id, data) {
        let mrn = { 'mrn': id }
        const res = await axios({
            url: constants.list_plans,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            params: mrn,
            method: "PUT",
        });
        return res;
    }

    async AddPlans(data) {
        const res = await axios({
            url: constants.list_plans,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            method: "POST",
        });
        return res;
    }



}
