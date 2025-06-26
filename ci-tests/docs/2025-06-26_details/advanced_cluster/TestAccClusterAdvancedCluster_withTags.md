# advanced_cluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 19 minutes
```
2025-06-20T01:01:44.4187723Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-06-20T01:03:39.2387203Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-06-20T01:23:35.1747884Z --- PASS: TestAccClusterAdvancedCluster_withTags (1195.94s)
```
### 2025-06-21
#### PASS 19 minutes
```
2025-06-21T01:01:50.4885360Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-06-21T01:03:06.3933496Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-06-21T01:22:34.7274492Z --- PASS: TestAccClusterAdvancedCluster_withTags (1168.33s)
```
### 2025-06-22
#### FAIL 38 seconds
```
2025-06-22T01:03:31.8037071Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-06-22T01:05:07.9338698Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-06-22T01:05:46.6654011Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-06-22T01:05:46.6654818Z     resource_advanced_cluster_test.go:664: Step 1/4 error: Error running apply: exit status 1
2025-06-22T01:05:46.6655530Z         
2025-06-22T01:05:46.6656171Z         Error: error when getting project properties after create
2025-06-22T01:05:46.6656554Z         
2025-06-22T01:05:46.6657010Z           with mongodbatlas_project.cluster_project,
2025-06-22T01:05:46.6658198Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T01:05:46.6658990Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-22T01:05:46.6659360Z         
2025-06-22T01:05:46.6659841Z         error getting project (685756c8af7a0954e84b10af): error getting project's
2025-06-22T01:05:46.6660273Z         limits (685756c8af7a0954e84b10af):
2025-06-22T01:05:46.6660819Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/685756c8af7a0954e84b10af/limits
2025-06-22T01:05:46.6661454Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T01:05:46.6662199Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T01:05:46.6662565Z         BadRequestDetail: 
2025-06-22T01:05:46.7107878Z --- FAIL: TestAccClusterAdvancedCluster_withTags (38.80s)
```
### 2025-06-23
#### PASS 14 minutes
```
2025-06-23T01:00:14.2000838Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-06-23T01:01:46.4700431Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-06-23T01:16:40.0785217Z --- PASS: TestAccClusterAdvancedCluster_withTags (893.61s)
```
### 2025-06-24
#### PASS 26 minutes
```
2025-06-24T00:59:11.9738213Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-06-24T01:00:52.0496304Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-06-24T01:26:59.0566104Z --- PASS: TestAccClusterAdvancedCluster_withTags (1567.01s)
```
### 2025-06-25
#### PASS 16 minutes
```
2025-06-25T01:09:23.3032716Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-06-25T01:10:48.9219657Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-06-25T01:26:57.6466066Z --- PASS: TestAccClusterAdvancedCluster_withTags (968.73s)
```
### 2025-06-26
#### PASS 16 minutes
```
2025-06-26T00:58:59.9260092Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-06-26T01:00:07.3642743Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-06-26T01:16:15.8103163Z --- PASS: TestAccClusterAdvancedCluster_withTags (968.45s)
```