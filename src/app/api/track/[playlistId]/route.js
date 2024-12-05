import axios from 'axios'
import { NextResponse } from 'next/server'
import { API_URL, API_ENDPOINT_TRACK } from '@/config/const'

export async function POST(req, {params}){
    try{

        const {playlistId} = params

        const method = 'post'
        const url = `${API_URL}/${API_ENDPOINT_TRACK}/${playlistId}`

        const option = {method, url}

        const response = await axios(option)

        // console.log(response.data)
        // console.log(response.status)
        const {data, status} = response

        return NextResponse.json(data, {status})

    }catch(err){

        const data = err?.response?.data || null
        const status = err?.response?.status || 500

        console.log(data, status)

        return NextResponse.json(data, {status})

    }
}