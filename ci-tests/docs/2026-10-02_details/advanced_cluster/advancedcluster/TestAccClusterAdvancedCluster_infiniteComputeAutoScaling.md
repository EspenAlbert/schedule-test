# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_infiniteComputeAutoScaling Test Details
# Found 10 TestRuns in dev, qa from 2026-09-25 to 2026-10-02 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-29 10:43](#error-2026-09-29t1043230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6abb964905da69d77cf30fcf/clusters/test-acc-tf-c-7257615024447150431 | dev | flaky_500 | 1534.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16: MISSING
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25 PASS 22 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 24 minutes
- 2026-09-29
  - PASS 24 minutes
  - FAIL 25 minutes

### Error 2026-09-29T10:43:23+00:00
```
2026-09-29T10:43:23.7131459Z === RUN   TestAccClusterAdvancedCluster_infiniteComputeAutoScaling
2026-09-29T10:44:58.9523346Z === CONT  TestAccClusterAdvancedCluster_infiniteComputeAutoScaling
2026-09-29T10:46:58.1955668Z === NAME  TestAccClusterAdvancedCluster_infiniteComputeAutoScaling
2026-09-29T10:46:58.1963506Z     pre_check.go:46: Time before creating cluster: 2026-09-29T10:46:58.194744479Z, ProjectID: 6abb964905da69d77cf30fcf, Cluster name: test-acc-tf-c-7257615024447150431
2026-09-29T11:04:44.0769781Z === NAME  TestAccClusterAdvancedCluster_infiniteComputeAutoScaling
2026-09-29T11:04:44.0770731Z     advanced_cluster.go:295: Waiting 1m0s before changing shard_size_limit_gb so Atlas can read the cluster current data size
2026-09-29T11:09:01.0252998Z === NAME  TestAccClusterAdvancedCluster_infiniteComputeAutoScaling
2026-09-29T11:09:01.0253816Z     resource_database_edition_test.go:360: Step 9/10 error: Error running apply: exit status 1
2026-09-29T11:09:01.0254700Z         
2026-09-29T11:09:01.0255124Z         Error: Error in update
2026-09-29T11:09:01.0255409Z         
2026-09-29T11:09:01.0255931Z           with mongodbatlas_advanced_cluster.test,
2026-09-29T11:09:01.0256837Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-29T11:09:01.0257689Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-29T11:09:01.0258081Z         
2026-09-29T11:09:01.0258808Z         cluster name: test-acc-tf-c-7257615024447150431, API error details:
2026-09-29T11:09:01.0259996Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb964905da69d77cf30fcf/clusters/test-acc-tf-c-7257615024447150431
2026-09-29T11:09:01.0261149Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-09-29T11:09:01.0261983Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-09-29T11:09:01.0262548Z         BadRequestDetail: 
2026-09-29T11:09:05.1005855Z   
2026-09-29T11:10:32.4857957Z --- FAIL: TestAccClusterAdvancedCluster_infiniteComputeAutoScaling (1534.29s)
```

  - PASS 26 minutes
- 2026-09-30 PASS 24 minutes
- 2026-10-01 PASS 24 minutes
- 2026-10-02 PASS 26 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16: MISSING
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 22 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 25 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
