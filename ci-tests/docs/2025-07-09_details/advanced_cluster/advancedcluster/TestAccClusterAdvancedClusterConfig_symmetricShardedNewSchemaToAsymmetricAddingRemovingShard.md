# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 2.00s
2025-06-05 00:35 | dev | 6.08s

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
#### PASS 48 minutes
### 2025-04-11
#### PASS 42 minutes
### 2025-04-12
#### PASS 39 minutes
### 2025-04-13
#### PASS 47 minutes
### 2025-04-14
#### PASS 39 minutes
### 2025-04-15
#### PASS 48 minutes
### 2025-04-16
#### PASS 39 minutes
#### PASS 47 minutes
### 2025-04-17
#### PASS 41 minutes
### 2025-04-18
#### PASS 39 minutes
### 2025-04-19
#### PASS 40 minutes
### 2025-04-20
#### PASS 40 minutes
### 2025-04-21
#### PASS 48 minutes
### 2025-04-22
#### PASS 40 minutes
### 2025-04-23
#### PASS 44 minutes
### 2025-04-24
#### PASS 38 minutes
### 2025-04-25
#### PASS 39 minutes
### 2025-04-26
#### PASS 41 minutes
### 2025-04-27
#### PASS 44 minutes
### 2025-04-28
#### PASS 40 minutes
### 2025-04-29
#### PASS 42 minutes
### 2025-04-30
#### PASS 42 minutes
### 2025-05-01
#### PASS 40 minutes
#### PASS 42 minutes
#### PASS 39 minutes
#### PASS 45 minutes
#### PASS 40 minutes
#### PASS 37 minutes
#### PASS 38 minutes
### 2025-05-02
#### PASS 47 minutes
### 2025-05-03
#### PASS 41 minutes
### 2025-05-04
#### PASS 39 minutes
### 2025-05-05
#### PASS 39 minutes
### 2025-05-06
#### PASS 43 minutes
### 2025-05-07
#### PASS 48 minutes
### 2025-05-08
#### PASS 45 minutes
### 2025-05-09
#### PASS 44 minutes
### 2025-05-10
#### PASS 41 minutes
### 2025-05-11
#### FAIL 2 seconds
```
2025-05-11T00:30:10.6538834Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-05-11T00:30:11.3744716Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-05-11T00:30:13.2773249Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-05-11T00:30:13.2774660Z     resource_advanced_cluster_test.go:859: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:13.2775621Z         
2025-05-11T00:30:13.2776341Z         Error: error creating project: test-acc-tf-p-4737542361250762438
2025-05-11T00:30:13.2776933Z         
2025-05-11T00:30:13.2777501Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:13.2778654Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:13.2779710Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:13.2780242Z         
2025-05-11T00:30:13.2781310Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:13.2782011Z         type
2025-05-11T00:30:13.2819235Z   
2025-05-11T00:30:13.3836067Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (2.01s)
```
### 2025-05-12
#### PASS 39 minutes
### 2025-05-13
#### PASS 41 minutes
#### PASS 37 minutes
### 2025-05-14
#### PASS 43 minutes
### 2025-05-15
#### PASS 44 minutes
### 2025-05-16
#### PASS 41 minutes
### 2025-05-17
#### PASS 40 minutes
### 2025-05-18
#### PASS 38 minutes
### 2025-05-19
#### PASS 40 minutes
### 2025-05-20
#### PASS 41 minutes
### 2025-05-21
#### PASS 44 minutes
### 2025-05-22
#### PASS 40 minutes
### 2025-05-23
#### PASS 48 minutes
### 2025-05-24
#### PASS 42 minutes
### 2025-05-25
#### PASS 41 minutes
### 2025-05-26
#### PASS 44 minutes
### 2025-05-27
#### PASS 42 minutes
### 2025-05-28
#### PASS 43 minutes
#### PASS 43 minutes
#### PASS 44 minutes
### 2025-05-29
#### PASS 49 minutes
#### PASS 40 minutes
### 2025-05-30
#### PASS an hour
#### PASS 48 minutes
### 2025-05-31
#### PASS 43 minutes
### 2025-06-01
#### PASS 40 minutes
#### PASS 42 minutes
#### PASS 42 minutes
#### PASS 42 minutes
#### PASS 43 minutes
#### PASS 41 minutes
### 2025-06-02
#### PASS 45 minutes
#### PASS 44 minutes
#### PASS 41 minutes
### 2025-06-03
#### PASS 44 minutes
### 2025-06-04
#### PASS 44 minutes
### 2025-06-05
#### FAIL 6 seconds
```
2025-06-05T00:35:35.4286560Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-05T00:35:42.8649679Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-05T00:35:49.5485370Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-05T00:35:49.5486441Z     resource_advanced_cluster_test.go:862: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:49.5487035Z         
2025-06-05T00:35:49.5487452Z         Error: error creating project: test-acc-tf-p-5116269036270457749
2025-06-05T00:35:49.5487970Z         
2025-06-05T00:35:49.5488587Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:49.5489649Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:49.5490596Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:49.5491142Z         
2025-06-05T00:35:49.5491969Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:49.5493444Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:49.5494473Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:49.6164240Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (6.78s)
```
### 2025-06-06
#### PASS an hour
### 2025-06-07
#### PASS 47 minutes
### 2025-06-08
#### PASS 42 minutes
### 2025-06-09
#### PASS 58 minutes
### 2025-06-10
#### PASS 49 minutes
### 2025-06-11
#### PASS 44 minutes
#### PASS 51 minutes
### 2025-06-12
#### PASS 49 minutes
### 2025-06-13
#### PASS 44 minutes
### 2025-06-14
#### PASS 46 minutes
### 2025-06-15
#### PASS 44 minutes
### 2025-06-16
#### PASS 46 minutes
### 2025-06-17
#### PASS 48 minutes
### 2025-06-18
#### PASS 44 minutes
#### PASS 43 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 46 minutes
### 2025-06-21
#### PASS 44 minutes
### 2025-06-22
#### PASS 50 minutes
### 2025-06-23
#### PASS 41 minutes
### 2025-06-24
#### PASS 49 minutes
### 2025-06-25
#### PASS 43 minutes
### 2025-06-26
#### PASS 44 minutes
### 2025-06-27
#### PASS 59 minutes
### 2025-06-28
#### PASS 42 minutes
### 2025-06-29
#### PASS 48 minutes
### 2025-06-30
#### PASS 45 minutes
### 2025-07-01
#### PASS 41 minutes
#### PASS 45 minutes
#### PASS 43 minutes
#### PASS 41 minutes
#### PASS 59 minutes
### 2025-07-02
#### PASS 41 minutes
### 2025-07-03
#### PASS 43 minutes
### 2025-07-04
#### PASS 44 minutes
### 2025-07-05
#### PASS 44 minutes
### 2025-07-06
#### PASS 37 minutes
### 2025-07-07
#### PASS 42 minutes
### 2025-07-08
#### PASS 44 minutes
### 2025-07-09
#### PASS 42 minutes