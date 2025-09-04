# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:54](#error-2025-08-10t0154320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e93edacc1950586dfd8d/limits | qa | flaky_500 | 2592.00s
[2025-08-17 01:54](#error-2025-08-17t0154470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a12353aafa9a76ca8c036f/limits | qa | flaky_500 | 2888.03s
[2025-08-20 15:21](#error-2025-08-20t1521230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d512f98188003c99d106/limits | qa | flaky_500 | 2091.06s
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da04192cd1cc58a0022/limits | qa | flaky_500 | 37.04s
[2025-08-27 01:38](#error-2025-08-27t0138030000) |  | dev | unknown | 9.01s
[2025-08-31 01:41](#error-2025-08-31t0141270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397ec7e07f9709daeffaf/limits | qa | flaky_500 | 38.06s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.06s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 4.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 37 minutes
- 2025-08-07 PASS 55 minutes
- 2025-08-08 PASS 35 minutes
- 2025-08-09 PASS 38 minutes
- 2025-08-10

### Error 2025-08-10T01:54:32+00:00
```
2025-08-10T01:54:32.2115387Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-10T01:54:32.2156039Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-10T01:54:32.2335696Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-10T01:54:32.2336459Z     resource_advanced_cluster_test.go:1009: Step 4/5 error: Error running post-apply refresh plan: exit status 1
2025-08-10T01:54:32.2337052Z         
2025-08-10T01:54:32.2337437Z         Error: error when getting project properties after create
2025-08-10T01:54:32.2337762Z         
2025-08-10T01:54:32.2338103Z           with mongodbatlas_project.cluster_project,
2025-08-10T01:54:32.2338772Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-10T01:54:32.2339405Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-10T01:54:32.2339723Z         
2025-08-10T01:54:32.2340166Z         error getting project (6897e93edacc1950586dfd8d): error getting project's
2025-08-10T01:54:32.2340637Z         limits (6897e93edacc1950586dfd8d):
2025-08-10T01:54:32.2341221Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e93edacc1950586dfd8d/limits
2025-08-10T01:54:32.2341888Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:54:32.2342470Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:54:32.2342857Z         BadRequestDetail: 
2025-08-10T01:54:32.2351154Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2592.00s)
```

- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 35 minutes
  - PASS 32 minutes
- 2025-08-13 PASS 37 minutes
- 2025-08-14 PASS 40 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17

### Error 2025-08-17T01:54:47+00:00
```
2025-08-17T01:54:47.5324982Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-17T01:54:47.5367324Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-17T01:54:47.5583345Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-17T01:54:47.5584319Z     resource_advanced_cluster_test.go:1009: Step 4/5 error: Error running pre-apply plan: exit status 1
2025-08-17T01:54:47.5584775Z         
2025-08-17T01:54:47.5585152Z         Error: error when getting project properties after create
2025-08-17T01:54:47.5585470Z         
2025-08-17T01:54:47.5585795Z           with mongodbatlas_project.cluster_project,
2025-08-17T01:54:47.5586437Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-17T01:54:47.5587023Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-17T01:54:47.5587331Z         
2025-08-17T01:54:47.5587767Z         error getting project (68a12353aafa9a76ca8c036f): error getting project's
2025-08-17T01:54:47.5588341Z         limits (68a12353aafa9a76ca8c036f):
2025-08-17T01:54:47.5588899Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a12353aafa9a76ca8c036f/limits
2025-08-17T01:54:47.5589679Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:54:47.5590236Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:54:47.5590609Z         BadRequestDetail: 
2025-08-17T01:54:47.5605699Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2888.32s)
```

- 2025-08-18 PASS 37 minutes
- 2025-08-19 PASS 40 minutes
- 2025-08-20
  - PASS 35 minutes
  - FAIL 34 minutes

### Error 2025-08-20T15:21:23+00:00
```
2025-08-20T15:21:23.7977257Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-20T15:21:23.8019676Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-20T15:21:23.8311017Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-20T15:21:23.8311964Z     resource_advanced_cluster_test.go:1009: Step 3/5 error: Error running post-apply refresh plan: exit status 1
2025-08-20T15:21:23.8312446Z         
2025-08-20T15:21:23.8312824Z         Error: error when getting project properties after create
2025-08-20T15:21:23.8313190Z         
2025-08-20T15:21:23.8313692Z           with mongodbatlas_project.cluster_project,
2025-08-20T15:21:23.8314376Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-20T15:21:23.8314984Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-20T15:21:23.8315292Z         
2025-08-20T15:21:23.8315732Z         error getting project (68a5d512f98188003c99d106): error getting project's
2025-08-20T15:21:23.8316176Z         limits (68a5d512f98188003c99d106):
2025-08-20T15:21:23.8316743Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d512f98188003c99d106/limits
2025-08-20T15:21:23.8317414Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T15:21:23.8318142Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T15:21:23.8318533Z         BadRequestDetail: 
2025-08-20T15:21:23.8319632Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2091.57s)
```

- 2025-08-21 PASS 36 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 39 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1408576Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-24T03:34:47.1494816Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-24T03:34:47.1572301Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-24T03:34:47.1572958Z     resource_advanced_cluster_test.go:1010: Step 1/5 error: Error running apply: exit status 1
2025-08-24T03:34:47.1573378Z         
2025-08-24T03:34:47.1573739Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1574052Z         
2025-08-24T03:34:47.1574382Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1575021Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1575606Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1575907Z         
2025-08-24T03:34:47.1576337Z         error getting project (68aa5da04192cd1cc58a0022): error getting project's
2025-08-24T03:34:47.1576776Z         limits (68aa5da04192cd1cc58a0022):
2025-08-24T03:34:47.1577333Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da04192cd1cc58a0022/limits
2025-08-24T03:34:47.1577977Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1578718Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1579102Z         BadRequestDetail: 
2025-08-24T03:34:47.1584445Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (37.36s)
```

- 2025-08-25 PASS 35 minutes
- 2025-08-26 PASS 53 minutes
- 2025-08-27

### Error 2025-08-27T01:38:03+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-27T01:38:03.940000+00:00-TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData',confidence=1.0,ts_when='8 days ago')

```
2025-08-27T01:38:03.9404653Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-27T01:38:03.9437524Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-27T01:38:03.9516039Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-27T01:38:03.9516706Z     resource_advanced_cluster_test.go:1010: Step 1/5 error: Error running apply: exit status 1
2025-08-27T01:38:03.9517108Z         
2025-08-27T01:38:03.9517351Z         Error: Error in create
2025-08-27T01:38:03.9517728Z         
2025-08-27T01:38:03.9518049Z           with mongodbatlas_advanced_cluster.test,
2025-08-27T01:38:03.9518678Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-27T01:38:03.9519247Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-27T01:38:03.9519543Z         
2025-08-27T01:38:03.9519935Z         cluster name: test-acc-tf-c-374107620053773045, API error details:
2025-08-27T01:38:03.9520583Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae515a8c9e474c785c6c19/clusters
2025-08-27T01:38:03.9521083Z         POST: HTTP 403 Forbidden (Error code:
2025-08-27T01:38:03.9521795Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-27T01:38:03.9522380Z         Configuration. Contains selections that are unavailable due to your
2025-08-27T01:38:03.9522950Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-27T01:38:03.9523345Z         BadRequestDetail: 
2025-08-27T01:38:03.9535687Z    test_name=TestAccClusterAdvancedCluster_withLabels test_working_directory=/tmp/plugintest87751105 test_terraform_path=/home/runner/work/_temp/69c61966-0b12-4048-a061-9679facc98a9/terraform test_step_number=1
2025-08-27T01:38:03.9544779Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (9.05s)
```

- 2025-08-28 PASS 36 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 35 minutes
- 2025-08-31

### Error 2025-08-31T01:41:27+00:00
```
2025-08-31T01:41:27.0825758Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-31T01:41:27.0856833Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-31T01:41:27.0920873Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-31T01:41:27.0921545Z     resource_advanced_cluster_test.go:1010: Step 1/5 error: Error running apply: exit status 1
2025-08-31T01:41:27.0921954Z         
2025-08-31T01:41:27.0922325Z         Error: error when getting project properties after create
2025-08-31T01:41:27.0922638Z         
2025-08-31T01:41:27.0922975Z           with mongodbatlas_project.cluster_project,
2025-08-31T01:41:27.0923629Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-31T01:41:27.0924223Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-31T01:41:27.0924526Z         
2025-08-31T01:41:27.0924961Z         error getting project (68b397ec7e07f9709daeffaf): error getting project's
2025-08-31T01:41:27.0925404Z         limits (68b397ec7e07f9709daeffaf):
2025-08-31T01:41:27.0926068Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397ec7e07f9709daeffaf/limits
2025-08-31T01:41:27.0926726Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T01:41:27.0927286Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:41:27.0927661Z         BadRequestDetail: 
2025-08-31T01:41:27.0928091Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (38.59s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7338464Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-01T00:30:49.7555028Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-01T00:30:49.7570778Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-01T00:30:49.7571655Z     resource_advanced_cluster_test.go:1010: Step 1/5 error: Error running apply: exit status 1
2025-09-01T00:30:49.7572079Z         
2025-09-01T00:30:49.7572474Z         Error: error creating project: test-acc-tf-p-2040395950432659066
2025-09-01T00:30:49.7572812Z         
2025-09-01T00:30:49.7573142Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7573785Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7574382Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7574692Z         
2025-09-01T00:30:49.7575151Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7575784Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7576390Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7576985Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7577384Z         BadRequestDetail: 
2025-09-01T00:30:49.7577813Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1.62s)
```

  - FAIL 4 seconds

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6655763Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-01T07:49:13.6714146Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-01T07:49:13.6744293Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-01T07:49:13.6745095Z     resource_advanced_cluster_test.go:1010: Step 1/5 error: Error running apply: exit status 1
2025-09-01T07:49:13.6745641Z         
2025-09-01T07:49:13.6746128Z         Error: error creating project: test-acc-tf-p-9002673015261709270
2025-09-01T07:49:13.6746496Z         
2025-09-01T07:49:13.6746875Z           with mongodbatlas_project.cluster_project,
2025-09-01T07:49:13.6747588Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T07:49:13.6748310Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T07:49:13.6748913Z         
2025-09-01T07:49:13.6749503Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T07:49:13.6750213Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T07:49:13.6750890Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T07:49:13.6751602Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T07:49:13.6752122Z         BadRequestDetail: 
2025-09-01T07:49:13.6775700Z    test_terraform_path=/home/runner/work/_temp/e7ad265f-73c9-494a-b6ee-0ab3a82cce18/terraform test_step_number=1 test_working_directory=/tmp/plugintest3921544065 test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-09-01T07:49:13.6871723Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (4.58s)
```

  - PASS an hour
  - PASS 35 minutes
  - PASS 42 minutes
  - PASS 34 minutes
  - PASS 35 minutes
  - PASS 33 minutes
- 2025-09-02 PASS 37 minutes
- 2025-09-03 PASS 47 minutes
- 2025-09-04 PASS 39 minutes