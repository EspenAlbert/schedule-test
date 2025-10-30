# advanced_cluster_sa_mig/advancedcluster/TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema Test Details
# Found 1 TestRuns in dev on 2025-10-30 from master branch: 1 unique tests, FAIL
Success rate: 0.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028160000) |  | dev | flaky_500 | 3584.10s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01: MISSING
- 2025-10-02: MISSING
- 2025-10-03: MISSING
- 2025-10-04: MISSING
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
2025-10-30T00:28:16.9542620Z === RUN   TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-30T00:28:16.9547906Z === CONT  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-30T01:28:01.9281963Z === NAME  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-30T01:28:01.9282956Z     resource_migration_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:28:01.9283462Z         
2025-10-30T01:28:01.9283809Z         Error: Error in delete
2025-10-30T01:28:01.9284061Z         
2025-10-30T01:28:01.9284599Z         cluster=test-acc-tf-c-5246903044995858738 didn't reach desired state:
2025-10-30T01:28:01.9285000Z         DELETED, error:
2025-10-30T01:28:01.9286060Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11eabf4374f32993d21/clusters/test-acc-tf-c-5246903044995858738
2025-10-30T01:28:01.9286996Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-10-30T01:28:01.9287449Z         BadRequestDetail: 
2025-10-30T01:28:01.9416207Z --- FAIL: TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema (3584.99s)
```
