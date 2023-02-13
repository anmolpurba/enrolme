import {React,useEffect} from 'react'
import {Link, Navigate} from "react-router-dom"

function Protectedroute(props) {
    const {Component} = props

    let token = localStorage.getItem('token')
    if(!token){
        return <Navigate to="/signin" />
    }
    return <Component />
    // useEffect(() => {
    //     let token = localStorage.getItem('token')
    //     if(!token){
    //         return <Navigate to="/signin" />
    //     }

    // })
}

export default Protectedroute