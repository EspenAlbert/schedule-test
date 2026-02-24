# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035190000) |  | dev | timeout | 10850.07s
[2026-02-02 00:38](#error-2026-02-02t0038490000) |  | dev | timeout | 10825.06s
[2026-02-03 00:39](#error-2026-02-03t0039300000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143beb2e54ee995907df2/clusters | dev | out_of_capacity | 40.08s
[2026-02-24 00:37](#error-2026-02-24t0037050000) |  | dev | flaky_500 | 1235.06s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 56 minutes
- 2026-01-27 PASS an hour
- 2026-01-28 PASS an hour
- 2026-01-29 PASS an hour
- 2026-01-30 PASS an hour
- 2026-01-31

### Error 2026-01-31T00:35:19+00:00
```
2026-01-31T00:35:19.7490157Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-31T00:36:56.2139527Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-31T00:37:46.1506034Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-31T00:37:46.1508218Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:46.150348331Z, ProjectID: 697d4e447d00588dcf9f1901, Cluster name: test-acc-tf-c-8267225134829290661
2026-01-31T03:37:46.8650872Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-31T03:37:46.8651887Z     resource_test.go:73: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:46.8652530Z         
2026-01-31T03:37:46.8652895Z         Error: Error in create
2026-01-31T03:37:46.8653166Z         
2026-01-31T03:37:46.8653531Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:46.8655180Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:46.8655953Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:46.8656296Z         
2026-01-31T03:37:46.8656781Z         cluster=test-acc-tf-c-8267225134829290661 didn't reach desired state: IDLE,
2026-01-31T03:37:46.8657283Z         error: context deadline exceeded
2026-01-31T03:37:46.9185740Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10850.70s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:49+00:00
```
2026-02-02T00:38:49.8146394Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-02T00:40:19.9753825Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-02T00:40:44.9155298Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-02T00:40:44.9160860Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:40:44.915076553Z, ProjectID: 697ff216197cc66080b0d943, Cluster name: test-acc-tf-c-8279345934741430749
2026-02-02T03:40:45.5000505Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-02T03:40:45.5001514Z     resource_test.go:73: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:40:45.5002479Z         
2026-02-02T03:40:45.5002996Z         Error: Error in create
2026-02-02T03:40:45.5003647Z         
2026-02-02T03:40:45.5004195Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:45.5005337Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:45.5006406Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:45.5006937Z         
2026-02-02T03:40:45.5007702Z         cluster=test-acc-tf-c-8279345934741430749 didn't reach desired state: IDLE,
2026-02-02T03:40:45.5008503Z         error: context deadline exceeded
2026-02-02T03:40:45.5508897Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10825.61s)
```

- 2026-02-03

### Error 2026-02-03T00:39:30+00:00
```
2026-02-03T00:39:30.6536873Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-03T00:42:03.6228102Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-03T00:42:43.6563938Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-03T00:42:43.6565537Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:43.656077574Z, ProjectID: 698143beb2e54ee995907df2, Cluster name: test-acc-tf-c-3478228553555373498
2026-02-03T00:42:44.3871901Z   
2026-02-03T00:42:44.3872441Z     resource_test.go:73: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:44.3872908Z         
2026-02-03T00:42:44.3873246Z         Error: Error in create
2026-02-03T00:42:44.3873506Z         
2026-02-03T00:42:44.3873877Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:44.3874516Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:44.3875221Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:44.3875647Z         
2026-02-03T00:42:44.3876050Z         cluster name: test-acc-tf-c-3478228553555373498, API error details:
2026-02-03T00:42:44.3877121Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143beb2e54ee995907df2/clusters
2026-02-03T00:42:44.3877807Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:44.3878445Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:44.3879160Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:44.4452480Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (40.83s)
```

- 2026-02-04 PASS an hour
- 2026-02-05 PASS an hour
- 2026-02-06 PASS an hour
- 2026-02-07 PASS an hour
- 2026-02-08: MISSING
- 2026-02-09 PASS an hour
- 2026-02-10 PASS an hour
- 2026-02-11 PASS an hour
- 2026-02-12 PASS an hour
- 2026-02-13 PASS an hour
- 2026-02-14 PASS an hour
- 2026-02-15: MISSING
- 2026-02-16 PASS an hour
- 2026-02-17 PASS an hour
- 2026-02-18 PASS an hour
- 2026-02-19 PASS an hour
- 2026-02-20 PASS an hour
- 2026-02-21 PASS an hour
- 2026-02-22: MISSING
- 2026-02-23 PASS an hour
- 2026-02-24

### Error 2026-02-24T00:37:05+00:00
```
2026-02-24T00:37:05.0253077Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-24T00:40:00.5613606Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-24T00:40:45.5567648Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-24T00:40:45.5569589Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:45.556496013Z, ProjectID: 699cf2abae2412ce6211b9c0, Cluster name: test-acc-tf-c-7004346955333705883
2026-02-24T00:57:30.9735508Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-24T00:57:30.9736218Z     resource_test.go:72: Step 1/4 error: Error running post-apply non-refresh plan: exit status 1
2026-02-24T00:57:30.9736684Z         
2026-02-24T00:57:30.9737031Z         Error: error reading Advanced Configuration
2026-02-24T00:57:30.9737328Z         
2026-02-24T00:57:30.9737679Z           with data.mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:30.9738331Z           on terraform_plugin_test.tf line 38, in data "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:30.9738922Z           38: 	data "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:30.9739232Z         
2026-02-24T00:57:30.9739668Z         cluster name: test-acc-tf-c-7004346955333705883, API error details: (503
2026-02-24T00:57:30.9740349Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:30.9740749Z         
2026-02-24T00:57:30.9741063Z         Error: error reading Advanced Configuration
2026-02-24T00:57:30.9741356Z         
2026-02-24T00:57:30.9741706Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:30.9742814Z           on terraform_plugin_test.tf line 44, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:30.9743456Z           44: 	data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:30.9743769Z         
2026-02-24T00:57:30.9744215Z         cluster name: test-acc-tf-c-3130186782105040419, API error details: (503
2026-02-24T00:57:30.9744878Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:00:36.1585099Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (1235.60s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 57 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 54 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 56 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS an hour
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 55 minutes
  - PASS 53 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 59 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
