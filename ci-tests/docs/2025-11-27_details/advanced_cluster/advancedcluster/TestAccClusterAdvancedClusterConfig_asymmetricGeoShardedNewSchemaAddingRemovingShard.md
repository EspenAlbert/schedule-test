# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) TIMEOUT FAIL
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 47 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2618998Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-30T00:29:52.4757704Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-30T03:46:08.1291278Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-30T03:46:08.1292301Z     resource_test.go:767: Step 2/4 error: Error running apply: exit status 1
2025-10-30T03:46:08.1292670Z         
2025-10-30T03:46:08.1292927Z         Error: Error in update
2025-10-30T03:46:08.1293551Z         
2025-10-30T03:46:08.1293897Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:46:08.1294544Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:46:08.1295505Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:46:08.1295831Z         
2025-10-30T03:46:08.1296299Z         cluster=test-acc-tf-c-5698738306597262784 didn't reach desired state: IDLE,
2025-10-30T03:46:08.1296921Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:46:08.1297343Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:46:40.9435044Z   
2025-10-30T05:28:11.5672290Z 		TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (4h58m19s)
2025-10-30T05:28:11.5673981Z 		TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (4h58m19s)
2025-10-30T05:28:11.5675579Z 		TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (4h58m19s)
```

- 2025-10-31 PASS 34 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 36 minutes
- 2025-11-04 PASS 45 minutes
- 2025-11-05
  - PASS 38 minutes
  - PASS 34 minutes
- 2025-11-06 PASS 40 minutes
- 2025-11-07 PASS 39 minutes
- 2025-11-08 PASS 58 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 40 minutes
- 2025-11-11 PASS 42 minutes
- 2025-11-12 PASS 35 minutes
- 2025-11-13 PASS 59 minutes
- 2025-11-14 PASS 40 minutes
- 2025-11-15 PASS 34 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 39 minutes
- 2025-11-18 PASS 32 minutes
- 2025-11-19
  - PASS 32 minutes
  - PASS 30 minutes
- 2025-11-20
  - PASS 51 minutes
  - PASS 30 minutes
- 2025-11-21 PASS 30 minutes
- 2025-11-22 PASS 32 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 31 minutes
- 2025-11-25 PASS 33 minutes
- 2025-11-26 PASS 30 minutes
- 2025-11-27 PASS 44 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:29](#error-2025-11-02t0029490000) |  | qa | 5.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:49+00:00
```
2025-11-02T00:29:49.6937741Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-11-02T00:31:20.5855822Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-11-02T00:31:25.3070333Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-11-02T00:31:25.3071965Z     resource_test.go:767: Step 1/4 error: Error running apply: exit status 1
2025-11-02T00:31:25.3072853Z         
2025-11-02T00:31:25.3073537Z         Error: Error in create
2025-11-02T00:31:25.3074171Z         
2025-11-02T00:31:25.3074970Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.3076422Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.3077842Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.3078981Z         
2025-11-02T00:31:25.3080149Z         cluster name: test-acc-tf-c-6356941646401971487, API error details:
2025-11-02T00:31:25.3081624Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5fa5ace12378d296111/clusters
2025-11-02T00:31:25.3082756Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.3084026Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.3085687Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.3087157Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.3088165Z         BadRequestDetail: 
2025-11-02T00:31:25.3187033Z    test_name=TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-02T00:31:25.6329731Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (5.06s)
```

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 33 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 33 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 36 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 35 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
