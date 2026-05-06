# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e033631ec945fedc73f08d/clusters | dev | out_of_capacity | 11.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS an hour
- 2026-04-08 PASS 19 minutes
- 2026-04-09 PASS 32 minutes
- 2026-04-10 PASS 24 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 19 minutes
- 2026-04-14 PASS 18 minutes
- 2026-04-15 PASS 20 minutes
- 2026-04-16

### Error 2026-04-16T00:53:02+00:00
```
2026-04-16T00:53:02.4668042Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-04-16T00:54:54.5285316Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-04-16T00:55:04.3214879Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-04-16T00:55:04.3215630Z     resource_test.go:536: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:55:04.3216129Z         
2026-04-16T00:55:04.3216396Z         Error: Error in create
2026-04-16T00:55:04.3216646Z         
2026-04-16T00:55:04.3217153Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:04.3218331Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:04.3218998Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:04.3219325Z         
2026-04-16T00:55:04.3219747Z         cluster name: test-acc-tf-c-7057598562628449253, API error details:
2026-04-16T00:55:04.3220460Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e033631ec945fedc73f08d/clusters
2026-04-16T00:55:04.3221180Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:04.3221855Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:04.3222378Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:04.3280141Z    test_terraform_path=/home/runner/work/_temp/b00f7911-dfb1-455b-abe5-62efc714635b/terraform test_working_directory=/tmp/plugintest596474204
2026-04-16T00:55:05.1489445Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (11.15s)
```

- 2026-04-17 PASS 20 minutes
- 2026-04-18 PASS 35 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 27 minutes
- 2026-04-22 PASS 38 minutes
- 2026-04-23 PASS 38 minutes
- 2026-04-24 PASS 17 minutes
- 2026-04-25 PASS 17 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 18 minutes
- 2026-04-28 PASS 20 minutes
- 2026-04-29 PASS 19 minutes
- 2026-04-30 PASS 27 minutes
- 2026-05-01 PASS 17 minutes
- 2026-05-02 PASS 19 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 18 minutes
- 2026-05-05 PASS 35 minutes
- 2026-05-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 18 minutes
  - PASS 15 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 19 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 18 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 18 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 18 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 19 minutes
