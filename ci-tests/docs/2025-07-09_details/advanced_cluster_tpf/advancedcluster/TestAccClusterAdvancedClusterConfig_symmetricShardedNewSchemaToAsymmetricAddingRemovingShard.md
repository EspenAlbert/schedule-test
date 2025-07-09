# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 4)
Success rate: 96.58%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 2.00s
2025-06-05 00:35 | dev | 8.08s
2025-06-06 05:30 | dev | 978.01s
2025-06-29 02:02 | qa | 1214.05s

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
#### PASS 46 minutes
### 2025-04-11
#### PASS 45 minutes
### 2025-04-12
#### PASS 40 minutes
### 2025-04-13
#### PASS 46 minutes
### 2025-04-14
#### PASS 35 minutes
### 2025-04-15
#### PASS 53 minutes
### 2025-04-16
#### PASS 36 minutes
#### PASS 46 minutes
### 2025-04-17
#### PASS 44 minutes
### 2025-04-18
#### PASS 38 minutes
### 2025-04-19
#### PASS 41 minutes
### 2025-04-20
#### PASS 40 minutes
### 2025-04-21
#### PASS 43 minutes
### 2025-04-22
#### PASS 38 minutes
### 2025-04-23
#### PASS 42 minutes
### 2025-04-24
#### PASS 40 minutes
### 2025-04-25
#### PASS 41 minutes
### 2025-04-26
#### PASS 39 minutes
### 2025-04-27
#### PASS 42 minutes
### 2025-04-28
#### PASS 48 minutes
### 2025-04-29
#### PASS 37 minutes
### 2025-04-30
#### PASS 48 minutes
### 2025-05-01
#### PASS 38 minutes
#### PASS 42 minutes
#### PASS 41 minutes
#### PASS 41 minutes
#### PASS 38 minutes
#### PASS 43 minutes
#### PASS 39 minutes
### 2025-05-02
#### PASS 45 minutes
### 2025-05-03
#### PASS 44 minutes
### 2025-05-04
#### PASS 38 minutes
### 2025-05-05
#### PASS 39 minutes
### 2025-05-06
#### PASS 44 minutes
### 2025-05-07
#### PASS 42 minutes
### 2025-05-08
#### PASS 45 minutes
### 2025-05-09
#### PASS 45 minutes
### 2025-05-10
#### PASS 39 minutes
### 2025-05-11
#### FAIL 2 seconds
```
2025-05-11T00:30:01.8004380Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-05-11T00:30:01.8180324Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-05-11T00:30:01.8238501Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-05-11T00:30:01.8239272Z     resource_advanced_cluster_test.go:859: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:01.8239668Z         
2025-05-11T00:30:01.8240065Z         Error: error creating project: test-acc-tf-p-1930189081002169381
2025-05-11T00:30:01.8240403Z         
2025-05-11T00:30:01.8240853Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:01.8241621Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:01.8242216Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:01.8242524Z         
2025-05-11T00:30:01.8242966Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8243347Z         type
2025-05-11T00:30:01.8255364Z   
2025-05-11T00:30:01.8337446Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (2.00s)
```
### 2025-05-12
#### PASS 39 minutes
### 2025-05-13
#### PASS 41 minutes
#### PASS 37 minutes
### 2025-05-14
#### PASS 42 minutes
### 2025-05-15
#### PASS 42 minutes
### 2025-05-16
#### PASS 37 minutes
### 2025-05-17
#### PASS 41 minutes
### 2025-05-18
#### PASS 39 minutes
### 2025-05-19
#### PASS 43 minutes
### 2025-05-20
#### PASS 39 minutes
### 2025-05-21
#### PASS 40 minutes
#### PASS 37 minutes
### 2025-05-22
#### PASS 39 minutes
### 2025-05-23
#### PASS 45 minutes
### 2025-05-24
#### PASS 41 minutes
### 2025-05-25
#### PASS 41 minutes
### 2025-05-26
#### PASS 42 minutes
### 2025-05-27
#### PASS 42 minutes
### 2025-05-28
#### PASS 42 minutes
#### PASS 44 minutes
#### PASS 44 minutes
### 2025-05-29
#### PASS 50 minutes
### 2025-05-30
#### PASS an hour
#### PASS 41 minutes
### 2025-05-31
#### PASS 41 minutes
### 2025-06-01
#### PASS 42 minutes
#### PASS 40 minutes
#### PASS 41 minutes
#### PASS 40 minutes
#### PASS 40 minutes
### 2025-06-02
#### PASS 41 minutes
#### PASS 42 minutes
#### PASS 44 minutes
#### PASS 44 minutes
### 2025-06-03
#### PASS 41 minutes
### 2025-06-04
#### PASS 43 minutes
### 2025-06-05
#### FAIL 8 seconds
```
2025-06-05T00:35:38.5894314Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-05T00:35:38.5955236Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-05T00:35:38.6651512Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-05T00:35:38.6651867Z     resource_advanced_cluster_test.go:862: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6651961Z         
2025-06-05T00:35:38.6652268Z         Error: error creating project: test-acc-tf-p-2017785937660426422
2025-06-05T00:35:38.6652462Z         
2025-06-05T00:35:38.6652702Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:38.6653159Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:38.6653442Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:38.6653534Z         
2025-06-05T00:35:38.6653898Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6654228Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6654522Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6654922Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (8.84s)
```
### 2025-06-06
#### FAIL 16 minutes
```
2025-06-06T05:30:18.8761271Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-06T05:30:18.8828516Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-06T05:30:18.8991360Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-06T05:30:18.8992111Z     resource_advanced_cluster_test.go:862: Step 2/4 error: Error running apply: exit status 1
2025-06-06T05:30:18.8992515Z         
2025-06-06T05:30:18.8992762Z         Error: Error in update
2025-06-06T05:30:18.8992996Z         
2025-06-06T05:30:18.8993440Z           with mongodbatlas_advanced_cluster.test,
2025-06-06T05:30:18.8994075Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-06T05:30:18.8994654Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-06T05:30:18.8994953Z         
2025-06-06T05:30:18.8995340Z         cluster name test-acc-tf-c-4349515784716964265. API error detail
2025-06-06T05:30:18.8996165Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68423e18c64ff333daf6e358/clusters/test-acc-tf-c-4349515784716964265
2025-06-06T05:30:18.8996925Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-06T05:30:18.8997522Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-06T05:30:18.8997916Z         BadRequestDetail: 
2025-06-06T05:30:18.9009554Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (978.13s)
```
### 2025-06-07
#### PASS 42 minutes
### 2025-06-08
#### PASS 40 minutes
### 2025-06-09
#### PASS 46 minutes
### 2025-06-10
#### PASS an hour
### 2025-06-11
#### PASS 43 minutes
#### PASS 43 minutes
### 2025-06-12
#### PASS 45 minutes
### 2025-06-13
#### PASS 45 minutes
### 2025-06-14
#### PASS an hour
### 2025-06-15
#### PASS 41 minutes
### 2025-06-16
#### PASS 55 minutes
### 2025-06-17
#### PASS 48 minutes
### 2025-06-18
#### PASS 47 minutes
#### PASS 40 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 44 minutes
### 2025-06-21
#### PASS 43 minutes
### 2025-06-22
#### PASS 55 minutes
### 2025-06-23
#### PASS 39 minutes
### 2025-06-24
#### PASS 43 minutes
### 2025-06-25
#### PASS 41 minutes
### 2025-06-26
#### PASS 49 minutes
#### PASS 40 minutes
### 2025-06-27
#### PASS 56 minutes
### 2025-06-28
#### PASS 43 minutes
### 2025-06-29
#### FAIL 20 minutes
```
2025-06-29T02:02:46.2858130Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-29T02:02:46.2905081Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-29T02:02:46.3053039Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-29T02:02:46.3053870Z     resource_advanced_cluster_test.go:862: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-06-29T02:02:46.3054328Z         
2025-06-29T02:02:46.3054692Z         Error: error when getting project properties after create
2025-06-29T02:02:46.3055011Z         
2025-06-29T02:02:46.3055337Z           with mongodbatlas_project.cluster_project,
2025-06-29T02:02:46.3055973Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-29T02:02:46.3056555Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-29T02:02:46.3056851Z         
2025-06-29T02:02:46.3057276Z         error getting project (6860911949709c3a5a3cba0d): error getting project's
2025-06-29T02:02:46.3057710Z         limits (6860911949709c3a5a3cba0d):
2025-06-29T02:02:46.3058265Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860911949709c3a5a3cba0d/limits
2025-06-29T02:02:46.3058904Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T02:02:46.3059596Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T02:02:46.3060081Z         BadRequestDetail: 
2025-06-29T02:02:46.3134928Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (1214.53s)
```
### 2025-06-30
#### PASS 43 minutes
### 2025-07-01
#### PASS 44 minutes
#### PASS 41 minutes
#### PASS 42 minutes
#### PASS 42 minutes
#### PASS an hour
### 2025-07-02
#### PASS 43 minutes
### 2025-07-03
#### PASS 45 minutes
### 2025-07-04
#### PASS 44 minutes
### 2025-07-05
#### PASS 44 minutes
### 2025-07-06
#### PASS 39 minutes
### 2025-07-07
#### PASS 42 minutes
### 2025-07-08
#### PASS 51 minutes
### 2025-07-09
#### PASS 43 minutes