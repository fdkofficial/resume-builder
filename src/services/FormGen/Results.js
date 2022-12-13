import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Forms {
    async Listform(id) {
        const res = await axios({
            url: constants.list_result,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: { 'id': id }
        });

        return res;
    }

    async Editform(id) {
        let mrn = { 'id': id }
        const res = await axios({
            url: constants.list_result,
            headers: {
                "Authorization": constants.token
            },
            params: mrn,
            method: "PUT",
        });
        return res;
    }

    async Addform(id,data) {
        const res = await axios({
            url: constants.list_result,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            params:{'id':id},
            method: "POST",
        });
        return res;
    }
    

    async Listform_name(id) {
        const res = await axios({
            url: constants.list_result_names,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: { 'id': id }
        });

        return res;
    }

    async Editform_name(id, data) {
        let mrn = { 'id': id }
        const res = await axios({
            url: constants.list_result_names,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            params: mrn,
            method: "PUT",
        });
        return res;
    }

    async Addform_name(data) {
        const res = await axios({
            url: constants.list_result_names,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            method: "POST",
        });
        return res;
    }

    async Listparameter(id) {
        const res = await axios({
            url: constants.list_parameters,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: { 'id': id }
        });

        return res;
    }

    async Editparameter(id, data) {
        let mrn = { 'id': id }
        const res = await axios({
            url: constants.list_parameters,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            params: mrn,
            method: "PUT",
        });
        return res;
    }

    async Addparameter(data) {
        const res = await axios({
            url: constants.list_parameters,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            method: "POST",
        });
        return res;
    }

    async Addreport(data) {
        const res = await axios({
            url: constants.list_report,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            method: "POST",
        });
        return res;
    }

    async ListReport(id) {
        const res = await axios({
            url: constants.add_report_table,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: {
                'id': id
            }
        });

        return res;
    }
    async GetReport(id) {
        const res = await axios({
            url: constants.list_report,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: {
                'id': id
            }
        });

        return res;
    }


    async AddreportTable(data) {
        const res = await axios({
            url: constants.list_report_table,
            headers: {
                "Authorization": constants.token
            },
            data: data,
            method: "POST",
        });
        return res;
    }

    async ListParameters(id) {
        const res = await axios({
            url: constants.list_parameters,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: {
                'id': id
            }
        });

        return res;
    }


    async ListCategories(id) {
        const res = await axios({
            url: constants.list_result_categories,
            headers: {
                "Authorization": constants.token
            },
            method: "GET",
            params: {
                'id': id
            }
        });

        return res;
    }


}