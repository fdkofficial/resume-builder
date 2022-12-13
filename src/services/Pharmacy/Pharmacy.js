import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Pharmacy {
    async listPharmacy(id) {
        const res = await axios({
            url: constants.search_pharmacy,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'mrn':id}
        });
        
        return res;
    }

    //  async EditDictionary(data) {
    //     let id = {'id':data.id}
    //     const res = await axios({
    //         url: constants.listdictionary,
    //         headers:{
    //             "Authorization": constants.token
    //           },
    //         data: data,
    //         params:id,
    //         method: "PUT",
    //     });
    //     return res;
    // }

    //  async AddDictionary(data) {
    //     const res = await axios({
    //         url: constants.listdictionary,
    //         headers:{
    //             "Authorization": constants.token
    //           },
    //         data: data,
    //         method: "POST",
    //     });
    //     return res;
    // }
    
}
