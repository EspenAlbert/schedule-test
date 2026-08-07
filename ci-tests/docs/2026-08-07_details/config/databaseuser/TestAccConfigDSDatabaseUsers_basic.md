# config/databaseuser/TestAccConfigDSDatabaseUsers_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-07-16 00:49](#error-2026-07-16t0049020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2087097Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-07-09T00:59:33.2088383Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-3085008540136298256
2026-07-09T00:59:33.2089470Z     data_source_database_users_test.go:13: 
2026-07-09T00:59:33.2091211Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2094681Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2097863Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2099967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-07-09T00:59:33.2100855Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2102866Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2104310Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-07-09T00:59:33.2106444Z         	Messages:   	Project creation failed: test-acc-tf-p-3085008540136298256, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2107725Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (63.71s)
```

- 2026-07-10 PASS 8 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.5814112Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-07-11T00:55:51.5815478Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-2218682535362895084
2026-07-11T00:55:51.5816554Z     data_source_database_users_test.go:13: 
2026-07-11T00:55:51.5817814Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.5824085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.5826413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.5829219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-07-11T00:55:51.5830669Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.5834000Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.5835143Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-07-11T00:55:51.5836998Z         	Messages:   	Project creation failed: test-acc-tf-p-2218682535362895084, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.5838626Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (63.74s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 24 seconds
- 2026-07-15 PASS 10 seconds
- 2026-07-16

### Error 2026-07-16T00:49:02+00:00
```
2026-07-16T00:49:02.2618905Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-07-16T00:49:02.2623021Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-739065501032864335
2026-07-16T00:49:02.2626051Z     data_source_database_users_test.go:13: 
2026-07-16T00:49:02.2632500Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:49:02.2636456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:49:02.2641015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:49:02.2649517Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-07-16T00:49:02.2651489Z         	Error:      	Received unexpected error:
2026-07-16T00:49:02.2681083Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:02.2684459Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-07-16T00:49:02.2687826Z         	Messages:   	Project creation failed: test-acc-tf-p-739065501032864335, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:02.2690100Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (68.64s)
```

- 2026-07-17 PASS 8 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8266338Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-07-18T00:51:48.8267563Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-2870065719814627420
2026-07-18T00:51:48.8268670Z     data_source_database_users_test.go:13: 
2026-07-18T00:51:48.8270552Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.8274244Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.8277705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.8281558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-07-18T00:51:48.8283341Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.8287060Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8289012Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-07-18T00:51:48.8292762Z         	Messages:   	Project creation failed: test-acc-tf-p-2870065719814627420, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8294981Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (62.26s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4033327Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-07-21T00:53:42.4033763Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-2839921204921496004
2026-07-21T00:53:42.4034157Z     data_source_database_users_test.go:13: 
2026-07-21T00:53:42.4034784Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4035941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4037100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4038443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-07-21T00:53:42.4039006Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4040216Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4040933Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-07-21T00:53:42.4042039Z         	Messages:   	Project creation failed: test-acc-tf-p-2839921204921496004, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4042795Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (62.49s)
```

- 2026-07-22 PASS 9 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4465533Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-07-23T00:49:05.4466606Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-5064659446722930605
2026-07-23T00:49:05.4467533Z     data_source_database_users_test.go:13: 
2026-07-23T00:49:05.4468991Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4474822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4476484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4478455Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-07-23T00:49:05.4479266Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4481255Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:49:05.4482253Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-07-23T00:49:05.4483758Z         	Messages:   	Project creation failed: test-acc-tf-p-5064659446722930605, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:49:05.4484795Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (66.07s)
```

- 2026-07-24 PASS 8 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 4 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 4 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 4 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 9 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 4 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 7 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 3 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 9 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
