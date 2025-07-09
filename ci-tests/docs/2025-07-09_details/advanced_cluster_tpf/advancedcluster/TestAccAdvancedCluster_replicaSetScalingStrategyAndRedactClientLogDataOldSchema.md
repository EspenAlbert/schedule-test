# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 3)
Success rate: 97.44%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 2.01s
2025-06-05 00:35 | dev | 6.08s
2025-07-06 01:46 | qa | 1035.09s

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
#### PASS 39 minutes
### 2025-04-11
#### PASS 35 minutes
### 2025-04-12
#### PASS 34 minutes
### 2025-04-13
#### PASS 44 minutes
### 2025-04-14
#### PASS 34 minutes
### 2025-04-15
#### PASS 38 minutes
### 2025-04-16
#### PASS 35 minutes
#### PASS 38 minutes
### 2025-04-17
#### PASS 35 minutes
### 2025-04-18
#### PASS 34 minutes
### 2025-04-19
#### PASS 35 minutes
### 2025-04-20
#### PASS 37 minutes
### 2025-04-21
#### PASS 37 minutes
### 2025-04-22
#### PASS 34 minutes
### 2025-04-23
#### PASS 36 minutes
### 2025-04-24
#### PASS 34 minutes
### 2025-04-25
#### PASS 35 minutes
### 2025-04-26
#### PASS 34 minutes
### 2025-04-27
#### PASS 37 minutes
### 2025-04-28
#### PASS 34 minutes
### 2025-04-29
#### PASS 34 minutes
### 2025-04-30
#### PASS 34 minutes
### 2025-05-01
#### PASS 35 minutes
#### PASS 34 minutes
#### PASS 35 minutes
#### PASS 36 minutes
#### PASS 35 minutes
#### PASS 34 minutes
#### PASS 36 minutes
### 2025-05-02
#### PASS 41 minutes
### 2025-05-03
#### PASS 35 minutes
### 2025-05-04
#### PASS 34 minutes
### 2025-05-05
#### PASS 33 minutes
### 2025-05-06
#### PASS 35 minutes
### 2025-05-07
#### PASS 35 minutes
### 2025-05-08
#### PASS 34 minutes
### 2025-05-09
#### PASS 36 minutes
### 2025-05-10
#### PASS 35 minutes
### 2025-05-11
#### FAIL 2 seconds
```
2025-05-11T00:30:01.8051417Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-05-11T00:30:01.8183756Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-05-11T00:30:01.8331512Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-05-11T00:30:01.8332322Z     resource_advanced_cluster_test.go:1038: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:01.8333005Z         
2025-05-11T00:30:01.8333731Z         Error: error creating project: test-acc-tf-p-6798909939778800297
2025-05-11T00:30:01.8334194Z         
2025-05-11T00:30:01.8334543Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:01.8335201Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:01.8335799Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:01.8336109Z         
2025-05-11T00:30:01.8336559Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8336942Z         type
2025-05-11T00:30:01.8341797Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2.09s)
```
### 2025-05-12
#### PASS 35 minutes
### 2025-05-13
#### PASS 34 minutes
#### PASS 35 minutes
### 2025-05-14
#### PASS 39 minutes
### 2025-05-15
#### PASS 36 minutes
### 2025-05-16
#### PASS 34 minutes
### 2025-05-17
#### PASS 35 minutes
### 2025-05-18
#### PASS 35 minutes
### 2025-05-19
#### PASS 33 minutes
### 2025-05-20
#### PASS 35 minutes
### 2025-05-21
#### PASS 33 minutes
#### PASS 35 minutes
### 2025-05-22
#### PASS 34 minutes
### 2025-05-23
#### PASS 35 minutes
### 2025-05-24
#### PASS 36 minutes
### 2025-05-25
#### PASS 36 minutes
### 2025-05-26
#### PASS 34 minutes
### 2025-05-27
#### PASS 35 minutes
### 2025-05-28
#### PASS 36 minutes
#### PASS 37 minutes
#### PASS 34 minutes
### 2025-05-29
#### PASS 41 minutes
### 2025-05-30
#### PASS an hour
#### PASS 40 minutes
### 2025-05-31
#### PASS 35 minutes
### 2025-06-01
#### PASS 35 minutes
#### PASS 33 minutes
#### PASS 36 minutes
#### PASS 33 minutes
#### PASS 34 minutes
### 2025-06-02
#### PASS 34 minutes
#### PASS 34 minutes
#### PASS 36 minutes
#### PASS 34 minutes
### 2025-06-03
#### PASS 36 minutes
### 2025-06-04
#### PASS 35 minutes
### 2025-06-05
#### FAIL 6 seconds
```
2025-06-05T00:35:38.5903447Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-05T00:35:38.5953564Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-05T00:35:38.6586546Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-06-05T00:35:38.6587389Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6587809Z         
2025-06-05T00:35:38.6588387Z         Error: error creating project: test-acc-tf-p-8430257735417472024
2025-06-05T00:35:38.6588745Z         
2025-06-05T00:35:38.6589095Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:38.6589758Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:38.6590373Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:38.6590688Z         
2025-06-05T00:35:38.6591156Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6591883Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6592455Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6593033Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (6.78s)
```
### 2025-06-06
#### PASS 47 minutes
### 2025-06-07
#### PASS 36 minutes
### 2025-06-08
#### PASS 34 minutes
### 2025-06-09
#### PASS 39 minutes
### 2025-06-10
#### PASS 53 minutes
### 2025-06-11
#### PASS 36 minutes
#### PASS 50 minutes
### 2025-06-12
#### PASS 36 minutes
### 2025-06-13
#### PASS 38 minutes
### 2025-06-14
#### PASS 34 minutes
### 2025-06-15
#### PASS 35 minutes
### 2025-06-16
#### PASS 38 minutes
### 2025-06-17
#### PASS 36 minutes
### 2025-06-18
#### PASS 36 minutes
#### PASS 35 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 37 minutes
### 2025-06-21
#### PASS 35 minutes
### 2025-06-22
#### PASS 36 minutes
### 2025-06-23
#### PASS 34 minutes
### 2025-06-24
#### PASS 37 minutes
### 2025-06-25
#### PASS 35 minutes
### 2025-06-26
#### PASS 38 minutes
#### PASS 35 minutes
### 2025-06-27
#### PASS 35 minutes
### 2025-06-28
#### PASS 35 minutes
### 2025-06-29
#### PASS 34 minutes
### 2025-06-30
#### PASS 36 minutes
### 2025-07-01
#### PASS 36 minutes
#### PASS 35 minutes
#### PASS 35 minutes
#### PASS 35 minutes
#### PASS 36 minutes
### 2025-07-02
#### PASS 35 minutes
### 2025-07-03
#### PASS 36 minutes
### 2025-07-04
#### PASS 39 minutes
### 2025-07-05
#### PASS 36 minutes
### 2025-07-06
#### FAIL 17 minutes
```
2025-07-06T01:46:53.5878148Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-06T01:46:53.5915983Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-06T01:46:53.6067609Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-06T01:46:53.6068388Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6068846Z         
2025-07-06T01:46:53.6069216Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6069531Z         
2025-07-06T01:46:53.6069857Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:46:53.6070505Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:46:53.6071100Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:46:53.6071397Z         
2025-07-06T01:46:53.6071826Z         error getting project (6869c9c87267b5775b6856a5): error getting project's
2025-07-06T01:46:53.6072259Z         limits (6869c9c87267b5775b6856a5):
2025-07-06T01:46:53.6072810Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c87267b5775b6856a5/limits
2025-07-06T01:46:53.6073593Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6074155Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6074533Z         BadRequestDetail: 
2025-07-06T01:46:53.6101049Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1035.89s)
```
### 2025-07-07
#### PASS 34 minutes
### 2025-07-08
#### PASS 40 minutes
### 2025-07-09
#### PASS 35 minutes