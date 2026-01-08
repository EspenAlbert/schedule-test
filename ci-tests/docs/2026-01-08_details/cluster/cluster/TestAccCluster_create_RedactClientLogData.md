# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da931af4f6cc389e808d8/clusters/test-acc-tf-c-9069897554706753406 | dev | flaky_500 | 859.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 23 minutes
  - PASS 17 minutes
- 2025-12-11 PASS 21 minutes
- 2025-12-12 PASS 19 minutes
- 2025-12-13 PASS 20 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 17 minutes
- 2025-12-16 PASS 18 minutes
- 2025-12-17 PASS 18 minutes
- 2025-12-18 PASS 24 minutes
- 2025-12-19 PASS 21 minutes
- 2025-12-20 PASS 18 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 minutes
- 2025-12-23 PASS 17 minutes
- 2025-12-24 PASS 23 minutes
- 2025-12-25 PASS 29 minutes
- 2025-12-26 PASS 18 minutes
- 2025-12-27 PASS 19 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 17 minutes
- 2025-12-31 PASS 21 minutes
- 2026-01-01 PASS 19 minutes
- 2026-01-02 PASS 21 minutes
- 2026-01-03 PASS 18 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 19 minutes
- 2026-01-06 PASS 20 minutes
- 2026-01-07

### Error 2026-01-07T00:30:39+00:00
```
2026-01-07T00:30:39.8818731Z === RUN   TestAccCluster_create_RedactClientLogData
2026-01-07T00:30:39.8942696Z === CONT  TestAccCluster_create_RedactClientLogData
2026-01-07T00:44:58.7290456Z === NAME  TestAccCluster_create_RedactClientLogData
2026-01-07T00:44:58.7291467Z     resource_cluster_test.go:1342: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:44:58.7292179Z         
2026-01-07T00:44:58.7295163Z         Error: error updating MongoDB Cluster (test-acc-tf-c-9069897554706753406): https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931af4f6cc389e808d8/clusters/test-acc-tf-c-9069897554706753406 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:44:58.7296637Z         
2026-01-07T00:44:58.7296933Z           with mongodbatlas_cluster.test,
2026-01-07T00:44:58.7297531Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-01-07T00:44:58.7298055Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-01-07T00:44:58.7298335Z         
2026-01-07T00:44:59.1075118Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:44:59.1075546Z         
2026-01-07T00:44:59.1075838Z         Error: error when destroying resource
2026-01-07T00:44:59.1076113Z         
2026-01-07T00:44:59.1076439Z         error deleting project (695da931af4f6cc389e808d8):
2026-01-07T00:44:59.1077005Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da931af4f6cc389e808d8
2026-01-07T00:44:59.1077505Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-07T00:44:59.1078048Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-07T00:44:59.1078653Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-07T00:44:59.1079096Z         Params: [], BadRequestDetail: 
2026-01-07T00:44:59.1079440Z --- FAIL: TestAccCluster_create_RedactClientLogData (859.21s)
```

- 2026-01-08 PASS 18 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 16 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 18 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 17 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 19 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 16 minutes
