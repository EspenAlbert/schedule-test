# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0336381002038a8a1f7e0/clusters | dev | out_of_capacity | 11.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS an hour
- 2026-04-08 PASS 19 minutes
- 2026-04-09 PASS 32 minutes
- 2026-04-10 PASS 24 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 18 minutes
- 2026-04-14 PASS 18 minutes
- 2026-04-15 PASS 19 minutes
- 2026-04-16

### Error 2026-04-16T00:53:02+00:00
```
2026-04-16T00:53:02.4665750Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-04-16T00:54:54.1986475Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-04-16T00:55:04.4618524Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-04-16T00:55:04.4619504Z     resource_test.go:507: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:55:04.4620207Z         
2026-04-16T00:55:04.4620664Z         Error: Error in create
2026-04-16T00:55:04.4621106Z         
2026-04-16T00:55:04.4621722Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:04.4623530Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:04.4624900Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:04.4625500Z         
2026-04-16T00:55:04.4626277Z         cluster name: test-acc-tf-c-1659510888215574386, API error details:
2026-04-16T00:55:04.4627589Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0336381002038a8a1f7e0/clusters
2026-04-16T00:55:04.4628935Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:04.4630206Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:04.4631182Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:04.5460357Z   
2026-04-16T00:55:05.3490464Z --- FAIL: TestAccClusterAdvancedCluster_withTags (11.36s)
```

- 2026-04-17 PASS 19 minutes
- 2026-04-18 PASS 30 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 27 minutes
- 2026-04-22 PASS 46 minutes
- 2026-04-23 PASS 36 minutes
- 2026-04-24 PASS 19 minutes
- 2026-04-25 PASS 19 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 17 minutes
- 2026-04-28 PASS 20 minutes
- 2026-04-29 PASS 18 minutes
- 2026-04-30 PASS 25 minutes
- 2026-05-01 PASS 16 minutes
- 2026-05-02 PASS 19 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 18 minutes
- 2026-05-05 PASS 35 minutes
- 2026-05-06 PASS 29 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 18 minutes
  - PASS 14 minutes
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
- 2026-04-22 PASS 20 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 22 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 20 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 19 minutes
