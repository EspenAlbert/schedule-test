# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priority Test Details
# Found 26 TestRuns in dev, qa from 2025-09-19 to 2025-10-02 from master branch: 1 unique tests, PASS(x 25) FAIL
Success rate: 96.15%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 11:48](#error-2025-10-01t1148390000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68dd151577784f3f4723de21/clusters | dev | out_of_capacity | 4.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 16 minutes
- 2025-09-20 PASS 13 minutes
- 2025-09-21 PASS 12 minutes
- 2025-09-22 PASS 14 minutes
- 2025-09-23 PASS 15 minutes
- 2025-09-24 PASS 16 minutes
- 2025-09-25 PASS 35 minutes
- 2025-09-26 PASS 35 minutes
- 2025-09-27 PASS 14 minutes
- 2025-09-28 PASS 13 minutes
- 2025-09-29
  - PASS 18 minutes
  - PASS 11 minutes
- 2025-09-30
  - PASS 13 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-10-01
  - PASS 34 minutes
  - PASS an hour
  - PASS 47 minutes
  - PASS an hour
  - PASS 12 minutes
  - PASS 13 minutes
  - FAIL 4 seconds

### Error 2025-10-01T11:48:39+00:00
```
2025-10-01T11:48:39.3595785Z === RUN   TestAccClusterAdvancedCluster_priority
2025-10-01T11:50:16.3024314Z === CONT  TestAccClusterAdvancedCluster_priority
2025-10-01T11:50:20.3758736Z === NAME  TestAccClusterAdvancedCluster_priority
2025-10-01T11:50:20.3759662Z     resource_test.go:842: Step 2/4 error: Error running apply: exit status 1
2025-10-01T11:50:20.3760322Z         
2025-10-01T11:50:20.3760920Z         Error: Error in create
2025-10-01T11:50:20.3761356Z         
2025-10-01T11:50:20.3761940Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T11:50:20.3765033Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T11:50:20.3766310Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T11:50:20.3767082Z         
2025-10-01T11:50:20.3768055Z         cluster name: test-acc-tf-c-3426530252297919254, API error details:
2025-10-01T11:50:20.3769922Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd151577784f3f4723de21/clusters
2025-10-01T11:50:20.3772360Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-01T11:50:20.3774409Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-01T11:50:20.3775703Z         Conflict. Params: [], BadRequestDetail: 
2025-10-01T11:50:20.4532450Z --- FAIL: TestAccClusterAdvancedCluster_priority (4.15s)
```

  - PASS 13 minutes
- 2025-10-02 PASS 21 minutes