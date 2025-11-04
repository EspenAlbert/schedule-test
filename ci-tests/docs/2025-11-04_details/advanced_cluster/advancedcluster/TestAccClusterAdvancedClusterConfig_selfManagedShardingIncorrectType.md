# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-15 00:28](#error-2025-10-15t0028300000) |  | dev | 65.08s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS a minute
- 2025-10-07 PASS a minute
- 2025-10-08 PASS 55 seconds
- 2025-10-09 PASS a minute
- 2025-10-10 PASS 15 seconds
- 2025-10-11 PASS 55 seconds
- 2025-10-12 PASS 55 seconds
- 2025-10-13 PASS a minute
- 2025-10-14 PASS 20 seconds
- 2025-10-15

### Error 2025-10-15T00:28:30+00:00
```
2025-10-15T00:28:30.5956332Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-10-15T00:30:04.4128173Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-10-15T00:31:09.3834578Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-10-15T00:31:09.3836323Z     pre_check.go:36: Time before creating cluster: 2025-10-15T00:31:09.383137314Z, ProjectID: 68eeeaabbe088e40ea2d6710, Cluster name: test-acc-tf-c-8221414728535153333
2025-10-15T00:31:10.1167925Z   
2025-10-15T00:31:10.1168483Z     resource_test.go:660: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-15T00:31:10.1168946Z         
2025-10-15T00:31:10.1169204Z         Error: Error in create
2025-10-15T00:31:10.1169446Z         
2025-10-15T00:31:10.1169770Z           with mongodbatlas_advanced_cluster.test,
2025-10-15T00:31:10.1170418Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-15T00:31:10.1171231Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-15T00:31:10.1171761Z         
2025-10-15T00:31:10.1172216Z         cluster name: test-acc-tf-c-8221414728535153333, API error details:
2025-10-15T00:31:10.1172998Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68eeeaabbe088e40ea2d6710/clusters
2025-10-15T00:31:10.1173614Z         POST: HTTP 403 Forbidden (Error code:
2025-10-15T00:31:10.1174296Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-15T00:31:10.1174910Z         Configuration. Contains selections that are unavailable due to your
2025-10-15T00:31:10.1175848Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-15T00:31:10.1176315Z         BadRequestDetail: 
2025-10-15T00:31:10.1608361Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType (65.77s)
```

- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18 PASS a minute
- 2025-10-19 PASS 5 seconds
- 2025-10-20
  - PASS 10 seconds
  - PASS a minute
- 2025-10-21 PASS 40 seconds
- 2025-10-22
  - PASS 10 seconds
  - PASS a minute
- 2025-10-23 PASS 55 seconds
- 2025-10-24 PASS a minute
- 2025-10-25 PASS 15 seconds
- 2025-10-26 PASS 40 seconds
- 2025-10-27 PASS a minute
- 2025-10-28 PASS a minute
- 2025-10-29 PASS a minute
- 2025-10-30 PASS 10 seconds
- 2025-10-31 PASS a minute
- 2025-11-01: MISSING
- 2025-11-02 PASS 10 seconds
- 2025-11-03 PASS a minute
- 2025-11-04 PASS 50 seconds