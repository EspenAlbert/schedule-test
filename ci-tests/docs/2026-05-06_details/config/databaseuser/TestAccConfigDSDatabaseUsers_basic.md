# config/databaseuser/TestAccConfigDSDatabaseUsers_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:43](#error-2026-04-09t0043440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.04s
[2026-04-11 00:48](#error-2026-04-11t0048250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-04-30 01:01](#error-2026-04-30t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.06s
[2026-05-05 00:55](#error-2026-05-05t0055080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 22 seconds
- 2026-04-08 PASS 8 seconds
- 2026-04-09

### Error 2026-04-09T00:43:44+00:00
```
2026-04-09T00:43:44.7632969Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-04-09T00:43:44.7634345Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-2375635396194390262
2026-04-09T00:43:44.7635418Z     data_source_database_users_test.go:13: 
2026-04-09T00:43:44.7639650Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:43:44.7642776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:43:44.7645849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:43:44.7649736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-04-09T00:43:44.7651138Z         	Error:      	Received unexpected error:
2026-04-09T00:43:44.7654350Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:44.7655992Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-04-09T00:43:44.7659206Z         	Messages:   	Project creation failed: test-acc-tf-p-2375635396194390262, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:44.7661220Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (89.37s)
```

- 2026-04-10 PASS 8 seconds
- 2026-04-11

### Error 2026-04-11T00:48:25+00:00
```
2026-04-11T00:48:25.0569171Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-04-11T00:48:25.0579087Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-2578792954128538490
2026-04-11T00:48:25.0580412Z     data_source_database_users_test.go:13: 
2026-04-11T00:48:25.0590520Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:48:25.0594016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:48:25.0597392Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:48:25.0601153Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-04-11T00:48:25.0602694Z         	Error:      	Received unexpected error:
2026-04-11T00:48:25.0606307Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:25.0608402Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-04-11T00:48:25.0611679Z         	Messages:   	Project creation failed: test-acc-tf-p-2578792954128538490, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:25.0613793Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (70.62s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 6 seconds
- 2026-04-14 PASS 27 seconds
- 2026-04-15 PASS 7 seconds
- 2026-04-16 PASS 5 seconds
- 2026-04-17 PASS 7 seconds
- 2026-04-18 PASS 25 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 6 seconds
- 2026-04-21 PASS 12 seconds
- 2026-04-22 PASS 7 seconds
- 2026-04-23 PASS 5 seconds
- 2026-04-24 PASS 9 seconds
- 2026-04-25 PASS 5 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 8 seconds
- 2026-04-28 PASS 5 seconds
- 2026-04-29 PASS 6 seconds
- 2026-04-30

### Error 2026-04-30T01:01:18+00:00
```
2026-04-30T01:01:18.1111652Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-04-30T01:01:18.1113012Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-4424184834774891927
2026-04-30T01:01:18.1114531Z     data_source_database_users_test.go:13: 
2026-04-30T01:01:18.1116177Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:18.1118348Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:18.1120865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:18.1122945Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-04-30T01:01:18.1123910Z         	Error:      	Received unexpected error:
2026-04-30T01:01:18.1125939Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:18.1127086Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-04-30T01:01:18.1129133Z         	Messages:   	Project creation failed: test-acc-tf-p-4424184834774891927, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:18.1131046Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (85.57s)
```

- 2026-05-01 PASS 7 seconds
- 2026-05-02 PASS 44 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 9 seconds
- 2026-05-05

### Error 2026-05-05T00:55:08+00:00
```
2026-05-05T00:55:08.8364850Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-05-05T00:55:08.8365832Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-7151888617595412112
2026-05-05T00:55:08.8368054Z     data_source_database_users_test.go:13: 
2026-05-05T00:55:08.8369701Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:55:08.8373413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:55:08.8376175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:55:08.8378315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-05-05T00:55:08.8379463Z         	Error:      	Received unexpected error:
2026-05-05T00:55:08.8382408Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:55:08.8383638Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-05-05T00:55:08.8385584Z         	Messages:   	Project creation failed: test-acc-tf-p-7151888617595412112, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:55:08.8386799Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (65.19s)
```

- 2026-05-06 PASS 4 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 8 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 9 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 9 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 3 seconds
  - PASS 9 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 6 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 seconds
- 2026-05-04 PASS 7 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 8 seconds
