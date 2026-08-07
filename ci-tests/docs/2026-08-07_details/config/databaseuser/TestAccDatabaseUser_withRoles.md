# config/databaseuser/TestAccDatabaseUser_withRoles Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.04s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2187899Z === RUN   TestAccDatabaseUser_withRoles
2026-07-09T00:59:33.2188542Z     resource_database_user_test.go:280: Creating execution project (1): test-acc-tf-p-8392348681400417288
2026-07-09T00:59:33.2189127Z     resource_database_user_test.go:280: 
2026-07-09T00:59:33.2190093Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2191945Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2193809Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2196121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:280
2026-07-09T00:59:33.2196998Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2199975Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2201398Z         	Test:       	TestAccDatabaseUser_withRoles
2026-07-09T00:59:33.2203809Z         	Messages:   	Project creation failed: test-acc-tf-p-8392348681400417288, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2205494Z --- FAIL: TestAccDatabaseUser_withRoles (0.17s)
```

- 2026-07-10 PASS 21 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5919623Z === RUN   TestAccDatabaseUser_withRoles
2026-07-11T00:55:51.5920274Z     resource_database_user_test.go:280: Creating execution project (1): test-acc-tf-p-1651110032394034922
2026-07-11T00:55:51.5920856Z     resource_database_user_test.go:280: 
2026-07-11T00:55:51.5921825Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.5925723Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.5928182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.5930404Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:280
2026-07-11T00:55:51.5931281Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.5933320Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.5934376Z         	Test:       	TestAccDatabaseUser_withRoles
2026-07-11T00:55:51.5936394Z         	Messages:   	Project creation failed: test-acc-tf-p-1651110032394034922, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.5937624Z --- FAIL: TestAccDatabaseUser_withRoles (65.43s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 15 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 21 seconds
- 2026-07-16 PASS 9 seconds
- 2026-07-17 PASS 27 seconds
- 2026-07-18 PASS 9 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4094106Z === RUN   TestAccDatabaseUser_withRoles
2026-07-21T00:53:42.4094520Z     resource_database_user_test.go:280: Creating execution project (1): test-acc-tf-p-5660155205220069380
2026-07-21T00:53:42.4094908Z     resource_database_user_test.go:280: 
2026-07-21T00:53:42.4095524Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4096660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4097792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4099106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:280
2026-07-21T00:53:42.4099656Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4101383Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4102227Z         	Test:       	TestAccDatabaseUser_withRoles
2026-07-21T00:53:42.4103693Z         	Messages:   	Project creation failed: test-acc-tf-p-5660155205220069380, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4104640Z --- FAIL: TestAccDatabaseUser_withRoles (0.72s)
```

- 2026-07-22 PASS 24 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4559447Z === RUN   TestAccDatabaseUser_withRoles
2026-07-23T00:49:05.4560094Z     resource_database_user_test.go:280: Creating execution project (1): test-acc-tf-p-7126901950898363921
2026-07-23T00:49:05.4560646Z     resource_database_user_test.go:280: 
2026-07-23T00:49:05.4561826Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4563339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4564885Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4566545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:280
2026-07-23T00:49:05.4567404Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4569644Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4570961Z         	Test:       	TestAccDatabaseUser_withRoles
2026-07-23T00:49:05.4572873Z         	Messages:   	Project creation failed: test-acc-tf-p-7126901950898363921, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4574174Z --- FAIL: TestAccDatabaseUser_withRoles (0.67s)
```

- 2026-07-24 PASS 23 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 20 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29 PASS 14 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 23 seconds
- 2026-08-01 PASS 10 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 21 seconds
- 2026-08-06 PASS 11 seconds
- 2026-08-07 PASS 21 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 15 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 25 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 23 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 18 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 11 seconds
  - PASS 25 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 24 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
