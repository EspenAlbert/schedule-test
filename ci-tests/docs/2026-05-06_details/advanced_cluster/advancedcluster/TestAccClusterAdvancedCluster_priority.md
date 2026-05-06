# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priority Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053120000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032f81ec945fedc73155a/clusters | dev | out_of_capacity | 8.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 42 minutes
- 2026-04-08 PASS 17 minutes
- 2026-04-09 PASS 38 minutes
- 2026-04-10 PASS 20 minutes
- 2026-04-11 PASS 14 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 16 minutes
- 2026-04-14 PASS 16 minutes
- 2026-04-15 PASS 14 minutes
- 2026-04-16

### Error 2026-04-16T00:53:12+00:00
```
2026-04-16T00:53:12.8579714Z === RUN   TestAccClusterAdvancedCluster_priority
2026-04-16T00:54:54.0446607Z === CONT  TestAccClusterAdvancedCluster_priority
2026-04-16T00:54:59.7660417Z === NAME  TestAccClusterAdvancedCluster_priority
2026-04-16T00:54:59.7708765Z     resource_test.go:793: Step 2/4 error: Error running apply: exit status 1
2026-04-16T00:54:59.7734818Z         
2026-04-16T00:54:59.7754660Z         Error: Error in create
2026-04-16T00:54:59.7783566Z         
2026-04-16T00:54:59.7789689Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.7791666Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.7793554Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.7794620Z         
2026-04-16T00:54:59.7796067Z         cluster name: test-acc-tf-c-6753283305398529135, API error details:
2026-04-16T00:54:59.7798009Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032f81ec945fedc73155a/clusters
2026-04-16T00:54:59.7799739Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.7801589Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.7802907Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.7822012Z    test_name=TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling test_terraform_path=/home/runner/work/_temp/b00f7911-dfb1-455b-abe5-62efc714635b/terraform test_working_directory=/tmp/plugintest2344981324
2026-04-16T00:54:59.9377094Z --- FAIL: TestAccClusterAdvancedCluster_priority (8.90s)
```

- 2026-04-17 PASS 13 minutes
- 2026-04-18 PASS 29 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 22 minutes
- 2026-04-22 PASS 29 minutes
- 2026-04-23 PASS 32 minutes
- 2026-04-24 PASS 15 minutes
- 2026-04-25 PASS 16 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 17 minutes
- 2026-04-28 PASS 18 minutes
- 2026-04-29 PASS 16 minutes
- 2026-04-30 PASS 22 minutes
- 2026-05-01 PASS 14 minutes
- 2026-05-02 PASS 15 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 15 minutes
- 2026-05-05 PASS 33 minutes
- 2026-05-06 PASS 28 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 15 minutes
  - PASS 13 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 18 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 15 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 19 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 minutes
- 2026-05-04 PASS 16 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 16 minutes
