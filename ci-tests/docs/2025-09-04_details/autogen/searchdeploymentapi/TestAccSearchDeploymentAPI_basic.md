# autogen/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:29](#error-2025-08-10t0129480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e92cdacc1950586df019/limits | qa | flaky_500 | 3296.09s
[2025-09-01 00:32](#error-2025-09-01t0032160000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2025-09-02 01:04](#error-2025-09-02t0104200000) |  | dev | flaky_client | 323.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 47 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 44 minutes
- 2025-08-09 PASS 49 minutes
- 2025-08-10

### Error 2025-08-10T01:29:48+00:00
```
2025-08-10T01:29:48.5409291Z === RUN   TestAccSearchDeploymentAPI_basic
2025-08-10T01:29:48.5410438Z === CONT  TestAccSearchDeploymentAPI_basic
2025-08-10T01:29:48.5426032Z    test_terraform_path=/home/runner/work/_temp/675c5a4a-4caf-4158-907a-e901b7e53ec4/terraform
2025-08-10T01:29:48.5426745Z     resource_test.go:25: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2025-08-10T01:29:48.5427164Z         
2025-08-10T01:29:48.5427537Z         Error: error when getting project properties after create
2025-08-10T01:29:48.5427873Z         
2025-08-10T01:29:48.5428166Z           with mongodbatlas_project.test,
2025-08-10T01:29:48.5428744Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-08-10T01:29:48.5429269Z           13: 	resource "mongodbatlas_project" "test" {
2025-08-10T01:29:48.5429555Z         
2025-08-10T01:29:48.5429986Z         error getting project (6897e92cdacc1950586df019): error getting project's
2025-08-10T01:29:48.5430429Z         limits (6897e92cdacc1950586df019):
2025-08-10T01:29:48.5430989Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e92cdacc1950586df019/limits
2025-08-10T01:29:48.5431638Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:29:48.5432206Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:29:48.5432590Z         BadRequestDetail: 
2025-08-10T01:29:48.5432891Z --- FAIL: TestAccSearchDeploymentAPI_basic (3296.90s)
```

- 2025-08-11 PASS an hour
- 2025-08-12 PASS 46 minutes
- 2025-08-13 PASS 46 minutes
- 2025-08-14 PASS 48 minutes
- 2025-08-15 PASS 35 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 44 minutes
- 2025-08-19 PASS 52 minutes
- 2025-08-20
  - PASS 47 minutes
  - PASS 44 minutes
- 2025-08-21 PASS 41 minutes
- 2025-08-22 PASS 35 minutes
- 2025-08-23 PASS 51 minutes
- 2025-08-24 PASS 48 minutes
- 2025-08-25 PASS 42 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 49 minutes
- 2025-08-28 PASS 49 minutes
- 2025-08-29 PASS 54 minutes
- 2025-08-30 PASS 48 minutes
- 2025-08-31 PASS 43 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:32:16+00:00
```
2025-09-01T00:32:16.2647817Z === RUN   TestAccSearchDeploymentAPI_basic
2025-09-01T00:32:16.2648648Z === CONT  TestAccSearchDeploymentAPI_basic
2025-09-01T00:32:16.2662617Z    test_terraform_path=/home/runner/work/_temp/9f6e9af8-3620-47a0-894b-bb03f7546ed1/terraform test_working_directory=/tmp/plugintest2514703497
2025-09-01T00:32:16.2663439Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-09-01T00:32:16.2663815Z         
2025-09-01T00:32:16.2664247Z         Error: error creating project: test-acc-tf-p-8239833405619365762
2025-09-01T00:32:16.2664605Z         
2025-09-01T00:32:16.2664911Z           with mongodbatlas_project.test,
2025-09-01T00:32:16.2665519Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-01T00:32:16.2666078Z           13: 	resource "mongodbatlas_project" "test" {
2025-09-01T00:32:16.2666387Z         
2025-09-01T00:32:16.2666871Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:32:16.2667515Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:32:16.2668131Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:32:16.2668740Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:32:16.2669155Z         BadRequestDetail: 
2025-09-01T00:32:16.2669467Z --- FAIL: TestAccSearchDeploymentAPI_basic (0.58s)
```

  - PASS an hour
  - PASS an hour
  - PASS 43 minutes
  - PASS 39 minutes
  - PASS 42 minutes
  - PASS 42 minutes
  - PASS 44 minutes
- 2025-09-02

### Error 2025-09-02T01:04:20+00:00
```
2025-09-02T01:04:20.0726735Z === RUN   TestAccSearchDeploymentAPI_basic
2025-09-02T01:04:20.0727407Z === CONT  TestAccSearchDeploymentAPI_basic
2025-09-02T01:04:20.0738140Z   
2025-09-02T01:04:20.0738552Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-09-02T01:04:20.0738911Z         
2025-09-02T01:04:20.0740133Z         Error: error creating advanced cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b63a83b3a1cd7a1662b2ff/clusters/test-acc-tf-c-1594921350327496376": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-09-02T01:04:20.0741002Z         
2025-09-02T01:04:20.0741597Z           with mongodbatlas_advanced_cluster.test,
2025-09-02T01:04:20.0742330Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-02T01:04:20.0742924Z           17: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-02T01:04:20.0743767Z         
2025-09-02T01:04:20.0755256Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-02T01:04:20.0755702Z         
2025-09-02T01:04:20.0755990Z         Error: error when destroying resource
2025-09-02T01:04:20.0756262Z         
2025-09-02T01:04:20.0756633Z         error deleting project (68b63a83b3a1cd7a1662b2ff):
2025-09-02T01:04:20.0757303Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b63a83b3a1cd7a1662b2ff
2025-09-02T01:04:20.0757793Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-02T01:04:20.0758322Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-09-02T01:04:20.0758934Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-09-02T01:04:20.0759373Z         Params: [], BadRequestDetail: 
2025-09-02T01:04:20.0759697Z --- FAIL: TestAccSearchDeploymentAPI_basic (323.33s)
```

- 2025-09-03 PASS an hour
- 2025-09-04 PASS 52 minutes