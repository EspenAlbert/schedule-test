# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 2.00s
2025-06-05 00:35 | dev | 6.10s
2025-06-22 01:03 | qa | 38.08s

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
#### PASS 16 minutes
### 2025-04-12
#### PASS 18 minutes
### 2025-04-13
#### PASS 21 minutes
### 2025-04-14
#### PASS 18 minutes
### 2025-04-15
#### PASS 30 minutes
### 2025-04-16
#### PASS 17 minutes
#### PASS 24 minutes
### 2025-04-17
#### PASS 19 minutes
### 2025-04-18
#### PASS 21 minutes
### 2025-04-19
#### PASS 17 minutes
### 2025-04-20
#### PASS 19 minutes
### 2025-04-21
#### PASS 21 minutes
### 2025-04-22
#### PASS 21 minutes
### 2025-04-23
#### PASS 16 minutes
### 2025-04-24
#### PASS 15 minutes
### 2025-04-25
#### PASS 18 minutes
### 2025-04-26
#### PASS 17 minutes
### 2025-04-27
#### PASS 19 minutes
### 2025-04-28
#### PASS 18 minutes
### 2025-04-29
#### PASS 20 minutes
### 2025-04-30
#### PASS 26 minutes
### 2025-05-01
#### PASS 20 minutes
#### PASS 20 minutes
#### PASS 19 minutes
#### PASS 19 minutes
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-05-02
#### PASS 25 minutes
### 2025-05-03
#### PASS 17 minutes
### 2025-05-04
#### PASS 18 minutes
### 2025-05-05
#### PASS 14 minutes
### 2025-05-06
#### PASS 19 minutes
### 2025-05-07
#### PASS 16 minutes
### 2025-05-08
#### PASS 19 minutes
### 2025-05-09
#### PASS 18 minutes
### 2025-05-10
#### PASS 21 minutes
### 2025-05-11
#### FAIL 2 seconds
```
2025-05-11T00:30:10.3038356Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-05-11T00:30:11.3741581Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-05-11T00:30:13.2853701Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-05-11T00:30:13.2854714Z     resource_advanced_cluster_test.go:661: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:13.2855453Z         
2025-05-11T00:30:13.2856440Z         Error: error creating project: test-acc-tf-p-8933163582895573462
2025-05-11T00:30:13.2857129Z         
2025-05-11T00:30:13.2857723Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:13.2858948Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:13.2860051Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:13.2860604Z         
2025-05-11T00:30:13.2861618Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:13.2862294Z         type
2025-05-11T00:30:13.2883578Z   
2025-05-11T00:30:13.4023276Z --- FAIL: TestAccClusterAdvancedCluster_withTags (2.03s)
```
### 2025-05-12
#### PASS 19 minutes
### 2025-05-13
#### PASS 19 minutes
#### PASS 17 minutes
### 2025-05-14
#### PASS 20 minutes
### 2025-05-15
#### PASS 19 minutes
### 2025-05-16
#### PASS 19 minutes
### 2025-05-17
#### PASS 18 minutes
### 2025-05-18
#### PASS 18 minutes
### 2025-05-19
#### PASS 16 minutes
### 2025-05-20
#### PASS 20 minutes
### 2025-05-21
#### PASS 19 minutes
### 2025-05-22
#### PASS 17 minutes
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
#### PASS 15 minutes
#### PASS 18 minutes
#### PASS 18 minutes
### 2025-05-29
#### PASS 23 minutes
#### PASS 15 minutes
### 2025-05-30
#### PASS an hour
#### PASS 14 minutes
### 2025-05-31
#### PASS 18 minutes
### 2025-06-01
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 18 minutes
#### PASS 17 minutes
### 2025-06-02
#### PASS 19 minutes
#### PASS 17 minutes
#### PASS 17 minutes
### 2025-06-03
#### PASS 19 minutes
### 2025-06-04
#### PASS 19 minutes
### 2025-06-05
#### FAIL 6 seconds
```
2025-06-05T00:35:30.3571336Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-06-05T00:35:42.8279262Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-06-05T00:35:49.7515168Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-06-05T00:35:49.7516123Z     resource_advanced_cluster_test.go:664: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:49.7516703Z         
2025-06-05T00:35:49.7517207Z         Error: error creating project: test-acc-tf-p-902905896661601168
2025-06-05T00:35:49.7517571Z         
2025-06-05T00:35:49.7517990Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:49.7518703Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:49.7519382Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:49.7519796Z         
2025-06-05T00:35:49.7520308Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:49.7521005Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:49.7521670Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:49.7961309Z --- FAIL: TestAccClusterAdvancedCluster_withTags (6.98s)
```
### 2025-06-06
#### PASS 22 minutes
### 2025-06-07
#### PASS 22 minutes
### 2025-06-08
#### PASS 17 minutes
### 2025-06-09
#### PASS 17 minutes
### 2025-06-10
#### PASS 14 minutes
### 2025-06-11
#### PASS 16 minutes
#### PASS 19 minutes
### 2025-06-12
#### PASS 19 minutes
### 2025-06-13
#### PASS 20 minutes
### 2025-06-14
#### PASS 26 minutes
### 2025-06-15
#### PASS 20 minutes
### 2025-06-16
#### PASS 22 minutes
### 2025-06-17
#### PASS 18 minutes
### 2025-06-18
#### PASS 24 minutes
#### PASS 19 minutes
### 2025-06-19
#### PASS 54 minutes
### 2025-06-20
#### PASS 19 minutes
### 2025-06-21
#### PASS 19 minutes
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
### 2025-06-24
#### PASS 26 minutes
### 2025-06-25
#### PASS 16 minutes
### 2025-06-26
#### PASS 16 minutes
### 2025-06-27
#### PASS 17 minutes
### 2025-06-28
#### PASS 17 minutes
### 2025-06-29
#### PASS 22 minutes
### 2025-06-30
#### PASS 18 minutes
### 2025-07-01
#### PASS 19 minutes
#### PASS 16 minutes
#### PASS 20 minutes
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-07-02
#### PASS 15 minutes
### 2025-07-03
#### PASS 19 minutes
### 2025-07-04
#### PASS 17 minutes
### 2025-07-05
#### PASS 15 minutes
### 2025-07-06
#### PASS 18 minutes
### 2025-07-07
#### PASS 17 minutes
### 2025-07-08
#### PASS 19 minutes
### 2025-07-09
#### PASS 18 minutes