import axios from 'axios'
import { NextResponse } from 'next/server'
import { API_URL, API_ENDPOINT_TRACK } from '@/config/const'

export async function POST(req){
    try{

        const body = await req.json()
        const { playlistId, lastTrackId } = body
        console.log(playlistId, lastTrackId)

        const method = 'post'
        const url = `${API_URL}/${API_ENDPOINT_TRACK}`

        const option = {method, url, data: body}

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