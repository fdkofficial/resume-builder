import axios from 'axios';
import Constants from '../constant.js';

var constants = new Constants();

export default class Revenue {
    async ListFollowUp(id) {
        const res = await axios({
            url: constants.list_follow_ups,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditFollowUp(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_follow_ups,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddFollowUp(data) {
        const res = await axios({
            url: constants.list_follow_ups,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async ListBalance(id) {
        const res = await axios({
            url: constants.list_balance,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditBalance(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_balance,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddBalance(data) {
        const res = await axios({
            url: constants.list_balance,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async ListInsuranceBalance(id) {
        const res = await axios({
            url: constants.list_insurance_balance,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditInsuranceBalance(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_insurance_balance,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddInsuranceBalance(data) {
        const res = await axios({
            url: constants.list_insurance_balance,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async ListSelfPayBalance(id) {
        const res = await axios({
            url: constants.list_self_pay_balance,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditSelfPayBalance(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_self_pay_balance,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddSelfPayBalance(data) {
        const res = await axios({
            url: constants.list_self_pay_balance,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async ListCharge(id) {
        const res = await axios({
            url: constants.list_charge,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditCharge(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_charge,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddCharge(data) {
        const res = await axios({
            url: constants.list_charge,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }

    async ListInsurancedTransection(id) {
        const res = await axios({
            url: constants.list_insuranced_transection,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditInsurancedTransection(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.list_insuranced_transection,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddInsurancedTransection(data) {
        const res = await axios({
            url: constants.list_insuranced_transection,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    async ListAccount(id) {
        const res = await axios({
            url: constants.account,
            headers:{
                "Authorization": constants.token
              },
            method: "GET",
            params:{'id':id}
        });
        
        return res;
    }

     async EditAccount(id,value) {
        let data = {'mrn':id,'value':value}
        const res = await axios({
            url: constants.account,
            headers:{
                "Authorization": constants.token
              },
            params:data,
            method: "PUT",
        });
        return res;
    }

     async AddAccount(data) {
        const res = await axios({
            url: constants.account,
            headers:{
                "Authorization": constants.token
              },
            data: data,
            method: "POST",
        });
        return res;
    }
    
}