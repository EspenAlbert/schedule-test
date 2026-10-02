# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_infiniteShardSizeLimit Test Details
# Found 10 TestRuns in dev, qa from 2026-09-25 to 2026-10-02 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-25 00:43](#error-2026-09-25t0043080000) |  | dev | flaky_500 | 1574.08s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16: MISSING
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25

### Error 2026-09-25T00:43:08+00:00
```
2026-09-25T00:43:08.9563311Z === RUN   TestAccClusterAdvancedCluster_infiniteShardSizeLimit
2026-09-25T00:44:46.1589278Z === CONT  TestAccClusterAdvancedCluster_infiniteShardSizeLimit
2026-09-25T00:46:15.7895438Z === NAME  TestAccClusterAdvancedCluster_infiniteShardSizeLimit
2026-09-25T00:46:15.7897621Z     pre_check.go:46: Time before creating cluster: 2026-09-25T00:46:15.789184816Z, ProjectID: 6ab5c39b371f65f136f7a155, Cluster name: test-acc-tf-c-4978823857928592606
2026-09-25T01:08:59.1533574Z === NAME  TestAccClusterAdvancedCluster_infiniteShardSizeLimit
2026-09-25T01:08:59.1534426Z     resource_database_edition_test.go:59: Step 9/11 error: Error running apply: exit status 1
2026-09-25T01:08:59.1535034Z         
2026-09-25T01:08:59.1535471Z         Error: Error in update
2026-09-25T01:08:59.1535753Z         
2026-09-25T01:08:59.1536119Z           with mongodbatlas_advanced_cluster.test,
2026-09-25T01:08:59.1537067Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-25T01:08:59.1537774Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-25T01:08:59.1538134Z         
2026-09-25T01:08:59.1538596Z         cluster name: test-acc-tf-c-4978823857928592606, API error details:
2026-09-25T01:08:59.1539529Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6ab5c39b371f65f136f7a155/clusters/test-acc-tf-c-4978823857928592606
2026-09-25T01:08:59.1540283Z         PATCH: HTTP 503 Service Unavailable (Error code:
2026-09-25T01:08:59.1540909Z         "SHARD_SIZE_LIMIT_CURRENT_SIZE_UNKNOWN") Detail: Cannot check the per-shard
2026-09-25T01:08:59.1541607Z         data-size limit. MongoDB Cloud cannot read the current data size of this
2026-09-25T01:08:59.1542303Z         cluster. Try again later. Reason: Service Unavailable. Params: [MongoDB Cloud
2026-09-25T01:08:59.1543180Z         cannot read the current data size of this cluster. Try again later],
2026-09-25T01:08:59.1543623Z         BadRequestDetail: 
2026-09-25T01:11:00.6199463Z --- FAIL: TestAccClusterAdvancedCluster_infiniteShardSizeLimit (1574.84s)
```

- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 27 minutes
- 2026-09-29
  - PASS 29 minutes
  - PASS 28 minutes
  - PASS 32 minutes
- 2026-09-30 PASS 27 minutes
- 2026-10-01 PASS 29 minutes
- 2026-10-02 PASS 29 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16: MISSING
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 25 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 26 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
