import axios from 'axios'
import { NextResponse } from 'next/server'
import 'dotenv/config'

export async function GET(req){
    try{

        console.log('/api/update')

        const option = {
            method: 'get',
            url: process.env.ENDPOINT_UPDATE
        }

        const response = await axios(option)

        // console.log(response.data)
        // console.log(response.status)

        return NextResponse.json(response.data, {status: 200})

    }catch(err){

        return NextResponse.json({error: 'failed to load data'}, {status: 500})

    }
}