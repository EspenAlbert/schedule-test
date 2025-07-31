# advanced_cluster/advancedcluster/TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) TIMEOUT FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:30](#error-2025-07-11t0030020000) |  | dev |  | 6532.00s
[2025-07-29 00:33](#error-2025-07-29t0033240000) |  | dev | flaky_500 | 1992.02s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 22 minutes
- 2025-07-03 PASS 25 minutes
- 2025-07-04 PASS 26 minutes
- 2025-07-05 PASS 27 minutes
- 2025-07-06 PASS 22 minutes
- 2025-07-07 PASS 25 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 24 minutes
- 2025-07-10 PASS 22 minutes
- 2025-07-11

### Error 2025-07-11T00:30:02+00:00
```
2025-07-11T00:30:02.6329337Z === RUN   TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-07-11T03:41:02.0304731Z === CONT  TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-07-11T05:29:53.6629241Z 		TestAccMockableAdvancedCluster_symmetricShardedOldSchemaDiskSizeGBAtElectableLevel (1h48m52s)
2025-07-11T05:29:53.6630329Z 		TestMigAdvancedCluster_asymmetricShardedNewSchema (1h48m52s)
2025-07-11T05:29:53.6631593Z 		TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (1h48m52s)
```

- 2025-07-12 PASS 45 minutes
- 2025-07-13 PASS 30 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 27 minutes
- 2025-07-16 PASS 22 minutes
- 2025-07-17 PASS 38 minutes
- 2025-07-18 PASS 21 minutes
- 2025-07-19 PASS 22 minutes
- 2025-07-20 PASS 29 minutes
- 2025-07-21 PASS 19 minutes
- 2025-07-22 PASS 19 minutes
- 2025-07-23
  - PASS 20 minutes
  - PASS 23 minutes
  - PASS 20 minutes
  - PASS 22 minutes
- 2025-07-24 PASS 25 minutes
- 2025-07-25 PASS 24 minutes
- 2025-07-26 PASS 34 minutes
- 2025-07-27 PASS 24 minutes
- 2025-07-28 PASS 32 minutes
- 2025-07-29

### Error 2025-07-29T00:33:24+00:00
```
2025-07-29T00:33:24.1850462Z === RUN   TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-07-29T00:56:07.7797013Z === CONT  TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-07-29T01:25:06.2375444Z === NAME  TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-07-29T01:25:06.2376408Z     resource_advanced_cluster_migration_test.go:126: TestStep 2/2 running init: exit status 1
2025-07-29T01:25:06.2376961Z         
2025-07-29T01:25:06.2377379Z         Error: Failed to install provider
2025-07-29T01:25:06.2377705Z         
2025-07-29T01:25:06.2378364Z         Error while installing mongodb/mongodbatlas v1.39.0: could not query provider
2025-07-29T01:25:06.2379261Z         registry for registry.terraform.io/mongodb/mongodbatlas: failed to retrieve
2025-07-29T01:25:06.2380187Z         authentication checksums for provider: the request failed after 2 attempts,
2025-07-29T01:25:06.2380924Z         please try again later: 503 Service Unavailable returned from github.com
2025-07-29T01:29:19.9672933Z --- FAIL: TestMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (1992.19s)
```

- 2025-07-30 PASS 26 minutes
- 2025-07-31 PASS 40 minutes