```javascript id="jlwmd4"
exports.handler = async function(event) {

    try {

        const body = JSON.parse(event.body);

        const response = await fetch(
            "https://leetcode.com/graphql",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(body)
            }
        );

        const data = await response.json();

        return {

            statusCode: 200,

            headers: {
                "Access-Control-Allow-Origin": "*"
            },

            body: JSON.stringify(data)
        };
    }
    catch(error) {

        return {

            statusCode: 500,

            body: JSON.stringify({
                error: error.message
            })
        };
    }
};
```
