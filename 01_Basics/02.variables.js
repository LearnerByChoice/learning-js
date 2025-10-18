const accountId = 1432
let accountName = "TestUser"
var accountEmail = "test@example.com"
accountCity = 'Pune' // does not fail, but try not to use it
let accountState;

// accountId = 4456 // not allowed as it is const
// var has scope issues - NEVER USE IT
accountName = "TestUser5"
accountEmail = 'testuser@test.com'
accountCity = 'Mumbai'

console.table([accountId, accountName, accountEmail, accountCity, accountState])
// Output - 
/*
├─────────┼─────────────────────┤
│ 0       │ 1432                │
│ 1       │ 'TestUser5'         │
│ 2       │ 'testuser@test.com' │
│ 3       │ 'Mumbai'            │
│ 4       │ undefined           │
└─────────┴─────────────────────┘
*/