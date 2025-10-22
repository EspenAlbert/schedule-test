# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-27 00:26](#error-2025-09-27t0026300000) |  | dev | flaky_client | 777.08s
[2025-10-01 04:55](#error-2025-10-01t0455010000) |  | dev |  | 1081.09s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 18 minutes
- 2025-09-24 PASS 17 minutes
- 2025-09-25 PASS 20 minutes
- 2025-09-26 PASS 17 minutes
- 2025-09-27

### Error 2025-09-27T00:26:30+00:00
```
2025-09-27T00:26:30.3173811Z === RUN   TestV1xMigAdvancedCluster_replicaSetAWSProvider
2025-09-27T00:26:30.3186770Z === CONT  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2025-09-27T00:39:28.0673323Z === NAME  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2025-09-27T00:39:28.0674196Z     resource_migration_v1x_test.go:314: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-27T00:39:28.0674999Z         
2025-09-27T00:39:28.0675263Z         Error: Error in delete
2025-09-27T00:39:28.0675617Z         
2025-09-27T00:39:28.0676066Z         cluster=test-acc-tf-c-8124035074927257705 didn't reach desired state:
2025-09-27T00:39:28.0676607Z         DELETED, error: Get
2025-09-27T00:39:28.0677494Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d72f335ed71157b4340087/clusters/test-acc-tf-c-8124035074927257705":
2025-09-27T00:39:28.0678311Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-09-27T00:39:28.0961795Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetAWSProvider (777.78s)
```

- 2025-09-28 PASS 15 minutes
- 2025-09-29 PASS 17 minutes
- 2025-09-30
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-10-01
  - PASS 15 minutes
  - PASS 14 minutes
  - FAIL 18 minutes

### Error 2025-10-01T04:55:01+00:00
```
2025-10-01T04:55:01.4925479Z === RUN   TestV1xMigAdvancedCluster_replicaSetAWSProvider
2025-10-01T04:55:01.4965092Z === CONT  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2025-10-01T05:10:49.6781274Z === NAME  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2025-10-01T05:10:49.6782356Z     resource_migration_v1x_test.go:314: Step 1/3 error: Error running apply: exit status 1
2025-10-01T05:10:49.6783013Z         
2025-10-01T05:10:49.6784366Z         Error: error reading Advanced Configuration Option (v20240530) for MongoDB Cluster (test-acc-tf-c-2771316845430575690): undefined response type
2025-10-01T05:10:49.6784965Z         
2025-10-01T05:10:49.6785340Z           with data.mongodbatlas_advanced_cluster.test,
2025-10-01T05:10:49.6786004Z           on terraform_plugin_test.tf line 38, in data "mongodbatlas_advanced_cluster" "test":
2025-10-01T05:10:49.6786580Z           38: 	data "mongodbatlas_advanced_cluster" "test" {
2025-10-01T05:10:49.6787064Z         
2025-10-01T05:13:03.3743530Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetAWSProvider (1081.88s)
```

  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 24 minutes
  - PASS 26 minutes
  - PASS 14 minutes
- 2025-10-02 PASS 17 minutes
- 2025-10-03 PASS 15 minutes
- 2025-10-04 PASS 25 minutes
- 2025-10-05 PASS 12 minutes
- 2025-10-06 PASS 14 minutes
- 2025-10-07 PASS 17 minutes
- 2025-10-08 PASS 16 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 18 minutes
- 2025-10-11 PASS 22 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 17 minutes
- 2025-10-14 PASS 15 minutes
- 2025-10-15 PASS 17 minutes
- 2025-10-16 PASS 27 minutes
- 2025-10-17 PASS 18 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 14 minutes
- 2025-10-20 PASS 16 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 31 minutes
  - PASS 13 minutes