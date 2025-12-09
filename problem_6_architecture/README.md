🚀
PS. This concepts are based on my experienced and ideas and not copy-pasted from AI platform.

Use case: To fetch the top 10 scorers in realtime

Specs:
    API Endpoint: /user/score-list
    Query Params: limit = 10, sort = desc
    Method: GET

Description:
    Use socket.io or websocket to fetch data in realtime



Use case: To update the score per user valid action and authorize
API Endpoint: /user/score-action
Payload: {
    "action": string
} 
Method: POST


Pre-requisite: User is required to login and generate jwt token and use it to get the id or unique username for authorization,
Having jwt will secure the API services.

2 ways to validate the user.
    1. API level verification - JWT token validation
    2. System level verification - user permission validation

Once verified:
    1. Update the score board
        - actions to be done in the tables
        1. insert new row everytime update is triggered
        2. update the field which holds the grand total score - this will helps in more efficient and optimize way of fetching the total score per user as its already aggregated instead of calculating from time to time 
