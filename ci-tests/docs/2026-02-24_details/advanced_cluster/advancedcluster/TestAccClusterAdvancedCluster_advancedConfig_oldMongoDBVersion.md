# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035220000) |  | dev | timeout | 10815.07s
[2026-02-02 00:38](#error-2026-02-02t0038510000) |  | dev | timeout | 10835.07s
[2026-02-03 00:39](#error-2026-02-03t0039330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters | dev | out_of_capacity | 25.09s
[2026-02-24 00:37](#error-2026-02-24t0037080000) |  | dev | flaky_500 | 854.10s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 20 minutes
- 2026-01-27 PASS 23 minutes
- 2026-01-28 PASS 21 minutes
- 2026-01-29 PASS 30 minutes
- 2026-01-30 PASS 36 minutes
- 2026-01-31

### Error 2026-01-31T00:35:22+00:00
```
2026-01-31T00:35:22.4156202Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-01-31T00:36:56.1503255Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-01-31T00:37:11.1467964Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-01-31T00:37:11.1469934Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:11.146558471Z, ProjectID: 697d4e477d00588dcf9f3a06, Cluster name: test-acc-tf-c-1685284791822561207
2026-01-31T03:37:11.8173154Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-01-31T03:37:11.8174178Z     resource_test.go:268: Step 2/3 error: Error running apply: exit status 1
2026-01-31T03:37:11.8175129Z         
2026-01-31T03:37:11.8175575Z         Error: Error in create
2026-01-31T03:37:11.8175840Z         
2026-01-31T03:37:11.8176172Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:11.8177194Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:11.8177898Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:11.8178311Z         
2026-01-31T03:37:11.8178895Z         cluster=test-acc-tf-c-1685284791822561207 didn't reach desired state: IDLE,
2026-01-31T03:37:11.8179391Z         error: context deadline exceeded
2026-01-31T03:37:11.8655717Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10815.72s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:51+00:00
```
2026-02-02T00:38:51.9710343Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-02T00:40:19.9755717Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-02T00:40:54.9190308Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-02T00:40:54.9193662Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:40:54.918642157Z, ProjectID: 697ff219197cc66080b0f49b, Cluster name: test-acc-tf-c-3974286348575853799
2026-02-02T03:40:55.5500393Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-02T03:40:55.5501741Z     resource_test.go:268: Step 2/3 error: Error running apply: exit status 1
2026-02-02T03:40:55.5502710Z         
2026-02-02T03:40:55.5503164Z         Error: Error in create
2026-02-02T03:40:55.5503606Z         
2026-02-02T03:40:55.5504413Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:55.5505711Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:55.5506856Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:55.5507384Z         
2026-02-02T03:40:55.5508139Z         cluster=test-acc-tf-c-3974286348575853799 didn't reach desired state: IDLE,
2026-02-02T03:40:55.5508931Z         error: context deadline exceeded
2026-02-02T03:40:55.5986966Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10835.66s)
```

- 2026-02-03

### Error 2026-02-03T00:39:33+00:00
```
2026-02-03T00:39:33.6361128Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-03T00:42:03.6199240Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-03T00:42:28.6553423Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-03T00:42:28.8067737Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:28.654862826Z, ProjectID: 698143c2b2e54ee995909f8a, Cluster name: test-acc-tf-c-1317395241638318345
2026-02-03T00:42:29.4505016Z   
2026-02-03T00:42:29.4505662Z     resource_test.go:268: Step 2/3 error: Error running apply: exit status 1
2026-02-03T00:42:29.4506273Z         
2026-02-03T00:42:29.4506676Z         Error: Error in create
2026-02-03T00:42:29.4507074Z         
2026-02-03T00:42:29.4507577Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:29.4508235Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:29.4509280Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:29.4509804Z         
2026-02-03T00:42:29.4510225Z         cluster name: test-acc-tf-c-1317395241638318345, API error details:
2026-02-03T00:42:29.4510918Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters
2026-02-03T00:42:29.4511587Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:29.4512225Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:29.4512730Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:29.5053321Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (25.89s)
```

- 2026-02-04 PASS 27 minutes
- 2026-02-05 PASS 23 minutes
- 2026-02-06 PASS 16 minutes
- 2026-02-07 PASS 15 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 19 minutes
- 2026-02-10 PASS 15 minutes
- 2026-02-11 PASS 16 minutes
- 2026-02-12 PASS 17 minutes
- 2026-02-13 PASS 16 minutes
- 2026-02-14 PASS 23 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 16 minutes
- 2026-02-18 PASS 18 minutes
- 2026-02-19 PASS 20 minutes
- 2026-02-20 PASS 18 minutes
- 2026-02-21 PASS 19 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:37:08+00:00
```
2026-02-24T00:37:08.6991230Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-24T00:40:00.5503603Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-24T00:40:20.5529589Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-24T00:40:20.5533683Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:20.552707137Z, ProjectID: 699cf2b18dfec41eaa8533ad, Cluster name: test-acc-tf-c-6912266637818348581
2026-02-24T00:54:15.4648957Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-24T00:54:15.4649880Z     resource_test.go:267: Step 2/3 error: Error running apply: exit status 1
2026-02-24T00:54:15.4650389Z         
2026-02-24T00:54:15.4650799Z         Error: Error in update advanced configuration
2026-02-24T00:54:15.4651200Z         
2026-02-24T00:54:15.4651566Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:54:15.4652585Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:54:15.4653329Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:54:15.4653683Z         
2026-02-24T00:54:15.4654245Z         cluster name: test-acc-tf-c-6912266637818348581, API error details: (503
2026-02-24T00:54:15.4655085Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:54:15.5117528Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (854.96s)
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
- 2026-02-01 PASS 19 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 19 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 13 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 21 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
