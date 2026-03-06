# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036580000) |  | dev | flaky_500 | 1698.06s
[2026-03-03 00:39](#error-2026-03-03t0039460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 42 minutes
- 2026-02-06 PASS 40 minutes
- 2026-02-07 PASS 41 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 40 minutes
- 2026-02-10 PASS 53 minutes
- 2026-02-11 PASS 37 minutes
- 2026-02-12 PASS 39 minutes
- 2026-02-13 PASS 38 minutes
- 2026-02-14 PASS 42 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 40 minutes
- 2026-02-17 PASS 54 minutes
- 2026-02-18 PASS 45 minutes
- 2026-02-19 PASS an hour
- 2026-02-20 PASS 44 minutes
- 2026-02-21 PASS 39 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 41 minutes
- 2026-02-24

### Error 2026-02-24T00:36:58+00:00
```
2026-02-24T00:36:58.0064941Z === RUN   TestAccSearchDeployment_basic
2026-02-24T00:37:01.2880061Z === CONT  TestAccSearchDeployment_basic
2026-02-24T01:00:23.0756811Z === NAME  TestAccSearchDeployment_basic
2026-02-24T01:00:23.0757382Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-02-24T01:00:23.0757893Z         
2026-02-24T01:00:23.0758213Z         Error: error reading advanced cluster
2026-02-24T01:00:23.0758611Z         
2026-02-24T01:00:23.0759217Z           with data.mongodbatlas_advanced_cluster.test,
2026-02-24T01:00:23.0760046Z           on terraform_plugin_test.tf line 32, in data "mongodbatlas_advanced_cluster" "test":
2026-02-24T01:00:23.0760763Z           32: data "mongodbatlas_advanced_cluster" "test" {
2026-02-24T01:00:23.0761090Z         
2026-02-24T01:00:23.0761544Z         cluster name: test-acc-tf-c-7612457491515873555, API error details: (503
2026-02-24T01:00:23.0762220Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:02:20.4491321Z    test_name=TestAccSearchDeployment_timeoutTest test_terraform_path=/home/runner/work/_temp/c4592cff-09ff-4e29-8a5f-9939abc0a2ae/terraform
2026-02-24T01:05:17.6816352Z --- FAIL: TestAccSearchDeployment_basic (1698.63s)
```

- 2026-02-25 PASS 38 minutes
- 2026-02-26 PASS 50 minutes
- 2026-02-27 PASS 39 minutes
- 2026-02-28 PASS 39 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 39 minutes
- 2026-03-03

### Error 2026-03-03T00:39:46+00:00
```
2026-03-03T00:39:46.5333407Z === RUN   TestAccSearchDeployment_basic
2026-03-03T00:40:49.2479373Z     shared_resource.go:160: 
2026-03-03T00:40:49.2483648Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-03-03T00:40:49.2486573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-03-03T00:40:49.2489181Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-03-03T00:40:49.2491700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-03-03T00:40:49.2494102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-03-03T00:40:49.2496990Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-03-03T00:40:49.2497787Z         	Error:      	Received unexpected error:
2026-03-03T00:40:49.2499834Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:40:49.2500872Z         	Test:       	TestAccSearchDeployment_basic
2026-03-03T00:40:49.2502578Z         	Messages:   	Project creation failed: test-acc-tf-p-6708483887369163720, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:40:49.2503734Z --- FAIL: TestAccSearchDeployment_basic (62.71s)
```

- 2026-03-04 PASS 36 minutes
- 2026-03-05 PASS 52 minutes
- 2026-03-06 PASS 44 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 36 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 40 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 44 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 37 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 39 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 45 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 38 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
