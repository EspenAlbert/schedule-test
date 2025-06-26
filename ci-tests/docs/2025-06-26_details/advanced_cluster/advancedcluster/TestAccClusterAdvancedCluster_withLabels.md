# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 18 minutes
```
2025-06-20T01:01:44.4188455Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-06-20T01:03:39.2383490Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-06-20T01:21:43.6186848Z --- PASS: TestAccClusterAdvancedCluster_withLabels (1084.38s)
```
### 2025-06-21
#### PASS 19 minutes
```
2025-06-21T01:01:50.4886110Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-06-21T01:03:06.4031504Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-06-21T01:22:35.3804690Z --- PASS: TestAccClusterAdvancedCluster_withLabels (1168.98s)
```
### 2025-06-22
#### FAIL 38 seconds
```
2025-06-22T01:03:31.8037954Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-06-22T01:05:07.9338068Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-06-22T01:05:46.0656604Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-06-22T01:05:46.0657455Z     resource_advanced_cluster_test.go:693: Step 1/4 error: Error running apply: exit status 1
2025-06-22T01:05:46.0657892Z         
2025-06-22T01:05:46.0658258Z         Error: error when getting project properties after create
2025-06-22T01:05:46.0658695Z         
2025-06-22T01:05:46.0659017Z           with mongodbatlas_project.cluster_project,
2025-06-22T01:05:46.0659652Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T01:05:46.0660541Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-22T01:05:46.0660845Z         
2025-06-22T01:05:46.0661267Z         error getting project (685756c8af7a0954e84b1144): error getting project's
2025-06-22T01:05:46.0661896Z         limits (685756c8af7a0954e84b1144):
2025-06-22T01:05:46.0662459Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/685756c8af7a0954e84b1144/limits
2025-06-22T01:05:46.0663107Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T01:05:46.0663656Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T01:05:46.0664032Z         BadRequestDetail: 
2025-06-22T01:05:46.1069635Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (38.19s)
```
### 2025-06-23
#### PASS 14 minutes
```
2025-06-23T01:00:14.2001620Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-06-23T01:01:46.4699885Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-06-23T01:16:38.9939421Z --- PASS: TestAccClusterAdvancedCluster_withLabels (892.52s)
```
### 2025-06-24
#### PASS 24 minutes
```
2025-06-24T00:59:11.9738929Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-06-24T01:00:52.0952840Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-06-24T01:25:38.2002484Z --- PASS: TestAccClusterAdvancedCluster_withLabels (1486.12s)
```
### 2025-06-25
#### PASS 17 minutes
```
2025-06-25T01:09:23.3033457Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-06-25T01:10:48.9216388Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-06-25T01:28:48.1810128Z --- PASS: TestAccClusterAdvancedCluster_withLabels (1079.27s)
```
### 2025-06-26
#### PASS 17 minutes
```
2025-06-26T00:58:59.9261550Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-06-26T01:00:07.3626028Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-06-26T01:17:54.9388376Z --- PASS: TestAccClusterAdvancedCluster_withLabels (1067.58s)
```