import 'dotenv/config'

const API_URL = process.env.API_URL
const API_ENDPOINT_TRACK = process.env.API_ENDPOINT_TRACK
const API_ENDPOINT_PLAYLIST = process.env.API_ENDPOINT_PLAYLIST
const API_ENDPOINT_UPDATE = process.env.API_ENDPOINT_UPDATE
const API_ENDPOINT_RESOURCE = process.env.API_ENDPOINT_RESOURCE
const NEXT_PUBLIC_API_TRACK = process.env.NEXT_PUBLIC_API_TRACK
const NEXT_PUBLIC_API_PLAYLIST = process.env.NEXT_PUBLIC_API_PLAYLIST
const NEXT_PUBLIC_API_UPDATE = process.env.NEXT_PUBLIC_API_UPDATE
const NEXT_PUBLIC_API_RESOURCE = process.env.NEXT_PUBLIC_API_RESOURCE

export {
    API_URL, 
    API_ENDPOINT_TRACK, 
    API_ENDPOINT_PLAYLIST, 
    API_ENDPOINT_UPDATE,
    API_ENDPOINT_RESOURCE,
    NEXT_PUBLIC_API_TRACK,
    NEXT_PUBLIC_API_PLAYLIST,
    NEXT_PUBLIC_API_UPDATE,
    NEXT_PUBLIC_API_RESOURCE
}
