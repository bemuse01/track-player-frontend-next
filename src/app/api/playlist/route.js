import axios from 'axios'
import { NextResponse } from 'next/server'
import { API_URL, API_ENDPOINT_PLAYLIST } from '@/config/const'

export async function GET(req){
    try{

        const method = 'get'
        const url = `${API_URL}/${API_ENDPOINT_PLAYLIST}`

        const option = {method, url}

        const response = await axios(option)

        // console.log(response.data)
        // console.log(response.status)
        const {data, status} = response

        return NextResponse.json(data, {status})

    }catch(err){

        const {data, status} = err.response

        console.log(data, status)

        return NextResponse.json(data, {status})

    }
}