# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029510000) |  | qa |  | 4.08s
[2025-10-07 00:27](#error-2025-10-07t0027490000) |  | dev |  | 10804.07s
[2025-10-20 10:26](#error-2025-10-20t1026370000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e5bde46041f5669d6f4/clusters | dev | out_of_capacity | 3.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 30 minutes
- 2025-09-24 PASS 33 minutes
- 2025-09-25 PASS 52 minutes
- 2025-09-26 PASS 54 minutes
- 2025-09-27 PASS 37 minutes
- 2025-09-28 PASS 33 minutes
- 2025-09-29
  - PASS 49 minutes
  - PASS 30 minutes
- 2025-09-30
  - PASS 33 minutes
  - PASS 32 minutes
  - PASS 42 minutes
  - PASS 33 minutes
  - PASS 32 minutes
- 2025-10-01
  - PASS 58 minutes
  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS 44 minutes
  - PASS 32 minutes
  - PASS 55 minutes
  - PASS 31 minutes
- 2025-10-02 PASS 48 minutes
- 2025-10-03 PASS 57 minutes
- 2025-10-04 PASS 2 hours
- 2025-10-05

### Error 2025-10-05T00:29:51+00:00
```
2025-10-05T00:29:51.4056532Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-05T00:31:26.4173766Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-05T00:31:30.8637437Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-05T00:31:30.8639184Z     resource_test.go:777: Step 1/4 error: Error running apply: exit status 1
2025-10-05T00:31:30.8640084Z         
2025-10-05T00:31:30.8640860Z         Error: Error in create
2025-10-05T00:31:30.8641367Z         
2025-10-05T00:31:30.8642013Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:30.8643238Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:30.8644537Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:30.8645164Z         
2025-10-05T00:31:30.8645941Z         cluster name: test-acc-tf-c-77918136315975259, API error details:
2025-10-05T00:31:30.8647225Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfef758b3057a1af6cf/clusters
2025-10-05T00:31:30.8654730Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:30.8656572Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:30.8657612Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:30.8658624Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:30.8659313Z         BadRequestDetail: 
2025-10-05T00:31:30.8673294Z   
2025-10-05T00:31:31.2305072Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (4.82s)
```

- 2025-10-06 PASS 31 minutes
- 2025-10-07

### Error 2025-10-07T00:27:49+00:00
```
2025-10-07T00:27:49.5419092Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-07T00:30:14.9653839Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-07T03:30:19.5731892Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-10-07T03:30:19.5732806Z     resource_test.go:777: Step 1/4 error: Error running apply: exit status 1
2025-10-07T03:30:19.5733352Z         
2025-10-07T03:30:19.5733669Z         Error: Error in create
2025-10-07T03:30:19.5734036Z         
2025-10-07T03:30:19.5734484Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:30:19.5735633Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:30:19.5736870Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:30:19.5737212Z         
2025-10-07T03:30:19.5737654Z         cluster=test-acc-tf-c-877144245798063535 didn't reach desired state: IDLE,
2025-10-07T03:30:19.5738114Z         error: context deadline exceeded
2025-10-07T03:30:19.6211281Z    test_name=TestAccAdvancedCluster_moveBasic test_terraform_path=/home/runner/work/_temp/32ca5894-9082-4cab-8bcf-6d8bb695d35b/terraform test_step_number=1
2025-10-07T03:30:19.6272399Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (10804.68s)
```

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