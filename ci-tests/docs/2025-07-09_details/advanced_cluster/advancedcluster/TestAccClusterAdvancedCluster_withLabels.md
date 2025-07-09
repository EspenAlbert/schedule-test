# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 1.10s
2025-06-05 00:35 | dev | 6.08s
2025-06-22 01:03 | qa | 38.02s

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
#### PASS 23 minutes
### 2025-04-11
#### PASS 21 minutes
### 2025-04-12
#### PASS 18 minutes
### 2025-04-13
#### PASS 22 minutes
### 2025-04-14
#### PASS 14 minutes
### 2025-04-15
#### PASS 30 minutes
### 2025-04-16
#### PASS 16 minutes
#### PASS 22 minutes
### 2025-04-17
#### PASS 21 minutes
### 2025-04-18
#### PASS 15 minutes
### 2025-04-19
#### PASS 17 minutes
### 2025-04-20
#### PASS 20 minutes
### 2025-04-21
#### PASS 21 minutes
### 2025-04-22
#### PASS 21 minutes
### 2025-04-23
#### PASS 20 minutes
### 2025-04-24
#### PASS 19 minutes
### 2025-04-25
#### PASS 18 minutes
### 2025-04-26
#### PASS 19 minutes
### 2025-04-27
#### PASS 22 minutes
### 2025-04-28
#### PASS 17 minutes
### 2025-04-29
#### PASS 19 minutes
### 2025-04-30
#### PASS 26 minutes
### 2025-05-01
#### PASS 21 minutes
#### PASS 19 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 18 minutes
#### PASS 17 minutes
#### PASS 17 minutes
### 2025-05-02
#### PASS 20 minutes
### 2025-05-03
#### PASS 17 minutes
### 2025-05-04
#### PASS 18 minutes
### 2025-05-05
#### PASS 14 minutes
### 2025-05-06
#### PASS 18 minutes
### 2025-05-07
#### PASS 16 minutes
### 2025-05-08
#### PASS 20 minutes
### 2025-05-09
#### PASS 18 minutes
### 2025-05-10
#### PASS 17 minutes
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:30:10.3039013Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-05-11T00:30:11.3739576Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-05-11T00:30:13.2543193Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-05-11T00:30:13.2543936Z     resource_advanced_cluster_test.go:690: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:13.2544472Z         
2025-05-11T00:30:13.2545200Z         Error: error creating project: test-acc-tf-p-4618604652240866171
2025-05-11T00:30:13.2545736Z         
2025-05-11T00:30:13.2546211Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:13.2547094Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:13.2547760Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:13.2548151Z         
2025-05-11T00:30:13.2548616Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:13.2549089Z         type
2025-05-11T00:30:13.2770671Z    test_name=TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard test_terraform_path=/home/runner/work/_temp/eb045558-e650-44ba-970b-b66bff02e4fd/terraform test_working_directory=/tmp/plugintest351122537 test_step_number=1
2025-05-11T00:30:13.3684371Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1.99s)
```
### 2025-05-12
#### PASS 16 minutes
### 2025-05-13
#### PASS 19 minutes
#### PASS 18 minutes
### 2025-05-14
#### PASS 21 minutes
### 2025-05-15
#### PASS 19 minutes
### 2025-05-16
#### PASS 19 minutes
### 2025-05-17
#### PASS 18 minutes
### 2025-05-18
#### PASS 17 minutes
### 2025-05-19
#### PASS 16 minutes
### 2025-05-20
#### PASS 19 minutes
### 2025-05-21
#### PASS 19 minutes
### 2025-05-22
#### PASS 16 minutes
### 2025-05-23
#### PASS 17 minutes
### 2025-05-24
#### PASS 18 minutes
### 2025-05-25
#### PASS 18 minutes
### 2025-05-26
#### PASS 20 minutes
### 2025-05-27
#### PASS 19 minutes
### 2025-05-28
#### PASS 17 minutes
#### PASS 18 minutes
#### PASS 21 minutes
### 2025-05-29
#### PASS 23 minutes
#### PASS 15 minutes
### 2025-05-30
#### PASS an hour
#### PASS 15 minutes
### 2025-05-31
#### PASS 18 minutes
### 2025-06-01
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 17 minutes
### 2025-06-02
#### PASS 19 minutes
#### PASS 22 minutes
#### PASS 16 minutes
### 2025-06-03
#### PASS 17 minutes
### 2025-06-04
#### PASS 18 minutes
### 2025-06-05
#### FAIL 6 seconds
```
2025-06-05T00:35:30.3572285Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-06-05T00:35:42.8168516Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-06-05T00:35:49.5125927Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-06-05T00:35:49.5126662Z     resource_advanced_cluster_test.go:693: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:49.5127215Z         
2025-06-05T00:35:49.5127842Z         Error: error creating project: test-acc-tf-p-825184506767979054
2025-06-05T00:35:49.5128447Z         
2025-06-05T00:35:49.5129339Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:49.5130557Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:49.5131488Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:49.5131890Z         
2025-06-05T00:35:49.5132454Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:49.5133308Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:49.5133983Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:49.5483368Z    test_working_directory=/tmp/plugintest798527939 test_name=TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard test_terraform_path=/home/runner/work/_temp/2d4b31c9-479e-44d7-b7ae-aa2b06b7e890/terraform
2025-06-05T00:35:49.5888108Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (6.77s)
```
### 2025-06-06
#### PASS 21 minutes
### 2025-06-07
#### PASS 15 minutes
### 2025-06-08
#### PASS 17 minutes
### 2025-06-09
#### PASS 20 minutes
### 2025-06-10
#### PASS 17 minutes
### 2025-06-11
#### PASS 16 minutes
#### PASS 19 minutes
### 2025-06-12
#### PASS 20 minutes
### 2025-06-13
#### PASS 20 minutes
### 2025-06-14
#### PASS 24 minutes
### 2025-06-15
#### PASS 20 minutes
### 2025-06-16
#### PASS 17 minutes
### 2025-06-17
#### PASS 31 minutes
### 2025-06-18
#### PASS 18 minutes
#### PASS 19 minutes
### 2025-06-19
#### PASS 47 minutes
### 2025-06-20
#### PASS 18 minutes
### 2025-06-21
#### PASS 19 minutes
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
### 2025-06-24
#### PASS 24 minutes
### 2025-06-25
#### PASS 17 minutes
### 2025-06-26
#### PASS 17 minutes
### 2025-06-27
#### PASS 17 minutes
### 2025-06-28
#### PASS 16 minutes
### 2025-06-29
#### PASS 24 minutes
### 2025-06-30
#### PASS 19 minutes
### 2025-07-01
#### PASS 19 minutes
#### PASS 19 minutes
#### PASS 18 minutes
#### PASS 18 minutes
#### PASS 14 minutes
### 2025-07-02
#### PASS 18 minutes
### 2025-07-03
#### PASS 21 minutes
### 2025-07-04
#### PASS 17 minutes
### 2025-07-05
#### PASS 17 minutes
### 2025-07-06
#### PASS 18 minutes
### 2025-07-07
#### PASS 17 minutes
### 2025-07-08
#### PASS 16 minutes
### 2025-07-09
#### PASS 19 minutes