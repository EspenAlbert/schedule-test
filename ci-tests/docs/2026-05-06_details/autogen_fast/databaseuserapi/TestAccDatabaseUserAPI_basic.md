# autogen_fast/databaseuserapi/TestAccDatabaseUserAPI_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:42](#error-2026-04-09t0042440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.01s
[2026-04-11 00:45](#error-2026-04-11t0045400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.09s
[2026-04-14 00:50](#error-2026-04-14t0050520000) |  | dev | flaky_500 | 58.05s
[2026-04-16 00:53](#error-2026-04-16t0053110000) |  | dev | flaky_500 | 64.02s
[2026-04-18 00:45](#error-2026-04-18t0045540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.10s
[2026-05-05 00:53](#error-2026-05-05t0053470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 14 seconds
- 2026-04-08 PASS 11 seconds
- 2026-04-09

### Error 2026-04-09T00:42:44+00:00
```
2026-04-09T00:42:44.6789392Z === RUN   TestAccDatabaseUserAPI_basic
2026-04-09T00:42:44.6790436Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-3582737520315963460
2026-04-09T00:42:44.6791321Z     resource_test.go:17: 
2026-04-09T00:42:44.6793210Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:42:44.6796499Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:42:44.6799841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:42:44.6803755Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-04-09T00:42:44.6805347Z         	Error:      	Received unexpected error:
2026-04-09T00:42:44.6809064Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:42:44.6810972Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-04-09T00:42:44.6814494Z         	Messages:   	Project creation failed: test-acc-tf-p-3582737520315963460, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:42:44.6816707Z --- FAIL: TestAccDatabaseUserAPI_basic (67.11s)
```

- 2026-04-10 PASS 12 seconds
- 2026-04-11

### Error 2026-04-11T00:45:40+00:00
```
2026-04-11T00:45:40.7070954Z === RUN   TestAccDatabaseUserAPI_basic
2026-04-11T00:45:40.7072239Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-990814901761671108
2026-04-11T00:45:40.7073244Z     resource_test.go:17: 
2026-04-11T00:45:40.7075277Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:45:40.7079134Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:45:40.7083094Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:45:40.7087016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-04-11T00:45:40.7087987Z         	Error:      	Received unexpected error:
2026-04-11T00:45:40.7090586Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:40.7091761Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-04-11T00:45:40.7093638Z         	Messages:   	Project creation failed: test-acc-tf-p-990814901761671108, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:40.7095189Z --- FAIL: TestAccDatabaseUserAPI_basic (98.91s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 10 seconds
- 2026-04-14

### Error 2026-04-14T00:50:52+00:00
```
2026-04-14T00:50:52.1692672Z === RUN   TestAccDatabaseUserAPI_basic
2026-04-14T00:50:52.1693729Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-654784357730567083
2026-04-14T00:50:52.1694610Z     resource_test.go:17: 
2026-04-14T00:50:52.1696368Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:50:52.1699873Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T00:50:52.1703911Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T00:50:52.1707523Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-04-14T00:50:52.1709189Z         	Error:      	Received unexpected error:
2026-04-14T00:50:52.1710937Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-04-14T00:50:52.1712028Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-04-14T00:50:52.1714226Z         	Messages:   	Project creation failed: test-acc-tf-p-654784357730567083, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-04-14T00:50:52.1715600Z --- FAIL: TestAccDatabaseUserAPI_basic (58.49s)
```

- 2026-04-15 PASS 13 seconds
- 2026-04-16

### Error 2026-04-16T00:53:11+00:00
```
2026-04-16T00:53:11.5788699Z === RUN   TestAccDatabaseUserAPI_basic
2026-04-16T00:53:11.5789847Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-4912776847979531349
2026-04-16T00:53:11.5790803Z     resource_test.go:17: 
2026-04-16T00:53:11.5792686Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:53:11.5795600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:53:11.5798454Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:53:11.5801669Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-04-16T00:53:11.5803039Z         	Error:      	Received unexpected error:
2026-04-16T00:53:11.5804610Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-04-16T00:53:11.5805568Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-04-16T00:53:11.5807342Z         	Messages:   	Project creation failed: test-acc-tf-p-4912776847979531349, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-04-16T00:53:11.5808714Z --- FAIL: TestAccDatabaseUserAPI_basic (64.19s)
```

- 2026-04-17 PASS 13 seconds
- 2026-04-18

### Error 2026-04-18T00:45:54+00:00
```
2026-04-18T00:45:54.7556108Z === RUN   TestAccDatabaseUserAPI_basic
2026-04-18T00:45:54.7556883Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-6049411054504621147
2026-04-18T00:45:54.7557766Z     resource_test.go:17: 
2026-04-18T00:45:54.7558826Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T00:45:54.7560703Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T00:45:54.7562753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T00:45:54.7564679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-04-18T00:45:54.7565534Z         	Error:      	Received unexpected error:
2026-04-18T00:45:54.7567890Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:45:54.7568987Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-04-18T00:45:54.7570796Z         	Messages:   	Project creation failed: test-acc-tf-p-6049411054504621147, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:45:54.7573139Z --- FAIL: TestAccDatabaseUserAPI_basic (70.96s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 11 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 12 seconds
- 2026-04-23 PASS 45 seconds
- 2026-04-24 PASS 13 seconds
- 2026-04-25 PASS 19 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 11 seconds
- 2026-04-28 PASS 13 seconds
- 2026-04-29 PASS 12 seconds
- 2026-04-30 PASS 33 seconds
- 2026-05-01 PASS 12 seconds
- 2026-05-02 PASS 33 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 14 seconds
- 2026-05-05

### Error 2026-05-05T00:53:47+00:00
```
2026-05-05T00:53:47.2817212Z === RUN   TestAccDatabaseUserAPI_basic
2026-05-05T00:53:47.2818355Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-9098829405182970872
2026-05-05T00:53:47.2819252Z     resource_test.go:17: 
2026-05-05T00:53:47.2820863Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:53:47.2823113Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:53:47.2825261Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:53:47.2827599Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-05-05T00:53:47.2828490Z         	Error:      	Received unexpected error:
2026-05-05T00:53:47.2830933Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:47.2832018Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-05-05T00:53:47.2834194Z         	Messages:   	Project creation failed: test-acc-tf-p-9098829405182970872, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:47.2836039Z --- FAIL: TestAccDatabaseUserAPI_basic (75.53s)
```

- 2026-05-06 PASS 13 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 13 seconds
  - PASS 12 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 11 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 13 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 12 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 12 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 16 seconds
- 2026-05-04 PASS 12 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 14 seconds
