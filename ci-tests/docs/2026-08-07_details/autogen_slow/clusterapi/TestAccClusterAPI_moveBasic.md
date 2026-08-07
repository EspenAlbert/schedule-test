# autogen_slow/clusterapi/TestAccClusterAPI_moveBasic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.01s
[2026-07-11 00:48](#error-2026-07-11t0048400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.01s
[2026-07-16 00:49](#error-2026-07-16t0049450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-07-18 00:46](#error-2026-07-18t0046020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.10s
[2026-07-21 00:49](#error-2026-07-21t0049090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.2640680Z === RUN   TestAccClusterAPI_moveBasic
2026-07-09T01:36:44.2643885Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-6133620671779201370
2026-07-09T01:36:44.2644896Z     move_test.go:18: 
2026-07-09T01:36:44.2647027Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.2650685Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.2654332Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.2658695Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-07-09T01:36:44.2660228Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.2664031Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2666409Z         	Test:       	TestAccClusterAPI_moveBasic
2026-07-09T01:36:44.2670102Z         	Messages:   	Project creation failed: test-acc-tf-p-6133620671779201370, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2672280Z --- FAIL: TestAccClusterAPI_moveBasic (67.07s)
```

- 2026-07-10 PASS 40 minutes
- 2026-07-11

### Error 2026-07-11T00:48:40+00:00
```
2026-07-11T00:48:40.9301412Z === RUN   TestAccClusterAPI_moveBasic
2026-07-11T00:48:40.9302533Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-3152029340647842799
2026-07-11T00:48:40.9303463Z     move_test.go:18: 
2026-07-11T00:48:40.9304726Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:48:40.9307199Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:48:40.9309416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:48:40.9311879Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-07-11T00:48:40.9312816Z         	Error:      	Received unexpected error:
2026-07-11T00:48:40.9315170Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:40.9316567Z         	Test:       	TestAccClusterAPI_moveBasic
2026-07-11T00:48:40.9318606Z         	Messages:   	Project creation failed: test-acc-tf-p-3152029340647842799, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:40.9319829Z --- FAIL: TestAccClusterAPI_moveBasic (93.07s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 37 minutes
- 2026-07-14 PASS 21 minutes
- 2026-07-15 PASS 25 minutes
- 2026-07-16

### Error 2026-07-16T00:49:45+00:00
```
2026-07-16T00:49:45.2005334Z === RUN   TestAccClusterAPI_moveBasic
2026-07-16T00:49:45.2006453Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-2520392188403793998
2026-07-16T00:49:45.2007346Z     move_test.go:18: 
2026-07-16T00:49:45.2008611Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:49:45.2010748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:49:45.2013551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:49:45.2015601Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-07-16T00:49:45.2016461Z         	Error:      	Received unexpected error:
2026-07-16T00:49:45.2018640Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:45.2019732Z         	Test:       	TestAccClusterAPI_moveBasic
2026-07-16T00:49:45.2022708Z         	Messages:   	Project creation failed: test-acc-tf-p-2520392188403793998, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:45.2024006Z --- FAIL: TestAccClusterAPI_moveBasic (64.28s)
```

- 2026-07-17 PASS 28 minutes
- 2026-07-18

### Error 2026-07-18T00:46:02+00:00
```
2026-07-18T00:46:02.0600408Z === RUN   TestAccClusterAPI_moveBasic
2026-07-18T00:46:02.0601545Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-3881348982840937107
2026-07-18T00:46:02.0602441Z     move_test.go:18: 
2026-07-18T00:46:02.0603878Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:46:02.0605923Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:46:02.0608218Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:46:02.0610241Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-07-18T00:46:02.0611124Z         	Error:      	Received unexpected error:
2026-07-18T00:46:02.0613279Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:02.0614695Z         	Test:       	TestAccClusterAPI_moveBasic
2026-07-18T00:46:02.0616784Z         	Messages:   	Project creation failed: test-acc-tf-p-3881348982840937107, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:02.0618019Z --- FAIL: TestAccClusterAPI_moveBasic (64.97s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:49:09+00:00
```
2026-07-21T00:49:09.3652979Z === RUN   TestAccClusterAPI_moveBasic
2026-07-21T00:49:09.3655649Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-2144528742836108932
2026-07-21T00:49:09.3656170Z     move_test.go:18: 
2026-07-21T00:49:09.3657147Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:49:09.3659258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:49:09.3661125Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:49:09.3663019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-07-21T00:49:09.3663812Z         	Error:      	Received unexpected error:
2026-07-21T00:49:09.3665891Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:09.3666902Z         	Test:       	TestAccClusterAPI_moveBasic
2026-07-21T00:49:09.3669385Z         	Messages:   	Project creation failed: test-acc-tf-p-2144528742836108932, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:09.3670535Z --- FAIL: TestAccClusterAPI_moveBasic (65.35s)
```

- 2026-07-22 PASS 39 minutes
- 2026-07-23 PASS an hour
- 2026-07-24 PASS 26 minutes
- 2026-07-25 PASS 27 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 27 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 17 minutes
- 2026-08-01 PASS 19 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 17 minutes
- 2026-08-04 PASS 18 minutes
- 2026-08-05 PASS 18 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 22 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 33 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 30 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 22 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 20 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 21 minutes
  - PASS 29 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
