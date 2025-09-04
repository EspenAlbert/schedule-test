# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 13:59](#error-2025-08-20t1359040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4ee5734606989a35bc1/limits | qa | flaky_500 | 3021.05s
[2025-08-24 00:31](#error-2025-08-24t0031050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d864192cd1cc589f2b8/limits | qa | flaky_500 | 36.09s
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS an hour
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 49 minutes
- 2025-08-09 PASS 56 minutes
- 2025-08-10 PASS an hour
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 59 minutes
  - PASS 51 minutes
- 2025-08-13 PASS 57 minutes
- 2025-08-14 PASS 59 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 54 minutes
- 2025-08-19 PASS 56 minutes
- 2025-08-20
  - PASS 54 minutes
  - FAIL 50 minutes

### Error 2025-08-20T13:59:04+00:00
```
2025-08-20T13:59:04.3657361Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-20T14:00:09.7060946Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-20T14:46:59.3826885Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-20T14:46:59.3827718Z     resource_advanced_cluster_test.go:863: Step 3/4 error: Error running pre-apply plan: exit status 1
2025-08-20T14:46:59.3828165Z         
2025-08-20T14:46:59.3828551Z         Error: error when getting project properties after create
2025-08-20T14:46:59.3828886Z         
2025-08-20T14:46:59.3829226Z           with mongodbatlas_project.cluster_project,
2025-08-20T14:46:59.3829879Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-20T14:46:59.3830720Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-20T14:46:59.3831309Z         
2025-08-20T14:46:59.3831764Z         error getting project (68a5d4ee5734606989a35bc1): error getting project's
2025-08-20T14:46:59.3832210Z         limits (68a5d4ee5734606989a35bc1):
2025-08-20T14:46:59.3832778Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4ee5734606989a35bc1/limits
2025-08-20T14:46:59.3833434Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:46:59.3834010Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:46:59.3834395Z         BadRequestDetail: 
2025-08-20T14:50:31.1835353Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (3021.52s)
```

- 2025-08-21 PASS 53 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS an hour
- 2025-08-24

### Error 2025-08-24T00:31:05+00:00
```
2025-08-24T00:31:05.1721344Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-24T00:32:02.0374647Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-24T00:32:38.8653910Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-08-24T00:32:38.8654693Z     resource_advanced_cluster_test.go:864: Step 1/4 error: Error running apply: exit status 1
2025-08-24T00:32:38.8655177Z         
2025-08-24T00:32:38.8655807Z         Error: error when getting project properties after create
2025-08-24T00:32:38.8656267Z         
2025-08-24T00:32:38.8656601Z           with mongodbatlas_project.cluster_project,
2025-08-24T00:32:38.8657346Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T00:32:38.8658243Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-24T00:32:38.8658658Z         
2025-08-24T00:32:38.8659095Z         error getting project (68aa5d864192cd1cc589f2b8): error getting project's
2025-08-24T00:32:38.8659534Z         limits (68aa5d864192cd1cc589f2b8):
2025-08-24T00:32:38.8660091Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d864192cd1cc589f2b8/limits
2025-08-24T00:32:38.8660736Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:38.8661297Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:38.8661675Z         BadRequestDetail: 
2025-08-24T00:32:38.9066993Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (36.89s)
```

- 2025-08-25 PASS 52 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS an hour
- 2025-08-28 PASS 54 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 51 minutes
- 2025-08-31 PASS 54 minutes
- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.0382517Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-01T00:30:44.5140668Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-01T00:30:46.4410230Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-01T00:30:46.4411664Z     resource_advanced_cluster_test.go:864: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:30:46.4412416Z         
2025-09-01T00:30:46.4413157Z         Error: error creating project: test-acc-tf-p-7197142041610594599
2025-09-01T00:30:46.4413766Z         
2025-09-01T00:30:46.4414411Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:46.4415775Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:46.4416866Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:46.4417478Z         
2025-09-01T00:30:46.4418404Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:46.4419648Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:46.4420825Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:46.4422219Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:46.4422933Z         BadRequestDetail: 
2025-09-01T00:30:46.4456242Z    test_name=TestAccClusterAdvancedCluster_withLabelIgnored
2025-09-01T00:30:46.5986276Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (2.10s)
```

  - PASS 55 minutes
  - PASS an hour
  - PASS 54 minutes
  - PASS 56 minutes
  - PASS 51 minutes
  - PASS 48 minutes
  - PASS 53 minutes
- 2025-09-02 PASS 57 minutes
- 2025-09-03 PASS an hour
- 2025-09-04 PASS an hour