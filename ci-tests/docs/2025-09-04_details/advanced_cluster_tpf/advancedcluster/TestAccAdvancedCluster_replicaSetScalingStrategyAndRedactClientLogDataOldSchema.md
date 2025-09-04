# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 6)
Success rate: 83.33%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:54](#error-2025-08-10t0154320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e93e39cf8e2817e407f3/limits | qa | flaky_500 | 2855.08s
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da04192cd1cc58a0023/limits | qa | flaky_500 | 38.07s
[2025-08-27 01:38](#error-2025-08-27t0138030000) |  | dev | flaky_500 | 8.07s
[2025-08-28 03:36](#error-2025-08-28t0336120000) |  | dev |  | 9.04s
[2025-08-31 01:41](#error-2025-08-31t0141270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397eb0a66c308153f2e18/limits | qa | flaky_500 | 1637.04s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 43 minutes
- 2025-08-07 PASS 58 minutes
- 2025-08-08 PASS 42 minutes
- 2025-08-09 PASS 46 minutes
- 2025-08-10

### Error 2025-08-10T01:54:32+00:00
```
2025-08-10T01:54:32.2116572Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-10T01:54:32.2155262Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-10T01:54:32.2364815Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-10T01:54:32.2365605Z     resource_advanced_cluster_test.go:1042: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-08-10T01:54:32.2366075Z         
2025-08-10T01:54:32.2366448Z         Error: error when getting project properties after create
2025-08-10T01:54:32.2367015Z         
2025-08-10T01:54:32.2367397Z           with mongodbatlas_project.cluster_project,
2025-08-10T01:54:32.2368062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-10T01:54:32.2368669Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-10T01:54:32.2368980Z         
2025-08-10T01:54:32.2369418Z         error getting project (6897e93e39cf8e2817e407f3): error getting project's
2025-08-10T01:54:32.2369868Z         limits (6897e93e39cf8e2817e407f3):
2025-08-10T01:54:32.2370436Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e93e39cf8e2817e407f3/limits
2025-08-10T01:54:32.2371097Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:54:32.2371670Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:54:32.2372055Z         BadRequestDetail: 
2025-08-10T01:54:32.2374370Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2855.81s)
```

- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 42 minutes
  - PASS 38 minutes
- 2025-08-13 PASS 50 minutes
- 2025-08-14 PASS an hour
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 53 minutes
- 2025-08-18 PASS 40 minutes
- 2025-08-19 PASS 44 minutes
- 2025-08-20
  - PASS 44 minutes
  - PASS 44 minutes
- 2025-08-21 PASS 38 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 42 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1410797Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-24T03:34:47.1493706Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-24T03:34:47.1720709Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-24T03:34:47.1721416Z     resource_advanced_cluster_test.go:1043: Step 1/4 error: Error running apply: exit status 1
2025-08-24T03:34:47.1721820Z         
2025-08-24T03:34:47.1722192Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1722508Z         
2025-08-24T03:34:47.1722833Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1723472Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1724052Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1724354Z         
2025-08-24T03:34:47.1724790Z         error getting project (68aa5da04192cd1cc58a0023): error getting project's
2025-08-24T03:34:47.1725233Z         limits (68aa5da04192cd1cc58a0023):
2025-08-24T03:34:47.1726151Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da04192cd1cc58a0023/limits
2025-08-24T03:34:47.1726845Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1727411Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1727794Z         BadRequestDetail: 
2025-08-24T03:34:47.1735506Z    test_working_directory=/tmp/plugintest754408491
2025-08-24T03:34:47.1743103Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (38.67s)
```

- 2025-08-25 PASS 46 minutes
- 2025-08-26 PASS 49 minutes
- 2025-08-27

### Error 2025-08-27T01:38:03+00:00
```
2025-08-27T01:38:03.9405795Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-27T01:38:03.9436812Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-27T01:38:03.9494924Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-27T01:38:03.9495647Z     resource_advanced_cluster_test.go:1043: Step 1/4 error: Error running apply: exit status 1
2025-08-27T01:38:03.9496052Z         
2025-08-27T01:38:03.9496320Z         Error: Error in create (legacy)
2025-08-27T01:38:03.9496577Z         
2025-08-27T01:38:03.9496890Z           with mongodbatlas_advanced_cluster.test,
2025-08-27T01:38:03.9497523Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-27T01:38:03.9498095Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-27T01:38:03.9498389Z         
2025-08-27T01:38:03.9498785Z         cluster name: test-acc-tf-c-4603397708433754767, API error details:
2025-08-27T01:38:03.9499446Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae515a8c9e474c785c6c1f/clusters
2025-08-27T01:38:03.9499947Z         POST: HTTP 403 Forbidden (Error code:
2025-08-27T01:38:03.9500551Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-27T01:38:03.9501118Z         Configuration. Contains selections that are unavailable due to your
2025-08-27T01:38:03.9501921Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-27T01:38:03.9502311Z         BadRequestDetail: 
2025-08-27T01:38:03.9514929Z    test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData test_terraform_path=/home/runner/work/_temp/69c61966-0b12-4048-a061-9679facc98a9/terraform test_working_directory=/tmp/plugintest3006602154 test_step_number=1
2025-08-27T01:38:03.9544117Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (8.66s)
```

- 2025-08-28

### Error 2025-08-28T03:36:12+00:00
```
2025-08-28T03:36:12.1395348Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-28T03:36:12.1416327Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-28T03:36:12.1490282Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-28T03:36:12.1491112Z     resource_advanced_cluster_test.go:1043: Step 1/4 error: Error running apply: exit status 1
2025-08-28T03:36:12.1491529Z         
2025-08-28T03:36:12.1491908Z         Error: Error in create (legacy)
2025-08-28T03:36:12.1492167Z         
2025-08-28T03:36:12.1492483Z           with mongodbatlas_advanced_cluster.test,
2025-08-28T03:36:12.1493242Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-28T03:36:12.1493946Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-28T03:36:12.1494347Z         
2025-08-28T03:36:12.1494767Z         cluster name: test-acc-tf-c-8809981699142947578, API error details:
2025-08-28T03:36:12.1495549Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa2efe2173c2b10942e89/clusters
2025-08-28T03:36:12.1496172Z         POST: HTTP 403 Forbidden (Error code:
2025-08-28T03:36:12.1496864Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-28T03:36:12.1497461Z         Configuration. Contains selections that are unavailable due to your
2025-08-28T03:36:12.1498160Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-28T03:36:12.1498671Z         BadRequestDetail: 
2025-08-28T03:36:12.1505273Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (9.42s)
```

- 2025-08-29: MISSING
- 2025-08-30 PASS 40 minutes
- 2025-08-31

### Error 2025-08-31T01:41:27+00:00
```
2025-08-31T01:41:27.0827179Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-31T01:41:27.0856221Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-31T01:41:27.1105361Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-31T01:41:27.1106260Z     resource_advanced_cluster_test.go:1043: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-08-31T01:41:27.1106726Z         
2025-08-31T01:41:27.1107108Z         Error: error when getting project properties after create
2025-08-31T01:41:27.1107424Z         
2025-08-31T01:41:27.1107765Z           with mongodbatlas_project.cluster_project,
2025-08-31T01:41:27.1108424Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-31T01:41:27.1109018Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-31T01:41:27.1109318Z         
2025-08-31T01:41:27.1109763Z         error getting project (68b397eb0a66c308153f2e18): error getting project's
2025-08-31T01:41:27.1110206Z         limits (68b397eb0a66c308153f2e18):
2025-08-31T01:41:27.1110769Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397eb0a66c308153f2e18/limits
2025-08-31T01:41:27.1111423Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T01:41:27.1111989Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:41:27.1112365Z         BadRequestDetail: 
2025-08-31T01:41:27.1127788Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1637.36s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7339626Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-09-01T00:30:49.7557678Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-09-01T00:30:49.7570026Z    test_terraform_path=/home/runner/work/_temp/a4685d55-a02f-41f0-96ef-d09228d8abbb/terraform test_working_directory=/tmp/plugintest1634606305
2025-09-01T00:30:49.7663841Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-09-01T00:30:49.7664554Z     resource_advanced_cluster_test.go:1043: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:30:49.7664967Z         
2025-09-01T00:30:49.7665360Z         Error: error creating project: test-acc-tf-p-1518282367370100999
2025-09-01T00:30:49.7665694Z         
2025-09-01T00:30:49.7666017Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7666656Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7667246Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7667554Z         
2025-09-01T00:30:49.7668008Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7668781Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7669536Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7670259Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7670661Z         BadRequestDetail: 
2025-09-01T00:30:49.7679492Z   
2025-09-01T00:30:49.7756566Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1.93s)
```

  - PASS an hour
  - PASS an hour
  - PASS 43 minutes
  - PASS 42 minutes
  - PASS 41 minutes
  - PASS 39 minutes
  - PASS 38 minutes
- 2025-09-02 PASS 43 minutes
- 2025-09-03 PASS 54 minutes
- 2025-09-04 PASS 42 minutes