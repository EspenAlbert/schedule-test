# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da09bbb8c4ee1f85a6a/limits | qa | flaky_500 | 37.08s
[2025-08-27 01:38](#error-2025-08-27t0138030000) |  | dev | unknown | 9.09s
[2025-08-31 01:41](#error-2025-08-31t0141270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397eb0a66c308153f2e22/limits | qa | flaky_500 | 39.09s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 4.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 28 minutes
- 2025-08-07 PASS 37 minutes
- 2025-08-08 PASS 35 minutes
- 2025-08-09 PASS 36 minutes
- 2025-08-10 PASS 55 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 28 minutes
  - PASS 16 minutes
- 2025-08-13 PASS 28 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 51 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 28 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 24 minutes
  - PASS an hour
- 2025-08-21 PASS 25 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 24 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1396861Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-08-24T03:34:47.1489933Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-08-24T03:34:47.1662664Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-08-24T03:34:47.1663449Z     resource_advanced_cluster_test.go:887: Step 1/2 error: Error running apply: exit status 1
2025-08-24T03:34:47.1663869Z         
2025-08-24T03:34:47.1664241Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1664576Z         
2025-08-24T03:34:47.1664919Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1665565Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1666156Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1666463Z         
2025-08-24T03:34:47.1666917Z         error getting project (68aa5da09bbb8c4ee1f85a6a): error getting project's
2025-08-24T03:34:47.1667369Z         limits (68aa5da09bbb8c4ee1f85a6a):
2025-08-24T03:34:47.1667939Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da09bbb8c4ee1f85a6a/limits
2025-08-24T03:34:47.1668707Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1669266Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1669645Z         BadRequestDetail: 
2025-08-24T03:34:47.1670043Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (37.75s)
```

- 2025-08-25 PASS 24 minutes
- 2025-08-26 PASS 36 minutes
- 2025-08-27

### Error 2025-08-27T01:38:03+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-27T01:38:03.939000+00:00-TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema',confidence=1.0,ts_when='8 days ago')

```
2025-08-27T01:38:03.9398384Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-08-27T01:38:03.9443107Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-08-27T01:38:03.9583454Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-08-27T01:38:03.9584069Z     resource_advanced_cluster_test.go:887: Step 1/2 error: Error running apply: exit status 1
2025-08-27T01:38:03.9584461Z         
2025-08-27T01:38:03.9584695Z         Error: Error in create
2025-08-27T01:38:03.9584921Z         
2025-08-27T01:38:03.9585229Z           with mongodbatlas_advanced_cluster.test,
2025-08-27T01:38:03.9585980Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-27T01:38:03.9586560Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-27T01:38:03.9586855Z         
2025-08-27T01:38:03.9587239Z         cluster name: test-acc-tf-c-628928597506752993, API error details:
2025-08-27T01:38:03.9587892Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae515aaa49ce49aab936bc/clusters
2025-08-27T01:38:03.9588392Z         POST: HTTP 403 Forbidden (Error code:
2025-08-27T01:38:03.9588866Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-27T01:38:03.9589433Z         Configuration. Contains selections that are unavailable due to your
2025-08-27T01:38:03.9590069Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-27T01:38:03.9590596Z         BadRequestDetail: 
2025-08-27T01:38:03.9592001Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (9.90s)
```

- 2025-08-28 PASS 23 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 24 minutes
- 2025-08-31

### Error 2025-08-31T01:41:27+00:00
```
2025-08-31T01:41:27.0819592Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-08-31T01:41:27.0854172Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-08-31T01:41:27.0976730Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-08-31T01:41:27.0977398Z     resource_advanced_cluster_test.go:887: Step 1/2 error: Error running apply: exit status 1
2025-08-31T01:41:27.0977805Z         
2025-08-31T01:41:27.0978177Z         Error: error when getting project properties after create
2025-08-31T01:41:27.0978493Z         
2025-08-31T01:41:27.0978827Z           with mongodbatlas_project.cluster_project,
2025-08-31T01:41:27.0979614Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-31T01:41:27.0980211Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-31T01:41:27.0980510Z         
2025-08-31T01:41:27.0980941Z         error getting project (68b397eb0a66c308153f2e22): error getting project's
2025-08-31T01:41:27.0981384Z         limits (68b397eb0a66c308153f2e22):
2025-08-31T01:41:27.0981946Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397eb0a66c308153f2e22/limits
2025-08-31T01:41:27.0982601Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T01:41:27.0983164Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:41:27.0983536Z         BadRequestDetail: 
2025-08-31T01:41:27.0983933Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (39.85s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7275742Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-01T00:30:49.7556188Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-01T00:30:49.7679808Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-01T00:30:49.7680574Z     resource_advanced_cluster_test.go:887: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:30:49.7680977Z         
2025-09-01T00:30:49.7681654Z         Error: error creating project: test-acc-tf-p-2622184931511913826
2025-09-01T00:30:49.7682007Z         
2025-09-01T00:30:49.7682337Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7682986Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7683584Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7683896Z         
2025-09-01T00:30:49.7684363Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7684995Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7685741Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7686362Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7686761Z         BadRequestDetail: 
2025-09-01T00:30:49.7698941Z   
2025-09-01T00:30:49.7757886Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1.95s)
```

  - FAIL 4 seconds

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6566656Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-01T07:49:13.6715852Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-01T07:49:13.6782047Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-01T07:49:13.6782692Z     resource_advanced_cluster_test.go:887: Step 1/2 error: Error running apply: exit status 1
2025-09-01T07:49:13.6783237Z         
2025-09-01T07:49:13.6783637Z         Error: error creating project: test-acc-tf-p-1026675984985550022
2025-09-01T07:49:13.6783975Z         
2025-09-01T07:49:13.6784304Z           with mongodbatlas_project.cluster_project,
2025-09-01T07:49:13.6784952Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T07:49:13.6785694Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T07:49:13.6786017Z         
2025-09-01T07:49:13.6786477Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T07:49:13.6787108Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T07:49:13.6787712Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T07:49:13.6788300Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T07:49:13.6788845Z         BadRequestDetail: 
2025-09-01T07:49:13.6801199Z    test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-09-01T07:49:13.6874608Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (4.68s)
```

  - PASS an hour
  - PASS 30 minutes
  - PASS 32 minutes
  - PASS 35 minutes
  - PASS 24 minutes
  - PASS 23 minutes
- 2025-09-02 PASS 29 minutes
- 2025-09-03 PASS 31 minutes
- 2025-09-04 PASS 20 minutes