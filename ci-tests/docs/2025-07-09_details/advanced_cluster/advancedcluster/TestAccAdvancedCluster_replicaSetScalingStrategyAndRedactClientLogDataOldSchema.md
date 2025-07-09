# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 1.08s
2025-06-05 00:35 | dev | 7.07s
2025-06-22 01:03 | qa | 35.10s

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
### 2025-04-10
#### PASS 40 minutes
### 2025-04-11
#### PASS 35 minutes
### 2025-04-12
#### PASS 34 minutes
### 2025-04-13
#### PASS 40 minutes
### 2025-04-14
#### PASS 35 minutes
### 2025-04-15
#### PASS 44 minutes
### 2025-04-16
#### PASS 37 minutes
#### PASS 39 minutes
### 2025-04-17
#### PASS 37 minutes
### 2025-04-18
#### PASS 35 minutes
### 2025-04-19
#### PASS 36 minutes
### 2025-04-20
#### PASS 37 minutes
### 2025-04-21
#### PASS 39 minutes
### 2025-04-22
#### PASS 35 minutes
### 2025-04-23
#### PASS 35 minutes
### 2025-04-24
#### PASS 35 minutes
### 2025-04-25
#### PASS 37 minutes
### 2025-04-26
#### PASS 36 minutes
### 2025-04-27
#### PASS 40 minutes
### 2025-04-28
#### PASS 35 minutes
### 2025-04-29
#### PASS 34 minutes
### 2025-04-30
#### PASS 41 minutes
### 2025-05-01
#### PASS 35 minutes
#### PASS 37 minutes
#### PASS 35 minutes
#### PASS 36 minutes
#### PASS 36 minutes
#### PASS 36 minutes
#### PASS 35 minutes
### 2025-05-02
#### PASS 41 minutes
### 2025-05-03
#### PASS 37 minutes
### 2025-05-04
#### PASS 36 minutes
### 2025-05-05
#### PASS 36 minutes
### 2025-05-06
#### PASS 36 minutes
### 2025-05-07
#### PASS 35 minutes
### 2025-05-08
#### PASS 38 minutes
### 2025-05-09
#### PASS 38 minutes
### 2025-05-10
#### PASS 39 minutes
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:30:10.8420373Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-05-11T00:30:11.3740515Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-05-11T00:30:13.1301259Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-05-11T00:30:13.1302224Z     resource_advanced_cluster_test.go:1038: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:13.1302795Z         
2025-05-11T00:30:13.1303238Z         Error: error creating project: test-acc-tf-p-1833336145014799251
2025-05-11T00:30:13.1303698Z         
2025-05-11T00:30:13.1304033Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:13.1304793Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:13.1305521Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:13.1305888Z         
2025-05-11T00:30:13.1306357Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:13.1306817Z         type
2025-05-11T00:30:13.1791392Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1.81s)
```
### 2025-05-12
#### PASS 36 minutes
### 2025-05-13
#### PASS 36 minutes
#### PASS 36 minutes
### 2025-05-14
#### PASS 39 minutes
### 2025-05-15
#### PASS 37 minutes
### 2025-05-16
#### PASS 36 minutes
### 2025-05-17
#### PASS 36 minutes
### 2025-05-18
#### PASS 36 minutes
### 2025-05-19
#### PASS 36 minutes
### 2025-05-20
#### PASS 35 minutes
### 2025-05-21
#### PASS 37 minutes
### 2025-05-22
#### PASS 37 minutes
### 2025-05-23
#### PASS 46 minutes
### 2025-05-24
#### PASS 35 minutes
### 2025-05-25
#### PASS 37 minutes
### 2025-05-26
#### PASS 35 minutes
### 2025-05-27
#### PASS 36 minutes
### 2025-05-28
#### PASS 34 minutes
#### PASS 35 minutes
#### PASS 35 minutes
### 2025-05-29
#### PASS 40 minutes
#### PASS 33 minutes
### 2025-05-30
#### PASS an hour
#### PASS 37 minutes
### 2025-05-31
#### PASS 36 minutes
### 2025-06-01
#### PASS 35 minutes
#### PASS 35 minutes
#### PASS 38 minutes
#### PASS 36 minutes
#### PASS 36 minutes
#### PASS 36 minutes
### 2025-06-02
#### PASS 36 minutes
#### PASS 35 minutes
#### PASS 35 minutes
### 2025-06-03
#### PASS 36 minutes
### 2025-06-04
#### PASS 36 minutes
### 2025-06-05
#### FAIL 7 seconds
```
2025-06-05T00:35:39.9461068Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-05T00:35:42.8426788Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-05T00:35:50.4674648Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-05T00:35:50.4675706Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:50.4676134Z         
2025-06-05T00:35:50.4676652Z         Error: error creating project: test-acc-tf-p-1344899886446738368
2025-06-05T00:35:50.4677057Z         
2025-06-05T00:35:50.4677445Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:50.4678209Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:50.4678919Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:50.4679559Z         
2025-06-05T00:35:50.4680344Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:50.4681030Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:50.4681586Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:50.5148082Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (7.68s)
```
### 2025-06-06
#### PASS 47 minutes
### 2025-06-07
#### PASS 35 minutes
### 2025-06-08
#### PASS 35 minutes
### 2025-06-09
#### PASS 50 minutes
### 2025-06-10
#### PASS 36 minutes
### 2025-06-11
#### PASS 36 minutes
#### PASS 37 minutes
### 2025-06-12
#### PASS 37 minutes
### 2025-06-13
#### PASS 35 minutes
### 2025-06-14
#### PASS 39 minutes
### 2025-06-15
#### PASS 35 minutes
### 2025-06-16
#### PASS 38 minutes
### 2025-06-17
#### PASS 37 minutes
### 2025-06-18
#### PASS 38 minutes
#### PASS 34 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 38 minutes
### 2025-06-21
#### PASS 37 minutes
### 2025-06-22
#### FAIL 35 seconds
```
2025-06-22T01:03:37.8785672Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-22T01:05:07.8948091Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-22T01:05:43.8116757Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-22T01:05:43.8117577Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running apply: exit status 1
2025-06-22T01:05:43.8118098Z         
2025-06-22T01:05:43.8118490Z         Error: error when getting project properties after create
2025-06-22T01:05:43.8118891Z         
2025-06-22T01:05:43.8119215Z           with mongodbatlas_project.cluster_project,
2025-06-22T01:05:43.8119951Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T01:05:43.8120720Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-22T01:05:43.8121193Z         
2025-06-22T01:05:43.8121617Z         error getting project (685756c8ab82446d9bfb3705): error getting project's
2025-06-22T01:05:43.8122241Z         limits (685756c8ab82446d9bfb3705):
2025-06-22T01:05:43.8122796Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/685756c8ab82446d9bfb3705/limits
2025-06-22T01:05:43.8123429Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T01:05:43.8123973Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T01:05:43.8124342Z         BadRequestDetail: 
2025-06-22T01:05:43.8525856Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (35.96s)
```
### 2025-06-23
#### PASS 37 minutes
### 2025-06-24
#### PASS 39 minutes
### 2025-06-25
#### PASS 36 minutes
### 2025-06-26
#### PASS 36 minutes
### 2025-06-27
#### PASS 36 minutes
### 2025-06-28
#### PASS 36 minutes
### 2025-06-29
#### PASS 37 minutes
### 2025-06-30
#### PASS 39 minutes
### 2025-07-01
#### PASS 36 minutes
#### PASS 38 minutes
#### PASS 36 minutes
#### PASS 36 minutes
#### PASS 54 minutes
### 2025-07-02
#### PASS 36 minutes
### 2025-07-03
#### PASS 37 minutes
### 2025-07-04
#### PASS 35 minutes
### 2025-07-05
#### PASS 38 minutes
### 2025-07-06
#### PASS 39 minutes
### 2025-07-07
#### PASS 34 minutes
### 2025-07-08
#### PASS 36 minutes
### 2025-07-09
#### PASS 38 minutes