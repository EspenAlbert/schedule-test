# autogen_fast/logintegration/TestAccLogIntegration_basicAzure Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.09s
[2026-07-18 00:49](#error-2026-07-18t0049420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.03s
[2026-07-21 00:53](#error-2026-07-21t0053050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:03+00:00
```
2026-07-09T00:57:03.9597361Z === RUN   TestAccLogIntegration_basicAzure
2026-07-09T00:57:03.9598310Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-1220887167631157376
2026-07-09T00:57:03.9599157Z     resource_test.go:115: 
2026-07-09T00:57:03.9600147Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:03.9602216Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:03.9604101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:03.9606108Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-07-09T00:57:03.9606986Z         	Error:      	Received unexpected error:
2026-07-09T00:57:03.9609240Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9610349Z         	Test:       	TestAccLogIntegration_basicAzure
2026-07-09T00:57:03.9612192Z         	Messages:   	Project creation failed: test-acc-tf-p-1220887167631157376, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9615268Z --- FAIL: TestAccLogIntegration_basicAzure (64.31s)
```

- 2026-07-10 PASS 3 minutes
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1510008Z === RUN   TestAccLogIntegration_basicAzure
2026-07-11T00:54:31.1510637Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-1103929436413074718
2026-07-11T00:54:31.1511191Z     resource_test.go:115: 
2026-07-11T00:54:31.1512172Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1514068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1516089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1518102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-07-11T00:54:31.1518983Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1521000Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1522104Z         	Test:       	TestAccLogIntegration_basicAzure
2026-07-11T00:54:31.1523933Z         	Messages:   	Project creation failed: test-acc-tf-p-1103929436413074718, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1525192Z --- FAIL: TestAccLogIntegration_basicAzure (81.92s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 3 minutes
- 2026-07-14 PASS 4 minutes
- 2026-07-15 PASS 4 minutes
- 2026-07-16 PASS 4 minutes
- 2026-07-17 PASS 4 minutes
- 2026-07-18

### Error 2026-07-18T00:49:42+00:00
```
2026-07-18T00:49:42.9056610Z === RUN   TestAccLogIntegration_basicAzure
2026-07-18T00:49:42.9057308Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-7791961926824444848
2026-07-18T00:49:42.9057953Z     resource_test.go:115: 
2026-07-18T00:49:42.9058888Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:42.9060600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:49:42.9062293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:49:42.9064558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-07-18T00:49:42.9065717Z         	Error:      	Received unexpected error:
2026-07-18T00:49:42.9067545Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9068605Z         	Test:       	TestAccLogIntegration_basicAzure
2026-07-18T00:49:42.9070217Z         	Messages:   	Project creation failed: test-acc-tf-p-7791961926824444848, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9071550Z --- FAIL: TestAccLogIntegration_basicAzure (100.26s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:05+00:00
```
2026-07-21T00:53:05.9938180Z === RUN   TestAccLogIntegration_basicAzure
2026-07-21T00:53:05.9938854Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-5135819344926021154
2026-07-21T00:53:05.9939433Z     resource_test.go:115: 
2026-07-21T00:53:05.9940428Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:05.9942307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:05.9944160Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:05.9946445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-07-21T00:53:05.9947322Z         	Error:      	Received unexpected error:
2026-07-21T00:53:05.9949354Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:05.9950468Z         	Test:       	TestAccLogIntegration_basicAzure
2026-07-21T00:53:05.9952351Z         	Messages:   	Project creation failed: test-acc-tf-p-5135819344926021154, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:05.9953581Z --- FAIL: TestAccLogIntegration_basicAzure (61.83s)
```

- 2026-07-22 PASS 4 minutes
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9108247Z === RUN   TestAccLogIntegration_basicAzure
2026-07-23T00:48:36.9108743Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-7801116320257852813
2026-07-23T00:48:36.9109168Z     resource_test.go:115: 
2026-07-23T00:48:36.9109912Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9111355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9112903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9114434Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-07-23T00:48:36.9115126Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9116698Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9117540Z         	Test:       	TestAccLogIntegration_basicAzure
2026-07-23T00:48:36.9118945Z         	Messages:   	Project creation failed: test-acc-tf-p-7801116320257852813, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9119880Z --- FAIL: TestAccLogIntegration_basicAzure (61.46s)
```

- 2026-07-24 PASS 4 minutes
- 2026-07-25 PASS 3 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 minutes
- 2026-07-28 PASS 4 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 4 minutes
- 2026-07-31 PASS 4 minutes
- 2026-08-01 PASS 4 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 minutes
- 2026-08-04 PASS 4 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 4 minutes
- 2026-08-07 PASS 4 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 4 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 4 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 minutes
  - PASS 5 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
