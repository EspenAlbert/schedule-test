# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035190000) |  | dev | timeout | 10802.03s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10802.04s
[2026-02-03 00:39](#error-2026-02-03t0039300000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bee3c7fce2317e3566/clusters | dev | out_of_capacity | 2.01s
[2026-02-24 00:37](#error-2026-02-24t0037000000) |  | dev | flaky_500 | 1673.06s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 47 minutes
- 2026-01-27 PASS 53 minutes
- 2026-01-28 PASS 53 minutes
- 2026-01-29 PASS an hour
- 2026-01-30 PASS an hour
- 2026-01-31

### Error 2026-01-31T00:35:19+00:00
```
2026-01-31T00:35:19.8513349Z === RUN   TestAccSearchDeployment_timeoutTest
2026-01-31T00:35:21.0987341Z === CONT  TestAccSearchDeployment_timeoutTest
2026-01-31T03:35:22.1064622Z   
2026-01-31T03:35:22.1408910Z === NAME  TestAccSearchDeployment_timeoutTest
2026-01-31T03:35:22.1409816Z     resource_test.go:82: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-31T03:35:22.1410554Z         
2026-01-31T03:35:22.1411062Z         Error: Error in create
2026-01-31T03:35:22.1411438Z         
2026-01-31T03:35:22.1411868Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:35:22.1412485Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:35:22.1413067Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:35:22.1413381Z         
2026-01-31T03:35:22.1413812Z         cluster=test-acc-tf-c-4053945136710774489 didn't reach desired state: IDLE,
2026-01-31T03:35:22.1414291Z         error: context deadline exceeded
2026-01-31T03:35:22.1924114Z --- FAIL: TestAccSearchDeployment_timeoutTest (10802.34s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.2429727Z === RUN   TestAccSearchDeployment_timeoutTest
2026-02-02T00:38:44.5251045Z === CONT  TestAccSearchDeployment_timeoutTest
2026-02-02T03:38:45.5342610Z === NAME  TestAccSearchDeployment_timeoutTest
2026-02-02T03:38:45.5343835Z     resource_test.go:82: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-02T03:38:45.5344692Z         
2026-02-02T03:38:45.5345131Z         Error: Error in create
2026-02-02T03:38:45.5345578Z         
2026-02-02T03:38:45.5346162Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:38:45.5347380Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:38:45.5348683Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:38:45.5349275Z         
2026-02-02T03:38:45.5350088Z         cluster=test-acc-tf-c-2911858399856598744 didn't reach desired state: IDLE,
2026-02-02T03:38:45.5350980Z         error: context deadline exceeded
2026-02-02T03:38:45.6112262Z --- FAIL: TestAccSearchDeployment_timeoutTest (10802.37s)
```

- 2026-02-03

### Error 2026-02-03T00:39:30+00:00
```
2026-02-03T00:39:30.1153159Z === RUN   TestAccSearchDeployment_timeoutTest
2026-02-03T00:39:31.0659654Z === CONT  TestAccSearchDeployment_timeoutTest
2026-02-03T00:39:32.1784150Z === NAME  TestAccSearchDeployment_timeoutTest
2026-02-03T00:39:32.1785225Z     resource_test.go:82: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:39:32.1786150Z         
2026-02-03T00:39:32.1786614Z         Error: Error in create
2026-02-03T00:39:32.1787050Z         
2026-02-03T00:39:32.1787463Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:39:32.1788136Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:39:32.1788749Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:39:32.1789076Z         
2026-02-03T00:39:32.1789723Z         cluster name: test-acc-tf-c-6265790058308890941, API error details:
2026-02-03T00:39:32.1790425Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bee3c7fce2317e3566/clusters
2026-02-03T00:39:32.1791119Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:32.1791770Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:32.1792282Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:32.1884649Z   
2026-02-03T00:39:32.2398664Z --- FAIL: TestAccSearchDeployment_timeoutTest (2.12s)
```

- 2026-02-04 PASS 47 minutes
- 2026-02-05 PASS 54 minutes
- 2026-02-06 PASS 53 minutes
- 2026-02-07 PASS 49 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 54 minutes
- 2026-02-10 PASS 50 minutes
- 2026-02-11 PASS 48 minutes
- 2026-02-12 PASS 52 minutes
- 2026-02-13 PASS 46 minutes
- 2026-02-14 PASS 52 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 52 minutes
- 2026-02-17 PASS 52 minutes
- 2026-02-18 PASS 52 minutes
- 2026-02-19 PASS an hour
- 2026-02-20 PASS 53 minutes
- 2026-02-21 PASS 51 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 51 minutes
- 2026-02-24

### Error 2026-02-24T00:37:00+00:00
```
2026-02-24T00:37:00.2436210Z === RUN   TestAccSearchDeployment_timeoutTest
2026-02-24T00:37:01.2881612Z === CONT  TestAccSearchDeployment_timeoutTest
2026-02-24T00:53:51.6055157Z   diagnostic_detail=
2026-02-24T00:53:51.6059758Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment
2026-02-24T01:00:23.0756490Z   
2026-02-24T01:02:20.4492408Z === NAME  TestAccSearchDeployment_timeoutTest
2026-02-24T01:02:20.4495205Z     resource_test.go:82: Step 2/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-24T01:02:20.4496113Z         
2026-02-24T01:02:20.4496736Z         Error: error during search deployment creation
2026-02-24T01:02:20.4497302Z         
2026-02-24T01:02:20.4497917Z           with mongodbatlas_search_deployment.test,
2026-02-24T01:02:20.4499315Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2026-02-24T01:02:20.4500439Z           45: resource "mongodbatlas_search_deployment" "test" {
2026-02-24T01:02:20.4501082Z         
2026-02-24T01:02:20.4501945Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:02:20.4502659Z         type
2026-02-24T01:04:53.8720753Z --- FAIL: TestAccSearchDeployment_timeoutTest (1673.63s)
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
- 2026-02-01 PASS 49 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 45 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 50 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 54 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 45 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 51 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
