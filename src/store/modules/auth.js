import Vue from 'vue'
import axios from "axios";

function checkTokenValidity(token){
    if (token) {
        const decodedToken = jwt.decode(token)

        return decodedToken && (decodedToken.exp * 1000) > new Date().getTime()
    }
    return false
}

export default {
    namespaced:true,
    state:{
        user:null,
        isAuthResolved:false
    },
    getters:{
        authUser(state){
            return state.user || null
        },
        isAuthenticated(state){
            return !!state.user
        },
    },
    actions:{
        
    }
}