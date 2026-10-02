# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 00:41](#error-2026-09-04t0041030000) |  | dev | 2038.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 23 minutes
- 2026-09-03
  - PASS 21 minutes
  - PASS 21 minutes
- 2026-09-04

### Error 2026-09-04T00:41:03+00:00
```
2026-09-04T00:41:03.7654999Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-09-04T00:45:24.9613086Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-09-04T00:46:48.9415554Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-09-04T00:46:48.9417056Z     pre_check.go:46: Time before creating cluster: 2026-09-04T00:46:48.941236494Z, ProjectID: 6a9a139c54d9d7aa8005db86, Cluster name: test-acc-tf-c-7036346800215515619
2026-09-04T01:16:49.7352273Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-09-04T01:16:49.7353912Z     resource_test.go:223: Step 2/4 error: Error running apply: exit status 1
2026-09-04T01:16:49.7354699Z         
2026-09-04T01:16:49.7355345Z         Error: Error in pause after update
2026-09-04T01:16:49.7355862Z         
2026-09-04T01:16:49.7356750Z           with mongodbatlas_advanced_cluster.test,
2026-09-04T01:16:49.7358120Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-04T01:16:49.7359678Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-04T01:16:49.7360367Z         
2026-09-04T01:16:49.7361208Z         cluster name: test-acc-tf-c-7036346800215515619, API error details:
2026-09-04T01:16:49.7363012Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a9a139c54d9d7aa8005db86/clusters/test-acc-tf-c-7036346800215515619
2026-09-04T01:16:49.7364673Z         PATCH: HTTP 400 Bad Request (Error code:
2026-09-04T01:16:49.7365870Z         "OPERATION_INVALID_MEMBER_REPLICATION_LAG") Detail: The operation cannot
2026-09-04T01:16:49.7367269Z         begin because monitoring indicates these nodes have too much replication lag:
2026-09-04T01:16:49.7368816Z         atlas-anwsto-shard-00-00.deg0ak.mongodb-dev.net (240sec). Reason: Bad
2026-09-04T01:16:49.7370271Z         Request. Params: [atlas-anwsto-shard-00-00.deg0ak.mongodb-dev.net (240sec)],
2026-09-04T01:16:49.7371195Z         BadRequestDetail: 
2026-09-04T01:19:22.4003888Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (2038.50s)
```

- 2026-09-05 PASS 24 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 20 minutes
- 2026-09-08 PASS 23 minutes
- 2026-09-09 PASS 22 minutes
- 2026-09-10 PASS 34 minutes
- 2026-09-11
  - PASS an hour
  - PASS 41 minutes
- 2026-09-12 PASS 21 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 21 minutes
- 2026-09-15 PASS 23 minutes
- 2026-09-16 PASS 22 minutes
- 2026-09-17 PASS 24 minutes
- 2026-09-18 PASS 20 minutes
- 2026-09-19 PASS 21 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 19 minutes
- 2026-09-22
  - PASS 20 minutes
  - PASS 20 minutes
- 2026-09-23
  - PASS 31 minutes
  - PASS 32 minutes
- 2026-09-24 PASS 22 minutes
- 2026-09-25 PASS 23 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 23 minutes
- 2026-09-29
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 19 minutes
- 2026-09-30 PASS 19 minutes
- 2026-10-01 PASS 21 minutes
- 2026-10-02 PASS 20 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 20 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 22 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 19 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 21 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 22 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 20 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
