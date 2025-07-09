# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 66 TestRuns in dev, qa from 2025-05-22 to 2025-07-09 from master branch: 1 unique tests, PASS(x 61) FAIL(x 5)
Success rate: 92.42%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-05-23 00:50 |  | dev |  | 24.05s
2025-06-05 00:35 |  | dev |  | 5.04s
2025-06-19 01:07 | API Error DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/{groupId}/flexClusters | dev | flaky_400 | 135.02s
2025-07-01 05:27 |  | dev | flaky_check | 45.04s
2025-07-09 01:10 | API Error CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP /api/atlas/v2/groups/{groupId}/flexClusters | dev | real_test_failure | 76.07s

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
2025-04-10: MISSING
2025-04-11: MISSING
2025-04-12: MISSING
2025-04-13: MISSING
2025-04-14: MISSING
2025-04-15: MISSING
2025-04-16: MISSING
2025-04-17: MISSING
2025-04-18: MISSING
2025-04-19: MISSING
2025-04-20: MISSING
2025-04-21: MISSING
2025-04-22: MISSING
2025-04-23: MISSING
2025-04-24: MISSING
2025-04-25: MISSING
2025-04-26: MISSING
2025-04-27: MISSING
2025-04-28: MISSING
2025-04-29: MISSING
2025-04-30: MISSING
2025-05-01: MISSING
2025-05-02: MISSING
2025-05-03: MISSING
2025-05-04: MISSING
2025-05-05: MISSING
2025-05-06: MISSING
2025-05-07: MISSING
2025-05-08: MISSING
2025-05-09: MISSING
2025-05-10: MISSING
2025-05-11: MISSING
2025-05-12: MISSING
2025-05-13: MISSING
2025-05-14: MISSING
2025-05-15: MISSING
2025-05-16: MISSING
2025-05-17: MISSING
2025-05-18: MISSING
2025-05-19: MISSING
2025-05-20: MISSING
2025-05-21: MISSING
### 2025-05-22
#### PASS a minute
### 2025-05-23
#### FAIL 24 seconds
```
2025-05-23T00:50:25.2832035Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-05-23T00:51:50.4162887Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-05-23T00:52:14.8907386Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-05-23T00:52:14.8908497Z     resource_advanced_cluster_test.go:1463: Step 2/3 error: Error running apply: exit status 1
2025-05-23T00:52:14.8909138Z         
2025-05-23T00:52:14.8911374Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc64f1fcba3225667d5ca/flexClusters POST: HTTP 400 Bad Request (Error code: "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error occurred. Please try again in a minute or use a different name. Reason: Bad Request. Params: [A transient error occurred. Please try again in a minute or use a different name.], BadRequestDetail: 
2025-05-23T00:52:14.8912874Z         
2025-05-23T00:52:14.8913259Z           with mongodbatlas_advanced_cluster.test,
2025-05-23T00:52:14.8913930Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-23T00:52:14.8914540Z           12: 			resource "mongodbatlas_advanced_cluster" "test" {
2025-05-23T00:52:14.8914866Z         
2025-05-23T00:52:14.9305874Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (24.53s)
```
### 2025-05-24
#### PASS 3 minutes
### 2025-05-25
#### PASS 3 minutes
### 2025-05-26
#### PASS 3 minutes
### 2025-05-27
#### PASS 2 minutes
### 2025-05-28
#### PASS 3 minutes
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-05-29
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-05-30
#### PASS 3 minutes
#### PASS 2 minutes
### 2025-05-31
#### PASS 3 minutes
### 2025-06-01
#### PASS 3 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-06-02
#### PASS 3 minutes
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-06-03
#### PASS 2 minutes
### 2025-06-04
#### PASS 3 minutes
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:35:42.0093877Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-05T00:35:42.8280790Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-05T00:35:47.8564532Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-05T00:35:47.8567784Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:35:47.8568757Z         
2025-06-05T00:35:47.8571591Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e65c161ca93c1f0545a9/flexClusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:47.8573498Z         
2025-06-05T00:35:47.8574069Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:47.8575363Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:47.8576420Z           12: 			resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:47.8577010Z         
2025-06-05T00:35:48.1651691Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (5.35s)
```
### 2025-06-06
#### PASS 5 minutes
### 2025-06-07
#### PASS 3 minutes
### 2025-06-08
#### PASS 2 minutes
### 2025-06-09
#### PASS 3 minutes
### 2025-06-10
#### PASS 3 minutes
### 2025-06-11
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-06-12
#### PASS 3 minutes
### 2025-06-13
#### PASS 3 minutes
### 2025-06-14
#### PASS 14 minutes
### 2025-06-15
#### PASS 3 minutes
### 2025-06-16
#### PASS 11 minutes
### 2025-06-17
#### PASS 4 minutes
### 2025-06-18
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-06-19
#### FAIL 2 minutes
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-06-19T01:07:44.789000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='19 days ago')
API Error DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/{groupId}/flexClusters
```
2025-06-19T01:07:44.7897448Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-19T01:09:39.9315884Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-19T01:11:55.0930118Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-06-19T01:11:55.0931217Z     resource_advanced_cluster_test.go:1465: Step 2/3 error: Error running apply: exit status 1
2025-06-19T01:11:55.0931946Z         
2025-06-19T01:11:55.0936804Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/685362dfe16f343ef1da0a8e/flexClusters POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A cluster or serverless instance named test-acc-tf-c-7161724721941338684 is already present in group 685362dfe16f343ef1da0a8e. Reason: Bad Request. Params: [cluster or serverless instance test-acc-tf-c-7161724721941338684 685362dfe16f343ef1da0a8e], BadRequestDetail: 
2025-06-19T01:11:55.0940002Z         
2025-06-19T01:11:55.0940598Z           with mongodbatlas_advanced_cluster.test,
2025-06-19T01:11:55.0941822Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-19T01:11:55.0943234Z           12: 			resource "mongodbatlas_advanced_cluster" "test" {
2025-06-19T01:11:55.0943791Z         
2025-06-19T01:11:55.1523829Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (135.22s)
```
### 2025-06-20
#### PASS 3 minutes
### 2025-06-21
#### PASS 3 minutes
### 2025-06-22
#### PASS 3 minutes
### 2025-06-23
#### PASS 3 minutes
### 2025-06-24
#### PASS 3 minutes
### 2025-06-25
#### PASS 3 minutes
### 2025-06-26
#### PASS 2 minutes
### 2025-06-27
#### PASS 2 minutes
### 2025-06-28
#### PASS 2 minutes
### 2025-06-29
#### PASS 3 minutes
### 2025-06-30
#### PASS 2 minutes
### 2025-07-01
#### PASS 3 minutes
#### PASS 2 minutes
#### PASS 3 minutes
#### FAIL 45 seconds
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-01T05:27:49.713000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='7 days ago')

```
2025-07-01T05:27:49.7130131Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T05:28:58.6697228Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T05:29:14.2259068Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-01T05:29:14.2260025Z     resource_advanced_cluster_test.go:1465: Step 1/3, expected an error but got none
2025-07-01T05:29:44.0330033Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (45.37s)
```
#### PASS 2 minutes
### 2025-07-02
#### PASS 2 minutes
### 2025-07-03
#### PASS 3 minutes
### 2025-07-04
#### PASS 2 minutes
### 2025-07-05
#### PASS 6 minutes
### 2025-07-06
#### PASS 2 minutes
### 2025-07-07
#### PASS 6 minutes
### 2025-07-08
#### PASS 2 minutes
### 2025-07-09
#### FAIL a minute
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-09T01:10:26.407000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='18 minutes ago')
API Error CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP /api/atlas/v2/groups/{groupId}/flexClusters
```
2025-07-09T01:10:26.4073072Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-09T01:11:17.0819733Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-09T01:12:33.7733535Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-09T01:12:33.7734692Z     resource_advanced_cluster_test.go:1465: Step 2/3 error: Error running apply: exit status 1
2025-07-09T01:12:33.7735247Z         
2025-07-09T01:12:33.7737979Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/686dc17f4d24ec7e5ee23796/flexClusters POST: HTTP 400 Bad Request (Error code: "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error occurred. Please try again in a minute or use a different name. Reason: Bad Request. Params: [A transient error occurred. Please try again in a minute or use a different name.], BadRequestDetail: 
2025-07-09T01:12:33.7739779Z         
2025-07-09T01:12:33.7740108Z           with mongodbatlas_advanced_cluster.test,
2025-07-09T01:12:33.7740757Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-09T01:12:33.7741345Z           12: 			resource "mongodbatlas_advanced_cluster" "test" {
2025-07-09T01:12:33.7741647Z         
2025-07-09T01:12:33.8177048Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (76.74s)
```