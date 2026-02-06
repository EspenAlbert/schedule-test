# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035280000) |  | dev | timeout | 6005.06s
[2026-02-02 00:38](#error-2026-02-02t0038570000) |  | dev | timeout | 6001.02s
[2026-02-03 00:39](#error-2026-02-03t0039380000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters | dev | out_of_capacity | 6.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
- 2026-01-09 PASS 32 minutes
- 2026-01-10 PASS 23 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 28 minutes
- 2026-01-13 PASS 33 minutes
- 2026-01-14 PASS 28 minutes
- 2026-01-15 PASS 28 minutes
- 2026-01-16 PASS 34 minutes
- 2026-01-17 PASS 24 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 22 minutes
- 2026-01-20 PASS 26 minutes
- 2026-01-21 PASS 29 minutes
- 2026-01-22 PASS 32 minutes
- 2026-01-23 PASS 28 minutes
- 2026-01-24 PASS 21 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 22 minutes
- 2026-01-27 PASS 27 minutes
- 2026-01-28 PASS 28 minutes
- 2026-01-29 PASS 32 minutes
- 2026-01-30 PASS 39 minutes
- 2026-01-31

### Error 2026-01-31T00:35:28+00:00
```
2026-01-31T00:35:28.7457478Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-01-31T00:35:28.8399637Z     resource_test.go:962: Adding variable groupId=697d4e4eff188f1e45c520bf
2026-01-31T00:35:28.8400966Z     resource_test.go:962: Adding variable clusterName=test-acc-tf-c-6395346231237072650
2026-01-31T00:36:56.1573504Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-01-31T02:17:01.6052050Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-01-31T02:17:01.6053090Z     resource_test.go:962: Step 1/4 error: Error running apply: exit status 1
2026-01-31T02:17:01.6053928Z         
2026-01-31T02:17:01.6054231Z         Error: Error in create
2026-01-31T02:17:01.6054499Z         
2026-01-31T02:17:01.6054983Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T02:17:01.6055867Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T02:17:01.6056752Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T02:17:01.6057165Z         
2026-01-31T02:17:01.6057889Z         cluster=test-acc-tf-c-6395346231237072650 didn't reach desired state: IDLE,
2026-01-31T02:17:01.6058388Z         error: context deadline exceeded
2026-01-31T02:17:01.6527499Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6005.60s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:57+00:00
```
2026-02-02T00:38:57.3193458Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-02T00:38:57.4230743Z     resource_test.go:962: Adding variable groupId=697ff21e71768356d7f8cd02
2026-02-02T00:38:57.4232647Z     resource_test.go:962: Adding variable clusterName=test-acc-tf-c-2390044368498278823
2026-02-02T00:40:26.3530788Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-02T02:20:27.4427776Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-02T02:20:27.4429450Z     resource_test.go:962: Step 1/4 error: Error running apply: exit status 1
2026-02-02T02:20:27.4430347Z         
2026-02-02T02:20:27.4430833Z         Error: Error in create
2026-02-02T02:20:27.4431306Z         
2026-02-02T02:20:27.4431933Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T02:20:27.4433669Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T02:20:27.4434903Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T02:20:27.4435784Z         
2026-02-02T02:20:27.4436683Z         cluster=test-acc-tf-c-2390044368498278823 didn't reach desired state: IDLE,
2026-02-02T02:20:27.4437609Z         error: context deadline exceeded
2026-02-02T02:20:27.5024020Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6001.25s)
```

- 2026-02-03

### Error 2026-02-03T00:39:38+00:00
```
2026-02-03T00:39:38.8187720Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-03T00:39:38.9293026Z     resource_test.go:962: Adding variable groupId=698143c8b2e54ee99590ed7c
2026-02-03T00:39:38.9294288Z     resource_test.go:962: Adding variable clusterName=test-acc-tf-c-8588391809699716092
2026-02-03T00:42:03.7083243Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-03T00:42:09.4449088Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-03T00:42:09.4449937Z     resource_test.go:962: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:09.4450517Z         
2026-02-03T00:42:09.4450876Z         Error: Error in create
2026-02-03T00:42:09.4451214Z         
2026-02-03T00:42:09.4451669Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.4452674Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.4453523Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.4453959Z         
2026-02-03T00:42:09.4454539Z         cluster name: test-acc-tf-c-8588391809699716092, API error details:
2026-02-03T00:42:09.4455860Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters
2026-02-03T00:42:09.4456986Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.4458225Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.4459311Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.4549262Z    test_name=TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-02-03T00:42:09.5946967Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6.01s)
```

- 2026-02-04 PASS 24 minutes
- 2026-02-05 PASS 30 minutes
- 2026-02-06 PASS 28 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 23 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 28 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 23 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 22 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 28 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 28 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 23 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
