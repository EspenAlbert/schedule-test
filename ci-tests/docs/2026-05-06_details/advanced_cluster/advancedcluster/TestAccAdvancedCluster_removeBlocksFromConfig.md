# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:47](#error-2026-04-07t0047110000) |  | dev | timeout | 13572.03s
[2026-04-16 00:53](#error-2026-04-16t0053150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032fc1ec945fedc7326a3/clusters | dev | out_of_capacity | 8.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:47:11+00:00
```
2026-04-07T00:47:11.3981989Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-04-07T00:48:53.7957342Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-04-07T04:35:02.0036685Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-04-07T04:35:02.0037417Z     resource_test.go:1035: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:35:02.0037949Z         
2026-04-07T04:35:02.0038213Z         Error: Error in delete
2026-04-07T04:35:02.0038468Z         
2026-04-07T04:35:02.0039186Z         cluster=test-acc-tf-c-9018058488187908576 didn't reach desired state:
2026-04-07T04:35:02.0039881Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:35:02.0040387Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:35:02.0040803Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (13572.34s)
```

- 2026-04-08 PASS 53 minutes
- 2026-04-09 PASS an hour
- 2026-04-10 PASS an hour
- 2026-04-11 PASS 45 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 53 minutes
- 2026-04-14 PASS 48 minutes
- 2026-04-15 PASS 52 minutes
- 2026-04-16

### Error 2026-04-16T00:53:15+00:00
```
2026-04-16T00:53:15.9785425Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-04-16T00:54:54.5562541Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-04-16T00:54:59.6762912Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-04-16T00:54:59.6763855Z     resource_test.go:1035: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:54:59.6764795Z         
2026-04-16T00:54:59.6765222Z         Error: Error in create
2026-04-16T00:54:59.6765639Z         
2026-04-16T00:54:59.6766214Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.6767457Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.6768617Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.6769203Z         
2026-04-16T00:54:59.6769954Z         cluster name: test-acc-tf-c-7772852303434469004, API error details:
2026-04-16T00:54:59.6802406Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032fc1ec945fedc7326a3/clusters
2026-04-16T00:54:59.6806748Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.6833587Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.6860467Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.6876059Z   
2026-04-16T00:54:59.9143232Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (8.14s)
```

- 2026-04-17 PASS 51 minutes
- 2026-04-18 PASS 53 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS an hour
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 56 minutes
- 2026-04-24 PASS 56 minutes
- 2026-04-25 PASS 51 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 53 minutes
- 2026-04-28 PASS 55 minutes
- 2026-04-29 PASS 55 minutes
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 53 minutes
- 2026-05-02 PASS 41 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 45 minutes
- 2026-05-05 PASS 59 minutes
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 53 minutes
  - PASS 49 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 52 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 49 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 53 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 50 minutes
- 2026-05-04 PASS 49 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 53 minutes
