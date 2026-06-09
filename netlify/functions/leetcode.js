const https = require("https");

exports.handler = async (event) => {

    if (event.httpMethod === "OPTIONS") {

        return {
            statusCode: 200,

            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
            },

            body: "",
        };
    }

    return new Promise((resolve) => {

        let body = "";

        event.body && (body = event.body);

        const options = {

            hostname: "leetcode.com",

            path: "/graphql",

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(body),
            },
        };

        const req = https.request(options, (res) => {

            let data = "";

            res.on("data", (chunk) => {
                data += chunk;
            });

            res.on("end", () => {

                resolve({

                    statusCode: 200,

                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },

                    body: data,
                });
            });
        });

        req.on("error", (error) => {

            resolve({

                statusCode: 500,

                headers: {
                    "Access-Control-Allow-Origin": "*",
                },

                body: JSON.stringify({
                    error: error.message,
                }),
            });
        });

        req.write(body);

        req.end();
    });
};
