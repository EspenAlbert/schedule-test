# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035190000) |  | dev | timeout | 10841.00s
[2026-02-02 00:38](#error-2026-02-02t0038490000) |  | dev | timeout | 10851.03s
[2026-02-03 00:39](#error-2026-02-03t0039300000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814461e3c7fce231805a8c/clusters | dev | out_of_capacity | 11.02s
[2026-02-24 00:37](#error-2026-02-24t0037050000) |  | dev | flaky_500 | 1972.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 37 minutes
- 2026-01-27 PASS 43 minutes
- 2026-01-28 PASS 45 minutes
- 2026-01-29 PASS 53 minutes
- 2026-01-30 PASS 55 minutes
- 2026-01-31

### Error 2026-01-31T00:35:19+00:00
```
2026-01-31T00:35:19.7492305Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-01-31T00:36:56.1560116Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-01-31T03:37:05.8941475Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-01-31T03:37:05.8942229Z     resource_test.go:124: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:37:05.8942706Z         
2026-01-31T03:37:05.8943153Z         Error: Error in create
2026-01-31T03:37:05.8943444Z         
2026-01-31T03:37:05.8944064Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:05.8944889Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:05.8945677Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:05.8946267Z         
2026-01-31T03:37:05.8947127Z         cluster=test-acc-tf-c-5849441217820177337 didn't reach desired state: IDLE,
2026-01-31T03:37:05.8947874Z         error: context deadline exceeded
2026-01-31T03:37:06.0267711Z   
2026-01-31T03:37:37.1961284Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10841.04s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:49+00:00
```
2026-02-02T00:38:49.8148946Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-02-02T00:40:19.9758800Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-02-02T03:40:29.8223664Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-02-02T03:40:29.8225180Z     resource_test.go:124: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:40:29.8225966Z         
2026-02-02T03:40:29.8226291Z         Error: Error in create
2026-02-02T03:40:29.8226635Z         
2026-02-02T03:40:29.8227076Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:29.8228110Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:29.8229110Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:29.8229605Z         
2026-02-02T03:40:29.8230227Z         cluster=test-acc-tf-c-6043971166947800490 didn't reach desired state: IDLE,
2026-02-02T03:40:29.8230871Z         error: context deadline exceeded
2026-02-02T03:40:30.0034815Z    test_working_directory=/tmp/plugintest169032050 test_step_number=1 test_name=TestAccClusterAdvancedCluster_withTags
2026-02-02T03:41:11.2587736Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10851.32s)
```

- 2026-02-03

### Error 2026-02-03T00:39:30+00:00
```
2026-02-03T00:39:30.6538307Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-02-03T00:42:03.6227364Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-02-03T00:42:14.0691753Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-02-03T00:42:14.0694486Z     resource_test.go:124: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:42:14.0695654Z         
2026-02-03T00:42:14.0697137Z         Error: Error in create
2026-02-03T00:42:14.0698491Z         
2026-02-03T00:42:14.0700155Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:14.0703259Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:14.0706127Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:14.0706649Z         
2026-02-03T00:42:14.0709057Z         cluster name: test-acc-tf-c-4783487496839146432, API error details:
2026-02-03T00:42:14.0711144Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814461e3c7fce231805a8c/clusters
2026-02-03T00:42:14.0715342Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:14.0718610Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:14.0720348Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:14.8191848Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (11.20s)
```

- 2026-02-04 PASS 53 minutes
- 2026-02-05 PASS 54 minutes
- 2026-02-06 PASS 52 minutes
- 2026-02-07 PASS an hour
- 2026-02-08: MISSING
- 2026-02-09 PASS 57 minutes
- 2026-02-10 PASS an hour
- 2026-02-11 PASS an hour
- 2026-02-12 PASS 55 minutes
- 2026-02-13 PASS 59 minutes
- 2026-02-14 PASS 56 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 57 minutes
- 2026-02-17 PASS an hour
- 2026-02-18 PASS an hour
- 2026-02-19 PASS an hour
- 2026-02-20 PASS an hour
- 2026-02-21 PASS an hour
- 2026-02-22: MISSING
- 2026-02-23 PASS 58 minutes
- 2026-02-24

### Error 2026-02-24T00:37:05+00:00
```
2026-02-24T00:37:05.0255237Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-02-24T00:40:00.5580836Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-02-24T01:12:52.3905362Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-02-24T01:12:52.3906021Z     resource_test.go:123: Step 2/3 error: Error running apply: exit status 1
2026-02-24T01:12:52.3906685Z         
2026-02-24T01:12:52.3907110Z         Error: Error in create
2026-02-24T01:12:52.3907472Z         
2026-02-24T01:12:52.3908237Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T01:12:52.3909536Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T01:12:52.3910652Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T01:12:52.3911208Z         
2026-02-24T01:12:52.3911999Z         cluster name: test-acc-tf-c-1156669425690558421, API error details: (503
2026-02-24T01:12:52.3913449Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:12:53.2037365Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (1972.65s)
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
- 2026-02-01 PASS 45 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 38 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 46 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 46 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 41 minutes
  - PASS 38 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 45 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
