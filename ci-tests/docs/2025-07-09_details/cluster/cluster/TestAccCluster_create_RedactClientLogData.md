# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 4)
Success rate: 96.55%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-01 04:51 | dev | 596.06s
2025-05-11 00:29 | qa | 0.08s
2025-06-05 00:28 | dev | 5.05s
2025-07-06 00:32 | qa | 36.05s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 16 minutes
### 2025-04-12
#### PASS 17 minutes
### 2025-04-13
#### PASS 21 minutes
### 2025-04-14
#### PASS 14 minutes
### 2025-04-15
#### PASS 16 minutes
### 2025-04-16
#### PASS 14 minutes
#### PASS 20 minutes
### 2025-04-17
#### PASS 18 minutes
### 2025-04-18
#### PASS 17 minutes
### 2025-04-19
#### PASS 16 minutes
### 2025-04-20
#### PASS 18 minutes
### 2025-04-21
#### PASS 16 minutes
### 2025-04-22
#### PASS 16 minutes
### 2025-04-23
#### PASS 14 minutes
### 2025-04-24
#### PASS 17 minutes
### 2025-04-25
#### PASS 17 minutes
### 2025-04-26
#### PASS 23 minutes
### 2025-04-27
#### PASS 18 minutes
### 2025-04-28
#### PASS 18 minutes
### 2025-04-29
#### PASS 15 minutes
### 2025-04-30
#### PASS 16 minutes
### 2025-05-01
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 16 minutes
#### FAIL 9 minutes
```
2025-05-01T04:51:59.7327613Z === RUN   TestAccCluster_create_RedactClientLogData
2025-05-01T04:51:59.7341113Z === CONT  TestAccCluster_create_RedactClientLogData
2025-05-01T05:01:55.9936279Z === NAME  TestAccCluster_create_RedactClientLogData
2025-05-01T05:01:55.9937034Z     resource_cluster_test.go:1368: Step 1/1 error: Error running apply: exit status 1
2025-05-01T05:01:55.9937748Z         
2025-05-01T05:01:55.9938739Z         Error: error updating MongoDB Cluster (test-acc-tf-c-2334895300013309413): (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-01T05:01:55.9939492Z         
2025-05-01T05:01:55.9939799Z           with mongodbatlas_cluster.test,
2025-05-01T05:01:55.9940487Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2025-05-01T05:01:55.9941144Z           17: 		resource "mongodbatlas_cluster" "test" {
2025-05-01T05:01:55.9941451Z         
2025-05-01T05:01:56.3102808Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T05:01:56.3103235Z         
2025-05-01T05:01:56.3103527Z         Error: error when destroying resource
2025-05-01T05:01:56.3103805Z         
2025-05-01T05:01:56.3104137Z         error deleting project (6812fdf113d6b32170fea56e):
2025-05-01T05:01:56.3104715Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812fdf113d6b32170fea56e
2025-05-01T05:01:56.3105199Z         DELETE: HTTP 409 Conflict (Error code:
2025-05-01T05:01:56.3105739Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-05-01T05:01:56.3106357Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-05-01T05:01:56.3106795Z         Params: [], BadRequestDetail: 
2025-05-01T05:01:56.3107140Z --- FAIL: TestAccCluster_create_RedactClientLogData (596.58s)
```
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 14 minutes
### 2025-05-02
#### PASS 16 minutes
### 2025-05-03
#### PASS 16 minutes
### 2025-05-04
#### PASS 15 minutes
### 2025-05-05
#### PASS 16 minutes
### 2025-05-06
#### PASS 16 minutes
### 2025-05-07
#### PASS 14 minutes
### 2025-05-08
#### PASS 18 minutes
### 2025-05-09
#### PASS 17 minutes
### 2025-05-10
#### PASS 17 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:40.4131801Z === RUN   TestAccCluster_create_RedactClientLogData
2025-05-11T00:29:40.4135311Z === CONT  TestAccCluster_create_RedactClientLogData
2025-05-11T00:29:41.1273485Z === NAME  TestAccCluster_create_RedactClientLogData
2025-05-11T00:29:41.1274454Z     resource_cluster_test.go:1368: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:41.1275359Z         
2025-05-11T00:29:41.1276069Z         Error: error creating project: test-acc-tf-p-1242522718810588380
2025-05-11T00:29:41.1276955Z         
2025-05-11T00:29:41.1277481Z           with mongodbatlas_project.test,
2025-05-11T00:29:41.1278704Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:41.1279893Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:41.1280428Z         
2025-05-11T00:29:41.1281891Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:41.1282837Z         type
2025-05-11T00:29:41.2115100Z --- FAIL: TestAccCluster_create_RedactClientLogData (0.80s)
```
### 2025-05-12
#### PASS 16 minutes
### 2025-05-13
#### PASS 16 minutes
#### PASS 16 minutes
### 2025-05-14
#### PASS 16 minutes
### 2025-05-15
#### PASS 16 minutes
### 2025-05-16
#### PASS 17 minutes
### 2025-05-17
#### PASS 16 minutes
### 2025-05-18
#### PASS 17 minutes
### 2025-05-19
#### PASS 17 minutes
### 2025-05-20
#### PASS 17 minutes
### 2025-05-21
#### PASS 16 minutes
### 2025-05-22
#### PASS 20 minutes
### 2025-05-23
#### PASS 16 minutes
### 2025-05-24
#### PASS 16 minutes
### 2025-05-25
#### PASS 18 minutes
### 2025-05-26
#### PASS 16 minutes
### 2025-05-27
#### PASS 17 minutes
### 2025-05-28
#### PASS 19 minutes
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 17 minutes
### 2025-05-29
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-05-30
#### PASS 15 minutes
#### PASS 14 minutes
### 2025-05-31
#### PASS 15 minutes
### 2025-06-01
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-06-02
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 16 minutes
### 2025-06-03
#### PASS 15 minutes
### 2025-06-04
#### PASS 18 minutes
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:28:48.8419602Z === RUN   TestAccCluster_create_RedactClientLogData
2025-06-05T00:28:48.8429163Z === CONT  TestAccCluster_create_RedactClientLogData
2025-06-05T00:28:54.3296239Z === NAME  TestAccCluster_create_RedactClientLogData
2025-06-05T00:28:54.3296940Z     resource_cluster_test.go:1368: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:28:54.3297842Z         
2025-06-05T00:28:54.3298284Z         Error: error creating project: test-acc-tf-p-5573255080657612304
2025-06-05T00:28:54.3298646Z         
2025-06-05T00:28:54.3298952Z           with mongodbatlas_project.test,
2025-06-05T00:28:54.3299558Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:54.3300114Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:54.3300412Z         
2025-06-05T00:28:54.3300892Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:54.3301711Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:54.3302399Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:54.3841705Z --- FAIL: TestAccCluster_create_RedactClientLogData (5.54s)
```
### 2025-06-06
#### PASS 17 minutes
### 2025-06-07
#### PASS 18 minutes
### 2025-06-08
#### PASS 16 minutes
### 2025-06-09
#### PASS 15 minutes
### 2025-06-10
#### PASS 24 minutes
### 2025-06-11
#### PASS 17 minutes
#### PASS 17 minutes
### 2025-06-12
#### PASS 16 minutes
### 2025-06-13
#### PASS 17 minutes
### 2025-06-14
#### PASS 16 minutes
### 2025-06-15
#### PASS 16 minutes
### 2025-06-16
#### PASS 15 minutes
### 2025-06-17
#### PASS 42 minutes
### 2025-06-18
#### PASS 15 minutes
### 2025-06-19
#### PASS 17 minutes
### 2025-06-20
#### PASS 15 minutes
### 2025-06-21
#### PASS 17 minutes
### 2025-06-22
#### PASS 15 minutes
### 2025-06-23
#### PASS 16 minutes
### 2025-06-24
#### PASS 16 minutes
### 2025-06-25
#### PASS 15 minutes
### 2025-06-26
#### PASS 15 minutes
### 2025-06-27
#### PASS 15 minutes
### 2025-06-28
#### PASS 14 minutes
### 2025-06-29
#### PASS 18 minutes
### 2025-06-30
#### PASS 14 minutes
### 2025-07-01
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-07-02
#### PASS 16 minutes
### 2025-07-03
#### PASS 17 minutes
### 2025-07-04
#### PASS 16 minutes
### 2025-07-05
#### PASS 14 minutes
### 2025-07-06
#### FAIL 36 seconds
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
### 2025-07-07
#### PASS 14 minutes
### 2025-07-08
#### PASS 15 minutes
### 2025-07-09
#### PASS 15 minutes