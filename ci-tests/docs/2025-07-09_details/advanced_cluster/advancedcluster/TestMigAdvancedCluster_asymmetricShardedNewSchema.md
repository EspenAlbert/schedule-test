# advanced_cluster/advancedcluster/TestMigAdvancedCluster_asymmetricShardedNewSchema Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 3.09s
2025-06-05 00:29 | dev | 11.07s
2025-06-29 00:32 | qa | 1120.02s

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
#### PASS 13 minutes
### 2025-04-11
#### PASS 19 minutes
### 2025-04-12
#### PASS 14 minutes
### 2025-04-13
#### PASS 12 minutes
### 2025-04-14
#### PASS 13 minutes
### 2025-04-15
#### PASS 29 minutes
### 2025-04-16
#### PASS 14 minutes
#### PASS 15 minutes
### 2025-04-17
#### PASS 15 minutes
### 2025-04-18
#### PASS 15 minutes
### 2025-04-19
#### PASS 14 minutes
### 2025-04-20
#### PASS 14 minutes
### 2025-04-21
#### PASS 20 minutes
### 2025-04-22
#### PASS 16 minutes
### 2025-04-23
#### PASS 18 minutes
### 2025-04-24
#### PASS 14 minutes
### 2025-04-25
#### PASS 15 minutes
### 2025-04-26
#### PASS 15 minutes
### 2025-04-27
#### PASS 16 minutes
### 2025-04-28
#### PASS 15 minutes
### 2025-04-29
#### PASS 13 minutes
### 2025-04-30
#### PASS 25 minutes
### 2025-05-01
#### PASS 17 minutes
#### PASS 18 minutes
#### PASS 15 minutes
#### PASS 18 minutes
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 15 minutes
### 2025-05-02
#### PASS 22 minutes
### 2025-05-03
#### PASS 16 minutes
### 2025-05-04
#### PASS 15 minutes
### 2025-05-05
#### PASS 14 minutes
### 2025-05-06
#### PASS 15 minutes
### 2025-05-07
#### PASS 18 minutes
### 2025-05-08
#### PASS 17 minutes
### 2025-05-09
#### PASS 22 minutes
### 2025-05-10
#### PASS 20 minutes
### 2025-05-11
#### FAIL 3 seconds
```
2025-05-11T00:30:09.1172880Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-05-11T00:30:11.3743677Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-05-11T00:30:15.0725907Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-05-11T00:30:15.0726559Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:15.0727015Z         
2025-05-11T00:30:15.0727422Z         Error: error creating project: test-acc-tf-p-6700603947135711384
2025-05-11T00:30:15.0727771Z         
2025-05-11T00:30:15.0728103Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:15.0728750Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:15.0729347Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:15.0729648Z         
2025-05-11T00:30:15.0730101Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:15.0730488Z         type
2025-05-11T00:30:15.0834571Z    test_name=TestMigAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:15.2703209Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (3.90s)
```
### 2025-05-12
#### PASS 15 minutes
### 2025-05-13
#### PASS 15 minutes
#### PASS 14 minutes
### 2025-05-14
#### PASS 21 minutes
### 2025-05-15
#### PASS 18 minutes
### 2025-05-16
#### PASS 20 minutes
### 2025-05-17
#### PASS 18 minutes
### 2025-05-18
#### PASS 29 minutes
### 2025-05-19
#### PASS 15 minutes
### 2025-05-20
#### PASS 18 minutes
### 2025-05-21
#### PASS 18 minutes
### 2025-05-22
#### PASS 15 minutes
### 2025-05-23
#### PASS 31 minutes
### 2025-05-24
#### PASS 16 minutes
### 2025-05-25
#### PASS 18 minutes
### 2025-05-26
#### PASS 18 minutes
### 2025-05-27
#### PASS 15 minutes
### 2025-05-28
#### PASS 18 minutes
#### PASS 13 minutes
#### PASS 12 minutes
### 2025-05-29
#### PASS 22 minutes
#### PASS 13 minutes
### 2025-05-30
#### PASS an hour
#### PASS 16 minutes
### 2025-05-31
#### PASS 18 minutes
### 2025-06-01
#### PASS 27 minutes
#### PASS 19 minutes
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 14 minutes
### 2025-06-02
#### PASS 19 minutes
#### PASS 16 minutes
#### PASS 15 minutes
### 2025-06-03
#### PASS 19 minutes
### 2025-06-04
#### PASS 18 minutes
### 2025-06-05
#### FAIL 11 seconds
```
2025-06-05T00:29:09.5475181Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-06-05T00:35:42.8413881Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-06-05T00:35:54.3488606Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-06-05T00:35:54.3489260Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:54.3489713Z         
2025-06-05T00:35:54.3490128Z         Error: error creating project: test-acc-tf-p-2823892054402479000
2025-06-05T00:35:54.3490466Z         
2025-06-05T00:35:54.3490802Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:54.3491472Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:54.3492085Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:54.3492390Z         
2025-06-05T00:35:54.3492849Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:54.3493461Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:54.3494021Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:54.5521789Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (11.73s)
```
### 2025-06-06
#### PASS 21 minutes
### 2025-06-07
#### PASS 15 minutes
### 2025-06-08
#### PASS an hour
### 2025-06-09
#### PASS 43 minutes
### 2025-06-10
#### PASS 18 minutes
### 2025-06-11
#### PASS 17 minutes
#### PASS 19 minutes
### 2025-06-12
#### PASS 20 minutes
### 2025-06-13
#### PASS 20 minutes
### 2025-06-14
#### PASS 34 minutes
### 2025-06-15
#### PASS 28 minutes
### 2025-06-16
#### PASS 21 minutes
### 2025-06-17
#### PASS 16 minutes
### 2025-06-18
#### PASS 21 minutes
#### PASS 18 minutes
### 2025-06-19
#### PASS 46 minutes
### 2025-06-20
#### PASS 15 minutes
### 2025-06-21
#### PASS 19 minutes
### 2025-06-22
#### PASS 22 minutes
### 2025-06-23
#### PASS 16 minutes
### 2025-06-24
#### PASS 29 minutes
### 2025-06-25
#### PASS 15 minutes
### 2025-06-26
#### PASS 14 minutes
### 2025-06-27
#### PASS 16 minutes
### 2025-06-28
#### PASS 19 minutes
### 2025-06-29
#### FAIL 18 minutes
```
2025-06-29T00:32:23.4511850Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-06-29T01:05:58.2601237Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-06-29T01:17:45.8202231Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-06-29T01:17:45.8203205Z     resource_advanced_cluster_migration_test.go:35: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T01:17:45.8203717Z         
2025-06-29T01:17:45.8204187Z         Error: error when getting project properties after create
2025-06-29T01:17:45.8204998Z         
2025-06-29T01:17:45.8205413Z           with mongodbatlas_project.cluster_project,
2025-06-29T01:17:45.8206092Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-29T01:17:45.8206700Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-29T01:17:45.8207015Z         
2025-06-29T01:17:45.8207445Z         error getting project (6860917c49709c3a5a3cc075): error getting project's
2025-06-29T01:17:45.8207880Z         limits (6860917c49709c3a5a3cc075):
2025-06-29T01:17:45.8208430Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860917c49709c3a5a3cc075/limits
2025-06-29T01:17:45.8209312Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T01:17:45.8209877Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T01:17:45.8210248Z         BadRequestDetail: 
2025-06-29T01:24:38.4755430Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (1120.22s)
```
### 2025-06-30
#### PASS 18 minutes
### 2025-07-01
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 18 minutes
#### PASS 18 minutes
#### PASS 20 minutes
### 2025-07-02
#### PASS 18 minutes
### 2025-07-03
#### PASS 18 minutes
### 2025-07-04
#### PASS 16 minutes
### 2025-07-05
#### PASS 17 minutes
### 2025-07-06
#### PASS 16 minutes
### 2025-07-07
#### PASS 18 minutes
### 2025-07-08
#### PASS 13 minutes
### 2025-07-09
#### PASS 19 minutes