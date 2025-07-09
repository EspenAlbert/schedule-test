# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 3)
Success rate: 97.44%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 2.00s
2025-06-05 00:35 | dev | 6.01s
2025-06-29 02:02 | qa | 36.05s

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
#### PASS 7 seconds
### 2025-04-11
#### PASS 8 seconds
### 2025-04-12
#### PASS 9 seconds
### 2025-04-13
#### PASS 7 seconds
### 2025-04-14
#### PASS 9 seconds
### 2025-04-15
#### PASS 7 seconds
### 2025-04-16
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-04-17
#### PASS 8 seconds
### 2025-04-18
#### PASS 8 seconds
### 2025-04-19
#### PASS 10 seconds
### 2025-04-20
#### PASS 8 seconds
### 2025-04-21
#### PASS 8 seconds
### 2025-04-22
#### PASS 8 seconds
### 2025-04-23
#### PASS 7 seconds
### 2025-04-24
#### PASS 9 seconds
### 2025-04-25
#### PASS 8 seconds
### 2025-04-26
#### PASS 10 seconds
### 2025-04-27
#### PASS 8 seconds
### 2025-04-28
#### PASS 9 seconds
### 2025-04-29
#### PASS 7 seconds
### 2025-04-30
#### PASS 11 seconds
### 2025-05-01
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-05-02
#### PASS 7 seconds
### 2025-05-03
#### PASS 7 seconds
### 2025-05-04
#### PASS 9 seconds
### 2025-05-05
#### PASS 8 seconds
### 2025-05-06
#### PASS 9 seconds
### 2025-05-07
#### PASS 7 seconds
### 2025-05-08
#### PASS 7 seconds
### 2025-05-09
#### PASS 10 seconds
### 2025-05-10
#### PASS 7 seconds
### 2025-05-11
#### FAIL 2 seconds
```
2025-05-11T00:30:01.8006803Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-05-11T00:30:01.8181925Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-05-11T00:30:01.8281704Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-05-11T00:30:01.8282578Z     resource_advanced_cluster_test.go:917: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-05-11T00:30:01.8283090Z         
2025-05-11T00:30:01.8283489Z         Error: error creating project: test-acc-tf-p-4677760305426466870
2025-05-11T00:30:01.8283827Z         
2025-05-11T00:30:01.8284168Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:01.8284828Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:01.8285430Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:01.8285734Z         
2025-05-11T00:30:01.8286318Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8286711Z         type
2025-05-11T00:30:01.8338813Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (2.03s)
```
### 2025-05-12
#### PASS 10 seconds
### 2025-05-13
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-05-14
#### PASS 7 seconds
### 2025-05-15
#### PASS 7 seconds
### 2025-05-16
#### PASS 6 seconds
### 2025-05-17
#### PASS 9 seconds
### 2025-05-18
#### PASS 8 seconds
### 2025-05-19
#### PASS 8 seconds
### 2025-05-20
#### PASS 7 seconds
### 2025-05-21
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-05-22
#### PASS 8 seconds
### 2025-05-23
#### PASS 11 seconds
### 2025-05-24
#### PASS 8 seconds
### 2025-05-25
#### PASS 8 seconds
### 2025-05-26
#### PASS 7 seconds
### 2025-05-27
#### PASS 10 seconds
### 2025-05-28
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 9 seconds
### 2025-05-29
#### PASS 10 seconds
### 2025-05-30
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-05-31
#### PASS 9 seconds
### 2025-06-01
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 8 seconds
### 2025-06-02
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-06-03
#### PASS 10 seconds
### 2025-06-04
#### PASS 7 seconds
### 2025-06-05
#### FAIL 6 seconds
```
2025-06-05T00:35:38.5896808Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-06-05T00:35:38.5957688Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-06-05T00:35:38.6416829Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-06-05T00:35:38.6418607Z     resource_advanced_cluster_test.go:920: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:35:38.6419553Z         
2025-06-05T00:35:38.6420307Z         Error: error creating project: test-acc-tf-p-5136958105719692801
2025-06-05T00:35:38.6420930Z         
2025-06-05T00:35:38.6421541Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:38.6422765Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:38.6423883Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:38.6424438Z         
2025-06-05T00:35:38.6425265Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6426418Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6427448Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6428668Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (6.06s)
```
### 2025-06-06
#### PASS 8 seconds
### 2025-06-07
#### PASS 8 seconds
### 2025-06-08
#### PASS 8 seconds
### 2025-06-09
#### PASS 8 seconds
### 2025-06-10
#### PASS 8 seconds
### 2025-06-11
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-06-12
#### PASS 8 seconds
### 2025-06-13
#### PASS 9 seconds
### 2025-06-14
#### PASS 9 seconds
### 2025-06-15
#### PASS 9 seconds
### 2025-06-16
#### PASS 10 seconds
### 2025-06-17
#### PASS 11 seconds
### 2025-06-18
#### PASS 8 seconds
#### PASS 10 seconds
### 2025-06-19
#### PASS 9 seconds
### 2025-06-20
#### PASS 11 seconds
### 2025-06-21
#### PASS 8 seconds
### 2025-06-22
#### PASS 25 seconds
### 2025-06-23
#### PASS 8 seconds
### 2025-06-24
#### PASS 8 seconds
### 2025-06-25
#### PASS 10 seconds
### 2025-06-26
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-06-27
#### PASS 11 seconds
### 2025-06-28
#### PASS 8 seconds
### 2025-06-29
#### FAIL 36 seconds
```
2025-06-29T02:02:46.2861161Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-06-29T02:02:46.2903909Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-06-29T02:02:46.2973957Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-06-29T02:02:46.2974825Z     resource_advanced_cluster_test.go:920: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-29T02:02:46.2975351Z         
2025-06-29T02:02:46.2975727Z         Error: error when getting project properties after create
2025-06-29T02:02:46.2976046Z         
2025-06-29T02:02:46.2976378Z           with mongodbatlas_project.cluster_project,
2025-06-29T02:02:46.2977024Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-29T02:02:46.2977614Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-29T02:02:46.2977917Z         
2025-06-29T02:02:46.2978344Z         error getting project (6860911956291349dce6fadc): error getting project's
2025-06-29T02:02:46.2978789Z         limits (6860911956291349dce6fadc):
2025-06-29T02:02:46.2979357Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860911956291349dce6fadc/limits
2025-06-29T02:02:46.2980154Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T02:02:46.2980718Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T02:02:46.2981097Z         BadRequestDetail: 
2025-06-29T02:02:46.2981561Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (36.52s)
```
### 2025-06-30
#### PASS 8 seconds
### 2025-07-01
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 13 seconds
#### PASS 7 seconds
#### PASS 9 seconds
### 2025-07-02
#### PASS 9 seconds
### 2025-07-03
#### PASS 8 seconds
### 2025-07-04
#### PASS 7 seconds
### 2025-07-05
#### PASS 7 seconds
### 2025-07-06
#### PASS 7 seconds
### 2025-07-07
#### PASS 9 seconds
### 2025-07-08
#### PASS 9 seconds
### 2025-07-09
#### PASS 8 seconds