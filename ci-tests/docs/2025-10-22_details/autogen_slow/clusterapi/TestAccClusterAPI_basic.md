# autogen_slow/clusterapi/TestAccClusterAPI_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-10-07 to 2025-10-22 from master branch: 1 unique tests, PASS(x 16) FAIL(x 2)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 03:30](#error-2025-10-07t0330350000) |  | dev | timeout | 10803.06s
[2025-10-20 10:27](#error-2025-10-20t1027490000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60ea1de46041f566a63aa/clusters | dev | out_of_capacity | 3.10s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23: MISSING
- 2025-09-24: MISSING
- 2025-09-25: MISSING
- 2025-09-26: MISSING
- 2025-09-27: MISSING
- 2025-09-28: MISSING
- 2025-09-29: MISSING
- 2025-09-30: MISSING
- 2025-10-01: MISSING
- 2025-10-02: MISSING
- 2025-10-03: MISSING
- 2025-10-04: MISSING
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07

### Error 2025-10-07T03:30:35+00:00
```
2025-10-07T03:30:35.9285608Z === RUN   TestAccClusterAPI_basic
2025-10-07T03:30:35.9286657Z     resource_test.go:17: Creating execution project: test-acc-tf-p-704710475871890413
2025-10-07T03:30:35.9287593Z === CONT  TestAccClusterAPI_basic
2025-10-07T03:30:35.9296182Z    test_name=TestAccClusterAPI_basic
2025-10-07T03:30:35.9296642Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2025-10-07T03:30:35.9296985Z         
2025-10-07T03:30:35.9297284Z         Error: Error waiting for changes in Create
2025-10-07T03:30:35.9297556Z         
2025-10-07T03:30:35.9297852Z           with mongodbatlas_cluster_api.test,
2025-10-07T03:30:35.9298432Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2025-10-07T03:30:35.9298954Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2025-10-07T03:30:35.9299226Z         
2025-10-07T03:30:35.9299641Z         timeout while waiting for state to become 'IDLE' (last state: 'CREATING',
2025-10-07T03:30:35.9300034Z         timeout: 3h0m0s)
2025-10-07T03:30:35.9300512Z --- FAIL: TestAccClusterAPI_basic (10803.56s)
```

- 2025-10-08 PASS 27 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 28 minutes
- 2025-10-11 PASS 29 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 30 minutes
- 2025-10-14 PASS 27 minutes
- 2025-10-15 PASS 24 minutes
- 2025-10-16 PASS 35 minutes
- 2025-10-17 PASS 27 minutes
- 2025-10-18 PASS 23 minutes
- 2025-10-19 PASS 22 minutes
- 2025-10-20
  - PASS 26 minutes
  - FAIL 3 seconds

### Error 2025-10-20T10:27:49+00:00
```
2025-10-20T10:27:49.2344353Z === RUN   TestAccClusterAPI_basic
2025-10-20T10:27:49.2345410Z     resource_test.go:17: Creating execution project: test-acc-tf-p-8946726784404306861
2025-10-20T10:27:49.2346749Z === CONT  TestAccClusterAPI_basic
2025-10-20T10:27:49.2364855Z   
2025-10-20T10:27:49.2365347Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2025-10-20T10:27:49.2365833Z         
2025-10-20T10:27:49.2366325Z         Error: Error calling API in Create
2025-10-20T10:27:49.2366776Z         
2025-10-20T10:27:49.2367182Z           with mongodbatlas_cluster_api.test,
2025-10-20T10:27:49.2367942Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2025-10-20T10:27:49.2368619Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2025-10-20T10:27:49.2368926Z         
2025-10-20T10:27:49.2369548Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60ea1de46041f566a63aa/clusters
2025-10-20T10:27:49.2370326Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:27:49.2371186Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:27:49.2371808Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:27:49.2372163Z --- FAIL: TestAccClusterAPI_basic (3.97s)
```

- 2025-10-21 PASS 24 minutes
- 2025-10-22
  - PASS 28 minutes
  - PASS 23 minutes