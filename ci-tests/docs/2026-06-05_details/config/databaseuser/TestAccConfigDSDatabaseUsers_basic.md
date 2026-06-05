# config/databaseuser/TestAccConfigDSDatabaseUsers_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.03s
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.02s
[2026-05-21 01:09](#error-2026-05-21t0109260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.10s
[2026-05-23 01:05](#error-2026-05-23t0105110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.05s
[2026-05-26 02:14](#error-2026-05-26t0214460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.01s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 13 seconds
  - PASS 5 seconds
- 2026-05-08 PASS 7 seconds
- 2026-05-09

### Error 2026-05-09T01:02:11+00:00
```
2026-05-09T01:02:11.9171193Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-05-09T01:02:11.9171952Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-7101565805043635193
2026-05-09T01:02:11.9172588Z     data_source_database_users_test.go:13: 
2026-05-09T01:02:11.9173909Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:02:11.9176166Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:02:11.9177995Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:02:11.9180505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-05-09T01:02:11.9181545Z         	Error:      	Received unexpected error:
2026-05-09T01:02:11.9184192Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:11.9185770Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-05-09T01:02:11.9187931Z         	Messages:   	Project creation failed: test-acc-tf-p-7101565805043635193, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:11.9189413Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (82.33s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 7 seconds
- 2026-05-12 PASS 22 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 35 seconds
- 2026-05-15 PASS 8 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5764884Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-05-16T01:00:42.5765643Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-6724034423985693733
2026-05-16T01:00:42.5766242Z     data_source_database_users_test.go:13: 
2026-05-16T01:00:42.5767311Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:00:42.5769145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:00:42.5770977Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:00:42.5773008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-05-16T01:00:42.5773864Z         	Error:      	Received unexpected error:
2026-05-16T01:00:42.5775983Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5777033Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-05-16T01:00:42.5778823Z         	Messages:   	Project creation failed: test-acc-tf-p-6724034423985693733, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5780064Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (79.24s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19 PASS 40 seconds
- 2026-05-20 PASS 8 seconds
- 2026-05-21

### Error 2026-05-21T01:09:26+00:00
```
2026-05-21T01:09:26.8423205Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-05-21T01:09:26.8424380Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-7353663029230167707
2026-05-21T01:09:26.8425563Z     data_source_database_users_test.go:13: 
2026-05-21T01:09:26.8426696Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:26.8428735Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:26.8430839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:26.8433143Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-05-21T01:09:26.8434011Z         	Error:      	Received unexpected error:
2026-05-21T01:09:26.8435970Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:26.8437027Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-05-21T01:09:26.8438793Z         	Messages:   	Project creation failed: test-acc-tf-p-7353663029230167707, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:26.8440257Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (61.98s)
```

- 2026-05-22 PASS 9 seconds
- 2026-05-23

### Error 2026-05-23T01:05:11+00:00
```
2026-05-23T01:05:11.5617321Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-05-23T01:05:11.5618071Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-6771470031721885219
2026-05-23T01:05:11.5621124Z     data_source_database_users_test.go:13: 
2026-05-23T01:05:11.5621961Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:11.5623349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:11.5624712Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:11.5626531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-05-23T01:05:11.5627190Z         	Error:      	Received unexpected error:
2026-05-23T01:05:11.5628671Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:11.5629463Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-05-23T01:05:11.5631282Z         	Messages:   	Project creation failed: test-acc-tf-p-6771470031721885219, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:11.5632225Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (94.48s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 5 seconds
- 2026-05-26

### Error 2026-05-26T02:14:46+00:00
```
2026-05-26T02:14:46.0260352Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-05-26T02:14:46.0262371Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-8888041413563027148
2026-05-26T02:14:46.0263455Z     data_source_database_users_test.go:13: 
2026-05-26T02:14:46.0264955Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:46.0268174Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:46.0271580Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:46.0275338Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-05-26T02:14:46.0276204Z         	Error:      	Received unexpected error:
2026-05-26T02:14:46.0278104Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0279153Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-05-26T02:14:46.0280884Z         	Messages:   	Project creation failed: test-acc-tf-p-8888041413563027148, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0282108Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (72.08s)
```

- 2026-05-27 PASS 9 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6065726Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-05-28T01:02:57.6067023Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-1013171140172841041
2026-05-28T01:02:57.6068087Z     data_source_database_users_test.go:13: 
2026-05-28T01:02:57.6069854Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6073446Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6076764Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6080563Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-05-28T01:02:57.6082317Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6084958Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:02:57.6086016Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-05-28T01:02:57.6087774Z         	Messages:   	Project creation failed: test-acc-tf-p-1013171140172841041, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:02:57.6088968Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (64.06s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0294545Z === RUN   TestAccConfigDSDatabaseUsers_basic
2026-05-30T01:08:14.0295250Z     data_source_database_users_test.go:13: Creating execution project (1): test-acc-tf-p-1182078681454336831
2026-05-30T01:08:14.0295857Z     data_source_database_users_test.go:13: 
2026-05-30T01:08:14.0296832Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:14.0298783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:14.0300592Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:14.0302593Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2026-05-30T01:08:14.0303466Z         	Error:      	Received unexpected error:
2026-05-30T01:08:14.0305452Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0306477Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2026-05-30T01:08:14.0308369Z         	Messages:   	Project creation failed: test-acc-tf-p-1182078681454336831, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0309524Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (94.12s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 5 seconds
- 2026-06-02 PASS 42 seconds
- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 5 seconds
- 2026-06-05 PASS 4 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 7 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 8 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 10 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
