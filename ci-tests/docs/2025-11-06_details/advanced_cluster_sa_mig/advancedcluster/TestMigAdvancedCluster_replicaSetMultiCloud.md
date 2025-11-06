# advanced_cluster_sa_mig/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 3 TestRuns in dev from 2025-10-30 to 2025-11-06 from master branch: 1 unique tests, PASS(x 2) FAIL
Success rate: 66.67%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028160000) |  | dev | 3584.02s

## Timeline
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
2025-10-30T00:28:16.9538936Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-10-30T00:28:16.9549380Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-10-30T01:28:01.1667647Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-10-30T01:28:01.1670190Z     resource_migration_test.go:16: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:28:01.1671006Z         
2025-10-30T01:28:01.1671410Z         Error: Error in delete
2025-10-30T01:28:01.1671823Z         
2025-10-30T01:28:01.1672537Z         cluster=test-acc-tf-c-1248927666683770545 didn't reach desired state:
2025-10-30T01:28:01.1673188Z         DELETED, error:
2025-10-30T01:28:01.1673929Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b123e2dc7470847be852/clusters/test-acc-tf-c-1248927666683770545
2025-10-30T01:28:01.1674737Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-10-30T01:28:01.1675158Z         BadRequestDetail: 
2025-10-30T01:28:01.1797897Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (3584.23s)
```

- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03: MISSING
- 2025-11-04 PASS 23 minutes
- 2025-11-05: MISSING
- 2025-11-06 PASS 26 minutes