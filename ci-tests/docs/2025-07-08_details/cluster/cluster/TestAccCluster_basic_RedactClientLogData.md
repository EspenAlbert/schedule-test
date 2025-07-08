# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 18 minutes
### 2025-07-03
#### PASS 20 minutes
### 2025-07-04
#### PASS 27 minutes
### 2025-07-05
#### PASS 18 minutes
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
### 2025-07-08
#### PASS 18 minutes