# config/databaseuser/TestAccDatabaseUser_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 101.09s
[2026-07-16 00:49](#error-2026-07-16t0049020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.04s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.04s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2108094Z === RUN   TestAccDatabaseUser_basic
2026-07-09T00:59:33.2108730Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-5623090037275561384
2026-07-09T00:59:33.2109482Z     resource_database_user_test.go:44: 
2026-07-09T00:59:33.2110463Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2112317Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2114178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2116632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-07-09T00:59:33.2117494Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2119495Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2120519Z         	Test:       	TestAccDatabaseUser_basic
2026-07-09T00:59:33.2122295Z         	Messages:   	Project creation failed: test-acc-tf-p-5623090037275561384, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2123478Z --- FAIL: TestAccDatabaseUser_basic (64.43s)
```

- 2026-07-10 PASS 20 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5839021Z === RUN   TestAccDatabaseUser_basic
2026-07-11T00:55:51.5839682Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-5756456489049388746
2026-07-11T00:55:51.5840277Z     resource_database_user_test.go:44: 
2026-07-11T00:55:51.5841261Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.5843143Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.5845019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.5847047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-07-11T00:55:51.5847907Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.5850291Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.5851489Z         	Test:       	TestAccDatabaseUser_basic
2026-07-11T00:55:51.5853554Z         	Messages:   	Project creation failed: test-acc-tf-p-5756456489049388746, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.5854752Z --- FAIL: TestAccDatabaseUser_basic (101.92s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 15 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 20 seconds
- 2026-07-16

### Error 2026-07-16T00:49:02+00:00
```
2026-07-16T00:49:02.2690907Z === RUN   TestAccDatabaseUser_basic
2026-07-16T00:49:02.2692483Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-970124216947615896
2026-07-16T00:49:02.2693668Z     resource_database_user_test.go:44: 
2026-07-16T00:49:02.2695359Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:49:02.2698636Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:49:02.2702471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:49:02.2706171Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-07-16T00:49:02.2707806Z         	Error:      	Received unexpected error:
2026-07-16T00:49:02.2711855Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:02.2713776Z         	Test:       	TestAccDatabaseUser_basic
2026-07-16T00:49:02.2716830Z         	Messages:   	Project creation failed: test-acc-tf-p-970124216947615896, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:02.2718373Z --- FAIL: TestAccDatabaseUser_basic (107.44s)
```

- 2026-07-17 PASS 27 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4043054Z === RUN   TestAccDatabaseUser_basic
2026-07-21T00:53:42.4043473Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-3651588320017190838
2026-07-21T00:53:42.4043847Z     resource_database_user_test.go:44: 
2026-07-21T00:53:42.4044460Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4045598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4046759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4048005Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-07-21T00:53:42.4048667Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4049886Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4050516Z         	Test:       	TestAccDatabaseUser_basic
2026-07-21T00:53:42.4051603Z         	Messages:   	Project creation failed: test-acc-tf-p-3651588320017190838, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4052336Z --- FAIL: TestAccDatabaseUser_basic (79.39s)
```

- 2026-07-22 PASS 24 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4485242Z === RUN   TestAccDatabaseUser_basic
2026-07-23T00:49:05.4485907Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-5232756232560660774
2026-07-23T00:49:05.4486500Z     resource_database_user_test.go:44: 
2026-07-23T00:49:05.4487504Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4489032Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4490555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4492392Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-07-23T00:49:05.4493166Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4494844Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:49:05.4495702Z         	Test:       	TestAccDatabaseUser_basic
2026-07-23T00:49:05.4497179Z         	Messages:   	Project creation failed: test-acc-tf-p-5232756232560660774, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:49:05.4498147Z --- FAIL: TestAccDatabaseUser_basic (65.25s)
```

- 2026-07-24 PASS 23 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 19 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29 PASS 15 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 23 seconds
- 2026-08-01 PASS 10 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 20 seconds
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
- 2026-07-26 PASS 17 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 11 seconds
  - PASS 25 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 25 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
