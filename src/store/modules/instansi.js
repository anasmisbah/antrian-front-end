import Vue from 'vue'
import axios from "axios";

export default {
    namespaced:true,
    state:{
        items:[],
        item:{}
    },
    actions:{
        fetchAllInstansi({commit,state}){
            commit('setItems',{resource:'instansi',items:[]},{root:true})
            axios.get('https://next.json-generator.com/api/json/get/4yVevDfvw')
            .then(res=>{
                const dataInstansi = res.data
                commit('setItems',{resource:'instansi',items:dataInstansi},{root:true})

                return state.items
            })
        },
        fetchDetailInstansi(contex,instansiId){

        }
    },
    mutations:{
        
    }
}