# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da09bbb8c4ee1f85999/limits | qa | flaky_500 | 38.08s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 4.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 seconds
- 2025-08-07 PASS 34 seconds
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-08-13 PASS 11 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15: MISSING
- 2025-08-16 PASS 11 seconds
- 2025-08-17 PASS 9 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22: MISSING
- 2025-08-23 PASS 10 seconds
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1399179Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-08-24T03:34:47.1478789Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-08-24T03:34:47.1756841Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-08-24T03:34:47.1757680Z     resource_advanced_cluster_test.go:922: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-08-24T03:34:47.1758186Z         
2025-08-24T03:34:47.1758833Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1759187Z         
2025-08-24T03:34:47.1759518Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1760161Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1760749Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1761052Z         
2025-08-24T03:34:47.1761496Z         error getting project (68aa5da09bbb8c4ee1f85999): error getting project's
2025-08-24T03:34:47.1761950Z         limits (68aa5da09bbb8c4ee1f85999):
2025-08-24T03:34:47.1762520Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da09bbb8c4ee1f85999/limits
2025-08-24T03:34:47.1763174Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1763731Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1764105Z         BadRequestDetail: 
2025-08-24T03:34:47.1764569Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (38.78s)
```

- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 9 seconds
- 2025-08-27 PASS 9 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29: MISSING
- 2025-08-30 PASS 10 seconds
- 2025-08-31 PASS 8 seconds
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7276805Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-01T00:30:49.7555620Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-01T00:30:49.7748157Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-01T00:30:49.7749014Z     resource_advanced_cluster_test.go:922: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-01T00:30:49.7749528Z         
2025-09-01T00:30:49.7749920Z         Error: error creating project: test-acc-tf-p-5985215507218511442
2025-09-01T00:30:49.7750255Z         
2025-09-01T00:30:49.7750578Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7751216Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7751921Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7752224Z         
2025-09-01T00:30:49.7752675Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7753307Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7753906Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7754495Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7754895Z         BadRequestDetail: 
2025-09-01T00:30:49.7757260Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (1.93s)
```

  - FAIL 4 seconds

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6568589Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-01T07:49:13.6715282Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-01T07:49:13.6801858Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-01T07:49:13.6802708Z     resource_advanced_cluster_test.go:922: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-01T07:49:13.6803227Z         
2025-09-01T07:49:13.6803621Z         Error: error creating project: test-acc-tf-p-2446139248990982469
2025-09-01T07:49:13.6803954Z         
2025-09-01T07:49:13.6804280Z           with mongodbatlas_project.cluster_project,
2025-09-01T07:49:13.6804922Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T07:49:13.6805512Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T07:49:13.6805814Z         
2025-09-01T07:49:13.6806270Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T07:49:13.6806898Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T07:49:13.6807502Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T07:49:13.6808092Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T07:49:13.6808659Z         BadRequestDetail: 
2025-09-01T07:49:13.6816221Z   
2025-09-01T07:49:13.6872402Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (4.62s)
```

  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 11 seconds
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 10 seconds