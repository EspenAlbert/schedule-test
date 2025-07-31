# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_symmetricGeoShardedOldSchema Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-29 01:51](#error-2025-07-29t0151110000) |  | dev | provider_download | 7.08s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 20 minutes
- 2025-07-04 PASS 20 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 15 minutes
- 2025-07-08 PASS 23 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 16 minutes
- 2025-07-13 PASS 24 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 23 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 17 minutes
- 2025-07-18 PASS 29 minutes
- 2025-07-19 PASS 18 minutes
- 2025-07-20 PASS 18 minutes
- 2025-07-21 PASS 20 minutes
- 2025-07-22 PASS 18 minutes
- 2025-07-23
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 26 minutes
- 2025-07-24 PASS 21 minutes
- 2025-07-25 PASS 29 minutes
- 2025-07-26 PASS 32 minutes
- 2025-07-27 PASS 26 minutes
- 2025-07-28 PASS 37 minutes
- 2025-07-29

### Error 2025-07-29T01:51:11+00:00
```
2025-07-29T01:51:11.9747314Z === RUN   TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-07-29T01:51:11.9867030Z === CONT  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-07-29T01:51:11.9896291Z === NAME  TestMigAdvancedCluster_symmetricGeoShardedOldSchema
2025-07-29T01:51:11.9896918Z     resource_advanced_cluster_migration_test.go:30: TestStep 1/2 running init: exit status 1
2025-07-29T01:51:11.9897351Z         
2025-07-29T01:51:11.9897642Z         Error: Failed to install provider
2025-07-29T01:51:11.9897927Z         
2025-07-29T01:51:11.9898646Z         Error while installing mongodb/mongodbatlas v1.39.0: github.com: bad response
2025-07-29T01:51:11.9899081Z         code: 503
2025-07-29T01:51:11.9899420Z --- FAIL: TestMigAdvancedCluster_symmetricGeoShardedOldSchema (7.84s)
```

- 2025-07-30 PASS 25 minutes
- 2025-07-31 PASS 56 minutes