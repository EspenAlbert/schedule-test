# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035280000) |  | dev | timeout | 10841.00s
[2026-02-02 00:38](#error-2026-02-02t0038570000) |  | dev | timeout | 10842.02s
[2026-02-03 00:39](#error-2026-02-03t0039380000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814461b2e54ee99592a7ad/clusters | dev | out_of_capacity | 11.06s
[2026-02-24 00:37](#error-2026-02-24t0037140000) |  | dev | flaky_500 | 868.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 25 minutes
- 2026-01-27 PASS 27 minutes
- 2026-01-28 PASS 27 minutes
- 2026-01-29 PASS 30 minutes
- 2026-01-30 PASS 42 minutes
- 2026-01-31

### Error 2026-01-31T00:35:28+00:00
```
2026-01-31T00:35:28.7455709Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-31T00:36:56.1574660Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-31T03:37:05.8123861Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-31T03:37:05.8125041Z     resource_test.go:855: Step 1/8 error: Error running apply: exit status 1
2026-01-31T03:37:05.8125514Z         
2026-01-31T03:37:05.8125781Z         Error: Error in create
2026-01-31T03:37:05.8126040Z         
2026-01-31T03:37:05.8126379Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:05.8127217Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:05.8127882Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:05.8128439Z         
2026-01-31T03:37:05.8129018Z         cluster=test-acc-tf-c-2549523247094013115 didn't reach desired state: IDLE,
2026-01-31T03:37:05.8129510Z         error: context deadline exceeded
2026-01-31T03:37:05.8939882Z    test_terraform_path=/home/runner/work/_temp/a98837fb-4834-47ae-962e-ff5640ce5c32/terraform test_working_directory=/tmp/plugintest722464146 test_step_number=1 test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-01-31T03:37:37.1807530Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (10841.03s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:57+00:00
```
2026-02-02T00:38:57.3190667Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-02T00:40:19.9947592Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-02T03:40:30.9004329Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-02T03:40:30.9005476Z     resource_test.go:855: Step 1/8 error: Error running apply: exit status 1
2026-02-02T03:40:30.9006143Z         
2026-02-02T03:40:30.9006561Z         Error: Error in create
2026-02-02T03:40:30.9006966Z         
2026-02-02T03:40:30.9007525Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:30.9008735Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:30.9009862Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:30.9010411Z         
2026-02-02T03:40:30.9011221Z         cluster=test-acc-tf-c-4746897378674388938 didn't reach desired state: IDLE,
2026-02-02T03:40:30.9012194Z         error: context deadline exceeded
2026-02-02T03:40:31.8102821Z   
2026-02-02T03:41:02.1765172Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (10842.19s)
```

- 2026-02-03

### Error 2026-02-03T00:39:38+00:00
```
2026-02-03T00:39:38.8186368Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-03T00:42:03.6994574Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-03T00:42:14.5571929Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-03T00:42:14.5572639Z     resource_test.go:855: Step 1/8 error: Error running apply: exit status 1
2026-02-03T00:42:14.5573075Z         
2026-02-03T00:42:14.5573341Z         Error: Error in create
2026-02-03T00:42:14.5573595Z         
2026-02-03T00:42:14.5573994Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:14.5574695Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:14.5575363Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:14.5575686Z         
2026-02-03T00:42:14.5576182Z         cluster name: test-acc-tf-c-2377095898054824636, API error details:
2026-02-03T00:42:14.5576957Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814461b2e54ee99592a7ad/clusters
2026-02-03T00:42:14.5577787Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:14.5578421Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:14.5579025Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:14.6442157Z    test_terraform_path=/home/runner/work/_temp/1396652e-b654-4378-a4d9-60ca59d3b556/terraform test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-02-03T00:42:15.2645046Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (11.58s)
```

- 2026-02-04 PASS 23 minutes
- 2026-02-05 PASS 27 minutes
- 2026-02-06 PASS 26 minutes
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 24 minutes
- 2026-02-11 PASS 24 minutes
- 2026-02-12 PASS 25 minutes
- 2026-02-13 PASS 30 minutes
- 2026-02-14 PASS 27 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 26 minutes
- 2026-02-17 PASS 23 minutes
- 2026-02-18 PASS 26 minutes
- 2026-02-19 PASS 37 minutes
- 2026-02-20 PASS 25 minutes
- 2026-02-21 PASS 26 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 26 minutes
- 2026-02-24

### Error 2026-02-24T00:37:14+00:00
```
2026-02-24T00:37:14.8710448Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:40:00.5697389Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:51:45.5226403Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:51:45.5227650Z     resource_test.go:854: Step 1/8 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:51:45.5228282Z         
2026-02-24T00:51:45.5228822Z         Error: error when getting project properties after create
2026-02-24T00:51:45.5229166Z         
2026-02-24T00:51:45.5229555Z           with mongodbatlas_project.test,
2026-02-24T00:51:45.5230196Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-02-24T00:51:45.5230890Z           12: 		resource "mongodbatlas_project" "test" {
2026-02-24T00:51:45.5231303Z         
2026-02-24T00:51:45.5231835Z         error getting project (699cf365ae2412ce6213c719): error getting project's IP
2026-02-24T00:51:45.5233018Z         addresses (699cf365ae2412ce6213c719): (503 Service Unavailable) failed to
2026-02-24T00:51:45.5233607Z         decode response body: undefined response type
2026-02-24T00:54:29.2479705Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (868.68s)
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
- 2026-02-01 PASS 26 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 25 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 27 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 26 minutes
  - PASS 18 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 25 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
