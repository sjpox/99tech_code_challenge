🚀
PS. This concepts are based on my experienced and ideas and not copy-pasted from AI platform.

API Endpoint: /user/score-list
Query Params: limit = 10, sort = desc
Method: GET

Use socket.io/websocket to fetch data in realtime


POST
/user/score-update

User are required to login to capture the user details used for authorisation

need to verify the following:
1. get the jwt token
2. decode it and get user details such as the username 
3. by using the user details such as username or any primary/unique key. Use it to query in the user table to verify if the user is valid or not

once verified
1. need to check the action payload. example. there are only specified valid actions or 
do the calculations
2. if everything is good, update the score board
- actions to be done in the tables
 1. insert new row everytime update is triggered
 2. update the field which holds the grand total score - this will helps in more efficient and optimize way of fetching the total score per user as its already aggregated instead of calculating from time to time 


how jwt works?
anatomy
header.payload.signature


