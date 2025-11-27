# advanced_cluster_sa_mig/advancedcluster/TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema Test Details
# Found 12 TestRuns in dev from 2025-10-30 to 2025-11-27 from master branch: 1 unique tests, PASS(x 10) FAIL(x 2)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028160000) |  | dev | flaky_500 | 3584.10s
[2025-11-20 00:27](#error-2025-11-20t0027590000) |  | dev | flaky_client | 98.01s

### Timeline
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

- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03: MISSING
- 2025-11-04 PASS 20 minutes
- 2025-11-05: MISSING
- 2025-11-06 PASS 24 minutes
- 2025-11-07: MISSING
- 2025-11-08 PASS 42 minutes
- 2025-11-09: MISSING
- 2025-11-10: MISSING
- 2025-11-11 PASS 19 minutes
- 2025-11-12: MISSING
- 2025-11-13 PASS 27 minutes
- 2025-11-14: MISSING
- 2025-11-15 PASS 19 minutes
- 2025-11-16: MISSING
- 2025-11-17: MISSING
- 2025-11-18 PASS 17 minutes
- 2025-11-19: MISSING
- 2025-11-20

### Error 2025-11-20T00:27:59+00:00
```
2025-11-20T00:27:59.9042617Z === RUN   TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-11-20T00:27:59.9049973Z === CONT  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-11-20T00:29:37.8341381Z === NAME  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-11-20T00:29:37.8342339Z     resource_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-11-20T00:29:37.8343031Z         
2025-11-20T00:29:37.8343471Z         Error: Error in create
2025-11-20T00:29:37.8344081Z         
2025-11-20T00:29:37.8344610Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T00:29:37.8345522Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T00:29:37.8346118Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T00:29:37.8346433Z         
2025-11-20T00:29:37.8346881Z         cluster=test-acc-tf-c-2696332182772200179 didn't reach desired state: IDLE,
2025-11-20T00:29:37.8347287Z         error: Get
2025-11-20T00:29:37.8348024Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/691e608df41e983fa169525f/clusters/test-acc-tf-c-2696332182772200179":
2025-11-20T00:29:37.8348753Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-11-20T00:29:37.8406394Z   
2025-11-20T00:29:38.0103113Z --- FAIL: TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema (98.11s)
```

- 2025-11-21: MISSING
- 2025-11-22 PASS 18 minutes
- 2025-11-23: MISSING
- 2025-11-24: MISSING
- 2025-11-25 PASS 22 minutes
- 2025-11-26: MISSING
- 2025-11-27 PASS 22 minutes
