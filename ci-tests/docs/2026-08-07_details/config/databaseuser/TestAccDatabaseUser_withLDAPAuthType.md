# config/databaseuser/TestAccDatabaseUser_withLDAPAuthType Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2223756Z === RUN   TestAccDatabaseUser_withLDAPAuthType
2026-07-09T00:59:33.2224408Z     resource_database_user_test.go:422: Creating execution project (1): test-acc-tf-p-114012866609620976
2026-07-09T00:59:33.2224987Z     resource_database_user_test.go:422: 
2026-07-09T00:59:33.2226070Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2227926Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2229785Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2231817Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:422
2026-07-09T00:59:33.2232668Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2235686Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2237111Z         	Test:       	TestAccDatabaseUser_withLDAPAuthType
2026-07-09T00:59:33.2239525Z         	Messages:   	Project creation failed: test-acc-tf-p-114012866609620976, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2241095Z --- FAIL: TestAccDatabaseUser_withLDAPAuthType (0.39s)
```

- 2026-07-10 PASS 14 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5956133Z === RUN   TestAccDatabaseUser_withLDAPAuthType
2026-07-11T00:55:51.5956798Z     resource_database_user_test.go:422: Creating execution project (1): test-acc-tf-p-3543635810125309873
2026-07-11T00:55:51.5957382Z     resource_database_user_test.go:422: 
2026-07-11T00:55:51.5958509Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.5960395Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.5962421Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.5964485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:422
2026-07-11T00:55:51.5965363Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.5968514Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.5969939Z         	Test:       	TestAccDatabaseUser_withLDAPAuthType
2026-07-11T00:55:51.5972489Z         	Messages:   	Project creation failed: test-acc-tf-p-3543635810125309873, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.5974073Z --- FAIL: TestAccDatabaseUser_withLDAPAuthType (0.26s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14 PASS 5 seconds
- 2026-07-15 PASS 13 seconds
- 2026-07-16 PASS 5 seconds
- 2026-07-17 PASS 16 seconds
- 2026-07-18 PASS 6 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4115826Z === RUN   TestAccDatabaseUser_withLDAPAuthType
2026-07-21T00:53:42.4116264Z     resource_database_user_test.go:422: Creating execution project (1): test-acc-tf-p-2458003180947885465
2026-07-21T00:53:42.4116644Z     resource_database_user_test.go:422: 
2026-07-21T00:53:42.4117257Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4118477Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4119651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4120903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:422
2026-07-21T00:53:42.4121445Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4123180Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4124038Z         	Test:       	TestAccDatabaseUser_withLDAPAuthType
2026-07-21T00:53:42.4125475Z         	Messages:   	Project creation failed: test-acc-tf-p-2458003180947885465, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4126431Z --- FAIL: TestAccDatabaseUser_withLDAPAuthType (0.90s)
```

- 2026-07-22 PASS 17 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4589307Z === RUN   TestAccDatabaseUser_withLDAPAuthType
2026-07-23T00:49:05.4589964Z     resource_database_user_test.go:422: Creating execution project (1): test-acc-tf-p-3127961703941115999
2026-07-23T00:49:05.4590550Z     resource_database_user_test.go:422: 
2026-07-23T00:49:05.4591536Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4593048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4594586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4596246Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:422
2026-07-23T00:49:05.4597090Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4599345Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4600544Z         	Test:       	TestAccDatabaseUser_withLDAPAuthType
2026-07-23T00:49:05.4602572Z         	Messages:   	Project creation failed: test-acc-tf-p-3127961703941115999, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4603946Z --- FAIL: TestAccDatabaseUser_withLDAPAuthType (0.61s)
```

- 2026-07-24 PASS 16 seconds
- 2026-07-25 PASS 5 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 9 seconds
- 2026-07-30 PASS 3 seconds
- 2026-07-31 PASS 13 seconds
- 2026-08-01 PASS 8 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 9 seconds
- 2026-08-04 PASS 3 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 14 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 17 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 10 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 9 seconds
  - PASS 17 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
