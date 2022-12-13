import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Panel {
    async listPanel(id) {
        const res = await axios({
            url: constants.listpanel,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditPanel(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.listpanel,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddPanel(data) {
        const res = await axios({
            url: constants.listpanel,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
