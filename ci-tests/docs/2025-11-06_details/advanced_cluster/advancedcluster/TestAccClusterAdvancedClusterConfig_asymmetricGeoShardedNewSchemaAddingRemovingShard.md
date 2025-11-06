# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3) TIMEOUT
Success rate: 90.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:26](#error-2025-10-20t1026370000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e5bde46041f5669d6f4/clusters | dev | out_of_capacity | 3.06s
[2025-10-26 00:30](#error-2025-10-26t0030020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68fd6b87328f9755b2ceb6a1/clusters | qa | out_of_capacity | 4.06s
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s
[2025-11-02 00:29](#error-2025-11-02t0029490000) |  | qa |  | 5.01s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 37 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 37 minutes
- 2025-10-11 PASS 42 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 44 minutes
- 2025-10-14 PASS 50 minutes
- 2025-10-15 PASS 31 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 34 minutes
- 2025-10-18 PASS 31 minutes
- 2025-10-19 PASS 31 minutes
- 2025-10-20
  - PASS 52 minutes
  - FAIL 3 seconds

### Error 2025-10-20T10:26:37+00:00
```
2025-10-20T10:26:37.8343998Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-20T10:28:27.7304928Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-20T10:28:31.2125020Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-20T10:28:31.2126362Z     resource_test.go:767: Step 1/4 error: Error running apply: exit status 1
2025-10-20T10:28:31.2126968Z         
2025-10-20T10:28:31.2127394Z         Error: Error in create
2025-10-20T10:28:31.2127823Z         
2025-10-20T10:28:31.2128475Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:28:31.2129728Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:28:31.2130778Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:28:31.2131324Z         
2025-10-20T10:28:31.2132107Z         cluster name: test-acc-tf-c-7383287024029324257, API error details:
2025-10-20T10:28:31.2133275Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e5bde46041f5669d6f4/clusters
2025-10-20T10:28:31.2134584Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:28:31.2136292Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:28:31.2137244Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:28:31.2373414Z   
2025-10-20T10:28:31.2944909Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (3.57s)
```

- 2025-10-21 PASS 32 minutes
- 2025-10-22
  - PASS 39 minutes
  - PASS 30 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS 42 minutes
- 2025-10-25 PASS an hour
- 2025-10-26

### Error 2025-10-26T00:30:02+00:00
```
2025-10-26T00:30:02.0904272Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-26T00:31:28.3819515Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-26T00:31:32.8711279Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-26T00:31:32.8712622Z     resource_test.go:767: Step 1/4 error: Error running apply: exit status 1
2025-10-26T00:31:32.8713292Z         
2025-10-26T00:31:32.8713728Z         Error: Error in create
2025-10-26T00:31:32.8714163Z         
2025-10-26T00:31:32.8714822Z           with mongodbatlas_advanced_cluster.test,
2025-10-26T00:31:32.8716044Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-26T00:31:32.8717139Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-26T00:31:32.8717701Z         
2025-10-26T00:31:32.8718457Z         cluster name: test-acc-tf-c-3648813525479138921, API error details:
2025-10-26T00:31:32.8719663Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b87328f9755b2ceb6a1/clusters
2025-10-26T00:31:32.8721103Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-26T00:31:32.8722287Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-26T00:31:32.8723188Z         Conflict. Params: [], BadRequestDetail: 
2025-10-26T00:31:33.0047015Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (4.63s)
```

- 2025-10-27 PASS an hour
- 2025-10-28 PASS 34 minutes
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

- 2025-11-03 PASS 36 minutes
- 2025-11-04 PASS 45 minutes
- 2025-11-05
  - PASS 38 minutes
  - PASS 34 minutes
- 2025-11-06 PASS 40 minutes