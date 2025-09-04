# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:30](#error-2025-08-24t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d869bbb8c4ee1f84c2c/limits | qa | flaky_500 | 37.03s
[2025-08-30 00:26](#error-2025-08-30t0026300000) |  | dev | timeout | 10810.01s
[2025-08-31 00:30](#error-2025-08-31t0030020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397cc0a66c308153f1f06/limits | qa | flaky_500 | 2765.09s
[2025-09-01 00:30](#error-2025-09-01t0030410000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 55 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 48 minutes
- 2025-08-09 PASS 53 minutes
- 2025-08-10 PASS 54 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 44 minutes
  - PASS 40 minutes
- 2025-08-13 PASS an hour
- 2025-08-14 PASS 50 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 43 minutes
- 2025-08-19 PASS 53 minutes
- 2025-08-20
  - PASS 45 minutes
  - PASS 51 minutes
- 2025-08-21 PASS 45 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 53 minutes
- 2025-08-24

### Error 2025-08-24T00:30:58+00:00
```
2025-08-24T00:30:58.3530087Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-24T00:32:02.0357664Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-24T00:32:39.2277856Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-24T00:32:39.2278464Z     resource_advanced_cluster_test.go:250: Step 1/3 error: Error running apply: exit status 1
2025-08-24T00:32:39.2278992Z         
2025-08-24T00:32:39.2279367Z         Error: error when getting project properties after create
2025-08-24T00:32:39.2279699Z         
2025-08-24T00:32:39.2280031Z           with mongodbatlas_project.cluster_project,
2025-08-24T00:32:39.2281038Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T00:32:39.2282095Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-24T00:32:39.2282503Z         
2025-08-24T00:32:39.2283121Z         error getting project (68aa5d869bbb8c4ee1f84c2c): error getting project's
2025-08-24T00:32:39.2283677Z         limits (68aa5d869bbb8c4ee1f84c2c):
2025-08-24T00:32:39.2284385Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d869bbb8c4ee1f84c2c/limits
2025-08-24T00:32:39.2285048Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:39.2285607Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:39.2285977Z         BadRequestDetail: 
2025-08-24T00:32:39.2718524Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (37.26s)
```

- 2025-08-25 PASS an hour
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 56 minutes
- 2025-08-28 PASS 45 minutes
- 2025-08-29: MISSING
- 2025-08-30

### Error 2025-08-30T00:26:30+00:00
```
2025-08-30T00:26:30.1060760Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-30T00:27:35.4493611Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:27:45.1806928Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:27:45.1808001Z     resource_advanced_cluster_test.go:250: Step 1/3 error: Error running apply: exit status 1
2025-08-30T03:27:45.1808728Z         
2025-08-30T03:27:45.1809942Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-30T03:27:45.1810515Z         
2025-08-30T03:27:45.1810841Z           with mongodbatlas_advanced_cluster.test,
2025-08-30T03:27:45.1811488Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-30T03:27:45.1812475Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-30T03:27:45.1812903Z         
2025-08-30T03:27:45.5185359Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-30T03:27:45.5186447Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-30T03:27:45.5187514Z         
2025-08-30T03:27:45.5188032Z         Error: error when destroying resource
2025-08-30T03:27:45.5188502Z         
2025-08-30T03:27:45.5189083Z         error deleting project (68b2457b491e0c777e9d24c9):
2025-08-30T03:27:45.5190090Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b2457b491e0c777e9d24c9
2025-08-30T03:27:45.5190928Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-30T03:27:45.5191870Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-08-30T03:27:45.5192785Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-08-30T03:27:45.5193430Z         Params: [], BadRequestDetail: 
2025-08-30T03:27:45.5194125Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10810.08s)
```

- 2025-08-31

### Error 2025-08-31T00:30:02+00:00
```
2025-08-31T00:30:02.2544945Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-31T00:31:03.8365607Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-31T01:13:37.8873344Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-08-31T01:13:37.8874553Z     resource_advanced_cluster_test.go:250: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2025-08-31T01:13:37.8875381Z         
2025-08-31T01:13:37.8876035Z         Error: error when getting project properties after create
2025-08-31T01:13:37.8876588Z         
2025-08-31T01:13:37.8877064Z           with mongodbatlas_project.cluster_project,
2025-08-31T01:13:37.8878190Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-31T01:13:37.8879274Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-31T01:13:37.8880010Z         
2025-08-31T01:13:37.8880797Z         error getting project (68b397cc0a66c308153f1f06): error getting project's
2025-08-31T01:13:37.8881613Z         limits (68b397cc0a66c308153f1f06):
2025-08-31T01:13:37.8882646Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397cc0a66c308153f1f06/limits
2025-08-31T01:13:37.8883889Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T01:13:37.8884957Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:13:37.8885753Z         BadRequestDetail: 
2025-08-31T01:17:09.7786348Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (2765.95s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:41+00:00
```
2025-09-01T00:30:41.7231949Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:44.5147943Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:46.2447283Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-09-01T00:30:46.2448402Z     resource_advanced_cluster_test.go:250: Step 1/3 error: Error running apply: exit status 1
2025-09-01T00:30:46.2449183Z         
2025-09-01T00:30:46.2449964Z         Error: error creating project: test-acc-tf-p-6542116362992830527
2025-09-01T00:30:46.2450595Z         
2025-09-01T00:30:46.2451220Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:46.2452473Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:46.2453620Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:46.2454190Z         
2025-09-01T00:30:46.2455082Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:46.2481998Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:46.2483145Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:46.2484289Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:46.2485016Z         BadRequestDetail: 
2025-09-01T00:30:46.4041221Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (1.91s)
```

  - PASS 48 minutes
  - PASS an hour
  - PASS 46 minutes
  - PASS 45 minutes
  - PASS 44 minutes
  - PASS 48 minutes
  - PASS 50 minutes
- 2025-09-02 PASS 56 minutes
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 55 minutes