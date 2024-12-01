import axios from 'axios'
import { NextResponse } from 'next/server'
import 'dotenv/config'

export async function GET(req){
    try{

        const option = {
            method: 'get',
            url: process.env.ENDPOINT_PLAYLIST
        }

        const response = await axios(option)

        // console.log(response.data)
        // console.log(response.status)

        return NextResponse.json(response.data, {status: 200})

    }catch(err){

        console.log(err.response.data)
        const {data} = err.response

        return NextResponse.json(data, {status: 500})

    }
}