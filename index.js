// addEventListener('fetch', event => {
//   event.respondWith(handleRequest(event.request))
// })
// /**
//  * Respond with hello worker text
//  * @param {Request} request
//  */
// async function handleRequest(request) {
//     if (request.method == "GET") {
//         const NOTION_TOKEN = "secret_TADBVNFsRkSTci9oQjZB99igLntvNrHFE9iL4IGKUbo"
//         const resp = await fetch(
//             "https://api.notion.com/v1/databases/a28191c709ea4407aa90e8d7d9880f11/query", {
//                 headers: {
//                     Authorization: `Bearer ${NOTION_TOKEN}`,
//                     "Notion-Version": "2022-06-28"
//                 },
//                 method: "POST",
//             })
//         const data = await resp.json()
//         return new Response(JSON.stringify(data), {
//             headers: {
//                 "Content-type": "application/json;charset=UTF-8",
//                 "Access-Control-Allow-Origin": "*",
//                 "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
//                 "Access-Control-Max-Age": "86400",
//             }
//         })
//     }
// }



export default {
    async fetch(
        request : Request,
        env : Env,
        ctx : ExecutionContext
    ): Promise<Response> {
        if (request.method === "GET") {
            const data = await (
                await fetch(
                    "https://api.notion.com/v1/databases/a28191c709ea4407aa90e8d7d9880f11/query",
                    {
                        headers: {
                            Authorization: `Bearer ${env.NOTION_TOKEN}`,
                            "Notion-Version": "2022-06-28",
                        },
                        method: "POST",
                    }
                )
            ).json();
            return new Response(JSON.stringify(data), {
                headers: {
                    "content-type": "application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
                    "Access-Control-Max-Age": "86400",
                },
            });
        }
    },
};
