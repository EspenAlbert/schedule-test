# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035280000) |  | dev | timeout | 6005.06s
[2026-02-02 00:38](#error-2026-02-02t0038570000) |  | dev | timeout | 6001.02s
[2026-02-03 00:39](#error-2026-02-03t0039380000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters | dev | out_of_capacity | 6.00s
[2026-02-18 00:39](#error-2026-02-18t0039290000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/69950a3e245f62926c498397/clusters/test-acc-tf-c-4792377203039619698 | dev | flaky_500 | 1077.07s
[2026-02-24 00:37](#error-2026-02-24t0037140000) |  | dev | flaky_500 | 1186.03s

### Timeline
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
- 2026-02-07 PASS 22 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 26 minutes
- 2026-02-10 PASS 23 minutes
- 2026-02-11 PASS 24 minutes
- 2026-02-12 PASS 24 minutes
- 2026-02-13 PASS 25 minutes
- 2026-02-14 PASS 26 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 27 minutes
- 2026-02-17 PASS 24 minutes
- 2026-02-18

### Error 2026-02-18T00:39:29+00:00
```
2026-02-18T00:39:29.5500519Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-18T00:39:29.6465647Z     resource_test.go:962: Adding variable groupId=69950a3e245f62926c498397
2026-02-18T00:39:29.6466733Z     resource_test.go:962: Adding variable clusterName=test-acc-tf-c-4792377203039619698
2026-02-18T00:40:53.4709357Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-18T00:55:08.4995715Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-18T00:55:08.4997303Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-8885010612812436503
2026-02-18T00:55:08.8621083Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-9158154940851693194
2026-02-18T00:55:09.2252825Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-2105232038785838626
2026-02-18T00:55:09.5673722Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-5359485079662244019
2026-02-18T00:55:17.3802454Z   
2026-02-18T00:55:17.3803150Z     resource_test.go:962: Step 2/4 error: Error running apply: exit status 1
2026-02-18T00:55:17.3803560Z         
2026-02-18T00:55:17.3803832Z         Error: Error in update
2026-02-18T00:55:17.3804112Z         
2026-02-18T00:55:17.3804751Z           with mongodbatlas_advanced_cluster.test,
2026-02-18T00:55:17.3805456Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-18T00:55:17.3806104Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-18T00:55:17.3806440Z         
2026-02-18T00:55:17.3806872Z         cluster name: test-acc-tf-c-4792377203039619698, API error details:
2026-02-18T00:55:17.3808040Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69950a3e245f62926c498397/clusters/test-acc-tf-c-4792377203039619698
2026-02-18T00:55:17.3808884Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-02-18T00:55:17.3809588Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-02-18T00:55:17.3810258Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-02-18T00:55:17.3810923Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-02-18T00:55:17.3811763Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-02-18T00:58:51.0583231Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1077.72s)
```

- 2026-02-19 PASS 54 minutes
- 2026-02-20 PASS 25 minutes
- 2026-02-21 PASS 26 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 27 minutes
- 2026-02-24

### Error 2026-02-24T00:37:14+00:00
```
2026-02-24T00:37:14.8712429Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-24T00:37:14.9689867Z     resource_test.go:961: Adding variable groupId=699cf2b8ae2412ce62124f74
2026-02-24T00:37:14.9691225Z     resource_test.go:961: Adding variable clusterName=test-acc-tf-c-3603059138480086814
2026-02-24T00:40:00.5696324Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-24T00:51:47.4285575Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-24T00:51:47.4286718Z     http_mocker_config_capture.go:107: error parsing round trip: invalid character 'u' looking for beginning of value
2026-02-24T00:54:15.4648395Z   
2026-02-24T00:56:30.9983501Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-24T00:56:30.9985489Z     http_mocker_config_capture.go:107: error parsing round trip: invalid character 'u' looking for beginning of value
2026-02-24T00:56:31.1157179Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7915405810147094661
2026-02-24T00:56:33.1113732Z    test_terraform_path=/home/runner/work/_temp/5c6ed455-a3dd-498c-9d5a-daa41eb22591/terraform
2026-02-24T00:56:33.4456521Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-24T00:56:33.4457880Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8892385783428017490
2026-02-24T00:56:35.2972110Z   
2026-02-24T00:56:35.6546270Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-02-24T00:56:35.6547634Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-4729810926423450511
2026-02-24T00:56:37.3979061Z     http_mocker_config_capture.go:107: error parsing round trip: invalid character 'u' looking for beginning of value
2026-02-24T00:56:37.4040632Z   
2026-02-24T00:56:37.4041116Z     resource_test.go:961: Step 1/4 error: Error running apply: exit status 1
2026-02-24T00:56:37.4041844Z         
2026-02-24T00:56:37.4042161Z         Error: error resolving container IDs
2026-02-24T00:56:37.4042663Z         
2026-02-24T00:56:37.4043024Z           with data.mongodbatlas_advanced_cluster.test,
2026-02-24T00:56:37.4043684Z           on terraform_plugin_test.tf line 40, in data "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:56:37.4044311Z           40: 	data "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:56:37.4044622Z         
2026-02-24T00:56:37.4045023Z         cluster name = test-acc-tf-c-3603059138480086814, error details:
2026-02-24T00:56:37.4045744Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2b8ae2412ce62124f74/containers
2026-02-24T00:56:37.4046453Z         GET: HTTP 503 Service Unavailable (Error code: "") Detail:  Reason: . Params:
2026-02-24T00:56:37.4046908Z         [], BadRequestDetail: 
2026-02-24T00:56:37.4047157Z         
2026-02-24T00:56:37.4047590Z         Error: error resolving container IDs
2026-02-24T00:56:37.4047878Z         
2026-02-24T00:56:37.4048228Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:56:37.4048896Z           on terraform_plugin_test.tf line 46, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:56:37.4049502Z           46: 	data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:56:37.4049804Z         
2026-02-24T00:56:37.4050205Z         cluster name = test-acc-tf-c-6594804766817030615, error details:
2026-02-24T00:56:37.4050882Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2b8ae2412ce62124f74/containers
2026-02-24T00:56:37.4051578Z         GET: HTTP 503 Service Unavailable (Error code: "") Detail:  Reason: . Params:
2026-02-24T00:56:37.4052030Z         [], BadRequestDetail: 
2026-02-24T00:56:41.9793842Z   
2026-02-24T00:59:46.7380509Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1186.27s)
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
- 2026-02-01 PASS 28 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 23 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 27 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 31 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 25 minutes
  - PASS 18 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 25 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
