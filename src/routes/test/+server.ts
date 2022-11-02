import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const GET: PageServerLoad = async ({ fetch }) => {
    const res = await fetch('https://drand.cloudflare.com/public/latest');
    const body =  await res.json();

    return new Response(JSON.stringify({time: Date.now(), body}));
}

