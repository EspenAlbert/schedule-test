# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_shardedNewSchema Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 04:55](#error-2025-10-01t0455010000) |  | dev | 1192.05s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 29 minutes
- 2025-09-24 PASS 25 minutes
- 2025-09-25 PASS 28 minutes
- 2025-09-26 PASS 34 minutes
- 2025-09-27 PASS 17 minutes
- 2025-09-28 PASS 17 minutes
- 2025-09-29 PASS 21 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-10-01
  - PASS 18 minutes
  - PASS 17 minutes
  - FAIL 19 minutes

### Error 2025-10-01T04:55:01+00:00
```
2025-10-01T04:55:01.4325932Z === RUN   TestV1xMigAdvancedCluster_shardedNewSchema
2025-10-01T04:55:04.1455164Z === CONT  TestV1xMigAdvancedCluster_shardedNewSchema
2025-10-01T05:10:20.4595273Z === NAME  TestV1xMigAdvancedCluster_shardedNewSchema
2025-10-01T05:10:20.4595884Z     resource_migration_v1x_test.go:157: Step 1/4 error: Error running apply: exit status 1
2025-10-01T05:10:20.4596278Z         
2025-10-01T05:10:20.4596660Z         Error: error reading Advanced Configuration from legacy API
2025-10-01T05:10:20.4596988Z         
2025-10-01T05:10:20.4597317Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-01T05:10:20.4598092Z           on terraform_plugin_test.tf line 66, in data "mongodbatlas_advanced_clusters" "test":
2025-10-01T05:10:20.4598631Z           66: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-01T05:10:20.4598939Z         
2025-10-01T05:10:20.4599355Z         cluster name: test-acc-tf-c-6065398694574637701, API error details: undefined
2025-10-01T05:10:20.4599752Z         response type
2025-10-01T05:10:51.9496963Z    test_name=TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-01T05:14:56.5969309Z --- FAIL: TestV1xMigAdvancedCluster_shardedNewSchema (1192.46s)
```

  - PASS 16 minutes
  - PASS 20 minutes
  - PASS 21 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-10-02 PASS 27 minutes
- 2025-10-03 PASS 17 minutes
- 2025-10-04 PASS 28 minutes
- 2025-10-05 PASS 17 minutes
- 2025-10-06 PASS 19 minutes
- 2025-10-07 PASS 18 minutes
- 2025-10-08 PASS 24 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 19 minutes
- 2025-10-11 PASS 27 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 17 minutes
- 2025-10-14 PASS 27 minutes
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 28 minutes
- 2025-10-17 PASS 21 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 16 minutes
- 2025-10-20 PASS 16 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 18 minutes
  - PASS 18 minutes