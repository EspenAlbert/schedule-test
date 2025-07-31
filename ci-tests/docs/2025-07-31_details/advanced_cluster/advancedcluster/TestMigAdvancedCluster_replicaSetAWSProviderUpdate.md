# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProviderUpdate Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) TIMEOUT FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:30](#error-2025-07-11t0030000000) |  | dev |  | 6532.00s
[2025-07-29 00:33](#error-2025-07-29t0033210000) |  | dev | provider_download | 852.04s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 27 minutes
- 2025-07-03 PASS 27 minutes
- 2025-07-04 PASS 30 minutes
- 2025-07-05 PASS 26 minutes
- 2025-07-06 PASS 29 minutes
- 2025-07-07 PASS 26 minutes
- 2025-07-08 PASS 46 minutes
- 2025-07-09 PASS 29 minutes
- 2025-07-10 PASS 27 minutes
- 2025-07-11

### Error 2025-07-11T00:30:00+00:00
```
2025-07-11T00:30:00.4627406Z === RUN   TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-07-11T03:41:02.0467743Z === CONT  TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-07-11T05:29:53.6632630Z 		TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1h48m52s)
2025-07-11T05:29:53.6633690Z 		TestMigAdvancedCluster_replicaSetAWSProvider (1h48m52s)
2025-07-11T05:29:53.6634555Z 		TestMigAdvancedCluster_replicaSetAWSProviderUpdate (1h48m52s)
```

- 2025-07-12 PASS 32 minutes
- 2025-07-13 PASS 38 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 30 minutes
- 2025-07-16 PASS 26 minutes
- 2025-07-17 PASS 29 minutes
- 2025-07-18 PASS 29 minutes
- 2025-07-19 PASS 29 minutes
- 2025-07-20 PASS 33 minutes
- 2025-07-21 PASS 27 minutes
- 2025-07-22 PASS 25 minutes
- 2025-07-23
  - PASS 28 minutes
  - PASS 32 minutes
  - PASS 32 minutes
  - PASS 28 minutes
- 2025-07-24 PASS 27 minutes
- 2025-07-25 PASS 30 minutes
- 2025-07-26 PASS 34 minutes
- 2025-07-27 PASS 37 minutes
- 2025-07-28 PASS 52 minutes
- 2025-07-29

### Error 2025-07-29T00:33:21+00:00
```
2025-07-29T00:33:21.9077202Z === RUN   TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-07-29T00:56:07.8086219Z === CONT  TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-07-29T01:07:57.7720526Z === NAME  TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-07-29T01:07:57.7721435Z     resource_advanced_cluster_migration_test.go:45: TestStep 2/2 running init: exit status 1
2025-07-29T01:07:57.7721990Z         
2025-07-29T01:07:57.7722372Z         Error: Failed to install provider
2025-07-29T01:07:57.7723146Z         
2025-07-29T01:07:57.7724091Z         Error while installing mongodb/mongodbatlas v1.39.0: github.com: bad response
2025-07-29T01:07:57.7724763Z         code: 503
2025-07-29T01:10:20.1803565Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProviderUpdate (852.37s)
```

- 2025-07-30 PASS 31 minutes
- 2025-07-31 PASS 33 minutes