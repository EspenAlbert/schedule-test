# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 19 minutes
```
2025-07-01T08:33:37.0086190Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-01T08:33:37.0093943Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-01T08:52:41.2780882Z --- PASS: TestAccCluster_basic_RedactClientLogData (1144.27s)
```
### 2025-07-02
#### PASS 18 minutes
```
2025-07-02T00:28:55.2447602Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-02T00:28:55.2453993Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-02T00:47:01.1429177Z --- PASS: TestAccCluster_basic_RedactClientLogData (1085.90s)
```
### 2025-07-03
#### PASS 20 minutes
```
2025-07-03T00:29:32.3596396Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-03T00:29:32.3741108Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-03T00:49:51.8706861Z --- PASS: TestAccCluster_basic_RedactClientLogData (1219.50s)
```
### 2025-07-04
#### PASS 27 minutes
```
2025-07-04T00:28:53.1086322Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-04T00:28:53.1093976Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-04T00:56:42.5348707Z --- PASS: TestAccCluster_basic_RedactClientLogData (1669.43s)
```
### 2025-07-05
#### PASS 18 minutes
```
2025-07-05T00:28:09.1109994Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-05T00:28:09.1156679Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-05T00:46:26.7262257Z --- PASS: TestAccCluster_basic_RedactClientLogData (1097.61s)
```
### 2025-07-06
#### FAIL 35 seconds
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
### 2025-07-07
#### PASS 18 minutes
```
2025-07-07T00:31:36.2397339Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-07T00:31:36.2478704Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-07T00:50:07.3185644Z --- PASS: TestAccCluster_basic_RedactClientLogData (1111.08s)
```
### 2025-07-08
#### PASS 18 minutes
```
2025-07-08T00:29:14.7593142Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-08T00:29:14.7620188Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-08T00:48:00.7125927Z --- PASS: TestAccCluster_basic_RedactClientLogData (1125.95s)
```