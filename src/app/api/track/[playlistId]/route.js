import axios from 'axios'
import { NextResponse } from 'next/server'
import 'dotenv/config'

export async function POST(req, {params}){
    try{

        const {playlistId} = params

        const option = {
            method: 'post',
            url: process.env.ENDPOINT_TRACK + '/' + playlistId
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