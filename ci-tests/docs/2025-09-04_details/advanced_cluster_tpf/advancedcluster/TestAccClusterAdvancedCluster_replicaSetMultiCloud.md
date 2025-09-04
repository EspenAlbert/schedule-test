# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da04192cd1cc58a0094/limits | qa | flaky_500 | 37.04s
[2025-08-30 03:28](#error-2025-08-30t0328110000) |  | dev | timeout | 10810.02s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 4.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 51 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 54 minutes
- 2025-08-09 PASS 52 minutes
- 2025-08-10 PASS 53 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 48 minutes
  - PASS 41 minutes
- 2025-08-13 PASS 46 minutes
- 2025-08-14 PASS 49 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 48 minutes
- 2025-08-19 PASS 47 minutes
- 2025-08-20
  - PASS 48 minutes
  - PASS 50 minutes
- 2025-08-21 PASS 48 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 52 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1357626Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-24T03:34:47.1479957Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-24T03:34:47.1592699Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-24T03:34:47.1593272Z     resource_advanced_cluster_test.go:250: Step 1/3 error: Error running apply: exit status 1
2025-08-24T03:34:47.1593699Z         
2025-08-24T03:34:47.1594063Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1594379Z         
2025-08-24T03:34:47.1594703Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1595340Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1595926Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1596224Z         
2025-08-24T03:34:47.1596664Z         error getting project (68aa5da04192cd1cc58a0094): error getting project's
2025-08-24T03:34:47.1605053Z         limits (68aa5da04192cd1cc58a0094):
2025-08-24T03:34:47.1605665Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da04192cd1cc58a0094/limits
2025-08-24T03:34:47.1606341Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1606904Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1607284Z         BadRequestDetail: 
2025-08-24T03:34:47.1607636Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (37.43s)
```

- 2025-08-25 PASS 46 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 56 minutes
- 2025-08-28 PASS 47 minutes
- 2025-08-29: MISSING
- 2025-08-30

### Error 2025-08-30T03:28:11+00:00
```
2025-08-30T03:28:11.7834603Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:28:11.7956811Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:28:11.8263718Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:28:11.8264298Z     resource_advanced_cluster_test.go:250: Step 1/3 error: Error running apply: exit status 1
2025-08-30T03:28:11.8264804Z         
2025-08-30T03:28:11.8265036Z         Error: Error in create
2025-08-30T03:28:11.8265263Z         
2025-08-30T03:28:11.8265572Z           with mongodbatlas_advanced_cluster.test,
2025-08-30T03:28:11.8266188Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-30T03:28:11.8266748Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-30T03:28:11.8267039Z         
2025-08-30T03:28:11.8267475Z         cluster=test-acc-tf-c-4365599925351217867 didn't reach desired state: IDLE,
2025-08-30T03:28:11.8268062Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-08-30T03:28:11.8268469Z         'CREATING', timeout: 3h0m0s)
2025-08-30T03:28:11.8278876Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:28:11.8279632Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-30T03:28:11.8280049Z         
2025-08-30T03:28:11.8280329Z         Error: error when destroying resource
2025-08-30T03:28:11.8280599Z         
2025-08-30T03:28:11.8280914Z         error deleting project (68b24592491e0c777e9d6655):
2025-08-30T03:28:11.8281477Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b24592491e0c777e9d6655
2025-08-30T03:28:11.8281946Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-30T03:28:11.8282580Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-08-30T03:28:11.8283182Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-08-30T03:28:11.8283603Z         Params: [], BadRequestDetail: 
2025-08-30T03:28:11.8283987Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10810.21s)
```

- 2025-08-31 PASS 57 minutes
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6883954Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:49.7553773Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:49.7713391Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:49.7713970Z     resource_advanced_cluster_test.go:250: Step 1/3 error: Error running apply: exit status 1
2025-09-01T00:30:49.7714370Z         
2025-09-01T00:30:49.7714761Z         Error: error creating project: test-acc-tf-p-3600498140800190793
2025-09-01T00:30:49.7715098Z         
2025-09-01T00:30:49.7715419Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7716055Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7716645Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7716948Z         
2025-09-01T00:30:49.7717399Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7718020Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7718619Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7719215Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7719605Z         BadRequestDetail: 
2025-09-01T00:30:49.7758405Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (1.96s)
```

  - FAIL 4 seconds

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6528257Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-01T07:49:13.6708112Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-01T07:49:13.6831167Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-01T07:49:13.6831760Z     resource_advanced_cluster_test.go:250: Step 1/3 error: Error running apply: exit status 1
2025-09-01T07:49:13.6832168Z         
2025-09-01T07:49:13.6832559Z         Error: error creating project: test-acc-tf-p-837128496187862167
2025-09-01T07:49:13.6832894Z         
2025-09-01T07:49:13.6833223Z           with mongodbatlas_project.cluster_project,
2025-09-01T07:49:13.6833871Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T07:49:13.6834463Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T07:49:13.6834765Z         
2025-09-01T07:49:13.6835222Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T07:49:13.6835853Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T07:49:13.6836577Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T07:49:13.6837171Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T07:49:13.6837562Z         BadRequestDetail: 
2025-09-01T07:49:13.6844716Z    test_name=TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard test_terraform_path=/home/runner/work/_temp/e7ad265f-73c9-494a-b6ee-0ab3a82cce18/terraform
2025-09-01T07:49:13.6873999Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (4.67s)
```

  - PASS an hour
  - PASS 52 minutes
  - PASS 42 minutes
  - PASS 43 minutes
  - PASS 43 minutes
  - PASS 51 minutes
- 2025-09-02 PASS 58 minutes
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 53 minutes