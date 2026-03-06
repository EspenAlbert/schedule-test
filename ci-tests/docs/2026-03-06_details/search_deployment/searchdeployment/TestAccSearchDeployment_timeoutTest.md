# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037000000) |  | dev | flaky_500 | 1673.06s

### Timeline
- 2026-02-04: MISSING
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

- 2026-02-25 PASS 50 minutes
- 2026-02-26 PASS an hour
- 2026-02-27 PASS 52 minutes
- 2026-02-28 PASS 57 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 44 minutes
- 2026-03-03 PASS 56 minutes
- 2026-03-04 PASS 48 minutes
- 2026-03-05 PASS an hour
- 2026-03-06 PASS 56 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-03 09:31](#error-2026-03-03t0931220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69a6aa6861f800e9358a36b1/clusters | qa | out_of_capacity | 2.03s

### Timeline
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
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 55 minutes
- 2026-03-02: MISSING
- 2026-03-03

### Error 2026-03-03T09:31:22+00:00
```
2026-03-03T09:31:22.1942792Z === RUN   TestAccSearchDeployment_timeoutTest
2026-03-03T09:31:23.3752396Z === CONT  TestAccSearchDeployment_timeoutTest
2026-03-03T09:31:24.4616205Z === NAME  TestAccSearchDeployment_timeoutTest
2026-03-03T09:31:24.4617544Z     resource_test.go:82: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-03-03T09:31:24.4618691Z         
2026-03-03T09:31:24.4619171Z         Error: Error in create
2026-03-03T09:31:24.4619650Z         
2026-03-03T09:31:24.4620232Z           with mongodbatlas_advanced_cluster.test,
2026-03-03T09:31:24.4620923Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-03T09:31:24.4621678Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2026-03-03T09:31:24.4622259Z         
2026-03-03T09:31:24.4622682Z         cluster name: test-acc-tf-c-5194493194570158721, API error details:
2026-03-03T09:31:24.4623367Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a6aa6861f800e9358a36b1/clusters
2026-03-03T09:31:24.4624074Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-03-03T09:31:24.4624925Z         region is currently out of capacity for the requested instance size. Reason:
2026-03-03T09:31:24.4625656Z         Conflict. Params: [], BadRequestDetail: 
2026-03-03T09:31:24.5238067Z --- FAIL: TestAccSearchDeployment_timeoutTest (2.33s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
