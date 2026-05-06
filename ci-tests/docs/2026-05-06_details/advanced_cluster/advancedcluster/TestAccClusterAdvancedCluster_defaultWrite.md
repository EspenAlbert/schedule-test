# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters | dev | out_of_capacity | 40.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 hours
- 2026-04-08 PASS 39 minutes
- 2026-04-09 PASS 55 minutes
- 2026-04-10 PASS 57 minutes
- 2026-04-11 PASS 33 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 43 minutes
- 2026-04-14 PASS 37 minutes
- 2026-04-15 PASS 43 minutes
- 2026-04-16

### Error 2026-04-16T00:53:02+00:00
```
2026-04-16T00:53:02.4657026Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-04-16T00:54:54.2712057Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2026-04-16T00:55:34.0094238Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-04-16T00:55:34.0096020Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:34.009145088Z, ProjectID: 69e032b21ec945fedc7295a9, Cluster name: test-acc-tf-c-8448093048509552315
2026-04-16T00:55:34.7254429Z   
2026-04-16T00:55:34.7255036Z     resource_test.go:371: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:55:34.7255437Z         
2026-04-16T00:55:34.7255836Z         Error: Error in create
2026-04-16T00:55:34.7256249Z         
2026-04-16T00:55:34.7256862Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:34.7257703Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:34.7258684Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:34.7259021Z         
2026-04-16T00:55:34.7259453Z         cluster name: test-acc-tf-c-8448093048509552315, API error details:
2026-04-16T00:55:34.7260158Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters
2026-04-16T00:55:34.7261086Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:34.7261781Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:34.7262297Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:34.7715486Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (40.78s)
```

- 2026-04-17 PASS 38 minutes
- 2026-04-18 PASS 50 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 47 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 56 minutes
- 2026-04-24 PASS 38 minutes
- 2026-04-25 PASS 36 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 41 minutes
- 2026-04-28 PASS 54 minutes
- 2026-04-29 PASS 46 minutes
- 2026-04-30 PASS 59 minutes
- 2026-05-01 PASS 41 minutes
- 2026-05-02 PASS 36 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 44 minutes
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 35 minutes
  - PASS 31 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 35 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 36 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 40 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 36 minutes
- 2026-05-04 PASS an hour
- 2026-05-05: MISSING
- 2026-05-06 PASS 35 minutes
