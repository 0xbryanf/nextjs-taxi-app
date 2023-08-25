import { NextResponse } from "next/server";
const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";
export async function GET(request: any) {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('q');
    const res = await fetch(BASE_URL + '?q=' + searchText + '&access_token='+ 'pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrNnJ6bDdzdzA5cnAza3F4aTVwcWxqdWEifQ.RFF7CVFKrUsZVrJsFzhRvQ' + '&session_token=e942b172-48ce-4d82-a238-', {
        headers: {
            "Content-Type": "application/json"
        }
    })
    const searchResult = await res.json();
    return NextResponse.json(searchResult)
}