# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 33) FAIL(x 6)
Success rate: 84.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:07](#error-2025-07-10t1307090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb00fd583001f9eeb40d/limits | qa | flaky_500 | 35.06s
[2025-07-11 00:29](#error-2025-07-11t0029490000) |  | dev | timeout | 10807.01s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10805.04s
[2025-07-23 08:15](#error-2025-07-23t0815220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68809a1cdafa37582cecd710/limits | qa | flaky_500 | 1262.02s
[2025-07-23 13:23](#error-2025-07-23t1323170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880e2470afa8a5c60505fd1/limits | qa | flaky_500 | 812.05s
[2025-07-27 00:33](#error-2025-07-27t0033410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573e7ea884d723491ec9a/limits | qa | flaky_500 | 1248.06s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-07-02 PASS 20 minutes
- 2025-07-03 PASS 20 minutes
- 2025-07-04 PASS 20 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 19 minutes
- 2025-07-07 PASS 19 minutes
- 2025-07-08 PASS 18 minutes
- 2025-07-09 PASS 18 minutes
- 2025-07-10
  - PASS 17 minutes
  - FAIL 35 seconds

### Error 2025-07-10T13:07:09+00:00
```
2025-07-10T13:07:09.9271379Z === RUN   TestAccCluster_WithTags
2025-07-10T13:07:09.9308048Z === CONT  TestAccCluster_WithTags
2025-07-10T13:07:45.5051554Z === NAME  TestAccCluster_WithTags
2025-07-10T13:07:45.5052439Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2025-07-10T13:07:45.5053149Z         
2025-07-10T13:07:45.5053674Z         Error: error when getting project properties after create
2025-07-10T13:07:45.5054171Z         
2025-07-10T13:07:45.5054667Z           with mongodbatlas_project.cluster_project,
2025-07-10T13:07:45.5055840Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T13:07:45.5056938Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-10T13:07:45.5057470Z         
2025-07-10T13:07:45.5058235Z         error getting project (686fbb00fd583001f9eeb40d): error getting project's
2025-07-10T13:07:45.5059056Z         limits (686fbb00fd583001f9eeb40d):
2025-07-10T13:07:45.5060438Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb00fd583001f9eeb40d/limits
2025-07-10T13:07:45.5061629Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:07:45.5062711Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:07:45.5063437Z         BadRequestDetail: 
2025-07-10T13:07:45.5539205Z --- FAIL: TestAccCluster_WithTags (35.62s)
```

- 2025-07-11

### Error 2025-07-11T00:29:49+00:00
```
2025-07-11T00:29:49.8160586Z === RUN   TestAccCluster_WithTags
2025-07-11T00:29:49.8384356Z === CONT  TestAccCluster_WithTags
2025-07-11T03:29:56.3093429Z === NAME  TestAccCluster_WithTags
2025-07-11T03:29:56.3094147Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2025-07-11T03:29:56.3094917Z         
2025-07-11T03:29:56.3095633Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:56.3096163Z         
2025-07-11T03:29:56.3096457Z           with mongodbatlas_cluster.test,
2025-07-11T03:29:56.3097038Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:29:56.3097591Z           17: 		resource "mongodbatlas_cluster" "test" {
2025-07-11T03:29:56.3097894Z         
2025-07-11T03:29:56.8895908Z === NAME  TestAccCluster_WithTags
2025-07-11T03:29:56.8896460Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T03:29:56.8896897Z         
2025-07-11T03:29:56.8897197Z         Error: error when destroying resource
2025-07-11T03:29:56.8897476Z         
2025-07-11T03:29:56.8897812Z         error deleting project (68705b004f431f68780bdb0b):
2025-07-11T03:29:56.8898378Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdb0b
2025-07-11T03:29:56.8898856Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-11T03:29:56.8899392Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-11T03:29:56.8900016Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-11T03:29:56.8900465Z         Params: [], BadRequestDetail: 
2025-07-11T03:29:56.8900774Z --- FAIL: TestAccCluster_WithTags (10807.06s)
```

- 2025-07-12 PASS 20 minutes
- 2025-07-13 PASS 21 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0074870Z === RUN   TestAccCluster_WithTags
2025-07-14T00:31:01.0442203Z === CONT  TestAccCluster_WithTags
2025-07-14T03:31:06.1627571Z === NAME  TestAccCluster_WithTags
2025-07-14T03:31:06.1628399Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2025-07-14T03:31:06.1629042Z         
2025-07-14T03:31:06.1630404Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:06.1631377Z         
2025-07-14T03:31:06.1631832Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:06.1632411Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:06.1632943Z           17: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:06.1633226Z         
2025-07-14T03:31:06.4871140Z    test_terraform_path=/home/runner/work/_temp/099fb541-3be5-4482-9e11-b7821dad0aed/terraform test_name=TestAccCluster_WithTags test_working_directory=/tmp/plugintest3614273581
2025-07-14T03:31:06.4872115Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:06.4872766Z         
2025-07-14T03:31:06.4873064Z         Error: error when destroying resource
2025-07-14T03:31:06.4873331Z         
2025-07-14T03:31:06.4873663Z         error deleting project (68744fc7d81a2d4bb4ea3b71):
2025-07-14T03:31:06.4874215Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc7d81a2d4bb4ea3b71
2025-07-14T03:31:06.4874684Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T03:31:06.4875198Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-14T03:31:06.4875791Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-14T03:31:06.4876215Z         Params: [], BadRequestDetail: 
2025-07-14T03:31:06.4876511Z --- FAIL: TestAccCluster_WithTags (10805.44s)
```

- 2025-07-15 PASS 20 minutes
- 2025-07-16 PASS 19 minutes
- 2025-07-17 PASS 17 minutes
- 2025-07-18 PASS 18 minutes
- 2025-07-19 PASS 18 minutes
- 2025-07-20 PASS 19 minutes
- 2025-07-21 PASS 18 minutes
- 2025-07-22 PASS 19 minutes
- 2025-07-23
  - PASS 19 minutes
  - FAIL 21 minutes

### Error 2025-07-23T08:15:22+00:00
```
2025-07-23T08:15:22.1384517Z === RUN   TestAccCluster_WithTags
2025-07-23T08:15:22.1572820Z === CONT  TestAccCluster_WithTags
2025-07-23T08:33:31.3706024Z === NAME  TestAccCluster_WithTags
2025-07-23T08:33:31.3706697Z     resource_cluster_test.go:697: Step 3/3 error: Error running post-apply refresh plan: exit status 1
2025-07-23T08:33:31.3707153Z         
2025-07-23T08:33:31.3707738Z         Error: error when getting project properties after create
2025-07-23T08:33:31.3708099Z         
2025-07-23T08:33:31.3708534Z           with mongodbatlas_project.cluster_project,
2025-07-23T08:33:31.3709340Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T08:33:31.3709944Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-23T08:33:31.3710246Z         
2025-07-23T08:33:31.3710670Z         error getting project (68809a1cdafa37582cecd710): error getting project's
2025-07-23T08:33:31.3711104Z         limits (68809a1cdafa37582cecd710):
2025-07-23T08:33:31.3711658Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68809a1cdafa37582cecd710/limits
2025-07-23T08:33:31.3712298Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T08:33:31.3712848Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T08:33:31.3713221Z         BadRequestDetail: 
2025-07-23T08:36:24.3914484Z --- FAIL: TestAccCluster_WithTags (1262.24s)
```

  - FAIL 13 minutes

### Error 2025-07-23T13:23:17+00:00
```
2025-07-23T13:23:17.5210480Z === RUN   TestAccCluster_WithTags
2025-07-23T13:23:17.5402090Z === CONT  TestAccCluster_WithTags
2025-07-23T13:33:58.4132211Z === NAME  TestAccCluster_WithTags
2025-07-23T13:33:58.4133039Z     resource_cluster_test.go:697: Step 2/3 error: Error running pre-apply plan: exit status 1
2025-07-23T13:33:58.4133712Z         
2025-07-23T13:33:58.4134316Z         Error: error when getting project properties after create
2025-07-23T13:33:58.4134838Z         
2025-07-23T13:33:58.4135381Z           with mongodbatlas_project.cluster_project,
2025-07-23T13:33:58.4136444Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T13:33:58.4137471Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-23T13:33:58.4137988Z         
2025-07-23T13:33:58.4138731Z         error getting project (6880e2470afa8a5c60505fd1): error getting project's
2025-07-23T13:33:58.4139470Z         limits (6880e2470afa8a5c60505fd1):
2025-07-23T13:33:58.4140553Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880e2470afa8a5c60505fd1/limits
2025-07-23T13:33:58.4141686Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T13:33:58.4142647Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T13:33:58.4143286Z         BadRequestDetail: 
2025-07-23T13:34:00.7849033Z    test_terraform_path=/home/runner/work/_temp/475bd112-0d35-4919-b664-974c634a1bcd/terraform test_working_directory=/tmp/plugintest2470577716 test_name=TestAccCluster_basic_RedactClientLogData
2025-07-23T13:36:49.9916266Z --- FAIL: TestAccCluster_WithTags (812.46s)
```

  - PASS 17 minutes
- 2025-07-24 PASS 18 minutes
- 2025-07-25 PASS 19 minutes
- 2025-07-26 PASS 21 minutes
- 2025-07-27

### Error 2025-07-27T00:33:41+00:00
```
2025-07-27T00:33:41.7741049Z === RUN   TestAccCluster_WithTags
2025-07-27T00:33:41.8099974Z === CONT  TestAccCluster_WithTags
2025-07-27T00:50:56.6700807Z === NAME  TestAccCluster_WithTags
2025-07-27T00:50:56.6701475Z     resource_cluster_test.go:697: Step 3/3 error: Error running post-apply refresh plan: exit status 1
2025-07-27T00:50:56.6702014Z         
2025-07-27T00:50:56.6702446Z         Error: error when getting project properties after create
2025-07-27T00:50:56.6702908Z         
2025-07-27T00:50:56.6703239Z           with mongodbatlas_project.cluster_project,
2025-07-27T00:50:56.6703999Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-27T00:50:56.6704611Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-27T00:50:56.6704928Z         
2025-07-27T00:50:56.6705364Z         error getting project (688573e7ea884d723491ec9a): error getting project's
2025-07-27T00:50:56.6705804Z         limits (688573e7ea884d723491ec9a):
2025-07-27T00:50:56.6706370Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573e7ea884d723491ec9a/limits
2025-07-27T00:50:56.6707197Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:50:56.6707766Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:50:56.6708155Z         BadRequestDetail: 
2025-07-27T00:54:30.3568941Z --- FAIL: TestAccCluster_WithTags (1248.56s)
```

- 2025-07-28 PASS 18 minutes
- 2025-07-29 PASS 18 minutes
- 2025-07-30 PASS 19 minutes