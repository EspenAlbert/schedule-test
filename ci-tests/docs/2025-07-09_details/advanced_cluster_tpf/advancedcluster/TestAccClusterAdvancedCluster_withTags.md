# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 4)
Success rate: 96.58%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 2.00s
2025-06-05 00:35 | dev | 6.09s
2025-06-29 02:02 | qa | 1201.02s
2025-07-06 01:46 | qa | 825.06s

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
#### PASS 20 minutes
### 2025-04-11
#### PASS 16 minutes
### 2025-04-12
#### PASS 14 minutes
### 2025-04-13
#### PASS 20 minutes
### 2025-04-14
#### PASS 14 minutes
### 2025-04-15
#### PASS 14 minutes
### 2025-04-16
#### PASS 18 minutes
#### PASS 21 minutes
### 2025-04-17
#### PASS 13 minutes
### 2025-04-18
#### PASS 14 minutes
### 2025-04-19
#### PASS 18 minutes
### 2025-04-20
#### PASS 18 minutes
### 2025-04-21
#### PASS 20 minutes
### 2025-04-22
#### PASS 16 minutes
### 2025-04-23
#### PASS 15 minutes
### 2025-04-24
#### PASS 14 minutes
### 2025-04-25
#### PASS 14 minutes
### 2025-04-26
#### PASS 17 minutes
### 2025-04-27
#### PASS 20 minutes
### 2025-04-28
#### PASS 14 minutes
### 2025-04-29
#### PASS 15 minutes
### 2025-04-30
#### PASS 17 minutes
### 2025-05-01
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 14 minutes
#### PASS 17 minutes
### 2025-05-02
#### PASS 20 minutes
### 2025-05-03
#### PASS 16 minutes
### 2025-05-04
#### PASS 16 minutes
### 2025-05-05
#### PASS 16 minutes
### 2025-05-06
#### PASS 16 minutes
### 2025-05-07
#### PASS 16 minutes
### 2025-05-08
#### PASS 18 minutes
### 2025-05-09
#### PASS 16 minutes
### 2025-05-10
#### PASS 14 minutes
### 2025-05-11
#### FAIL 2 seconds
```
2025-05-11T00:30:01.7930584Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-05-11T00:30:01.8184722Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-05-11T00:30:01.8227330Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-05-11T00:30:01.8227890Z     resource_advanced_cluster_test.go:661: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:01.8228297Z         
2025-05-11T00:30:01.8228690Z         Error: error creating project: test-acc-tf-p-51512495933826100
2025-05-11T00:30:01.8229023Z         
2025-05-11T00:30:01.8229360Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:01.8230014Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:01.8230613Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:01.8230915Z         
2025-05-11T00:30:01.8231571Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8231964Z         type
2025-05-11T00:30:01.8237119Z    test_name=TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard test_terraform_path=/home/runner/work/_temp/61c56429-49c6-424f-b94f-1956389e6696/terraform test_working_directory=/tmp/plugintest1524052935
2025-05-11T00:30:01.8338058Z --- FAIL: TestAccClusterAdvancedCluster_withTags (2.02s)
```
### 2025-05-12
#### PASS 17 minutes
### 2025-05-13
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-05-14
#### PASS 17 minutes
### 2025-05-15
#### PASS 15 minutes
### 2025-05-16
#### PASS 16 minutes
### 2025-05-17
#### PASS 13 minutes
### 2025-05-18
#### PASS 13 minutes
### 2025-05-19
#### PASS 14 minutes
### 2025-05-20
#### PASS 14 minutes
### 2025-05-21
#### PASS 16 minutes
#### PASS 14 minutes
### 2025-05-22
#### PASS 15 minutes
### 2025-05-23
#### PASS 16 minutes
### 2025-05-24
#### PASS 14 minutes
### 2025-05-25
#### PASS 16 minutes
### 2025-05-26
#### PASS 15 minutes
### 2025-05-27
#### PASS 13 minutes
### 2025-05-28
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 18 minutes
### 2025-05-29
#### PASS 24 minutes
### 2025-05-30
#### PASS 21 minutes
#### PASS 13 minutes
### 2025-05-31
#### PASS 13 minutes
### 2025-06-01
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-06-02
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 14 minutes
### 2025-06-03
#### PASS 17 minutes
### 2025-06-04
#### PASS 15 minutes
### 2025-06-05
#### FAIL 6 seconds
```
2025-06-05T00:35:38.5883608Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-06-05T00:35:38.5944706Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-06-05T00:35:38.6603151Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-06-05T00:35:38.6603509Z     resource_advanced_cluster_test.go:664: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6603603Z         
2025-06-05T00:35:38.6603902Z         Error: error creating project: test-acc-tf-p-6966488461440669605
2025-06-05T00:35:38.6603993Z         
2025-06-05T00:35:38.6604234Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:38.6604688Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:38.6605100Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:38.6605196Z         
2025-06-05T00:35:38.6605555Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6605887Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6606184Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6606352Z --- FAIL: TestAccClusterAdvancedCluster_withTags (6.90s)
```
### 2025-06-06
#### PASS 17 minutes
### 2025-06-07
#### PASS 18 minutes
### 2025-06-08
#### PASS 16 minutes
### 2025-06-09
#### PASS 17 minutes
### 2025-06-10
#### PASS 20 minutes
### 2025-06-11
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-06-12
#### PASS 15 minutes
### 2025-06-13
#### PASS 14 minutes
### 2025-06-14
#### PASS 14 minutes
### 2025-06-15
#### PASS 15 minutes
### 2025-06-16
#### PASS 21 minutes
### 2025-06-17
#### PASS 14 minutes
### 2025-06-18
#### PASS 16 minutes
#### PASS 14 minutes
### 2025-06-19
#### PASS 42 minutes
### 2025-06-20
#### PASS 15 minutes
### 2025-06-21
#### PASS 13 minutes
### 2025-06-22
#### PASS 16 minutes
### 2025-06-23
#### PASS 15 minutes
### 2025-06-24
#### PASS 18 minutes
### 2025-06-25
#### PASS 13 minutes
### 2025-06-26
#### PASS 38 minutes
#### PASS 14 minutes
### 2025-06-27
#### PASS 15 minutes
### 2025-06-28
#### PASS 14 minutes
### 2025-06-29
#### FAIL 20 minutes
```
2025-06-29T02:02:46.2847412Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-06-29T02:02:46.2888768Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-06-29T02:02:46.3078654Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-06-29T02:02:46.3079581Z     resource_advanced_cluster_test.go:664: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-06-29T02:02:46.3080319Z         
2025-06-29T02:02:46.3080709Z         Error: error when getting project properties after create
2025-06-29T02:02:46.3081032Z         
2025-06-29T02:02:46.3081360Z           with mongodbatlas_project.cluster_project,
2025-06-29T02:02:46.3082007Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-29T02:02:46.3082588Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-29T02:02:46.3082888Z         
2025-06-29T02:02:46.3083479Z         error getting project (6860911956291349dce6faab): error getting project's
2025-06-29T02:02:46.3083917Z         limits (6860911956291349dce6faab):
2025-06-29T02:02:46.3084479Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860911956291349dce6faab/limits
2025-06-29T02:02:46.3085363Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T02:02:46.3085923Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T02:02:46.3086297Z         BadRequestDetail: 
2025-06-29T02:02:46.3134318Z --- FAIL: TestAccClusterAdvancedCluster_withTags (1201.22s)
```
### 2025-06-30
#### PASS 16 minutes
### 2025-07-01
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 14 minutes
### 2025-07-02
#### PASS 14 minutes
### 2025-07-03
#### PASS 15 minutes
### 2025-07-04
#### PASS 19 minutes
### 2025-07-05
#### PASS 15 minutes
### 2025-07-06
#### FAIL 13 minutes
```
2025-07-06T01:46:53.5857465Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-06T01:46:53.5911754Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-06T01:46:53.6022080Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-07-06T01:46:53.6022698Z     resource_advanced_cluster_test.go:664: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6023151Z         
2025-07-06T01:46:53.6023518Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6023832Z         
2025-07-06T01:46:53.6024159Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:46:53.6024800Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:46:53.6025389Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:46:53.6025687Z         
2025-07-06T01:46:53.6026113Z         error getting project (6869c9c87267b5775b68563f): error getting project's
2025-07-06T01:46:53.6026577Z         limits (6869c9c87267b5775b68563f):
2025-07-06T01:46:53.6027126Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c87267b5775b68563f/limits
2025-07-06T01:46:53.6028102Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6028669Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6029044Z         BadRequestDetail: 
2025-07-06T01:46:53.6094927Z --- FAIL: TestAccClusterAdvancedCluster_withTags (825.57s)
```
### 2025-07-07
#### PASS 14 minutes
### 2025-07-08
#### PASS 14 minutes
### 2025-07-09
#### PASS 15 minutes