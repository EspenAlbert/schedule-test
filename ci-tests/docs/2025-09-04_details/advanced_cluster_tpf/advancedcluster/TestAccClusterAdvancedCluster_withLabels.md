# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 7)
Success rate: 80.56%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:54](#error-2025-08-10t0154320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e93e39cf8e2817e4096b/limits | qa | flaky_500 | 1655.01s
[2025-08-17 01:54](#error-2025-08-17t0154470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a12353f746882a383ccd62/limits | qa | flaky_500 | 2408.01s
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da09bbb8c4ee1f859cd/limits | qa | flaky_500 | 38.02s
[2025-08-27 01:38](#error-2025-08-27t0138030000) |  | dev | unknown | 9.02s
[2025-08-31 01:41](#error-2025-08-31t0141270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397eb0a66c308153f2e19/limits | qa | flaky_500 | 39.05s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 4.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS 40 minutes
- 2025-08-08 PASS 18 minutes
- 2025-08-09 PASS 26 minutes
- 2025-08-10

### Error 2025-08-10T01:54:32+00:00
```
2025-08-10T01:54:32.2094951Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-08-10T01:54:32.2152335Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-08-10T01:54:32.2262007Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-08-10T01:54:32.2262631Z     resource_advanced_cluster_test.go:694: Step 2/4 error: Error running post-apply refresh plan: exit status 1
2025-08-10T01:54:32.2263094Z         
2025-08-10T01:54:32.2263472Z         Error: error when getting project properties after create
2025-08-10T01:54:32.2263800Z         
2025-08-10T01:54:32.2264137Z           with mongodbatlas_project.cluster_project,
2025-08-10T01:54:32.2264788Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-10T01:54:32.2265382Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-10T01:54:32.2265687Z         
2025-08-10T01:54:32.2266127Z         error getting project (6897e93e39cf8e2817e4096b): error getting project's
2025-08-10T01:54:32.2266581Z         limits (6897e93e39cf8e2817e4096b):
2025-08-10T01:54:32.2267247Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e93e39cf8e2817e4096b/limits
2025-08-10T01:54:32.2267907Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:54:32.2268477Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:54:32.2268861Z         BadRequestDetail: 
2025-08-10T01:54:32.2285584Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1655.12s)
```

- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 21 minutes
  - PASS 23 minutes
- 2025-08-13 PASS 24 minutes
- 2025-08-14 PASS 20 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 47 minutes
- 2025-08-17

### Error 2025-08-17T01:54:47+00:00
```
2025-08-17T01:54:47.5293720Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-08-17T01:54:47.5355622Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-08-17T01:54:47.5544089Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-08-17T01:54:47.5544692Z     resource_advanced_cluster_test.go:694: Step 3/4 error: Error running pre-apply plan: exit status 1
2025-08-17T01:54:47.5545142Z         
2025-08-17T01:54:47.5545530Z         Error: error when getting project properties after create
2025-08-17T01:54:47.5545849Z         
2025-08-17T01:54:47.5546178Z           with mongodbatlas_project.cluster_project,
2025-08-17T01:54:47.5546822Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-17T01:54:47.5547409Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-17T01:54:47.5547708Z         
2025-08-17T01:54:47.5548262Z         error getting project (68a12353f746882a383ccd62): error getting project's
2025-08-17T01:54:47.5548716Z         limits (68a12353f746882a383ccd62):
2025-08-17T01:54:47.5549279Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a12353f746882a383ccd62/limits
2025-08-17T01:54:47.5549929Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:54:47.5550491Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:54:47.5550872Z         BadRequestDetail: 
2025-08-17T01:54:47.5596748Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (2408.07s)
```

- 2025-08-18 PASS 22 minutes
- 2025-08-19 PASS 32 minutes
- 2025-08-20
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-08-21 PASS 21 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 30 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1375864Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-08-24T03:34:47.1500015Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-08-24T03:34:47.1683670Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-08-24T03:34:47.1684230Z     resource_advanced_cluster_test.go:695: Step 1/4 error: Error running apply: exit status 1
2025-08-24T03:34:47.1684773Z         
2025-08-24T03:34:47.1685142Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1685458Z         
2025-08-24T03:34:47.1685790Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1686561Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1687166Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1687475Z         
2025-08-24T03:34:47.1687911Z         error getting project (68aa5da09bbb8c4ee1f859cd): error getting project's
2025-08-24T03:34:47.1688480Z         limits (68aa5da09bbb8c4ee1f859cd):
2025-08-24T03:34:47.1689049Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da09bbb8c4ee1f859cd/limits
2025-08-24T03:34:47.1689716Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1690289Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1690946Z         BadRequestDetail: 
2025-08-24T03:34:47.1691264Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (38.19s)
```

- 2025-08-25 PASS 21 minutes
- 2025-08-26 PASS 35 minutes
- 2025-08-27

### Error 2025-08-27T01:38:03+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-27T01:38:03.938000+00:00-TestAccClusterAdvancedCluster_withLabels',confidence=1.0,ts_when='8 days ago')

```
2025-08-27T01:38:03.9386804Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-08-27T01:38:03.9464483Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-08-27T01:38:03.9536533Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-08-27T01:38:03.9537076Z     resource_advanced_cluster_test.go:695: Step 1/4 error: Error running apply: exit status 1
2025-08-27T01:38:03.9537569Z         
2025-08-27T01:38:03.9537806Z         Error: Error in create
2025-08-27T01:38:03.9538037Z         
2025-08-27T01:38:03.9538344Z           with mongodbatlas_advanced_cluster.test,
2025-08-27T01:38:03.9538972Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-27T01:38:03.9539554Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-27T01:38:03.9539848Z         
2025-08-27T01:38:03.9540375Z         cluster name: test-acc-tf-c-2897148636246268660, API error details:
2025-08-27T01:38:03.9541040Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae515aaa49ce49aab936af/clusters
2025-08-27T01:38:03.9541669Z         POST: HTTP 403 Forbidden (Error code:
2025-08-27T01:38:03.9542150Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-27T01:38:03.9542712Z         Configuration. Contains selections that are unavailable due to your
2025-08-27T01:38:03.9543271Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-27T01:38:03.9543653Z         BadRequestDetail: 
2025-08-27T01:38:03.9549915Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (9.15s)
```

- 2025-08-28 PASS 20 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 21 minutes
- 2025-08-31

### Error 2025-08-31T01:41:27+00:00
```
2025-08-31T01:41:27.0808165Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-08-31T01:41:27.0850014Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-08-31T01:41:27.0956039Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-08-31T01:41:27.0956603Z     resource_advanced_cluster_test.go:695: Step 1/4 error: Error running apply: exit status 1
2025-08-31T01:41:27.0957140Z         
2025-08-31T01:41:27.0957505Z         Error: error when getting project properties after create
2025-08-31T01:41:27.0957818Z         
2025-08-31T01:41:27.0958150Z           with mongodbatlas_project.cluster_project,
2025-08-31T01:41:27.0958801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-31T01:41:27.0959396Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-31T01:41:27.0959700Z         
2025-08-31T01:41:27.0960138Z         error getting project (68b397eb0a66c308153f2e19): error getting project's
2025-08-31T01:41:27.0960578Z         limits (68b397eb0a66c308153f2e19):
2025-08-31T01:41:27.0961140Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397eb0a66c308153f2e19/limits
2025-08-31T01:41:27.0961800Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T01:41:27.0962369Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:41:27.0962745Z         BadRequestDetail: 
2025-08-31T01:41:27.0963056Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (39.49s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7149996Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-09-01T00:30:49.7556615Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-09-01T00:30:49.7699174Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-09-01T00:30:49.7699723Z     resource_advanced_cluster_test.go:695: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:30:49.7700128Z         
2025-09-01T00:30:49.7700517Z         Error: error creating project: test-acc-tf-p-2286730811832020684
2025-09-01T00:30:49.7700849Z         
2025-09-01T00:30:49.7701173Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7701929Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7702528Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7702958Z         
2025-09-01T00:30:49.7703421Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7704052Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7704651Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7705261Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7705821Z         BadRequestDetail: 
2025-09-01T00:30:49.7712493Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/a4685d55-a02f-41f0-96ef-d09228d8abbb/terraform test_working_directory=/tmp/plugintest4092004598
2025-09-01T00:30:49.7756018Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1.93s)
```

  - FAIL 4 seconds

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6546232Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-09-01T07:49:13.6706955Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-09-01T07:49:13.6864781Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-09-01T07:49:13.6865333Z     resource_advanced_cluster_test.go:695: Step 1/4 error: Error running apply: exit status 1
2025-09-01T07:49:13.6865740Z         
2025-09-01T07:49:13.6866133Z         Error: error creating project: test-acc-tf-p-4286073268345167099
2025-09-01T07:49:13.6866476Z         
2025-09-01T07:49:13.6866806Z           with mongodbatlas_project.cluster_project,
2025-09-01T07:49:13.6867475Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T07:49:13.6868078Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T07:49:13.6868382Z         
2025-09-01T07:49:13.6869051Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T07:49:13.6869698Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T07:49:13.6870309Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T07:49:13.6870896Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T07:49:13.6871290Z         BadRequestDetail: 
2025-09-01T07:49:13.6873567Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (4.67s)
```

  - PASS an hour
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 22 minutes
- 2025-09-02 PASS 27 minutes
- 2025-09-03 PASS 38 minutes
- 2025-09-04 PASS 27 minutes