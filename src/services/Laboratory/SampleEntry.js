import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class SampleEntry{
    async listSampleEntry(id) {
        const res = await axios({
            url: constants.sampleentryconf,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditSampleEntry(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.sampleentryconf,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddSampleEntry(data) {
        const res = await axios({
            url: constants.sampleentryconf,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
