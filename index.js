addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
     if (request.method == "GET") {
         const resp = await fetch(
             "https://api.notion.com/v1/databases/a28191c709ea4407aa90e8d7d9880f11/query", {
                 headers: {
                     Authorization: `Bearer ${NOTION_TOKEN}`,
                     "Notion-Version": "2021-05-11"
                 },
                 method: "POST",
             })
         const data = await resp.json()
         return new Response(JSON.stringify(data), {
             headers: {
                 "Content-type": "application/json;charset=UTF-8",
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
                 "Access-Control-Max-Age": "86400",
             }
         })
     }
 }
