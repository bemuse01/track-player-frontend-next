import axios from 'axios'
import { NextResponse } from 'next/server'
import { API_URL } from '@/config/const'

export async function GET(req){
    try{

        console.log(API_URL)

        const method = 'get'
        const url = `${API_URL}/`

        const option = {method, url}

        const response = await axios(option)

        console.log(response.data)
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