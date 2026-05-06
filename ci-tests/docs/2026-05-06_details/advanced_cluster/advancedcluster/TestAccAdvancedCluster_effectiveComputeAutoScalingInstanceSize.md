# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:51](#error-2026-04-16t0051150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters | dev | out_of_capacity | 5.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 50 minutes
- 2026-04-08 PASS 19 minutes
- 2026-04-09 PASS 28 minutes
- 2026-04-10 PASS 29 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 20 minutes
- 2026-04-14 PASS 19 minutes
- 2026-04-15 PASS 23 minutes
- 2026-04-16

### Error 2026-04-16T00:51:15+00:00
```
2026-04-16T00:51:15.7575294Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-04-16T00:54:54.6977418Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-04-16T00:54:59.2233722Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-04-16T00:54:59.2235510Z     effective_fields_test.go:105: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:59.2259937Z         
2026-04-16T00:54:59.2285094Z         Error: Error in create
2026-04-16T00:54:59.2315145Z         
2026-04-16T00:54:59.2339668Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.2375626Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.2380153Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.2391149Z         
2026-04-16T00:54:59.2456630Z         cluster name: test-acc-tf-c-3352331771248909339, API error details:
2026-04-16T00:54:59.2589331Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters
2026-04-16T00:54:59.2705740Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.2772263Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.2838838Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.3513500Z   
2026-04-16T00:54:59.3765230Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (5.31s)
```

- 2026-04-17 PASS 15 minutes
- 2026-04-18 PASS 32 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 27 minutes
- 2026-04-22 PASS 33 minutes
- 2026-04-23 PASS 28 minutes
- 2026-04-24 PASS 19 minutes
- 2026-04-25 PASS 17 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 21 minutes
- 2026-04-28 PASS 22 minutes
- 2026-04-29 PASS 23 minutes
- 2026-04-30 PASS 29 minutes
- 2026-05-01 PASS 19 minutes
- 2026-05-02 PASS 21 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 22 minutes

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
- 2026-04-26 PASS 23 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 minutes
- 2026-05-04 PASS 16 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 19 minutes
