# config/databaseuser/TestAccDatabaseUser_withLabelsAndDescription Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2171641Z === RUN   TestAccDatabaseUser_withLabelsAndDescription
2026-07-09T00:59:33.2172320Z     resource_database_user_test.go:186: Creating execution project (1): test-acc-tf-p-472653637980897701
2026-07-09T00:59:33.2172895Z     resource_database_user_test.go:186: 
2026-07-09T00:59:33.2173855Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2176070Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2177934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2179975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:186
2026-07-09T00:59:33.2180951Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2182963Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2184071Z         	Test:       	TestAccDatabaseUser_withLabelsAndDescription
2026-07-09T00:59:33.2186227Z         	Messages:   	Project creation failed: test-acc-tf-p-472653637980897701, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2187489Z --- FAIL: TestAccDatabaseUser_withLabelsAndDescription (63.81s)
```

- 2026-07-10 PASS 26 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5903671Z === RUN   TestAccDatabaseUser_withLabelsAndDescription
2026-07-11T00:55:51.5904354Z     resource_database_user_test.go:186: Creating execution project (1): test-acc-tf-p-8238995435786279747
2026-07-11T00:55:51.5904946Z     resource_database_user_test.go:186: 
2026-07-11T00:55:51.5905915Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.5907795Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.5909841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.5911899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:186
2026-07-11T00:55:51.5912766Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.5914787Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.5915910Z         	Test:       	TestAccDatabaseUser_withLabelsAndDescription
2026-07-11T00:55:51.5917762Z         	Messages:   	Project creation failed: test-acc-tf-p-8238995435786279747, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.5919204Z --- FAIL: TestAccDatabaseUser_withLabelsAndDescription (61.69s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 20 seconds
- 2026-07-14 PASS 14 seconds
- 2026-07-15 PASS 27 seconds
- 2026-07-16 PASS 16 seconds
- 2026-07-17 PASS 35 seconds
- 2026-07-18 PASS 17 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4082967Z === RUN   TestAccDatabaseUser_withLabelsAndDescription
2026-07-21T00:53:42.4083407Z     resource_database_user_test.go:186: Creating execution project (1): test-acc-tf-p-3542979781351909160
2026-07-21T00:53:42.4083845Z     resource_database_user_test.go:186: 
2026-07-21T00:53:42.4084466Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4085618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4086771Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4088027Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:186
2026-07-21T00:53:42.4088643Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4090422Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4091329Z         	Test:       	TestAccDatabaseUser_withLabelsAndDescription
2026-07-21T00:53:42.4092842Z         	Messages:   	Project creation failed: test-acc-tf-p-3542979781351909160, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4093819Z --- FAIL: TestAccDatabaseUser_withLabelsAndDescription (0.67s)
```

- 2026-07-22 PASS 30 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4544574Z === RUN   TestAccDatabaseUser_withLabelsAndDescription
2026-07-23T00:49:05.4545238Z     resource_database_user_test.go:186: Creating execution project (1): test-acc-tf-p-7022306194102460660
2026-07-23T00:49:05.4545814Z     resource_database_user_test.go:186: 
2026-07-23T00:49:05.4546705Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4548280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4549798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4551528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:186
2026-07-23T00:49:05.4552336Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4554549Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4555775Z         	Test:       	TestAccDatabaseUser_withLabelsAndDescription
2026-07-23T00:49:05.4557680Z         	Messages:   	Project creation failed: test-acc-tf-p-7022306194102460660, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4559010Z --- FAIL: TestAccDatabaseUser_withLabelsAndDescription (0.94s)
```

- 2026-07-24 PASS 29 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 26 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 25 seconds
- 2026-07-30 PASS 8 seconds
- 2026-07-31 PASS 30 seconds
- 2026-08-01 PASS 12 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 29 seconds
- 2026-08-04 PASS 8 seconds
- 2026-08-05 PASS 32 seconds
- 2026-08-06 PASS 14 seconds
- 2026-08-07 PASS 26 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 33 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 33 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 28 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 14 seconds
  - PASS 35 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 32 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
