# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
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