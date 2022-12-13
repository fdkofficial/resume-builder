import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class SiteInformation {
    async listSiteInfo(id) {
        const res = await axios({
            url: constants.listsiteinfo,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditSiteInfo(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.listsiteinfo,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddSiteInfo(data) {
        const res = await axios({
            url: constants.listsiteinfo,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
