# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | timeout | 10806.00s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10800.09s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bee3c7fce2317e3566/clusters | dev | out_of_capacity | 4.06s
[2026-02-24 00:36](#error-2026-02-24t0036580000) |  | dev | flaky_500 | 1698.06s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 39 minutes
- 2026-01-27 PASS 44 minutes
- 2026-01-28 PASS 43 minutes
- 2026-01-29 PASS 48 minutes
- 2026-01-30 PASS 58 minutes
- 2026-01-31

### Error 2026-01-31T00:35:14+00:00
```
2026-01-31T00:35:14.8945214Z === RUN   TestAccSearchDeployment_basic
2026-01-31T00:35:21.0986072Z === CONT  TestAccSearchDeployment_basic
2026-01-31T03:35:22.1064956Z === NAME  TestAccSearchDeployment_basic
2026-01-31T03:35:22.1065738Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:35:22.1066356Z         
2026-01-31T03:35:22.1066708Z         Error: Error in create
2026-01-31T03:35:22.1067080Z         
2026-01-31T03:35:22.1067544Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:35:22.1068283Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:35:22.1068865Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:35:22.1069177Z         
2026-01-31T03:35:22.1069623Z         cluster=test-acc-tf-c-6388594664946737824 didn't reach desired state: IDLE,
2026-01-31T03:35:22.1070084Z         error: context deadline exceeded
2026-01-31T03:35:22.1408648Z   
2026-01-31T03:35:22.1595334Z --- FAIL: TestAccSearchDeployment_basic (10806.02s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.2426810Z === RUN   TestAccSearchDeployment_basic
2026-02-02T00:38:44.5254581Z === CONT  TestAccSearchDeployment_basic
2026-02-02T00:42:53.0086611Z   
2026-02-02T03:38:45.3803093Z === NAME  TestAccSearchDeployment_basic
2026-02-02T03:38:45.3805838Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:38:45.3806559Z         
2026-02-02T03:38:45.3806909Z         Error: Error in create
2026-02-02T03:38:45.3807185Z         
2026-02-02T03:38:45.3807688Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:38:45.3808613Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:38:45.3809663Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:38:45.3810002Z         
2026-02-02T03:38:45.3810662Z         cluster=test-acc-tf-c-4881042027162289090 didn't reach desired state: IDLE,
2026-02-02T03:38:45.3811167Z         error: context deadline exceeded
2026-02-02T03:38:45.4341588Z --- FAIL: TestAccSearchDeployment_basic (10800.91s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.6712158Z === RUN   TestAccSearchDeployment_basic
2026-02-03T00:39:31.0658544Z === CONT  TestAccSearchDeployment_basic
2026-02-03T00:39:32.1884984Z === NAME  TestAccSearchDeployment_basic
2026-02-03T00:39:32.1885819Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:39:32.1886448Z         
2026-02-03T00:39:32.1886858Z         Error: Error in create
2026-02-03T00:39:32.1887256Z         
2026-02-03T00:39:32.1887788Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:39:32.1888936Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:39:32.1890157Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:39:32.1890677Z         
2026-02-03T00:39:32.1891358Z         cluster name: test-acc-tf-c-905201513047246532, API error details:
2026-02-03T00:39:32.1892490Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bee3c7fce2317e3566/clusters
2026-02-03T00:39:32.1893650Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:32.1894787Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:32.1895630Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:32.2472535Z --- FAIL: TestAccSearchDeployment_basic (4.63s)
```

- 2026-02-04 PASS 39 minutes
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


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 42 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
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
