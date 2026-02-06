# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035260000) |  | dev | timeout | 10841.05s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10842.01s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814461b2e54ee99592a77b/clusters | dev | out_of_capacity | 10.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09 PASS 22 minutes
- 2026-01-10 PASS 19 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 minutes
- 2026-01-13 PASS 25 minutes
- 2026-01-14 PASS 22 minutes
- 2026-01-15 PASS 20 minutes
- 2026-01-16 PASS 21 minutes
- 2026-01-17 PASS 19 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 20 minutes
- 2026-01-20 PASS 19 minutes
- 2026-01-21 PASS 22 minutes
- 2026-01-22 PASS 25 minutes
- 2026-01-23 PASS 22 minutes
- 2026-01-24 PASS 18 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 21 minutes
- 2026-01-28 PASS 21 minutes
- 2026-01-29 PASS 29 minutes
- 2026-01-30 PASS 38 minutes
- 2026-01-31

### Error 2026-01-31T00:35:26+00:00
```
2026-01-31T00:35:26.6410674Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-01-31T00:36:56.1827158Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-01-31T03:37:06.3851092Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-01-31T03:37:06.3851815Z     resource_test.go:535: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:06.3852436Z         
2026-01-31T03:37:06.3852882Z         Error: Error in create
2026-01-31T03:37:06.3853303Z         
2026-01-31T03:37:06.3854118Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:06.3855218Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:06.3856416Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:06.3856991Z         
2026-01-31T03:37:06.3857525Z         cluster=test-acc-tf-c-7267748504483570544 didn't reach desired state: IDLE,
2026-01-31T03:37:06.3858080Z         error: context deadline exceeded
2026-01-31T03:37:06.3970011Z    test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-01-31T03:37:37.6450200Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (10841.46s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:54+00:00
```
2026-02-02T00:38:54.4573931Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-02-02T00:40:19.8908917Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-02-02T03:40:30.8150535Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-02-02T03:40:30.8151640Z     resource_test.go:535: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:40:30.8152647Z         
2026-02-02T03:40:30.8153179Z         Error: Error in create
2026-02-02T03:40:30.8153709Z         
2026-02-02T03:40:30.8154466Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:30.8155761Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:30.8156926Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:30.8157852Z         
2026-02-02T03:40:30.8158754Z         cluster=test-acc-tf-c-7011507005870562542 didn't reach desired state: IDLE,
2026-02-02T03:40:30.8159708Z         error: context deadline exceeded
2026-02-02T03:40:30.9003724Z   
2026-02-02T03:41:01.9447415Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (10842.06s)
```

- 2026-02-03

### Error 2026-02-03T00:39:36+00:00
```
2026-02-03T00:39:36.1558835Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-02-03T00:42:03.6650734Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-02-03T00:42:13.5993952Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-02-03T00:42:13.5994584Z     resource_test.go:535: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:13.5995052Z         
2026-02-03T00:42:13.5995336Z         Error: Error in create
2026-02-03T00:42:13.5995680Z         
2026-02-03T00:42:13.5996081Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:13.5996714Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:13.5997308Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:13.5997648Z         
2026-02-03T00:42:13.5998053Z         cluster name: test-acc-tf-c-5229501592086339068, API error details:
2026-02-03T00:42:13.5998718Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814461b2e54ee99592a77b/clusters
2026-02-03T00:42:13.5999699Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:13.6000581Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:13.6001086Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:14.3583106Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (10.72s)
```

- 2026-02-04 PASS 20 minutes
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 21 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 16 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 23 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 17 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 25 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
