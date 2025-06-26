# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 18 minutes
```
2025-06-20T00:28:46.3491994Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-06-20T00:28:46.3522738Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-06-20T00:47:12.5055046Z --- PASS: TestAccCluster_basic_RedactClientLogData (1106.15s)
```
### 2025-06-21
#### PASS 20 minutes
```
2025-06-21T00:28:37.8563005Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-06-21T00:28:37.8571331Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-06-21T00:48:55.9294284Z --- PASS: TestAccCluster_basic_RedactClientLogData (1218.07s)
```
### 2025-06-22
#### FAIL 17 minutes
```
2025-06-22T00:31:44.8705931Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-06-22T00:31:44.8742477Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-06-22T00:45:48.5524267Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-06-22T00:45:48.5525260Z     resource_cluster_test.go:1328: Step 4/4 error: Error running pre-apply plan: exit status 1
2025-06-22T00:45:48.5525982Z         
2025-06-22T00:45:48.5526632Z         Error: error when getting project properties after create
2025-06-22T00:45:48.5527207Z         
2025-06-22T00:45:48.5527733Z           with mongodbatlas_project.test,
2025-06-22T00:45:48.5528833Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:45:48.5529974Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:45:48.5530491Z         
2025-06-22T00:45:48.5531281Z         error getting project (68574ef3ab82446d9bfb0ae2): error getting project's
2025-06-22T00:45:48.5532066Z         limits (68574ef3ab82446d9bfb0ae2):
2025-06-22T00:45:48.5533060Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef3ab82446d9bfb0ae2/limits
2025-06-22T00:45:48.5534194Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:45:48.5535267Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:45:48.5535955Z         BadRequestDetail: 
2025-06-22T00:49:21.0110662Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1056.14s)
```
### 2025-06-23
#### PASS 17 minutes
```
2025-06-23T00:31:00.9024634Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-06-23T00:31:00.9083460Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-06-23T00:48:58.0650961Z --- PASS: TestAccCluster_basic_RedactClientLogData (1077.16s)
```
### 2025-06-24
#### PASS 18 minutes
```
2025-06-24T00:28:56.7783503Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-06-24T00:28:56.7813816Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-06-24T00:47:30.7940197Z --- PASS: TestAccCluster_basic_RedactClientLogData (1114.01s)
```
### 2025-06-25
#### PASS 16 minutes
```
2025-06-25T00:29:14.3259921Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-06-25T00:29:14.3275866Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-06-25T00:45:59.1889888Z --- PASS: TestAccCluster_basic_RedactClientLogData (1004.86s)
```
### 2025-06-26
#### PASS 19 minutes
```
2025-06-26T00:29:15.6709237Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-06-26T00:29:15.6727690Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-06-26T00:48:15.9729296Z --- PASS: TestAccCluster_basic_RedactClientLogData (1140.30s)
```