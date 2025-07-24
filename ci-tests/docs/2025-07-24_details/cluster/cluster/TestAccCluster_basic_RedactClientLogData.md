# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 39 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 5)
Success rate: 87.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:32](#error-2025-07-06t0032040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4067267b5775b682ef3/limits | qa | flaky_500 | 35.04s
[2025-07-10 13:07](#error-2025-07-10t1307090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb00fd583001f9eeb414/limits | qa | flaky_500 | 35.06s
[2025-07-11 00:29](#error-2025-07-11t0029490000) |  | dev | timeout | 10806.06s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10804.09s
[2025-07-23 13:23](#error-2025-07-23t1323170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880e2470afa8a5c60505ffb/limits | qa | flaky_500 | 814.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 16 minutes
- 2025-06-26 PASS 19 minutes
- 2025-06-27 PASS 18 minutes
- 2025-06-28 PASS 18 minutes
- 2025-06-29 PASS 20 minutes
- 2025-06-30 PASS 17 minutes
- 2025-07-01
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 20 minutes
- 2025-07-04 PASS 27 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06

### Error 2025-07-06T00:32:04+00:00
```
2025-07-06T00:32:04.2080161Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-06T00:32:04.2361045Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-06T00:32:39.5965241Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-07-06T00:32:39.5965960Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-07-06T00:32:39.5966528Z         
2025-07-06T00:32:39.5967146Z         Error: error when getting project properties after create
2025-07-06T00:32:39.5967663Z         
2025-07-06T00:32:39.5968068Z           with mongodbatlas_project.test,
2025-07-06T00:32:39.5968986Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:32:39.5969920Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:32:39.5970392Z         
2025-07-06T00:32:39.5971145Z         error getting project (6869c4067267b5775b682ef3): error getting project's
2025-07-06T00:32:39.5971918Z         limits (6869c4067267b5775b682ef3):
2025-07-06T00:32:39.5972902Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4067267b5775b682ef3/limits
2025-07-06T00:32:39.5974638Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:39.5975710Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:39.5976503Z         BadRequestDetail: 
2025-07-06T00:32:39.6166676Z    test_name=TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade test_terraform_path=/home/runner/work/_temp/ee2efe6e-5413-4a4c-86ff-22a83f95e688/terraform test_working_directory=/tmp/plugintest3697541764
2025-07-06T00:32:39.6520075Z --- FAIL: TestAccCluster_basic_RedactClientLogData (35.44s)
```

- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 18 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10
  - PASS 18 minutes
  - FAIL 35 seconds

### Error 2025-07-10T13:07:09+00:00
```
2025-07-10T13:07:09.9295137Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-10T13:07:09.9305823Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-10T13:07:45.4544505Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-07-10T13:07:45.4545063Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-07-10T13:07:45.4545474Z         
2025-07-10T13:07:45.4545915Z         Error: error when getting project properties after create
2025-07-10T13:07:45.4546320Z         
2025-07-10T13:07:45.4546604Z           with mongodbatlas_project.test,
2025-07-10T13:07:45.4547257Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:07:45.4548023Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:07:45.4548316Z         
2025-07-10T13:07:45.4548766Z         error getting project (686fbb00fd583001f9eeb414): error getting project's
2025-07-10T13:07:45.4549220Z         limits (686fbb00fd583001f9eeb414):
2025-07-10T13:07:45.4550161Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb00fd583001f9eeb414/limits
2025-07-10T13:07:45.4551124Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:07:45.4551707Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:07:45.4552109Z         BadRequestDetail: 
2025-07-10T13:07:45.5051098Z    test_name=TestAccCluster_WithTags
2025-07-10T13:07:45.5063965Z --- FAIL: TestAccCluster_basic_RedactClientLogData (35.58s)
```

- 2025-07-11

### Error 2025-07-11T00:29:49+00:00
```
2025-07-11T00:29:49.8183129Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-11T00:29:49.8215591Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-11T03:29:55.8832769Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-07-11T03:29:55.8833453Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-07-11T03:29:55.8834015Z         
2025-07-11T03:29:55.8835126Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:55.8835908Z         
2025-07-11T03:29:55.8836228Z           with mongodbatlas_cluster.test,
2025-07-11T03:29:55.8837279Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:29:55.8838103Z           17: 		resource "mongodbatlas_cluster" "test" {
2025-07-11T03:29:55.8838401Z         
2025-07-11T03:29:56.4436247Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-07-11T03:29:56.4436904Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T03:29:56.4437390Z         
2025-07-11T03:29:56.4437708Z         Error: error when destroying resource
2025-07-11T03:29:56.4438018Z         
2025-07-11T03:29:56.4438388Z         error deleting project (68705b004f431f68780bdb19):
2025-07-11T03:29:56.4439026Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdb19
2025-07-11T03:29:56.4439562Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-11T03:29:56.4440162Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-11T03:29:56.4440855Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-11T03:29:56.4441351Z         Params: [], BadRequestDetail: 
2025-07-11T03:29:56.4441744Z --- FAIL: TestAccCluster_basic_RedactClientLogData (10806.62s)
```

- 2025-07-12 PASS 19 minutes
- 2025-07-13 PASS 20 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0106914Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-14T00:31:01.0116595Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-14T03:31:05.6141831Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-07-14T03:31:05.6142415Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-07-14T03:31:05.6142952Z         
2025-07-14T03:31:05.6143919Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:05.6144633Z         
2025-07-14T03:31:05.6144959Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:05.6145639Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:05.6146222Z           17: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:05.6146553Z         
2025-07-14T03:31:05.9411964Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:05.9412394Z         
2025-07-14T03:31:05.9412677Z         Error: error when destroying resource
2025-07-14T03:31:05.9412941Z         
2025-07-14T03:31:05.9413263Z         error deleting project (68744fc752cba864e5f0fca7):
2025-07-14T03:31:05.9413827Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc752cba864e5f0fca7
2025-07-14T03:31:05.9414311Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T03:31:05.9414821Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-14T03:31:05.9415432Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-14T03:31:05.9415866Z         Params: [], BadRequestDetail: 
2025-07-14T03:31:05.9416216Z --- FAIL: TestAccCluster_basic_RedactClientLogData (10804.93s)
```

- 2025-07-15 PASS 20 minutes
- 2025-07-16 PASS 19 minutes
- 2025-07-17 PASS 17 minutes
- 2025-07-18 PASS 18 minutes
- 2025-07-19 PASS 19 minutes
- 2025-07-20 PASS 18 minutes
- 2025-07-21 PASS 18 minutes
- 2025-07-22 PASS 19 minutes
- 2025-07-23
  - PASS 19 minutes
  - PASS 18 minutes
  - FAIL 13 minutes

### Error 2025-07-23T13:23:17+00:00
```
2025-07-23T13:23:17.5240729Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-23T13:23:17.5353790Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-23T13:34:00.7850181Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-07-23T13:34:00.7850849Z     resource_cluster_test.go:1328: Step 2/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T13:34:00.7851297Z         
2025-07-23T13:34:00.7851672Z         Error: error when getting project properties after create
2025-07-23T13:34:00.7851988Z         
2025-07-23T13:34:00.7852270Z           with mongodbatlas_project.test,
2025-07-23T13:34:00.7852844Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-23T13:34:00.7853371Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-23T13:34:00.7853647Z         
2025-07-23T13:34:00.7854129Z         error getting project (6880e2470afa8a5c60505ffb): error getting project's
2025-07-23T13:34:00.7854836Z         limits (6880e2470afa8a5c60505ffb):
2025-07-23T13:34:00.7855397Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880e2470afa8a5c60505ffb/limits
2025-07-23T13:34:00.7856041Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T13:34:00.7856613Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T13:34:00.7856986Z         BadRequestDetail: 
2025-07-23T13:36:52.3777905Z --- FAIL: TestAccCluster_basic_RedactClientLogData (814.85s)
```

  - PASS 18 minutes
- 2025-07-24 PASS 18 minutes