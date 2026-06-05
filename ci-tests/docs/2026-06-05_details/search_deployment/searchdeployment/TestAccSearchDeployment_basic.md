# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 7)
Success rate: 76.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:54](#error-2026-05-09t0054580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.07s
[2026-05-13 00:58](#error-2026-05-13t0058060000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a03cc9bc2214ad0d199196e/clusters | dev | out_of_capacity | 1.02s
[2026-05-19 01:00](#error-2026-05-19t0100570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.06s
[2026-05-21 01:02](#error-2026-05-21t0102520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-05-23 00:58](#error-2026-05-23t0058550000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a10fbcfc0b16ce515f17dd5/clusters | dev | out_of_capacity | 17.05s
[2026-05-30 01:00](#error-2026-05-30t0100160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.02s
[2026-06-02 01:07](#error-2026-06-02t0107360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 2 hours
- 2026-05-08 PASS an hour
- 2026-05-09

### Error 2026-05-09T00:54:58+00:00
```
2026-05-09T00:54:58.7379782Z === RUN   TestAccSearchDeployment_basic
2026-05-09T00:56:07.4112571Z     shared_resource.go:160: 
2026-05-09T00:56:07.4115378Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:56:07.4116783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T00:56:07.4118361Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T00:56:07.4120172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T00:56:07.4121537Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T00:56:07.4123010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-05-09T00:56:07.4123619Z         	Error:      	Received unexpected error:
2026-05-09T00:56:07.4125085Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:07.4125873Z         	Test:       	TestAccSearchDeployment_basic
2026-05-09T00:56:07.4127169Z         	Messages:   	Project creation failed: test-acc-tf-p-3785249563487092644, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:07.4128159Z --- FAIL: TestAccSearchDeployment_basic (68.67s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS an hour
- 2026-05-12 PASS 59 minutes
- 2026-05-13

### Error 2026-05-13T00:58:06+00:00
```
2026-05-13T00:58:06.7826187Z === RUN   TestAccSearchDeployment_basic
2026-05-13T00:58:07.0597678Z === CONT  TestAccSearchDeployment_basic
2026-05-13T00:58:08.2527017Z    test_terraform_path=/home/runner/work/_temp/f446bc9e-711a-467b-aaa0-c7659d19853e/terraform
2026-05-13T00:58:08.2528137Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-05-13T00:58:08.2528965Z         
2026-05-13T00:58:08.2529392Z         Error: Error in create
2026-05-13T00:58:08.2529797Z         
2026-05-13T00:58:08.2530353Z           with mongodbatlas_advanced_cluster.test,
2026-05-13T00:58:08.2531515Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-13T00:58:08.2532604Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-05-13T00:58:08.2533132Z         
2026-05-13T00:58:08.2533857Z         cluster name: test-acc-tf-c-4904305132002901692, API error details:
2026-05-13T00:58:08.2535112Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a03cc9bc2214ad0d199196e/clusters
2026-05-13T00:58:08.2536315Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-13T00:58:08.2537474Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-13T00:58:08.2538608Z         Conflict. Params: [], BadRequestDetail: 
2026-05-13T00:58:08.3118051Z --- FAIL: TestAccSearchDeployment_basic (1.25s)
```

- 2026-05-14 PASS an hour
- 2026-05-15 PASS an hour
- 2026-05-16 PASS 44 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19

### Error 2026-05-19T01:00:57+00:00
```
2026-05-19T01:00:57.0435603Z === RUN   TestAccSearchDeployment_basic
2026-05-19T01:02:31.6703833Z     shared_resource.go:160: 
2026-05-19T01:02:31.6707729Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:02:31.6711170Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-19T01:02:31.6714898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-19T01:02:31.6718212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-19T01:02:31.6720436Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-19T01:02:31.6722371Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-05-19T01:02:31.6723473Z         	Error:      	Received unexpected error:
2026-05-19T01:02:31.6725408Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:02:31.6726430Z         	Test:       	TestAccSearchDeployment_basic
2026-05-19T01:02:31.6728168Z         	Messages:   	Project creation failed: test-acc-tf-p-4603756364715700256, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:02:31.6729324Z --- FAIL: TestAccSearchDeployment_basic (94.63s)
```

- 2026-05-20 PASS an hour
- 2026-05-21

### Error 2026-05-21T01:02:52+00:00
```
2026-05-21T01:02:52.3597378Z === RUN   TestAccSearchDeployment_basic
2026-05-21T01:03:54.8121813Z     shared_resource.go:160: 
2026-05-21T01:03:54.8125178Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:03:54.8126918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-21T01:03:54.8129013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-21T01:03:54.8130770Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-21T01:03:54.8132655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-21T01:03:54.8134452Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-05-21T01:03:54.8135294Z         	Error:      	Received unexpected error:
2026-05-21T01:03:54.8137108Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:03:54.8138151Z         	Test:       	TestAccSearchDeployment_basic
2026-05-21T01:03:54.8139823Z         	Messages:   	Project creation failed: test-acc-tf-p-3133011314090556681, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:03:54.8140940Z --- FAIL: TestAccSearchDeployment_basic (62.45s)
```

- 2026-05-22 PASS 2 hours
- 2026-05-23

### Error 2026-05-23T00:58:55+00:00
```
2026-05-23T00:58:55.6175097Z === RUN   TestAccSearchDeployment_basic
2026-05-23T00:59:12.1977590Z === CONT  TestAccSearchDeployment_basic
2026-05-23T00:59:13.3229887Z === NAME  TestAccSearchDeployment_basic
2026-05-23T00:59:13.3233175Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-05-23T00:59:13.3234278Z         
2026-05-23T00:59:13.3234830Z         Error: Error in create
2026-05-23T00:59:13.3235273Z         
2026-05-23T00:59:13.3235837Z           with mongodbatlas_advanced_cluster.test,
2026-05-23T00:59:13.3237007Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-23T00:59:13.3238061Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-05-23T00:59:13.3239169Z         
2026-05-23T00:59:13.3239904Z         cluster name: test-acc-tf-c-4192120421311041233, API error details:
2026-05-23T00:59:13.3241006Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a10fbcfc0b16ce515f17dd5/clusters
2026-05-23T00:59:13.3242140Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-23T00:59:13.3243221Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-23T00:59:13.3244051Z         Conflict. Params: [], BadRequestDetail: 
2026-05-23T00:59:13.3753478Z --- FAIL: TestAccSearchDeployment_basic (17.50s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS an hour
- 2026-05-26 PASS 55 minutes
- 2026-05-27 PASS 2 hours
- 2026-05-28 PASS an hour
- 2026-05-29 PASS an hour
- 2026-05-30

### Error 2026-05-30T01:00:16+00:00
```
2026-05-30T01:00:16.4373281Z === RUN   TestAccSearchDeployment_basic
2026-05-30T01:01:32.6759645Z     shared_resource.go:160: 
2026-05-30T01:01:32.6762991Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:01:32.6764736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-30T01:01:32.6766745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-30T01:01:32.6768483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-30T01:01:32.6770224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-30T01:01:32.6772267Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-05-30T01:01:32.6773061Z         	Error:      	Received unexpected error:
2026-05-30T01:01:32.6774865Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:01:32.6775864Z         	Test:       	TestAccSearchDeployment_basic
2026-05-30T01:01:32.6777505Z         	Messages:   	Project creation failed: test-acc-tf-p-2511607910481563586, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:01:32.6778626Z --- FAIL: TestAccSearchDeployment_basic (76.24s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02

### Error 2026-06-02T01:07:36+00:00
```
2026-06-02T01:07:36.3275622Z === RUN   TestAccSearchDeployment_basic
2026-06-02T01:08:43.5455460Z     shared_resource.go:160: 
2026-06-02T01:08:43.5460474Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:08:43.5463902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-06-02T01:08:43.5467655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-06-02T01:08:43.5470516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-06-02T01:08:43.5473518Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-06-02T01:08:43.5475822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-06-02T01:08:43.5476674Z         	Error:      	Received unexpected error:
2026-06-02T01:08:43.5478673Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:08:43.5479726Z         	Test:       	TestAccSearchDeployment_basic
2026-06-02T01:08:43.5481532Z         	Messages:   	Project creation failed: test-acc-tf-p-1306316468270484235, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:08:43.5482731Z --- FAIL: TestAccSearchDeployment_basic (67.22s)
```

- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05 PASS an hour

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 55 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 50 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 53 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 52 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
