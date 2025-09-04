# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:31](#error-2025-08-17t0031500000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68a12337f746882a383cbc24/clusters | qa |  | 9.04s
[2025-08-20 13:59](#error-2025-08-20t1359060000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4eef98188003c99c0fb/limits | qa | flaky_500 | 1695.07s
[2025-08-31 00:30](#error-2025-08-31t0030110000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397cc0a66c308153f1e93/limits | qa | flaky_500 | 1999.08s
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.02s
[2025-09-01 13:42](#error-2025-09-01t1342200000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68b5a30560c05d1e5a74ae15/clusters | dev |  | 9.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 29 minutes
- 2025-08-07 PASS 48 minutes
- 2025-08-08 PASS 26 minutes
- 2025-08-09 PASS 32 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 28 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 35 minutes
- 2025-08-14 PASS 30 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 58 minutes
- 2025-08-17

### Error 2025-08-17T00:31:50+00:00
```
2025-08-17T00:31:50.1273294Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-17T00:32:50.9028413Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-17T00:32:59.7211138Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-17T00:32:59.7211924Z     resource_advanced_cluster_test.go:1160: Step 1/8 error: Error running apply: exit status 1
2025-08-17T00:32:59.7212456Z         
2025-08-17T00:32:59.7215042Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a12337f746882a383cbc24/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-17T00:32:59.7216430Z         
2025-08-17T00:32:59.7216758Z           with mongodbatlas_advanced_cluster.test,
2025-08-17T00:32:59.7217393Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-17T00:32:59.7217968Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-17T00:32:59.7218267Z         
2025-08-17T00:33:00.0161955Z    test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/91465438-2974-45d4-8db3-efd65e97eea8/terraform
2025-08-17T00:33:00.2570727Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (9.36s)
```

- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 26 minutes
- 2025-08-20
  - PASS 29 minutes
  - FAIL 28 minutes

### Error 2025-08-20T13:59:06+00:00
```
2025-08-20T13:59:06.4715293Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-20T14:00:09.6226211Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-20T14:22:39.3068960Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-20T14:22:39.3069838Z     resource_advanced_cluster_test.go:1160: Step 6/8 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:22:39.3070411Z         
2025-08-20T14:22:39.3070799Z         Error: error when getting project properties after create
2025-08-20T14:22:39.3071347Z         
2025-08-20T14:22:39.3071648Z           with mongodbatlas_project.test,
2025-08-20T14:22:39.3072371Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-20T14:22:39.3073130Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-20T14:22:39.3073423Z         
2025-08-20T14:22:39.3073870Z         error getting project (68a5d4eef98188003c99c0fb): error getting project's
2025-08-20T14:22:39.3074322Z         limits (68a5d4eef98188003c99c0fb):
2025-08-20T14:22:39.3074898Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4eef98188003c99c0fb/limits
2025-08-20T14:22:39.3075574Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:22:39.3076144Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:22:39.3076529Z         BadRequestDetail: 
2025-08-20T14:28:25.3500618Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1695.74s)
```

- 2025-08-21 PASS 30 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 30 minutes
- 2025-08-24 PASS 21 minutes
- 2025-08-25 PASS 25 minutes
- 2025-08-26 PASS 33 minutes
- 2025-08-27 PASS 34 minutes
- 2025-08-28 PASS 30 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 28 minutes
- 2025-08-31

### Error 2025-08-31T00:30:11+00:00
```
2025-08-31T00:30:11.2128161Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-31T00:31:03.8131663Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-31T00:58:41.0624057Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-31T00:58:41.0625287Z     resource_advanced_cluster_test.go:1161: Step 6/8 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:58:41.0625878Z         
2025-08-31T00:58:41.0626397Z         Error: error when getting project properties after create
2025-08-31T00:58:41.0626729Z         
2025-08-31T00:58:41.0627164Z           with mongodbatlas_project.test,
2025-08-31T00:58:41.0628004Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-31T00:58:41.0628557Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:58:41.0628844Z         
2025-08-31T00:58:41.0629285Z         error getting project (68b397cc0a66c308153f1e93): error getting project's
2025-08-31T00:58:41.0629990Z         limits (68b397cc0a66c308153f1e93):
2025-08-31T00:58:41.0630567Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397cc0a66c308153f1e93/limits
2025-08-31T00:58:41.0631246Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:58:41.0631835Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:58:41.0632228Z         BadRequestDetail: 
2025-08-31T01:04:23.5908162Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1999.78s)
```

- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.7062209Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T00:30:44.5142916Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T00:30:46.5408826Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T00:30:46.5410099Z     resource_advanced_cluster_test.go:1161: Step 1/8 error: Error running apply: exit status 1
2025-09-01T00:30:46.5410905Z         
2025-09-01T00:30:46.5411645Z         Error: error creating project: test-acc-tf-p-5934469172222263102
2025-09-01T00:30:46.5412163Z         
2025-09-01T00:30:46.5412631Z           with mongodbatlas_project.test,
2025-09-01T00:30:46.5413709Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:30:46.5414658Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:30:46.5415342Z         
2025-09-01T00:30:46.5416177Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:46.5417340Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:46.5418467Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:46.5419582Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:46.5420316Z         BadRequestDetail: 
2025-09-01T00:30:46.5696194Z   
2025-09-01T00:30:46.7122503Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (2.21s)
```

  - PASS 35 minutes
  - PASS an hour
  - PASS 30 minutes
  - PASS 30 minutes
  - FAIL 9 seconds

### Error 2025-09-01T13:42:20+00:00
```
2025-09-01T13:42:20.3060784Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T13:43:28.2564543Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T13:43:37.2309487Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T13:43:37.2310295Z     resource_advanced_cluster_test.go:1161: Step 1/8 error: Error running apply: exit status 1
2025-09-01T13:43:37.2310728Z         
2025-09-01T13:43:37.2313238Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5a30560c05d1e5a74ae15/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-09-01T13:43:37.2315552Z         
2025-09-01T13:43:37.2315962Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T13:43:37.2316723Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T13:43:37.2317652Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T13:43:37.2317953Z         
2025-09-01T13:43:38.0004404Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (9.76s)
```

  - PASS 26 minutes
  - PASS 24 minutes
- 2025-09-02 PASS 31 minutes
- 2025-09-03 PASS 40 minutes
- 2025-09-04 PASS 34 minutes