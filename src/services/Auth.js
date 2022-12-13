import axios from 'axios';
import Constants from './constant.js';

var constants = new Constants();

export default class Allergies {
    async ListUser(id) {
        const res = await axios({
            url: constants.getUser,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

    
}
