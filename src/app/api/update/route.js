import axios from 'axios'
import { NextResponse } from 'next/server'
import { API_URL, API_PORT, API_ENDPOINT_UPDATE } from '@/config/const'

export async function POST(req){
    try{

        const method = 'post'
        const url = `${API_URL}:${API_PORT}/${API_ENDPOINT_UPDATE}`

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