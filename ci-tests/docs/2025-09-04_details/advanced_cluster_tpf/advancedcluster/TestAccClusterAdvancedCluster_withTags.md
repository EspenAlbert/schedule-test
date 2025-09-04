# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da09bbb8c4ee1f85a01/limits | qa | flaky_500 | 37.05s
[2025-08-27 01:38](#error-2025-08-27t0138030000) |  | dev | flaky_500 | 9.09s
[2025-08-31 01:41](#error-2025-08-31t0141270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397ec7e07f9709daeffbb/limits | qa | flaky_500 | 1630.07s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 28 minutes
- 2025-08-07 PASS 40 minutes
- 2025-08-08 PASS 19 minutes
- 2025-08-09 PASS 26 minutes
- 2025-08-10 PASS 35 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 23 minutes
- 2025-08-13 PASS 23 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 49 minutes
- 2025-08-17 PASS 40 minutes
- 2025-08-18 PASS 21 minutes
- 2025-08-19 PASS 25 minutes
- 2025-08-20
  - PASS 21 minutes
  - PASS 26 minutes
- 2025-08-21 PASS 21 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 30 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1374653Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-08-24T03:34:47.1474572Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-08-24T03:34:47.1621214Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-08-24T03:34:47.1621780Z     resource_advanced_cluster_test.go:666: Step 1/4 error: Error running apply: exit status 1
2025-08-24T03:34:47.1622198Z         
2025-08-24T03:34:47.1622576Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1622898Z         
2025-08-24T03:34:47.1623234Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1623886Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1624485Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1624790Z         
2025-08-24T03:34:47.1625230Z         error getting project (68aa5da09bbb8c4ee1f85a01): error getting project's
2025-08-24T03:34:47.1625685Z         limits (68aa5da09bbb8c4ee1f85a01):
2025-08-24T03:34:47.1626260Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da09bbb8c4ee1f85a01/limits
2025-08-24T03:34:47.1626920Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1627485Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1627865Z         BadRequestDetail: 
2025-08-24T03:34:47.1628173Z --- FAIL: TestAccClusterAdvancedCluster_withTags (37.55s)
```

- 2025-08-25 PASS 21 minutes
- 2025-08-26 PASS 29 minutes
- 2025-08-27

### Error 2025-08-27T01:38:03+00:00
```
2025-08-27T01:38:03.9386115Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-08-27T01:38:03.9436329Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-08-27T01:38:03.9563267Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-08-27T01:38:03.9563826Z     resource_advanced_cluster_test.go:666: Step 1/4 error: Error running apply: exit status 1
2025-08-27T01:38:03.9564219Z         
2025-08-27T01:38:03.9564457Z         Error: Error in create
2025-08-27T01:38:03.9564696Z         
2025-08-27T01:38:03.9565005Z           with mongodbatlas_advanced_cluster.test,
2025-08-27T01:38:03.9565628Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-27T01:38:03.9566199Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-27T01:38:03.9566495Z         
2025-08-27T01:38:03.9566887Z         cluster name: test-acc-tf-c-4626129874167346410, API error details:
2025-08-27T01:38:03.9567539Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae515aaa49ce49aab93686/clusters
2025-08-27T01:38:03.9568040Z         POST: HTTP 403 Forbidden (Error code:
2025-08-27T01:38:03.9568512Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-27T01:38:03.9569205Z         Configuration. Contains selections that are unavailable due to your
2025-08-27T01:38:03.9569769Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-27T01:38:03.9570157Z         BadRequestDetail: 
2025-08-27T01:38:03.9583152Z   
2025-08-27T01:38:03.9592472Z --- FAIL: TestAccClusterAdvancedCluster_withTags (9.92s)
```

- 2025-08-28 PASS 25 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 18 minutes
- 2025-08-31

### Error 2025-08-31T01:41:27+00:00
```
2025-08-31T01:41:27.0807501Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-08-31T01:41:27.0850942Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-08-31T01:41:27.1083873Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-08-31T01:41:27.1084502Z     resource_advanced_cluster_test.go:666: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-08-31T01:41:27.1084977Z         
2025-08-31T01:41:27.1085350Z         Error: error when getting project properties after create
2025-08-31T01:41:27.1085674Z         
2025-08-31T01:41:27.1086117Z           with mongodbatlas_project.cluster_project,
2025-08-31T01:41:27.1086769Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-31T01:41:27.1087367Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-31T01:41:27.1087665Z         
2025-08-31T01:41:27.1088099Z         error getting project (68b397ec7e07f9709daeffbb): error getting project's
2025-08-31T01:41:27.1088547Z         limits (68b397ec7e07f9709daeffbb):
2025-08-31T01:41:27.1089113Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397ec7e07f9709daeffbb/limits
2025-08-31T01:41:27.1089767Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T01:41:27.1090340Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:41:27.1090729Z         BadRequestDetail: 
2025-08-31T01:41:27.1127211Z --- FAIL: TestAccClusterAdvancedCluster_withTags (1630.72s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7149338Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-09-01T00:30:49.7553406Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-09-01T00:30:49.7629905Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-09-01T00:30:49.7630449Z     resource_advanced_cluster_test.go:666: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:30:49.7630852Z         
2025-09-01T00:30:49.7631240Z         Error: error creating project: test-acc-tf-p-8080568480849714293
2025-09-01T00:30:49.7631813Z         
2025-09-01T00:30:49.7632140Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7632782Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7633373Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7633675Z         
2025-09-01T00:30:49.7634131Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7634755Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7635495Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7636093Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7636490Z         BadRequestDetail: 
2025-09-01T00:30:49.7662642Z    test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema test_terraform_path=/home/runner/work/_temp/a4685d55-a02f-41f0-96ef-d09228d8abbb/terraform test_working_directory=/tmp/plugintest1300340401 test_step_number=1
2025-09-01T00:30:49.7755635Z --- FAIL: TestAccClusterAdvancedCluster_withTags (1.86s)
```

  - PASS an hour
  - PASS an hour
  - PASS 22 minutes
  - PASS 14 minutes
  - PASS 26 minutes
  - PASS 22 minutes
  - PASS 22 minutes
- 2025-09-02 PASS 27 minutes
- 2025-09-03 PASS 38 minutes
- 2025-09-04 PASS 27 minutes