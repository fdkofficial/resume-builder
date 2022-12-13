import axios from 'axios';
import Constants from './constant.js';

var constants = new Constants();



export default class Document {
    async ListDocument(id) {
        const res = await axios({
            url: constants.listdocuments,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }
    async ListTemplates(id) {
        const res = await axios({
            url: constants.listtemplates,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }
    async AddTemplates(data) {
        const res = await axios({
            url: constants.listtemplates,
            headers:{
                "Authorization": constants.token
              },
            method: "POST",
            data:data
        });
        
        return res;
    }
    

     async EditDocument(id,data) {
        let mrn = {'id':id}
        const res = await axios({
            url: constants.listdocuments,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:mrn,
            method: "PUT",
        });
        return res;
    }

     async AddDocument(data) {
        const res = await axios({
            url: constants.listdocuments,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
}
