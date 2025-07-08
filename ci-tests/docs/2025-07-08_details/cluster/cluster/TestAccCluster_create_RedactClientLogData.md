# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 15 minutes
```
2025-07-01T08:33:37.0087451Z === RUN   TestAccCluster_create_RedactClientLogData
2025-07-01T08:33:37.0092789Z === CONT  TestAccCluster_create_RedactClientLogData
2025-07-01T08:49:07.9029225Z --- PASS: TestAccCluster_create_RedactClientLogData (930.90s)
```
### 2025-07-02
#### PASS 16 minutes
```
2025-07-02T00:28:55.2448837Z === RUN   TestAccCluster_create_RedactClientLogData
2025-07-02T00:28:55.2452482Z === CONT  TestAccCluster_create_RedactClientLogData
2025-07-02T00:45:38.1234274Z --- PASS: TestAccCluster_create_RedactClientLogData (1002.88s)
```
### 2025-07-03
#### PASS 17 minutes
```
2025-07-03T00:29:32.3597512Z === RUN   TestAccCluster_create_RedactClientLogData
2025-07-03T00:29:32.3739305Z === CONT  TestAccCluster_create_RedactClientLogData
2025-07-03T00:46:56.0063683Z --- PASS: TestAccCluster_create_RedactClientLogData (1043.63s)
```
### 2025-07-04
#### PASS 16 minutes
```
2025-07-04T00:28:53.1087518Z === RUN   TestAccCluster_create_RedactClientLogData
2025-07-04T00:28:53.1092141Z === CONT  TestAccCluster_create_RedactClientLogData
2025-07-04T00:44:54.9593139Z --- PASS: TestAccCluster_create_RedactClientLogData (961.85s)
```
### 2025-07-05
#### PASS 14 minutes
```
2025-07-05T00:28:09.1111542Z === RUN   TestAccCluster_create_RedactClientLogData
2025-07-05T00:28:09.1116692Z === CONT  TestAccCluster_create_RedactClientLogData
2025-07-05T00:42:54.5417293Z --- PASS: TestAccCluster_create_RedactClientLogData (885.44s)
```
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
```
2025-07-07T00:31:36.2398478Z === RUN   TestAccCluster_create_RedactClientLogData
2025-07-07T00:31:36.2480037Z === CONT  TestAccCluster_create_RedactClientLogData
2025-07-07T00:45:55.1502677Z --- PASS: TestAccCluster_create_RedactClientLogData (858.91s)
```
### 2025-07-08
#### PASS 15 minutes
```
2025-07-08T00:29:14.7594230Z === RUN   TestAccCluster_create_RedactClientLogData
2025-07-08T00:29:14.7610417Z === CONT  TestAccCluster_create_RedactClientLogData
2025-07-08T00:44:39.6623456Z --- PASS: TestAccCluster_create_RedactClientLogData (924.90s)
```