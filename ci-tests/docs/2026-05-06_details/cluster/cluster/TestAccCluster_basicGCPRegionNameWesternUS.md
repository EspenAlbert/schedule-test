# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:41](#error-2026-04-09t0041210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 49 minutes
- 2026-04-08 PASS 19 minutes
- 2026-04-09

### Error 2026-04-09T00:41:21+00:00
```
2026-04-09T00:41:21.8931702Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2026-04-09T00:42:24.1406658Z     shared_resource.go:160: 
2026-04-09T00:42:24.1411060Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:42:24.1416529Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-09T00:42:24.1419918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-09T00:42:24.1422917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-09T00:42:24.1425003Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-09T00:42:24.1426919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1060
2026-04-09T00:42:24.1427936Z         	Error:      	Received unexpected error:
2026-04-09T00:42:24.1429898Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:42:24.1432834Z         	Test:       	TestAccCluster_basicGCPRegionNameWesternUS
2026-04-09T00:42:24.1435249Z         	Messages:   	Project creation failed: test-acc-tf-p-771089120188666768, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:42:24.1436730Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (62.25s)
```

- 2026-04-10 PASS 27 minutes
- 2026-04-11 PASS 19 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 29 minutes
- 2026-04-14 PASS 20 minutes
- 2026-04-15 PASS 20 minutes
- 2026-04-16 PASS 18 minutes
- 2026-04-17 PASS 22 minutes
- 2026-04-18 PASS 27 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 20 minutes
- 2026-04-21 PASS 20 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 28 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25 PASS 20 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 21 minutes
- 2026-04-29 PASS 20 minutes
- 2026-04-30 PASS 27 minutes
- 2026-05-01 PASS 20 minutes
- 2026-05-02 PASS 20 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 22 minutes
- 2026-05-05 PASS 37 minutes
- 2026-05-06 PASS 30 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-22 07:15](#error-2026-04-22t0715250000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e8758bd58beaa31d290a8c/clusters | qa | out_of_capacity | 2.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 21 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 21 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 20 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - FAIL 2 seconds

### Error 2026-04-22T07:15:25+00:00
```
2026-04-22T07:15:25.8171899Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2026-04-22T07:15:25.9460171Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2026-04-22T07:15:27.9875866Z   
2026-04-22T07:15:27.9876595Z     resource_cluster_test.go:1064: Step 1/1 error: Error running apply: exit status 1
2026-04-22T07:15:27.9877274Z         
2026-04-22T07:15:27.9879281Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/69e8758bd58beaa31d290a8c/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-22T07:15:27.9880395Z         
2026-04-22T07:15:27.9880827Z           with mongodbatlas_cluster.test,
2026-04-22T07:15:27.9881606Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-22T07:15:27.9882238Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-04-22T07:15:27.9882572Z         
2026-04-22T07:15:28.0376407Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.21s)
```

  - PASS 18 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 25 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 24 minutes
- 2026-05-04 PASS 21 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 24 minutes
