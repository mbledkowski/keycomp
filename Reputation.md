## Function used to calculate critics' reputation (reputation - importance of their score given to certain switch):
x - number of followers, likes etc.
y - scale (value of each follower, like etc.)
z - importance of this metric

`f(x, y) = 1 - y/(x+y)`

Final score:
`(z₁ * f(x₁, y₁) + z₂ * f(x₂, y₂) + ... + zₙ * f(xₙ, yₙ)) / (z₁ + z₂ + ... + zₙ)`

## Values for each metric:
Twitter followers:
z = 4; y = 256

Reddit karma:
z = 8; y = 2048

## Final function
`((x/(x+256)) + 2* (y/(y+2048)))/ 3`
where x - twitter followers; y - reddit karma

## Disclaimer
I am aware that this method of evaluating each reviewer's reputation is far from being perfect. If you have better idea how to solve this problem please let me know by creating a GitHub Issue, or by sending me a message on this Discord server - [discord.gg/ZxwPht5N](https://discord.gg/ZxwPht5N).