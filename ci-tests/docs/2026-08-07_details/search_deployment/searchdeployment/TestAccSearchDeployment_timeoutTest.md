# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 25) FAIL(x 7)
Success rate: 78.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-10 00:49](#error-2026-07-10t0049380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a50419eaea6151790a3604c/clusters/test-acc-tf-c-1109295706539604659 | dev | flaky_500 | 6957.01s
[2026-07-11 00:44](#error-2026-07-11t0044400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 101.05s
[2026-07-14 00:42](#error-2026-07-14t0042150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-07-16 00:43](#error-2026-07-16t0043370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.09s
[2026-07-21 00:45](#error-2026-07-21t0045110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.04s
[2026-07-23 00:46](#error-2026-07-23t0046090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS an hour
- 2026-07-10

### Error 2026-07-10T00:49:38+00:00
```
2026-07-10T00:49:38.5215510Z === RUN   TestAccSearchDeployment_timeoutTest
2026-07-10T00:49:38.8156538Z === CONT  TestAccSearchDeployment_timeoutTest
2026-07-10T02:45:35.6134937Z === NAME  TestAccSearchDeployment_timeoutTest
2026-07-10T02:45:35.6135754Z     resource_test.go:82: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:45:35.6136551Z         
2026-07-10T02:45:35.6136846Z         Error: Error in delete
2026-07-10T02:45:35.6137150Z         
2026-07-10T02:45:35.6137620Z         cluster name: test-acc-tf-c-1109295706539604659, API error details:
2026-07-10T02:45:35.6138561Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a50419eaea6151790a3604c/clusters/test-acc-tf-c-1109295706539604659
2026-07-10T02:45:35.6139399Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:45:35.6140062Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:45:35.6140703Z         BadRequestDetail: 
2026-07-10T02:45:35.6141072Z --- FAIL: TestAccSearchDeployment_timeoutTest (6957.09s)
```

- 2026-07-11

### Error 2026-07-11T00:44:40+00:00
```
2026-07-11T00:44:40.3848835Z === RUN   TestAccSearchDeployment_timeoutTest
2026-07-11T00:46:21.9042813Z     shared_resource.go:160: 
2026-07-11T00:46:21.9045962Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:46:21.9049692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:46:21.9052384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:46:21.9054827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:46:21.9056811Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:46:21.9058756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:76
2026-07-11T00:46:21.9059578Z         	Error:      	Received unexpected error:
2026-07-11T00:46:21.9061902Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:21.9062994Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-07-11T00:46:21.9064794Z         	Messages:   	Project creation failed: test-acc-tf-p-5107775935260523551, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:21.9066347Z --- FAIL: TestAccSearchDeployment_timeoutTest (101.52s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14

### Error 2026-07-14T00:42:15+00:00
```
2026-07-14T00:42:15.9218251Z === RUN   TestAccSearchDeployment_timeoutTest
2026-07-14T00:43:19.3626286Z     shared_resource.go:160: 
2026-07-14T00:43:19.3629510Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:43:19.3634749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-14T00:43:19.3637748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-14T00:43:19.3640545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-14T00:43:19.3643483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-14T00:43:19.3646364Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:76
2026-07-14T00:43:19.3648618Z         	Error:      	Received unexpected error:
2026-07-14T00:43:19.3653808Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:19.3656620Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-07-14T00:43:19.3659354Z         	Messages:   	Project creation failed: test-acc-tf-p-935121463979051746, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:19.3660948Z --- FAIL: TestAccSearchDeployment_timeoutTest (63.44s)
```

- 2026-07-15 PASS an hour
- 2026-07-16

### Error 2026-07-16T00:43:37+00:00
```
2026-07-16T00:43:37.8616992Z === RUN   TestAccSearchDeployment_timeoutTest
2026-07-16T00:44:43.7986839Z     shared_resource.go:160: 
2026-07-16T00:44:43.7990008Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:44:43.7993608Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-16T00:44:43.7995954Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-16T00:44:43.7997745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-16T00:44:43.7999545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-16T00:44:43.8002141Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:76
2026-07-16T00:44:43.8005579Z         	Error:      	Received unexpected error:
2026-07-16T00:44:43.8008175Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:43.8009258Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-07-16T00:44:43.8011183Z         	Messages:   	Project creation failed: test-acc-tf-p-4035399621410297691, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:43.8012381Z --- FAIL: TestAccSearchDeployment_timeoutTest (65.94s)
```

- 2026-07-17 PASS an hour
- 2026-07-18 PASS an hour
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:45:11+00:00
```
2026-07-21T00:45:11.5697303Z === RUN   TestAccSearchDeployment_timeoutTest
2026-07-21T00:46:24.9839472Z     shared_resource.go:160: 
2026-07-21T00:46:24.9840666Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:46:24.9842067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:46:24.9843437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:46:24.9844815Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:46:24.9846165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:46:24.9848005Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:76
2026-07-21T00:46:24.9848630Z         	Error:      	Received unexpected error:
2026-07-21T00:46:24.9850143Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:24.9853644Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-07-21T00:46:24.9855052Z         	Messages:   	Project creation failed: test-acc-tf-p-5923235558092500980, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:24.9855963Z --- FAIL: TestAccSearchDeployment_timeoutTest (73.42s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:46:09+00:00
```
2026-07-23T00:46:09.7270039Z === RUN   TestAccSearchDeployment_timeoutTest
2026-07-23T00:47:11.0820887Z     shared_resource.go:160: 
2026-07-23T00:47:11.0823823Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:11.0830695Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:47:11.0834746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:47:11.0837914Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:47:11.0839892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:47:11.0841928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:76
2026-07-23T00:47:11.0843077Z         	Error:      	Received unexpected error:
2026-07-23T00:47:11.0845103Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:11.0846198Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-07-23T00:47:11.0848275Z         	Messages:   	Project creation failed: test-acc-tf-p-2125261146257509463, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:11.0849491Z --- FAIL: TestAccSearchDeployment_timeoutTest (61.36s)
```

- 2026-07-24 PASS 3 hours
- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 hours
- 2026-07-28 PASS 3 hours
- 2026-07-29 PASS an hour
- 2026-07-30 PASS 2 hours
- 2026-07-31 PASS 56 minutes
- 2026-08-01 PASS 58 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 55 minutes
- 2026-08-04 PASS 54 minutes
- 2026-08-05 PASS 53 minutes
- 2026-08-06 PASS 55 minutes
- 2026-08-07 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-19 00:46](#error-2026-07-19t0046080000) |  | qa | flaky_client | 4163.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS an hour
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS an hour
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19

### Error 2026-07-19T00:46:08+00:00
```
2026-07-19T00:46:08.9843846Z === RUN   TestAccSearchDeployment_timeoutTest
2026-07-19T00:46:09.2379413Z === CONT  TestAccSearchDeployment_timeoutTest
2026-07-19T01:55:32.7707118Z === NAME  TestAccSearchDeployment_timeoutTest
2026-07-19T01:55:32.7709586Z     resource_test.go:82: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-19T01:55:32.7710131Z         
2026-07-19T01:55:32.7710494Z         Error: error during search deployment delete
2026-07-19T01:55:32.7710827Z         
2026-07-19T01:55:32.7711053Z         Get
2026-07-19T01:55:32.7711915Z         "https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5c1e4e19caae8c5b4057d6/clusters/test-acc-tf-c-2325905427584380700/search/deployment":
2026-07-19T01:55:32.7713090Z         dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2026-07-19T01:55:32.7713516Z --- FAIL: TestAccSearchDeployment_timeoutTest (4163.78s)
```

- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS an hour
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 57 minutes
  - PASS an hour
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 54 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
