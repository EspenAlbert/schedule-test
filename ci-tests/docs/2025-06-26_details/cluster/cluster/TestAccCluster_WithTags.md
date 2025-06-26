# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 19 minutes
```
2025-06-20T00:28:46.3471035Z === RUN   TestAccCluster_WithTags
2025-06-20T00:28:46.3512877Z === CONT  TestAccCluster_WithTags
2025-06-20T00:47:52.4374528Z --- PASS: TestAccCluster_WithTags (1146.09s)
```
### 2025-06-21
#### PASS 20 minutes
```
2025-06-21T00:28:37.8538471Z === RUN   TestAccCluster_WithTags
2025-06-21T00:28:37.8573505Z === CONT  TestAccCluster_WithTags
2025-06-21T00:48:44.4195460Z --- PASS: TestAccCluster_WithTags (1206.56s)
```
### 2025-06-22
#### FAIL 19 minutes
```
2025-06-22T00:31:44.8684328Z === RUN   TestAccCluster_WithTags
2025-06-22T00:31:44.8836104Z === CONT  TestAccCluster_WithTags
2025-06-22T00:48:31.2314622Z === NAME  TestAccCluster_WithTags
2025-06-22T00:48:31.2315314Z     resource_cluster_test.go:697: Step 3/3 error: Error running post-apply refresh plan: exit status 1
2025-06-22T00:48:31.2315789Z         
2025-06-22T00:48:31.2316285Z         Error: error when getting project properties after create
2025-06-22T00:48:31.2316636Z         
2025-06-22T00:48:31.2317085Z           with mongodbatlas_project.cluster_project,
2025-06-22T00:48:31.2317999Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T00:48:31.2318732Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-22T00:48:31.2319071Z         
2025-06-22T00:48:31.2319679Z         error getting project (68574ef2af7a0954e84adf82): error getting project's
2025-06-22T00:48:31.2320279Z         limits (68574ef2af7a0954e84adf82):
2025-06-22T00:48:31.2320868Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef2af7a0954e84adf82/limits
2025-06-22T00:48:31.2321536Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:48:31.2322128Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:48:31.2322537Z         BadRequestDetail: 
2025-06-22T00:51:33.5726114Z --- FAIL: TestAccCluster_WithTags (1188.69s)
```
### 2025-06-23
#### PASS 18 minutes
```
2025-06-23T00:31:00.9003054Z === RUN   TestAccCluster_WithTags
2025-06-23T00:31:00.9082117Z === CONT  TestAccCluster_WithTags
2025-06-23T00:49:33.6676238Z --- PASS: TestAccCluster_WithTags (1112.76s)
```
### 2025-06-24
#### PASS 18 minutes
```
2025-06-24T00:28:56.7758188Z === RUN   TestAccCluster_WithTags
2025-06-24T00:28:56.8113411Z === CONT  TestAccCluster_WithTags
2025-06-24T00:47:38.9275201Z --- PASS: TestAccCluster_WithTags (1122.13s)
```
### 2025-06-25
#### PASS 18 minutes
```
2025-06-25T00:29:14.3237022Z === RUN   TestAccCluster_WithTags
2025-06-25T00:29:14.3372935Z === CONT  TestAccCluster_WithTags
2025-06-25T00:47:46.8745960Z --- PASS: TestAccCluster_WithTags (1112.54s)
```
### 2025-06-26
#### PASS 18 minutes
```
2025-06-26T00:29:15.6687991Z === RUN   TestAccCluster_WithTags
2025-06-26T00:29:15.6725708Z === CONT  TestAccCluster_WithTags
2025-06-26T00:48:06.2303072Z --- PASS: TestAccCluster_WithTags (1130.56s)
```