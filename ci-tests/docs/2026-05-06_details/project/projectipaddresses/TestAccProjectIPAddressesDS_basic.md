# project/projectipaddresses/TestAccProjectIPAddressesDS_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:51](#error-2026-04-07t0051420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.02s
[2026-04-09 00:43](#error-2026-04-09t0043100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.05s
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.01s
[2026-04-14 00:55](#error-2026-04-14t0055180000) |  | dev | flaky_500 | 35.06s
[2026-04-16 00:54](#error-2026-04-16t0054520000) |  | dev | flaky_500 | 63.06s
[2026-05-05 00:58](#error-2026-05-05t0058030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:51:42+00:00
```
2026-04-07T00:51:42.4151628Z === RUN   TestAccProjectIPAddressesDS_basic
2026-04-07T00:51:42.4152350Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-6858084092797307077
2026-04-07T00:51:42.4152842Z     data_source_test.go:13: 
2026-04-07T00:51:42.4153912Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-07T00:51:42.4156016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-07T00:51:42.4158275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-07T00:51:42.4160465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-04-07T00:51:42.4161301Z         	Error:      	Received unexpected error:
2026-04-07T00:51:42.4163578Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:51:42.4164795Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-04-07T00:51:42.4166848Z         	Messages:   	Project creation failed: test-acc-tf-p-6858084092797307077, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:51:42.4168276Z --- FAIL: TestAccProjectIPAddressesDS_basic (89.18s)
```

- 2026-04-08 PASS 3 seconds
- 2026-04-09

### Error 2026-04-09T00:43:10+00:00
```
2026-04-09T00:43:10.0332851Z === RUN   TestAccProjectIPAddressesDS_basic
2026-04-09T00:43:10.0333434Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-8621975884888400729
2026-04-09T00:43:10.0333965Z     data_source_test.go:13: 
2026-04-09T00:43:10.0336816Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:43:10.0340156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:43:10.0342477Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:43:10.0344423Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-04-09T00:43:10.0345262Z         	Error:      	Received unexpected error:
2026-04-09T00:43:10.0347175Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:10.0348506Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-04-09T00:43:10.0350252Z         	Messages:   	Project creation failed: test-acc-tf-p-8621975884888400729, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:10.0351602Z --- FAIL: TestAccProjectIPAddressesDS_basic (69.52s)
```

- 2026-04-10 PASS 2 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.4064570Z === RUN   TestAccProjectIPAddressesDS_basic
2026-04-11T00:48:38.4065142Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-2919449463434366999
2026-04-11T00:48:38.4065639Z     data_source_test.go:13: 
2026-04-11T00:48:38.4066558Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:48:38.4068506Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:48:38.4070319Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:48:38.4072366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-04-11T00:48:38.4073200Z         	Error:      	Received unexpected error:
2026-04-11T00:48:38.4075158Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.4076340Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-04-11T00:48:38.4078382Z         	Messages:   	Project creation failed: test-acc-tf-p-2919449463434366999, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.4079591Z --- FAIL: TestAccProjectIPAddressesDS_basic (81.14s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 3 seconds
- 2026-04-14

### Error 2026-04-14T00:55:18+00:00
```
2026-04-14T00:55:18.2866137Z === RUN   TestAccProjectIPAddressesDS_basic
2026-04-14T00:55:18.2867130Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-2729651359614543447
2026-04-14T00:55:18.2867983Z     data_source_test.go:13: 
2026-04-14T00:55:18.2869622Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:55:18.2873157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T00:55:18.2876453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T00:55:18.2879823Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-04-14T00:55:18.2881466Z         	Error:      	Received unexpected error:
2026-04-14T00:55:18.2883062Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-04-14T00:55:18.2884241Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-04-14T00:55:18.2886172Z         	Messages:   	Project creation failed: test-acc-tf-p-2729651359614543447, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-04-14T00:55:18.2887535Z --- FAIL: TestAccProjectIPAddressesDS_basic (35.57s)
```

- 2026-04-15 PASS 3 seconds
- 2026-04-16

### Error 2026-04-16T00:54:52+00:00
```
2026-04-16T00:54:52.8083019Z === RUN   TestAccProjectIPAddressesDS_basic
2026-04-16T00:54:52.8083590Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-4990043123924091019
2026-04-16T00:54:52.8084076Z     data_source_test.go:13: 
2026-04-16T00:54:52.8084983Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:54:52.8086774Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:54:52.8088766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:54:52.8090880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-04-16T00:54:52.8091688Z         	Error:      	Received unexpected error:
2026-04-16T00:54:52.8092591Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-04-16T00:54:52.8093193Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-04-16T00:54:52.8094253Z         	Messages:   	Project creation failed: test-acc-tf-p-4990043123924091019, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-04-16T00:54:52.8094972Z --- FAIL: TestAccProjectIPAddressesDS_basic (63.65s)
```

- 2026-04-17 PASS 3 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 seconds
- 2026-04-21 PASS 32 seconds
- 2026-04-22 PASS 3 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 3 seconds
- 2026-04-25 PASS 21 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 4 seconds
- 2026-04-28 PASS 32 seconds
- 2026-04-29 PASS 3 seconds
- 2026-04-30 PASS 57 seconds
- 2026-05-01 PASS 4 seconds
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 4 seconds
- 2026-05-05

### Error 2026-05-05T00:58:03+00:00
```
2026-05-05T00:58:03.1484915Z === RUN   TestAccProjectIPAddressesDS_basic
2026-05-05T00:58:03.1485982Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-4826935192437643841
2026-05-05T00:58:03.1486890Z     data_source_test.go:13: 
2026-05-05T00:58:03.1488864Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:58:03.1492467Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:58:03.1496111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:58:03.1500212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-05-05T00:58:03.1501799Z         	Error:      	Received unexpected error:
2026-05-05T00:58:03.1505647Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:58:03.1507618Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-05-05T00:58:03.1511281Z         	Messages:   	Project creation failed: test-acc-tf-p-4826935192437643841, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:58:03.1513457Z --- FAIL: TestAccProjectIPAddressesDS_basic (64.43s)
```

- 2026-05-06 PASS 4 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 3 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 5 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 2 seconds
- 2026-05-04 PASS 2 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 2 seconds
