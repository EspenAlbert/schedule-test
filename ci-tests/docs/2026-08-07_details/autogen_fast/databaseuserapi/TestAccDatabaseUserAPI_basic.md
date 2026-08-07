# autogen_fast/databaseuserapi/TestAccDatabaseUserAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:53](#error-2026-07-09t0053050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.09s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.03s
[2026-07-16 00:48](#error-2026-07-16t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.08s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.08s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:53:05+00:00
```
2026-07-09T00:53:05.5041970Z === RUN   TestAccDatabaseUserAPI_basic
2026-07-09T00:53:05.5060748Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-4926371179617089594
2026-07-09T00:53:05.5061791Z     resource_test.go:17: 
2026-07-09T00:53:05.5063579Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:53:05.5067033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:53:05.5070784Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:53:05.5074433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-07-09T00:53:05.5076011Z         	Error:      	Received unexpected error:
2026-07-09T00:53:05.5079866Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:53:05.5081819Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-07-09T00:53:05.5085134Z         	Messages:   	Project creation failed: test-acc-tf-p-4926371179617089594, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:53:05.5087342Z --- FAIL: TestAccDatabaseUserAPI_basic (100.93s)
```

- 2026-07-10 PASS 14 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1476716Z === RUN   TestAccDatabaseUserAPI_basic
2026-07-11T00:54:31.1477485Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-2888847235747762035
2026-07-11T00:54:31.1478091Z     resource_test.go:17: 
2026-07-11T00:54:31.1479284Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1481373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1483272Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1485262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-07-11T00:54:31.1486298Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1488313Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1489407Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-07-11T00:54:31.1491234Z         	Messages:   	Project creation failed: test-acc-tf-p-2888847235747762035, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1492503Z --- FAIL: TestAccDatabaseUserAPI_basic (68.30s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 11 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 12 seconds
- 2026-07-16

### Error 2026-07-16T00:48:43+00:00
```
2026-07-16T00:48:43.0621511Z === RUN   TestAccDatabaseUserAPI_basic
2026-07-16T00:48:43.0622409Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-6863439654566798526
2026-07-16T00:48:43.0623126Z     resource_test.go:17: 
2026-07-16T00:48:43.0624224Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:48:43.0626047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:48:43.0627850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:48:43.0629845Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-07-16T00:48:43.0630766Z         	Error:      	Received unexpected error:
2026-07-16T00:48:43.0632909Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:43.0634019Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-07-16T00:48:43.0635743Z         	Messages:   	Project creation failed: test-acc-tf-p-6863439654566798526, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:43.0636986Z --- FAIL: TestAccDatabaseUserAPI_basic (73.81s)
```

- 2026-07-17 PASS 14 seconds
- 2026-07-18 PASS 38 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2349243Z === RUN   TestAccDatabaseUserAPI_basic
2026-07-21T00:52:27.2349883Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-3429453734280820477
2026-07-21T00:52:27.2350443Z     resource_test.go:17: 
2026-07-21T00:52:27.2351444Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.2353296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:27.2355259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:27.2357202Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-07-21T00:52:27.2358078Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.2360081Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2361160Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-07-21T00:52:27.2362983Z         	Messages:   	Project creation failed: test-acc-tf-p-3429453734280820477, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2364201Z --- FAIL: TestAccDatabaseUserAPI_basic (70.77s)
```

- 2026-07-22 PASS 13 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9083498Z === RUN   TestAccDatabaseUserAPI_basic
2026-07-23T00:48:36.9083983Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-5603500350567861532
2026-07-23T00:48:36.9084412Z     resource_test.go:17: 
2026-07-23T00:48:36.9085166Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9086606Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9088046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9089568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-07-23T00:48:36.9090246Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9091799Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9092692Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-07-23T00:48:36.9094115Z         	Messages:   	Project creation failed: test-acc-tf-p-5603500350567861532, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9095052Z --- FAIL: TestAccDatabaseUserAPI_basic (107.54s)
```

- 2026-07-24 PASS 12 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 17 seconds
- 2026-07-28 PASS 13 seconds
- 2026-07-29 PASS 13 seconds
- 2026-07-30 PASS 9 seconds
- 2026-07-31 PASS 13 seconds
- 2026-08-01 PASS 11 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 11 seconds
- 2026-08-04 PASS 12 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 13 seconds
- 2026-08-07 PASS 12 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 16 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 12 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 13 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 12 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 17 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 11 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
