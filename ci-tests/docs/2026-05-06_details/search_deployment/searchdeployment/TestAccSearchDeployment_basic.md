# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 25) FAIL(x 8)
Success rate: 75.76%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:44](#error-2026-04-07t0044500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.07s
[2026-04-11 00:42](#error-2026-04-11t0042480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.00s
[2026-04-16 00:50](#error-2026-04-16t0050460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.07s
[2026-04-17 00:48](#error-2026-04-17t0048480000) |  | dev | timeout | 11633.05s
[2026-04-18 00:44](#error-2026-04-18t0044300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.04s
[2026-04-21 00:49](#error-2026-04-21t0049110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.03s
[2026-05-05 00:51](#error-2026-05-05t0051150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:44:50+00:00
```
2026-04-07T00:44:50.9618444Z === RUN   TestAccSearchDeployment_basic
2026-04-07T00:46:03.6738670Z     shared_resource.go:160: 
2026-04-07T00:46:03.6739859Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-07T00:46:03.6742014Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-07T00:46:03.6744538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-07T00:46:03.6747117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-07T00:46:03.6749305Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-07T00:46:03.6751560Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-04-07T00:46:03.6752488Z         	Error:      	Received unexpected error:
2026-04-07T00:46:03.6754784Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:46:03.6755991Z         	Test:       	TestAccSearchDeployment_basic
2026-04-07T00:46:03.6758293Z         	Messages:   	Project creation failed: test-acc-tf-p-8630139921645048863, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:46:03.6759682Z --- FAIL: TestAccSearchDeployment_basic (72.71s)
```

- 2026-04-08 PASS 55 minutes
- 2026-04-09 PASS an hour
- 2026-04-10 PASS an hour
- 2026-04-11

### Error 2026-04-11T00:42:48+00:00
```
2026-04-11T00:42:48.2392115Z === RUN   TestAccSearchDeployment_basic
2026-04-11T00:44:18.2700264Z     shared_resource.go:160: 
2026-04-11T00:44:18.2703661Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:44:18.2707100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-11T00:44:18.2710567Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-11T00:44:18.2713994Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-11T00:44:18.2716078Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-11T00:44:18.2717954Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-04-11T00:44:18.2718739Z         	Error:      	Received unexpected error:
2026-04-11T00:44:18.2720651Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:18.2721749Z         	Test:       	TestAccSearchDeployment_basic
2026-04-11T00:44:18.2723805Z         	Messages:   	Project creation failed: test-acc-tf-p-9215413657035997105, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:18.2724979Z --- FAIL: TestAccSearchDeployment_basic (90.03s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS an hour
- 2026-04-14 PASS an hour
- 2026-04-15 PASS 57 minutes
- 2026-04-16

### Error 2026-04-16T00:50:46+00:00
```
2026-04-16T00:50:46.5421744Z === RUN   TestAccSearchDeployment_basic
2026-04-16T00:51:52.2313028Z     shared_resource.go:160: 
2026-04-16T00:51:52.2316979Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:51:52.2321195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-16T00:51:52.2324990Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-16T00:51:52.2328550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-16T00:51:52.2331792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-16T00:51:52.2334793Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-04-16T00:51:52.2335971Z         	Error:      	Received unexpected error:
2026-04-16T00:51:52.2338917Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:51:52.2340435Z         	Test:       	TestAccSearchDeployment_basic
2026-04-16T00:51:52.2342815Z         	Messages:   	Project creation failed: test-acc-tf-p-8312006036119452187, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:51:52.2344363Z --- FAIL: TestAccSearchDeployment_basic (65.69s)
```

- 2026-04-17

### Error 2026-04-17T00:48:48+00:00
```
2026-04-17T00:48:48.8009163Z === RUN   TestAccSearchDeployment_basic
2026-04-17T00:48:49.8824187Z === CONT  TestAccSearchDeployment_basic
2026-04-17T04:02:43.3364364Z === NAME  TestAccSearchDeployment_basic
2026-04-17T04:02:43.3365188Z     resource_test.go:39: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-17T04:02:43.3365720Z         
2026-04-17T04:02:43.3366323Z         Error: error during search deployment delete
2026-04-17T04:02:43.3366679Z         
2026-04-17T04:02:43.3367137Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-17T04:02:43.3367567Z         timeout: 3h0m0s)
2026-04-17T04:02:43.3367869Z --- FAIL: TestAccSearchDeployment_basic (11633.46s)
```

- 2026-04-18

### Error 2026-04-18T00:44:30+00:00
```
2026-04-18T00:44:30.1462337Z === RUN   TestAccSearchDeployment_basic
2026-04-18T00:45:39.5762322Z     shared_resource.go:160: 
2026-04-18T00:45:39.5764317Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T00:45:39.5767873Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-18T00:45:39.5770352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-18T00:45:39.5773152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-18T00:45:39.5775077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-18T00:45:39.5776978Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-04-18T00:45:39.5777763Z         	Error:      	Received unexpected error:
2026-04-18T00:45:39.5779676Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:45:39.5780915Z         	Test:       	TestAccSearchDeployment_basic
2026-04-18T00:45:39.5782656Z         	Messages:   	Project creation failed: test-acc-tf-p-1706504899124772652, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:45:39.5783839Z --- FAIL: TestAccSearchDeployment_basic (69.43s)
```

- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21

### Error 2026-04-21T00:49:11+00:00
```
2026-04-21T00:49:11.7107163Z === RUN   TestAccSearchDeployment_basic
2026-04-21T00:50:22.9864158Z     shared_resource.go:160: 
2026-04-21T00:50:22.9865723Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-21T00:50:22.9867917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-21T00:50:22.9870087Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-21T00:50:22.9872465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-21T00:50:22.9875074Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-21T00:50:22.9877076Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-04-21T00:50:22.9877886Z         	Error:      	Received unexpected error:
2026-04-21T00:50:22.9879921Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:22.9881469Z         	Test:       	TestAccSearchDeployment_basic
2026-04-21T00:50:22.9883285Z         	Messages:   	Project creation failed: test-acc-tf-p-6469357301123879583, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:22.9884704Z --- FAIL: TestAccSearchDeployment_basic (71.28s)
```

- 2026-04-22 PASS an hour
- 2026-04-23 PASS an hour
- 2026-04-24 PASS 57 minutes
- 2026-04-25 PASS 52 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 58 minutes
- 2026-04-28 PASS an hour
- 2026-04-29 PASS an hour
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 59 minutes
- 2026-05-02 PASS 47 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS an hour
- 2026-05-05

### Error 2026-05-05T00:51:15+00:00
```
2026-05-05T00:51:15.1731186Z === RUN   TestAccSearchDeployment_basic
2026-05-05T00:52:16.8196615Z     shared_resource.go:160: 
2026-05-05T00:52:16.8200299Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:52:16.8203306Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-05T00:52:16.8206287Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-05T00:52:16.8208751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-05T00:52:16.8211660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-05T00:52:16.8213938Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-05-05T00:52:16.8214756Z         	Error:      	Received unexpected error:
2026-05-05T00:52:16.8216539Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:16.8217619Z         	Test:       	TestAccSearchDeployment_basic
2026-05-05T00:52:16.8219263Z         	Messages:   	Project creation failed: test-acc-tf-p-7231814956277187198, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:16.8220408Z --- FAIL: TestAccSearchDeployment_basic (61.65s)
```

- 2026-05-06 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-12 00:48](#error-2026-04-12t0048210000) |  | qa | 2026.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 51 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12

### Error 2026-04-12T00:48:21+00:00
```
2026-04-12T00:48:21.6428381Z === RUN   TestAccSearchDeployment_basic
2026-04-12T00:48:22.5581110Z === CONT  TestAccSearchDeployment_basic
2026-04-12T01:17:53.5571796Z === NAME  TestAccSearchDeployment_basic
2026-04-12T01:17:53.5572814Z     resource_test.go:39: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-04-12T01:17:53.5573570Z         
2026-04-12T01:17:53.5574044Z         Error: error reading advanced cluster
2026-04-12T01:17:53.5574518Z         
2026-04-12T01:17:53.5575148Z           with data.mongodbatlas_advanced_cluster.test,
2026-04-12T01:17:53.5576480Z           on terraform_plugin_test.tf line 32, in data "mongodbatlas_advanced_cluster" "test":
2026-04-12T01:17:53.5577558Z           32: data "mongodbatlas_advanced_cluster" "test" {
2026-04-12T01:17:53.5578080Z         
2026-04-12T01:17:53.5578827Z         cluster name: test-acc-tf-c-4688192206128274188, API error details:
2026-04-12T01:17:53.5580388Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69daebd1abb831662d2a1dfa/clusters/test-acc-tf-c-4688192206128274188
2026-04-12T01:17:53.5581873Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-04-12T01:17:53.5583022Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-04-12T01:22:09.0179337Z --- FAIL: TestAccSearchDeployment_basic (2026.46s)
```

- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 49 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 53 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 49 minutes
- 2026-05-04
  - PASS 51 minutes
  - PASS 44 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 49 minutes
