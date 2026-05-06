# advanced_cluster/advancedcluster/TestAccAdvancedCluster_updateDeleteTimeoutReplicaset Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:54](#error-2026-04-16t0054530000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032fc1ec945fedc7326a3/clusters | dev | out_of_capacity | 65.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 26 minutes
- 2026-04-08 PASS 27 minutes
- 2026-04-09 PASS 35 minutes
- 2026-04-10 PASS 31 minutes
- 2026-04-11 PASS 27 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 27 minutes
- 2026-04-14 PASS 27 minutes
- 2026-04-15 PASS 26 minutes
- 2026-04-16

### Error 2026-04-16T00:54:53+00:00
```
2026-04-16T00:54:53.9816807Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-04-16T00:54:54.1218477Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-04-16T00:54:59.3568576Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-04-16T00:54:59.3569791Z     resource_test.go:2917: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:54:59.3570641Z         
2026-04-16T00:54:59.3571238Z         Error: Error in create
2026-04-16T00:54:59.3571823Z         
2026-04-16T00:54:59.3572580Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.3574021Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.3575653Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.3578549Z         
2026-04-16T00:54:59.3579505Z         cluster name: test-acc-tf-c-743303162766503655, API error details:
2026-04-16T00:54:59.3580937Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032fc1ec945fedc7326a3/clusters
2026-04-16T00:54:59.3582461Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.3584481Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.3585668Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.3602560Z    test_name=TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-04-16T00:55:59.7301589Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutReplicaset (65.74s)
```

- 2026-04-17 PASS 26 minutes
- 2026-04-18 PASS 37 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 29 minutes
- 2026-04-22 PASS 38 minutes
- 2026-04-23 PASS 33 minutes
- 2026-04-24 PASS 26 minutes
- 2026-04-25 PASS 27 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 26 minutes
- 2026-04-28 PASS 27 minutes
- 2026-04-29 PASS 14 minutes
- 2026-04-30 PASS 32 minutes
- 2026-05-01 PASS 28 minutes
- 2026-05-02 PASS 28 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 27 minutes
- 2026-05-05 PASS 37 minutes
- 2026-05-06 PASS 35 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 27 minutes
  - PASS 25 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 27 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 26 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 27 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 28 minutes
- 2026-05-04 PASS 26 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 28 minutes
