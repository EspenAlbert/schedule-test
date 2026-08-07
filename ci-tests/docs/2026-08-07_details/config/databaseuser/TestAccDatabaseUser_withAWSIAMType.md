# config/databaseuser/TestAccDatabaseUser_withAWSIAMType Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.05s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.07s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2155994Z === RUN   TestAccDatabaseUser_withAWSIAMType
2026-07-09T00:59:33.2156652Z     resource_database_user_test.go:159: Creating execution project (1): test-acc-tf-p-5401435107475257044
2026-07-09T00:59:33.2157231Z     resource_database_user_test.go:159: 
2026-07-09T00:59:33.2158195Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2160075Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2161929Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2163968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:159
2026-07-09T00:59:33.2164828Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2167110Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2168182Z         	Test:       	TestAccDatabaseUser_withAWSIAMType
2026-07-09T00:59:33.2170002Z         	Messages:   	Project creation failed: test-acc-tf-p-5401435107475257044, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2171224Z --- FAIL: TestAccDatabaseUser_withAWSIAMType (107.51s)
```

- 2026-07-10 PASS 14 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5887298Z === RUN   TestAccDatabaseUser_withAWSIAMType
2026-07-11T00:55:51.5888188Z     resource_database_user_test.go:159: Creating execution project (1): test-acc-tf-p-5819179462458951087
2026-07-11T00:55:51.5888867Z     resource_database_user_test.go:159: 
2026-07-11T00:55:51.5889837Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.5891697Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.5893557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.5895606Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:159
2026-07-11T00:55:51.5896474Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.5898936Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.5900022Z         	Test:       	TestAccDatabaseUser_withAWSIAMType
2026-07-11T00:55:51.5901828Z         	Messages:   	Project creation failed: test-acc-tf-p-5819179462458951087, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.5903096Z --- FAIL: TestAccDatabaseUser_withAWSIAMType (86.74s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14 PASS 5 seconds
- 2026-07-15 PASS 14 seconds
- 2026-07-16 PASS 5 seconds
- 2026-07-17 PASS 16 seconds
- 2026-07-18 PASS 6 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4071831Z === RUN   TestAccDatabaseUser_withAWSIAMType
2026-07-21T00:53:42.4072263Z     resource_database_user_test.go:159: Creating execution project (1): test-acc-tf-p-8436319057564973558
2026-07-21T00:53:42.4072640Z     resource_database_user_test.go:159: 
2026-07-21T00:53:42.4073255Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4074393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4075539Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4076785Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:159
2026-07-21T00:53:42.4077338Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4079371Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4080255Z         	Test:       	TestAccDatabaseUser_withAWSIAMType
2026-07-21T00:53:42.4081707Z         	Messages:   	Project creation failed: test-acc-tf-p-8436319057564973558, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4082672Z --- FAIL: TestAccDatabaseUser_withAWSIAMType (0.57s)
```

- 2026-07-22 PASS 16 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4529026Z === RUN   TestAccDatabaseUser_withAWSIAMType
2026-07-23T00:49:05.4529659Z     resource_database_user_test.go:159: Creating execution project (1): test-acc-tf-p-4568246191961701644
2026-07-23T00:49:05.4530235Z     resource_database_user_test.go:159: 
2026-07-23T00:49:05.4531488Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4533068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4534585Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4536209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:159
2026-07-23T00:49:05.4537011Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4539346Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4540912Z         	Test:       	TestAccDatabaseUser_withAWSIAMType
2026-07-23T00:49:05.4542826Z         	Messages:   	Project creation failed: test-acc-tf-p-4568246191961701644, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4544111Z --- FAIL: TestAccDatabaseUser_withAWSIAMType (0.39s)
```

- 2026-07-24 PASS 17 seconds
- 2026-07-25 PASS 5 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 10 seconds
- 2026-07-30 PASS 3 seconds
- 2026-07-31 PASS 16 seconds
- 2026-08-01 PASS 7 seconds
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
- 2026-07-12 PASS 10 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 17 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 11 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 9 seconds
  - PASS 16 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
