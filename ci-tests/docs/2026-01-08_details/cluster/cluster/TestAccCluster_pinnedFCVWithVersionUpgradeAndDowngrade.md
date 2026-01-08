# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da931af4f6cc389e808ce/clusters/test-acc-tf-c-1008380452730385986 | dev | flaky_500 | 186.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 32 minutes
  - PASS 30 minutes
- 2025-12-11 PASS 34 minutes
- 2025-12-12 PASS 33 minutes
- 2025-12-13 PASS 31 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 31 minutes
- 2025-12-16 PASS 30 minutes
- 2025-12-17 PASS 32 minutes
- 2025-12-18 PASS 31 minutes
- 2025-12-19 PASS 32 minutes
- 2025-12-20 PASS 31 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 32 minutes
- 2025-12-23 PASS 30 minutes
- 2025-12-24 PASS 32 minutes
- 2025-12-25 PASS 39 minutes
- 2025-12-26 PASS 29 minutes
- 2025-12-27 PASS 30 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 28 minutes
- 2025-12-31 PASS 31 minutes
- 2026-01-01 PASS 28 minutes
- 2026-01-02 PASS 31 minutes
- 2026-01-03 PASS 28 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 31 minutes
- 2026-01-06 PASS 31 minutes
- 2026-01-07

### Error 2026-01-07T00:30:39+00:00
```
2026-01-07T00:30:39.8820062Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-07T00:30:39.8909586Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-07T00:33:46.0081706Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-07T00:33:46.0082438Z     resource_cluster_test.go:1372: Step 1/7 error: Error running apply: exit status 1
2026-01-07T00:33:46.0083226Z         
2026-01-07T00:33:46.0085291Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931af4f6cc389e808ce/clusters/test-acc-tf-c-1008380452730385986 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:46.0086539Z         
2026-01-07T00:33:46.0086823Z           with mongodbatlas_cluster.test,
2026-01-07T00:33:46.0087408Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-01-07T00:33:46.0087938Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-01-07T00:33:46.0088216Z         
2026-01-07T00:33:46.3350510Z    test_name=TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade test_terraform_path=/home/runner/work/_temp/50a2f82a-27b1-4d8a-a970-4f5fa4965667/terraform
2026-01-07T00:33:46.3351929Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:33:46.3352362Z         
2026-01-07T00:33:46.3352649Z         Error: error when destroying resource
2026-01-07T00:33:46.3353244Z         
2026-01-07T00:33:46.3353734Z         error deleting project (695da931af4f6cc389e808ce):
2026-01-07T00:33:46.3354313Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931af4f6cc389e808ce
2026-01-07T00:33:46.3354802Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-07T00:33:46.3355329Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-07T00:33:46.3355938Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-07T00:33:46.3356371Z         Params: [], BadRequestDetail: 
2026-01-07T00:33:46.3356795Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (186.45s)
```

- 2026-01-08 PASS 29 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 31 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 28 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 28 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 27 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 28 minutes
