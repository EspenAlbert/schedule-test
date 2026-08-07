# config/databaseuser/TestAccDatabaseUser_withOIDCAuthType Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.00s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2241485Z === RUN   TestAccDatabaseUser_withOIDCAuthType
2026-07-09T00:59:33.2242144Z     resource_database_user_test.go:448: Creating execution project (1): test-acc-tf-p-5340223924335873928
2026-07-09T00:59:33.2242716Z     resource_database_user_test.go:448: 
2026-07-09T00:59:33.2243676Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2245638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2247624Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2249663Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:448
2026-07-09T00:59:33.2250516Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2253590Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2255034Z         	Test:       	TestAccDatabaseUser_withOIDCAuthType
2026-07-09T00:59:33.2257601Z         	Messages:   	Project creation failed: test-acc-tf-p-5340223924335873928, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2259178Z --- FAIL: TestAccDatabaseUser_withOIDCAuthType (0.46s)
```

- 2026-07-10 PASS 19 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5974469Z === RUN   TestAccDatabaseUser_withOIDCAuthType
2026-07-11T00:55:51.5975131Z     resource_database_user_test.go:448: Creating execution project (1): test-acc-tf-p-5375965706161064170
2026-07-11T00:55:51.5975718Z     resource_database_user_test.go:448: 
2026-07-11T00:55:51.5976700Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.5978711Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.5980598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.5982659Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:448
2026-07-11T00:55:51.5983524Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.5986465Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.5987889Z         	Test:       	TestAccDatabaseUser_withOIDCAuthType
2026-07-11T00:55:51.5990674Z         	Messages:   	Project creation failed: test-acc-tf-p-5375965706161064170, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.5992262Z --- FAIL: TestAccDatabaseUser_withOIDCAuthType (0.45s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 14 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 21 seconds
- 2026-07-16 PASS 9 seconds
- 2026-07-17 PASS 26 seconds
- 2026-07-18 PASS 10 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4126698Z === RUN   TestAccDatabaseUser_withOIDCAuthType
2026-07-21T00:53:42.4127185Z     resource_database_user_test.go:448: Creating execution project (1): test-acc-tf-p-4845575370426035419
2026-07-21T00:53:42.4127567Z     resource_database_user_test.go:448: 
2026-07-21T00:53:42.4128188Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4129426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4130567Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4131809Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:448
2026-07-21T00:53:42.4132360Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4134097Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4134974Z         	Test:       	TestAccDatabaseUser_withOIDCAuthType
2026-07-21T00:53:42.4136499Z         	Messages:   	Project creation failed: test-acc-tf-p-4845575370426035419, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4137448Z --- FAIL: TestAccDatabaseUser_withOIDCAuthType (1.05s)
```

- 2026-07-22 PASS 23 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4604391Z === RUN   TestAccDatabaseUser_withOIDCAuthType
2026-07-23T00:49:05.4605024Z     resource_database_user_test.go:448: Creating execution project (1): test-acc-tf-p-2463148730144838933
2026-07-23T00:49:05.4605606Z     resource_database_user_test.go:448: 
2026-07-23T00:49:05.4606522Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4608029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4609582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4611325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:448
2026-07-23T00:49:05.4612225Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4614521Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4615706Z         	Test:       	TestAccDatabaseUser_withOIDCAuthType
2026-07-23T00:49:05.4617620Z         	Messages:   	Project creation failed: test-acc-tf-p-2463148730144838933, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4618885Z --- FAIL: TestAccDatabaseUser_withOIDCAuthType (0.53s)
```

- 2026-07-24 PASS 23 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 19 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 14 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 23 seconds
- 2026-08-01 PASS 9 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 17 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 20 seconds
- 2026-08-06 PASS 11 seconds
- 2026-08-07 PASS 20 seconds

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
- 2026-07-19 PASS 21 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 11 seconds
  - PASS 24 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 26 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
