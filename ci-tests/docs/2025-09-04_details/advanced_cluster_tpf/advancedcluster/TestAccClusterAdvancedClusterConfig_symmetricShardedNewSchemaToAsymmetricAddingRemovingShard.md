# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:54](#error-2025-08-10t0154320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e93edacc1950586dfdfd/limits | qa | flaky_500 | 3552.02s
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da04192cd1cc58a0088/limits | qa | flaky_500 | 39.03s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.07s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 4.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS an hour
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 49 minutes
- 2025-08-09 PASS 55 minutes
- 2025-08-10

### Error 2025-08-10T01:54:32+00:00
```
2025-08-10T01:54:32.2107433Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-10T01:54:32.2153903Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-10T01:54:32.2392611Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-10T01:54:32.2393443Z     resource_advanced_cluster_test.go:863: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-08-10T01:54:32.2393904Z         
2025-08-10T01:54:32.2394278Z         Error: error when getting project properties after create
2025-08-10T01:54:32.2394610Z         
2025-08-10T01:54:32.2394945Z           with mongodbatlas_project.cluster_project,
2025-08-10T01:54:32.2395596Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-10T01:54:32.2396223Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-10T01:54:32.2396762Z         
2025-08-10T01:54:32.2397219Z         error getting project (6897e93edacc1950586dfdfd): error getting project's
2025-08-10T01:54:32.2397674Z         limits (6897e93edacc1950586dfdfd):
2025-08-10T01:54:32.2398246Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e93edacc1950586dfdfd/limits
2025-08-10T01:54:32.2398902Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:54:32.2399473Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:54:32.2399857Z         BadRequestDetail: 
2025-08-10T01:54:32.2401707Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (3552.19s)
```

- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 58 minutes
  - PASS 48 minutes
- 2025-08-13 PASS 58 minutes
- 2025-08-14 PASS an hour
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 54 minutes
- 2025-08-19 PASS 56 minutes
- 2025-08-20
  - PASS 51 minutes
  - PASS 52 minutes
- 2025-08-21 PASS 53 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS an hour
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1394279Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-24T03:34:47.1492396Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-24T03:34:47.1778986Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-24T03:34:47.1779750Z     resource_advanced_cluster_test.go:864: Step 1/4 error: Error running apply: exit status 1
2025-08-24T03:34:47.1780158Z         
2025-08-24T03:34:47.1780527Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1780843Z         
2025-08-24T03:34:47.1781175Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1781816Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1782407Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1782709Z         
2025-08-24T03:34:47.1783148Z         error getting project (68aa5da04192cd1cc58a0088): error getting project's
2025-08-24T03:34:47.1783593Z         limits (68aa5da04192cd1cc58a0088):
2025-08-24T03:34:47.1784156Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da04192cd1cc58a0088/limits
2025-08-24T03:34:47.1784808Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1785368Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1785750Z         BadRequestDetail: 
2025-08-24T03:34:47.1786288Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (39.31s)
```

- 2025-08-25 PASS an hour
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 58 minutes
- 2025-08-28 PASS 56 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 54 minutes
- 2025-08-31 PASS 52 minutes
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7274363Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-01T00:30:49.7552861Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-01T00:30:49.7591060Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-01T00:30:49.7592049Z     resource_advanced_cluster_test.go:864: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:30:49.7592460Z         
2025-09-01T00:30:49.7592855Z         Error: error creating project: test-acc-tf-p-9172795438981685228
2025-09-01T00:30:49.7593196Z         
2025-09-01T00:30:49.7593526Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7594167Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7594756Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7595061Z         
2025-09-01T00:30:49.7595516Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7596148Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7596752Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7597342Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7597742Z         BadRequestDetail: 
2025-09-01T00:30:49.7610713Z   
2025-09-01T00:30:49.7720296Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (1.74s)
```

  - FAIL 4 seconds

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6564119Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-01T07:49:13.6716484Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-01T07:49:13.6845815Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-01T07:49:13.6846576Z     resource_advanced_cluster_test.go:864: Step 1/4 error: Error running apply: exit status 1
2025-09-01T07:49:13.6846983Z         
2025-09-01T07:49:13.6847381Z         Error: error creating project: test-acc-tf-p-1676623176545940196
2025-09-01T07:49:13.6847717Z         
2025-09-01T07:49:13.6848049Z           with mongodbatlas_project.cluster_project,
2025-09-01T07:49:13.6848849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T07:49:13.6849502Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T07:49:13.6849808Z         
2025-09-01T07:49:13.6850266Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T07:49:13.6850898Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T07:49:13.6851502Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T07:49:13.6852093Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T07:49:13.6852493Z         BadRequestDetail: 
2025-09-01T07:49:13.6864130Z    test_name=TestAccClusterAdvancedCluster_withLabels test_terraform_path=/home/runner/work/_temp/e7ad265f-73c9-494a-b6ee-0ab3a82cce18/terraform
2025-09-01T07:49:13.6875503Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (4.70s)
```

  - PASS an hour
  - PASS 57 minutes
  - PASS 49 minutes
  - PASS 53 minutes
  - PASS 51 minutes
  - PASS 52 minutes
- 2025-09-02 PASS 56 minutes
- 2025-09-03 PASS an hour
- 2025-09-04 PASS an hour