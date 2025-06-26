# advanced_cluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 8 seconds
```
2025-06-20T01:01:44.4189165Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-20T01:03:39.2582226Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-20T01:03:47.6920294Z --- PASS: TestAccClusterAdvancedCluster_withLabelIgnored (8.44s)
```
### 2025-06-21
#### PASS 7 seconds
```
2025-06-21T01:01:50.4886823Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-21T01:03:06.4024849Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-21T01:03:13.5859366Z --- PASS: TestAccClusterAdvancedCluster_withLabelIgnored (7.19s)
```
### 2025-06-22
#### FAIL 36 seconds
```
2025-06-22T01:03:31.8038818Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-22T01:05:07.8951308Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-22T01:05:44.6981364Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-22T01:05:44.6982481Z     resource_advanced_cluster_test.go:721: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-22T01:05:44.6983117Z         
2025-06-22T01:05:44.6983557Z         Error: error when getting project properties after create
2025-06-22T01:05:44.6983910Z         
2025-06-22T01:05:44.6984243Z           with mongodbatlas_project.cluster_project,
2025-06-22T01:05:44.6984974Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T01:05:44.6985759Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-22T01:05:44.6986186Z         
2025-06-22T01:05:44.6986620Z         error getting project (685756c8ab82446d9bfb3789): error getting project's
2025-06-22T01:05:44.6987157Z         limits (685756c8ab82446d9bfb3789):
2025-06-22T01:05:44.6987709Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/685756c8ab82446d9bfb3789/limits
2025-06-22T01:05:44.6988344Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T01:05:44.6988891Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T01:05:44.6989266Z         BadRequestDetail: 
2025-06-22T01:05:44.7430495Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (36.85s)
```
### 2025-06-23
#### PASS 8 seconds
```
2025-06-23T01:00:14.2002337Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-23T01:01:46.5291473Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-23T01:01:54.5982050Z --- PASS: TestAccClusterAdvancedCluster_withLabelIgnored (8.10s)
```
### 2025-06-24
#### PASS 8 seconds
```
2025-06-24T00:59:11.9739645Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-24T01:00:52.0736669Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-24T01:01:00.3335404Z --- PASS: TestAccClusterAdvancedCluster_withLabelIgnored (8.26s)
```
### 2025-06-25
#### PASS 8 seconds
```
2025-06-25T01:09:23.3034148Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-25T01:10:48.9219037Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-25T01:10:57.5708046Z --- PASS: TestAccClusterAdvancedCluster_withLabelIgnored (8.66s)
```
### 2025-06-26
#### PASS 10 seconds
```
2025-06-26T00:58:59.9262955Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-26T01:00:07.3969410Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-26T01:00:17.7333454Z --- PASS: TestAccClusterAdvancedCluster_withLabelIgnored (10.34s)
```