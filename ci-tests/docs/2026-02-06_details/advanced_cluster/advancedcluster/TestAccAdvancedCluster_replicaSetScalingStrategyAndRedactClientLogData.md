# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035280000) |  | dev | timeout | 10840.10s
[2026-02-02 00:38](#error-2026-02-02t0038570000) |  | dev | timeout | 10841.10s
[2026-02-03 00:39](#error-2026-02-03t0039380000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814460e3c7fce2318059b2/clusters | dev | out_of_capacity | 11.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 31 minutes
- 2026-01-09 PASS 36 minutes
- 2026-01-10 PASS 31 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 33 minutes
- 2026-01-13 PASS 36 minutes
- 2026-01-14 PASS 33 minutes
- 2026-01-15 PASS 41 minutes
- 2026-01-16 PASS 38 minutes
- 2026-01-17 PASS 36 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 32 minutes
- 2026-01-20 PASS 35 minutes
- 2026-01-21 PASS 38 minutes
- 2026-01-22 PASS 37 minutes
- 2026-01-23 PASS 37 minutes
- 2026-01-24 PASS 33 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 33 minutes
- 2026-01-27 PASS 35 minutes
- 2026-01-28 PASS 34 minutes
- 2026-01-29 PASS 38 minutes
- 2026-01-30 PASS 46 minutes
- 2026-01-31

### Error 2026-01-31T00:35:28+00:00
```
2026-01-31T00:35:28.7450686Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-01-31T00:36:56.1577136Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-01-31T03:37:06.0268343Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-01-31T03:37:06.0269549Z     resource_test.go:763: Step 1/5 error: Error running apply: exit status 1
2026-01-31T03:37:06.0270225Z         
2026-01-31T03:37:06.0270656Z         Error: Error in create
2026-01-31T03:37:06.0271448Z         
2026-01-31T03:37:06.0272029Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:06.0273294Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:06.0275070Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:06.0275672Z         
2026-01-31T03:37:06.0276976Z         cluster=test-acc-tf-c-8586808963359642475 didn't reach desired state: IDLE,
2026-01-31T03:37:06.0277828Z         error: context deadline exceeded
2026-01-31T03:37:06.3850809Z   
2026-01-31T03:37:37.1229253Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (10840.97s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:57+00:00
```
2026-02-02T00:38:57.3178493Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-02-02T00:40:19.8840953Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-02-02T03:40:30.7976397Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-02-02T03:40:30.7977462Z     resource_test.go:763: Step 1/5 error: Error running apply: exit status 1
2026-02-02T03:40:30.7978029Z         
2026-02-02T03:40:30.7978387Z         Error: Error in create
2026-02-02T03:40:30.7978749Z         
2026-02-02T03:40:30.7979228Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:30.7980243Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:30.7981196Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:30.7981700Z         
2026-02-02T03:40:30.7982629Z         cluster=test-acc-tf-c-1798172674970116912 didn't reach desired state: IDLE,
2026-02-02T03:40:30.7983346Z         error: context deadline exceeded
2026-02-02T03:40:30.8148298Z    test_step_number=1 test_name=TestAccClusterAdvancedCluster_withLabels test_terraform_path=/home/runner/work/_temp/88686103-8137-4ab0-af0d-786a02dc3665/terraform test_working_directory=/tmp/plugintest3871035160
2026-02-02T03:41:01.8409089Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (10841.96s)
```

- 2026-02-03

### Error 2026-02-03T00:39:38+00:00
```
2026-02-03T00:39:38.8182464Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-02-03T00:42:03.6095461Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-02-03T00:42:14.6443635Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-02-03T00:42:14.6444626Z     resource_test.go:763: Step 1/5 error: Error running apply: exit status 1
2026-02-03T00:42:14.6445205Z         
2026-02-03T00:42:14.6445592Z         Error: Error in create
2026-02-03T00:42:14.6445992Z         
2026-02-03T00:42:14.6446494Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:14.6447209Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:14.6448069Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:14.6448415Z         
2026-02-03T00:42:14.6448849Z         cluster name: test-acc-tf-c-754605188208976965, API error details:
2026-02-03T00:42:14.6450295Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814460e3c7fce2318059b2/clusters
2026-02-03T00:42:14.6450972Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:14.6451627Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:14.6452129Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:15.4364812Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11.83s)
```

- 2026-02-04 PASS 41 minutes
- 2026-02-05 PASS 41 minutes
- 2026-02-06 PASS 41 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 30 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 32 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 30 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 30 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 32 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 33 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 31 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
