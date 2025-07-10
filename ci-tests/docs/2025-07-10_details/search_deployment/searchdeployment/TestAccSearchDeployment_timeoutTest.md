# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 62 TestRuns in dev, qa from 2025-05-24 to 2025-07-10 from master branch: 1 unique tests, PASS(x 60) FAIL(x 2)
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-04 00:29](#error-2025-06-04t0029160000) |  | dev | timeout | 2698.03s
[2025-06-05 00:28](#error-2025-06-05t0028510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4c2161ca93c1f05230b/clusters/test-acc-tf-c-3310409960872551063 | dev | flaky_500 | 182.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12: MISSING
- 2025-04-13: MISSING
- 2025-04-14: MISSING
- 2025-04-15: MISSING
- 2025-04-16: MISSING
- 2025-04-17: MISSING
- 2025-04-18: MISSING
- 2025-04-19: MISSING
- 2025-04-20: MISSING
- 2025-04-21: MISSING
- 2025-04-22: MISSING
- 2025-04-23: MISSING
- 2025-04-24: MISSING
- 2025-04-25: MISSING
- 2025-04-26: MISSING
- 2025-04-27: MISSING
- 2025-04-28: MISSING
- 2025-04-29: MISSING
- 2025-04-30: MISSING
- 2025-05-01: MISSING
- 2025-05-02: MISSING
- 2025-05-03: MISSING
- 2025-05-04: MISSING
- 2025-05-05: MISSING
- 2025-05-06: MISSING
- 2025-05-07: MISSING
- 2025-05-08: MISSING
- 2025-05-09: MISSING
- 2025-05-10: MISSING
- 2025-05-11: MISSING
- 2025-05-12: MISSING
- 2025-05-13: MISSING
- 2025-05-14: MISSING
- 2025-05-15: MISSING
- 2025-05-16: MISSING
- 2025-05-17: MISSING
- 2025-05-18: MISSING
- 2025-05-19: MISSING
- 2025-05-20: MISSING
- 2025-05-21: MISSING
- 2025-05-22: MISSING
- 2025-05-23: MISSING
- 2025-05-24 PASS 36 minutes
- 2025-05-25 PASS 36 minutes
- 2025-05-26 PASS 36 minutes
- 2025-05-27 PASS 35 minutes
- 2025-05-28
  - PASS 48 minutes
  - PASS 40 minutes
- 2025-05-29 PASS 40 minutes
- 2025-05-30 PASS 30 minutes
- 2025-05-31 PASS 36 minutes
- 2025-06-01
  - PASS 32 minutes
  - PASS 34 minutes
  - PASS 31 minutes
  - PASS 32 minutes
  - PASS 32 minutes
  - PASS 32 minutes
- 2025-06-02
  - PASS 35 minutes
  - PASS 37 minutes
  - PASS 34 minutes
- 2025-06-03 PASS 36 minutes
- 2025-06-04

### Error 2025-06-04T00:29:16+00:00
```
2025-06-04T00:29:16.4980379Z === RUN   TestAccSearchDeployment_timeoutTest
2025-06-04T00:29:19.7152783Z === CONT  TestAccSearchDeployment_timeoutTest
2025-06-04T01:10:44.6748898Z === NAME  TestAccSearchDeployment_timeoutTest
2025-06-04T01:10:44.6751929Z     resource_test.go:91: 
2025-06-04T01:10:44.6753864Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:91
2025-06-04T01:10:44.6757099Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.12.0/helper/resource/testing_new.go:164
2025-06-04T01:10:44.6760282Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.12.0/helper/resource/testing.go:926
2025-06-04T01:10:44.6761503Z         	Error:      	Received unexpected error:
2025-06-04T01:10:44.6762483Z         	            	timeout while waiting for state to become 'DELETED' (last state: 'UPDATING', timeout: 30m0s)
2025-06-04T01:10:44.6763073Z         	Test:       	TestAccSearchDeployment_timeoutTest
2025-06-04T01:14:16.8025279Z --- FAIL: TestAccSearchDeployment_timeoutTest (2698.34s)
```

- 2025-06-05

### Error 2025-06-05T00:28:51+00:00
```
2025-06-05T00:28:51.6075389Z === RUN   TestAccSearchDeployment_timeoutTest
2025-06-05T00:28:56.2183631Z === CONT  TestAccSearchDeployment_timeoutTest
2025-06-05T00:31:57.5704770Z === NAME  TestAccSearchDeployment_timeoutTest
2025-06-05T00:31:57.5705915Z     resource_test.go:78: Step 1/5, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:31:57.5706983Z         
2025-06-05T00:31:57.5710022Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c2161ca93c1f05230b/clusters/test-acc-tf-c-3310409960872551063 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:57.5712061Z         
2025-06-05T00:31:57.5712902Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:31:57.5714117Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:31:57.5715193Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:31:57.5715786Z         
2025-06-05T00:31:57.6450306Z --- FAIL: TestAccSearchDeployment_timeoutTest (182.41s)
```

- 2025-06-06 PASS 33 minutes
- 2025-06-07 PASS 34 minutes
- 2025-06-08 PASS 35 minutes
- 2025-06-09 PASS 31 minutes
- 2025-06-10 PASS 48 minutes
- 2025-06-11
  - PASS 34 minutes
  - PASS 35 minutes
- 2025-06-12 PASS 35 minutes
- 2025-06-13 PASS 36 minutes
- 2025-06-14 PASS 51 minutes
- 2025-06-15 PASS 37 minutes
- 2025-06-16 PASS 34 minutes
- 2025-06-17 PASS 35 minutes
- 2025-06-18 PASS 45 minutes
- 2025-06-19 PASS 50 minutes
- 2025-06-20 PASS 36 minutes
- 2025-06-21 PASS 36 minutes
- 2025-06-22 PASS 34 minutes
- 2025-06-23 PASS 35 minutes
- 2025-06-24 PASS 37 minutes
- 2025-06-25 PASS 33 minutes
- 2025-06-26 PASS 34 minutes
- 2025-06-27 PASS 33 minutes
- 2025-06-28 PASS 35 minutes
- 2025-06-29 PASS 37 minutes
- 2025-06-30 PASS 39 minutes
- 2025-07-01
  - PASS 33 minutes
  - PASS 35 minutes
  - PASS 33 minutes
  - PASS 34 minutes
  - PASS 31 minutes
  - PASS 36 minutes
- 2025-07-02 PASS 35 minutes
- 2025-07-03 PASS 34 minutes
- 2025-07-04 PASS 31 minutes
- 2025-07-05 PASS 34 minutes
- 2025-07-06 PASS 34 minutes
- 2025-07-07 PASS 33 minutes
- 2025-07-08 PASS 33 minutes
- 2025-07-09 PASS 36 minutes
- 2025-07-10 PASS 36 minutes