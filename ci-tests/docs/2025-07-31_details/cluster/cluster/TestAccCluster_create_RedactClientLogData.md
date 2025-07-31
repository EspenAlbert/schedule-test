# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 34 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:32](#error-2025-07-06t0032040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c406690ae45e168bd090/limits | qa | flaky_500 | 36.05s
[2025-07-10 13:07](#error-2025-07-10t1307090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb00006d8d55bb9e6645/limits | qa | flaky_500 | 988.09s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10805.10s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 16 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 14 minutes
- 2025-07-06

### Error 2025-07-06T00:32:04+00:00
```
2025-07-06T00:32:04.2081290Z === RUN   TestAccCluster_create_RedactClientLogData
2025-07-06T00:32:04.2355860Z === CONT  TestAccCluster_create_RedactClientLogData
2025-07-06T00:32:40.6727659Z === NAME  TestAccCluster_create_RedactClientLogData
2025-07-06T00:32:40.6728550Z     resource_cluster_test.go:1368: Step 1/1 error: Error running apply: exit status 1
2025-07-06T00:32:40.6729112Z         
2025-07-06T00:32:40.6729674Z         Error: error when getting project properties after create
2025-07-06T00:32:40.6730230Z         
2025-07-06T00:32:40.6730729Z           with mongodbatlas_project.test,
2025-07-06T00:32:40.6731736Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:32:40.6732664Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:32:40.6733332Z         
2025-07-06T00:32:40.6734111Z         error getting project (6869c406690ae45e168bd090): error getting project's
2025-07-06T00:32:40.6734900Z         limits (6869c406690ae45e168bd090):
2025-07-06T00:32:40.6735907Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c406690ae45e168bd090/limits
2025-07-06T00:32:40.6737121Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:40.6738197Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:40.6738866Z         BadRequestDetail: 
2025-07-06T00:32:40.7210331Z --- FAIL: TestAccCluster_create_RedactClientLogData (36.51s)
```

- 2025-07-07 PASS 14 minutes
- 2025-07-08 PASS 15 minutes
- 2025-07-09 PASS 15 minutes
- 2025-07-10
  - PASS 14 minutes
  - FAIL 16 minutes

### Error 2025-07-10T13:07:09+00:00
```
2025-07-10T13:07:09.9296295Z === RUN   TestAccCluster_create_RedactClientLogData
2025-07-10T13:07:09.9303850Z === CONT  TestAccCluster_create_RedactClientLogData
2025-07-10T13:20:45.5913374Z === NAME  TestAccCluster_create_RedactClientLogData
2025-07-10T13:20:45.5914427Z     resource_cluster_test.go:1368: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:20:45.5915074Z         
2025-07-10T13:20:45.5915644Z         Error: error when getting project properties after create
2025-07-10T13:20:45.5916167Z         
2025-07-10T13:20:45.5916679Z           with mongodbatlas_project.test,
2025-07-10T13:20:45.5917705Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:20:45.5918625Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:20:45.5919105Z         
2025-07-10T13:20:45.5920361Z         error getting project (686fbb00006d8d55bb9e6645): error getting project's
2025-07-10T13:20:45.5921169Z         limits (686fbb00006d8d55bb9e6645):
2025-07-10T13:20:45.5922193Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb00006d8d55bb9e6645/limits
2025-07-10T13:20:45.5923412Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:20:45.5924479Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:20:45.5925140Z         BadRequestDetail: 
2025-07-10T13:23:38.7818825Z --- FAIL: TestAccCluster_create_RedactClientLogData (988.85s)
```

- 2025-07-11 PASS 30 minutes
- 2025-07-12 PASS 18 minutes
- 2025-07-13 PASS 17 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0108062Z === RUN   TestAccCluster_create_RedactClientLogData
2025-07-14T00:31:01.0116006Z === CONT  TestAccCluster_create_RedactClientLogData
2025-07-14T03:31:06.6542210Z === NAME  TestAccCluster_create_RedactClientLogData
2025-07-14T03:31:06.6542781Z     resource_cluster_test.go:1368: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:06.6543343Z         
2025-07-14T03:31:06.6544248Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:06.6544893Z         
2025-07-14T03:31:06.6545180Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:06.6545853Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:06.6546473Z           17: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:06.6546750Z         
2025-07-14T03:31:06.9267724Z    test_name=TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-14T03:31:06.9727647Z === NAME  TestAccCluster_create_RedactClientLogData
2025-07-14T03:31:06.9728230Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:06.9728660Z         
2025-07-14T03:31:06.9728944Z         Error: error when destroying resource
2025-07-14T03:31:06.9729217Z         
2025-07-14T03:31:06.9729808Z         error deleting project (68744fc7d81a2d4bb4ea3b6a):
2025-07-14T03:31:06.9730371Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc7d81a2d4bb4ea3b6a
2025-07-14T03:31:06.9730840Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T03:31:06.9731347Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-14T03:31:06.9731935Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-14T03:31:06.9732559Z         Params: [], BadRequestDetail: 
2025-07-14T03:31:06.9732962Z --- FAIL: TestAccCluster_create_RedactClientLogData (10805.96s)
```

- 2025-07-15 PASS 18 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 16 minutes
- 2025-07-19 PASS 17 minutes
- 2025-07-20 PASS 17 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-07-24 PASS 17 minutes
- 2025-07-25 PASS 17 minutes
- 2025-07-26 PASS 18 minutes
- 2025-07-27 PASS 16 minutes
- 2025-07-28 PASS 15 minutes
- 2025-07-29 PASS 16 minutes
- 2025-07-30 PASS 16 minutes
- 2025-07-31 PASS 20 minutes