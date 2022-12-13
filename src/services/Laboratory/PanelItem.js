import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class PanelItem {
    async listPanelItem(id) {
        const res = await axios({
            url: constants.listpanelitem,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditPanelItem(data) {
        let id = {'id':data.id}
        const res = await axios({
            url: constants.listpanelitem,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            params:id,
            method: "PUT",
        });
        return res;
    }

     async AddPanelItem(data) {
        const res = await axios({
            url: constants.listpanelitem,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}
