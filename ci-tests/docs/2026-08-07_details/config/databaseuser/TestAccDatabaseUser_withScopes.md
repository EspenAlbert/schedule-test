# config/databaseuser/TestAccDatabaseUser_withScopes Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.04s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2205855Z === RUN   TestAccDatabaseUser_withScopes
2026-07-09T00:59:33.2206500Z     resource_database_user_test.go:347: Creating execution project (1): test-acc-tf-p-8144328374958586638
2026-07-09T00:59:33.2207109Z     resource_database_user_test.go:347: 
2026-07-09T00:59:33.2208066Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2209922Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2211937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2213978Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:347
2026-07-09T00:59:33.2214836Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2218015Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2219426Z         	Test:       	TestAccDatabaseUser_withScopes
2026-07-09T00:59:33.2221827Z         	Messages:   	Project creation failed: test-acc-tf-p-8144328374958586638, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2223385Z --- FAIL: TestAccDatabaseUser_withScopes (0.40s)
```

- 2026-07-10 PASS 24 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5938165Z === RUN   TestAccDatabaseUser_withScopes
2026-07-11T00:55:51.5938821Z     resource_database_user_test.go:347: Creating execution project (1): test-acc-tf-p-416817130186570774
2026-07-11T00:55:51.5939400Z     resource_database_user_test.go:347: 
2026-07-11T00:55:51.5940372Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.5942246Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.5944132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.5946190Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:347
2026-07-11T00:55:51.5947050Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.5950344Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.5951767Z         	Test:       	TestAccDatabaseUser_withScopes
2026-07-11T00:55:51.5954189Z         	Messages:   	Project creation failed: test-acc-tf-p-416817130186570774, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.5955751Z --- FAIL: TestAccDatabaseUser_withScopes (0.27s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 17 seconds
- 2026-07-14 PASS 11 seconds
- 2026-07-15 PASS 24 seconds
- 2026-07-16 PASS 12 seconds
- 2026-07-17 PASS 33 seconds
- 2026-07-18 PASS 15 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4104886Z === RUN   TestAccDatabaseUser_withScopes
2026-07-21T00:53:42.4105364Z     resource_database_user_test.go:347: Creating execution project (1): test-acc-tf-p-4220850209651630561
2026-07-21T00:53:42.4105755Z     resource_database_user_test.go:347: 
2026-07-21T00:53:42.4106405Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4107555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4108766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4110026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:347
2026-07-21T00:53:42.4110576Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4112293Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4113139Z         	Test:       	TestAccDatabaseUser_withScopes
2026-07-21T00:53:42.4114625Z         	Messages:   	Project creation failed: test-acc-tf-p-4220850209651630561, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4115570Z --- FAIL: TestAccDatabaseUser_withScopes (0.64s)
```

- 2026-07-22 PASS 29 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4574564Z === RUN   TestAccDatabaseUser_withScopes
2026-07-23T00:49:05.4575200Z     resource_database_user_test.go:347: Creating execution project (1): test-acc-tf-p-4048685421062322762
2026-07-23T00:49:05.4575785Z     resource_database_user_test.go:347: 
2026-07-23T00:49:05.4576702Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4578200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4579720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4581557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:347
2026-07-23T00:49:05.4582346Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4584606Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4585770Z         	Test:       	TestAccDatabaseUser_withScopes
2026-07-23T00:49:05.4587668Z         	Messages:   	Project creation failed: test-acc-tf-p-4048685421062322762, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4588915Z --- FAIL: TestAccDatabaseUser_withScopes (0.18s)
```

- 2026-07-24 PASS 26 seconds
- 2026-07-25 PASS 10 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 23 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 22 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 28 seconds
- 2026-08-01 PASS 11 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 26 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 29 seconds
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 24 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 19 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 30 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 30 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 24 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 31 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 31 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
