# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:29](#error-2025-09-07t0029270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd2258704811492b566b7/limits | qa | flaky_500 | 2922.01s
[2025-09-21 00:29](#error-2025-09-21t0029400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf474c5ccc8c441718cd4a/limits | qa | flaky_500 | 12.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS an hour
- 2025-09-04 PASS an hour
- 2025-09-05: MISSING
- 2025-09-06 PASS an hour
- 2025-09-07

### Error 2025-09-07T00:29:27+00:00
```
2025-09-07T00:29:27.9823830Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-07T00:30:25.1298202Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-07T01:16:05.0484841Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-07T01:16:05.0485665Z     resource_advanced_cluster_test.go:864: Step 3/4 error: Error running pre-apply plan: exit status 1
2025-09-07T01:16:05.0486221Z         
2025-09-07T01:16:05.0486612Z         Error: error when getting project properties after create
2025-09-07T01:16:05.0487351Z         
2025-09-07T01:16:05.0487847Z           with mongodbatlas_project.cluster_project,
2025-09-07T01:16:05.0488512Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-07T01:16:05.0489117Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-07T01:16:05.0489430Z         
2025-09-07T01:16:05.0489872Z         error getting project (68bcd2258704811492b566b7): error getting project's
2025-09-07T01:16:05.0490317Z         limits (68bcd2258704811492b566b7):
2025-09-07T01:16:05.0490891Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd2258704811492b566b7/limits
2025-09-07T01:16:05.0491546Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T01:16:05.0492130Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T01:16:05.0492520Z         BadRequestDetail: 
2025-09-07T01:19:07.2016752Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (2922.09s)
```

- 2025-09-08
  - PASS an hour
  - PASS 48 minutes
  - PASS an hour
- 2025-09-09 PASS 58 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 54 minutes
- 2025-09-20 PASS 59 minutes
- 2025-09-21

### Error 2025-09-21T00:29:40+00:00
```
2025-09-21T00:29:40.3777027Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-21T00:31:04.3991578Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-21T00:31:16.9671922Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-09-21T00:31:16.9673314Z     resource_test.go:703: Step 1/4 error: Error running apply: exit status 1
2025-09-21T00:31:16.9673955Z         
2025-09-21T00:31:16.9674623Z         Error: error when getting project properties after create
2025-09-21T00:31:16.9675421Z         
2025-09-21T00:31:16.9676046Z           with mongodbatlas_project.cluster_project,
2025-09-21T00:31:16.9677034Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-21T00:31:16.9677659Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-21T00:31:16.9677980Z         
2025-09-21T00:31:16.9678421Z         error getting project (68cf474c5ccc8c441718cd4a): error getting project's
2025-09-21T00:31:16.9678872Z         limits (68cf474c5ccc8c441718cd4a):
2025-09-21T00:31:16.9679446Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf474c5ccc8c441718cd4a/limits
2025-09-21T00:31:16.9680091Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:31:16.9680652Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:31:16.9681028Z         BadRequestDetail: 
2025-09-21T00:31:17.0154134Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (12.62s)
```

- 2025-09-22 PASS 53 minutes
- 2025-09-23 PASS 53 minutes
- 2025-09-24 PASS 54 minutes
- 2025-09-25 PASS 54 minutes
- 2025-09-26 PASS 55 minutes
- 2025-09-27 PASS 47 minutes
- 2025-09-28 PASS 47 minutes
- 2025-09-29
  - PASS an hour
  - PASS 44 minutes
- 2025-09-30
  - PASS 44 minutes
  - PASS 42 minutes
  - PASS 47 minutes
  - PASS 44 minutes
  - PASS 44 minutes
- 2025-10-01
  - PASS 47 minutes
  - PASS 42 minutes
  - PASS 59 minutes
  - PASS 43 minutes
  - PASS an hour
  - PASS 42 minutes
  - PASS 52 minutes
  - PASS 44 minutes
- 2025-10-02 PASS 56 minutes