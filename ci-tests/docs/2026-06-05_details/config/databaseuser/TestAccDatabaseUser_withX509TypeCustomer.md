# config/databaseuser/TestAccDatabaseUser_withX509TypeCustomer Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.07s
[2026-05-23 01:05](#error-2026-05-23t0105110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.00s
[2026-05-26 02:14](#error-2026-05-26t0214460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.00s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-05-08 PASS 16 seconds
- 2026-05-09

### Error 2026-05-09T01:02:11+00:00
```
2026-05-09T01:02:11.9208849Z === RUN   TestAccDatabaseUser_withX509TypeCustomer
2026-05-09T01:02:11.9209688Z     resource_database_user_test.go:99: Creating execution project (1): test-acc-tf-p-3432264092619684349
2026-05-09T01:02:11.9210656Z     resource_database_user_test.go:99: 
2026-05-09T01:02:11.9211832Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:02:11.9214316Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:02:11.9216690Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:02:11.9219300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:99
2026-05-09T01:02:11.9220396Z         	Error:      	Received unexpected error:
2026-05-09T01:02:11.9223039Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:11.9224594Z         	Test:       	TestAccDatabaseUser_withX509TypeCustomer
2026-05-09T01:02:11.9226922Z         	Messages:   	Project creation failed: test-acc-tf-p-3432264092619684349, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:11.9228584Z --- FAIL: TestAccDatabaseUser_withX509TypeCustomer (64.72s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 15 seconds
- 2026-05-12 PASS 7 seconds
- 2026-05-13 PASS 11 seconds
- 2026-05-14 PASS 5 seconds
- 2026-05-15 PASS 11 seconds
- 2026-05-16 PASS 33 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 10 seconds
- 2026-05-19 PASS 8 seconds
- 2026-05-20 PASS 13 seconds
- 2026-05-21 PASS a minute
- 2026-05-22 PASS 12 seconds
- 2026-05-23

### Error 2026-05-23T01:05:11+00:00
```
2026-05-23T01:05:11.5644013Z === RUN   TestAccDatabaseUser_withX509TypeCustomer
2026-05-23T01:05:11.5644505Z     resource_database_user_test.go:99: Creating execution project (1): test-acc-tf-p-2484815228737858740
2026-05-23T01:05:11.5644932Z     resource_database_user_test.go:99: 
2026-05-23T01:05:11.5645645Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:11.5646988Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:11.5648324Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:11.5649792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:99
2026-05-23T01:05:11.5650422Z         	Error:      	Received unexpected error:
2026-05-23T01:05:11.5652132Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:11.5653074Z         	Test:       	TestAccDatabaseUser_withX509TypeCustomer
2026-05-23T01:05:11.5654393Z         	Messages:   	Project creation failed: test-acc-tf-p-2484815228737858740, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:11.5655268Z --- FAIL: TestAccDatabaseUser_withX509TypeCustomer (100.00s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 11 seconds
- 2026-05-26

### Error 2026-05-26T02:14:46+00:00
```
2026-05-26T02:14:46.0297917Z === RUN   TestAccDatabaseUser_withX509TypeCustomer
2026-05-26T02:14:46.0298552Z     resource_database_user_test.go:99: Creating execution project (1): test-acc-tf-p-5723657034087357139
2026-05-26T02:14:46.0299266Z     resource_database_user_test.go:99: 
2026-05-26T02:14:46.0300215Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:46.0302012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:46.0304566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:46.0306520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:99
2026-05-26T02:14:46.0307352Z         	Error:      	Received unexpected error:
2026-05-26T02:14:46.0309265Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0310318Z         	Test:       	TestAccDatabaseUser_withX509TypeCustomer
2026-05-26T02:14:46.0312071Z         	Messages:   	Project creation failed: test-acc-tf-p-5723657034087357139, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0313579Z --- FAIL: TestAccDatabaseUser_withX509TypeCustomer (65.04s)
```

- 2026-05-27 PASS 18 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6106981Z === RUN   TestAccDatabaseUser_withX509TypeCustomer
2026-05-28T01:02:57.6107624Z     resource_database_user_test.go:99: Creating execution project (1): test-acc-tf-p-2992388370255285388
2026-05-28T01:02:57.6108174Z     resource_database_user_test.go:99: 
2026-05-28T01:02:57.6109240Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6111268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6113080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6115030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:99
2026-05-28T01:02:57.6115863Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6118668Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6120065Z         	Test:       	TestAccDatabaseUser_withX509TypeCustomer
2026-05-28T01:02:57.6122621Z         	Messages:   	Project creation failed: test-acc-tf-p-2992388370255285388, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6124164Z --- FAIL: TestAccDatabaseUser_withX509TypeCustomer (1.07s)
```

- 2026-05-29 PASS 16 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 10 seconds
- 2026-06-02 PASS 10 seconds
- 2026-06-03 PASS 18 seconds
- 2026-06-04 PASS 6 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 15 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 17 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 18 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 17 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
