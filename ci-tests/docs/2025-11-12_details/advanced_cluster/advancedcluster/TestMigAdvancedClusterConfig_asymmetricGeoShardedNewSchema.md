# advanced_cluster/advancedcluster/TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027370000) |  | dev | 10807.06s
[2025-10-10 00:27](#error-2025-10-10t0027450000) |  | dev | 1280.04s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 2 hours
- 2025-10-05 PASS 16 minutes
- 2025-10-06 PASS 17 minutes
- 2025-10-07

### Error 2025-10-07T00:27:37+00:00
```
2025-10-07T00:27:37.4694513Z === RUN   TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-07T00:30:14.9369568Z === CONT  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-07T03:30:20.1548086Z === NAME  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-07T03:30:20.1548844Z     resource_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-10-07T03:30:20.1549323Z         
2025-10-07T03:30:20.1549625Z         Error: Error in create
2025-10-07T03:30:20.1549911Z         
2025-10-07T03:30:20.1550296Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:30:20.1551086Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:30:20.1551819Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:30:20.1552198Z         
2025-10-07T03:30:20.1552738Z         cluster=test-acc-tf-c-4078263991953245945 didn't reach desired state: IDLE,
2025-10-07T03:30:20.1553295Z         error: context deadline exceeded
2025-10-07T03:30:20.3731192Z --- FAIL: TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema (10807.58s)
```

- 2025-10-08 PASS 21 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10

### Error 2025-10-10T00:27:45+00:00
```
2025-10-10T00:27:45.5592057Z === RUN   TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-10T00:33:13.9864271Z === CONT  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-10T00:47:54.6874888Z === NAME  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-10T00:47:54.6875902Z     resource_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-10-10T00:47:54.6876541Z         
2025-10-10T00:47:54.6877056Z         Error: error reading  advanced cluster list
2025-10-10T00:47:54.6877515Z         
2025-10-10T00:47:54.6878105Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-10T00:47:54.6879197Z           on terraform_plugin_test.tf line 54, in data "mongodbatlas_advanced_clusters" "test":
2025-10-10T00:47:54.6880166Z           54: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-10T00:47:54.6880649Z         
2025-10-10T00:47:54.6881143Z         project ID 68e853011a9c5e5749c0e530. Error
2025-10-10T00:47:54.6882309Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e853011a9c5e5749c0e530/clusters
2025-10-10T00:47:54.6883160Z         GET: HTTP 400 Bad Request (Error code:
2025-10-10T00:47:54.6884000Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-10T00:47:54.6885023Z         test-acc-tf-c-1770655832885120188 cannot be used in the Cluster API. Reason:
2025-10-10T00:47:54.6886095Z         Bad Request. Params: [test-acc-tf-c-1770655832885120188], BadRequestDetail: 
2025-10-10T00:54:30.6492772Z --- FAIL: TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema (1280.42s)
```

- 2025-10-11 PASS 19 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 23 minutes
- 2025-10-14 PASS 22 minutes
- 2025-10-15 PASS 17 minutes
- 2025-10-16 PASS 39 minutes
- 2025-10-17 PASS 21 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 20 minutes
- 2025-10-20 PASS 32 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 29 minutes
  - PASS 17 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS 17 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 17 minutes
- 2025-10-27 PASS an hour
- 2025-10-28: MISSING
- 2025-10-29 PASS 21 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 23 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 20 minutes
- 2025-11-03 PASS 15 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 28 minutes
  - PASS 16 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 22 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 18 minutes
- 2025-11-10 PASS 19 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 20 minutes