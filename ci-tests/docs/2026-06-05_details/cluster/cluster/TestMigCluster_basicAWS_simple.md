# cluster/cluster/TestMigCluster_basicAWS_simple Test Details
# Found 17 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 16) FAIL
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-18 01:00](#error-2026-05-18t0100170000) |  | dev | 1335.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS 17 minutes
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS 15 minutes
- 2026-05-12: MISSING
- 2026-05-13 PASS 13 minutes
- 2026-05-14: MISSING
- 2026-05-15 PASS 17 minutes
- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:17+00:00
```
2026-05-18T01:00:17.2983763Z === RUN   TestMigCluster_basicAWS_simple
2026-05-18T01:00:24.5636400Z === CONT  TestMigCluster_basicAWS_simple
2026-05-18T01:00:29.5617777Z === NAME  TestMigCluster_basicAWS_simple
2026-05-18T01:00:29.5619219Z     pre_check.go:46: Time before creating cluster: 2026-05-18T01:00:29.561445785Z, ProjectID: 6a0a64a16fb087b449d98ae8, Cluster name: test-acc-tf-c-6739857566570511208
2026-05-18T01:22:37.8100495Z === NAME  TestMigCluster_basicAWS_simple
2026-05-18T01:22:37.8101600Z     resource_cluster_migration_test.go:10: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-18T01:22:37.8102457Z         
2026-05-18T01:22:37.8104988Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-6739857566570511208): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64a16fb087b449d98ae8/clusters/test-acc-tf-c-6739857566570511208 GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-05-18T01:22:37.8106722Z         
2026-05-18T01:22:37.8141212Z --- FAIL: TestMigCluster_basicAWS_simple (1335.23s)
```

- 2026-05-19: MISSING
- 2026-05-20 PASS 21 minutes
- 2026-05-21: MISSING
- 2026-05-22 PASS 40 minutes
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS 19 minutes
- 2026-05-26: MISSING
- 2026-05-27 PASS 47 minutes
- 2026-05-28: MISSING
- 2026-05-29 PASS 16 minutes
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS 23 minutes
- 2026-06-02: MISSING
- 2026-06-03 PASS 32 minutes
- 2026-06-04: MISSING
- 2026-06-05 PASS 17 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 19 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 19 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 18 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 18 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
