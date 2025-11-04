# advanced_cluster_sa_mig/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 2 TestRuns in dev from 2025-10-30 to 2025-11-04 from master branch: 1 unique tests, FAIL PASS
Success rate: 50.00%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028160000) |  | dev | 3586.00s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07: MISSING
- 2025-10-08: MISSING
- 2025-10-09: MISSING
- 2025-10-10: MISSING
- 2025-10-11: MISSING
- 2025-10-12: MISSING
- 2025-10-13: MISSING
- 2025-10-14: MISSING
- 2025-10-15: MISSING
- 2025-10-16: MISSING
- 2025-10-17: MISSING
- 2025-10-18: MISSING
- 2025-10-19: MISSING
- 2025-10-20: MISSING
- 2025-10-21: MISSING
- 2025-10-22: MISSING
- 2025-10-23: MISSING
- 2025-10-24: MISSING
- 2025-10-25: MISSING
- 2025-10-26: MISSING
- 2025-10-27: MISSING
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30

### Error 2025-10-30T00:28:16+00:00
```
2025-10-30T00:28:16.9540906Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-10-30T00:28:16.9548727Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-10-30T01:28:02.9428416Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-10-30T01:28:02.9429477Z     resource_migration_test.go:21: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:28:02.9430107Z         
2025-10-30T01:28:02.9430365Z         Error: Error in delete
2025-10-30T01:28:02.9430677Z         
2025-10-30T01:28:02.9431162Z         cluster=test-acc-tf-c-5480769086913990546 didn't reach desired state:
2025-10-30T01:28:02.9431673Z         DELETED, error:
2025-10-30T01:28:02.9432541Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11eabf4374f32993d21/clusters/test-acc-tf-c-5480769086913990546
2025-10-30T01:28:02.9433488Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-10-30T01:28:02.9433988Z         BadRequestDetail: 
2025-10-30T01:28:02.9555516Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (3586.00s)
```

- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03: MISSING
- 2025-11-04 PASS 20 minutes