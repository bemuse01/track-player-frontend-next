import axios from 'axios'
import { NextResponse } from 'next/server'
import { API_URL, API_ENDPOINT_RESOURCE } from '@/config/const'

export async function GET(req){
    try{

        const {searchParams} = new URL(req.url)
        const id = searchParams.get('id')
        const type = searchParams.get('type')

        const method = 'get'
        const url = `${API_URL}/${API_ENDPOINT_RESOURCE}?id=${id}&type=${type}`

        const option = {method, url}

        const response = await axios(option)

        // console.log(response.data)
        // console.log(response.status)

        const {data, status} = response

        // console.log('RESPONSEEEEEEEEEEEEEEEEEEEEEE: ', data)

        return NextResponse.json(data, {status})

    }catch(err){

        const data = err?.response?.data || null
        const status = err?.response?.status || 500

        console.log(data, status)

        return NextResponse.json(data, {status})

    }
}