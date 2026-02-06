# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035190000) |  | dev | timeout | 10850.07s
[2026-02-02 00:38](#error-2026-02-02t0038490000) |  | dev | timeout | 10825.06s
[2026-02-03 00:39](#error-2026-02-03t0039300000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143beb2e54ee995907df2/clusters | dev | out_of_capacity | 40.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 56 minutes
- 2026-01-09 PASS an hour
- 2026-01-10 PASS 58 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS an hour
- 2026-01-13 PASS an hour
- 2026-01-14 PASS an hour
- 2026-01-15 PASS an hour
- 2026-01-16 PASS an hour
- 2026-01-17 PASS an hour
- 2026-01-18: MISSING
- 2026-01-19 PASS 56 minutes
- 2026-01-20 PASS 57 minutes
- 2026-01-21 PASS an hour
- 2026-01-22 PASS an hour
- 2026-01-23 PASS an hour
- 2026-01-24 PASS 59 minutes
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

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-08 06:25](#error-2026-01-08t0625000000) |  | qa | timeout | 11676.03s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08

### Error 2026-01-08T06:25:00+00:00
```
2026-01-08T06:25:00.4559105Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-08T06:26:28.7861247Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-08T06:26:53.8052304Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-08T06:26:53.8054112Z     pre_check.go:46: Time before creating cluster: 2026-01-08T06:26:53.804973151Z, ProjectID: 695f4db9350788a3ecf55d57, Cluster name: test-acc-tf-c-3228325967616788367
2026-01-08T09:38:32.7392735Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-08T09:38:32.7393646Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2026-01-08T09:38:32.7394221Z         
2026-01-08T09:38:32.7394476Z         Error: Error in update
2026-01-08T09:38:32.7394790Z         
2026-01-08T09:38:32.7395301Z           with mongodbatlas_advanced_cluster.test,
2026-01-08T09:38:32.7396085Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-08T09:38:32.7396815Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-08T09:38:32.7397157Z         
2026-01-08T09:38:32.7397780Z         cluster=test-acc-tf-c-3228325967616788367 didn't reach desired state: IDLE,
2026-01-08T09:38:32.7398602Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-01-08T09:38:32.7399044Z         'UPDATING', timeout: 3h0m0s)
2026-01-08T09:41:05.0639236Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11676.28s)
```

- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 56 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 53 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 54 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 57 minutes
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
