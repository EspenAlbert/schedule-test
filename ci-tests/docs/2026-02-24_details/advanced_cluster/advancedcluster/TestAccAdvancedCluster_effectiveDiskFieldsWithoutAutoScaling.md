# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10804.09s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10806.02s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 6.04s
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1204.03s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 28 minutes
- 2026-01-27 PASS 27 minutes
- 2026-01-28 PASS 31 minutes
- 2026-01-29 PASS 35 minutes
- 2026-01-30 PASS 44 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.5978477Z === RUN   TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-01-31T00:36:56.1884795Z === CONT  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-01-31T03:37:00.9786268Z === NAME  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-01-31T03:37:00.9787428Z     effective_fields_test.go:171: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:00.9788154Z         
2026-01-31T03:37:00.9788812Z         Error: Error in create
2026-01-31T03:37:00.9789225Z         
2026-01-31T03:37:00.9789801Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:00.9791271Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:00.9792409Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:00.9792986Z         
2026-01-31T03:37:00.9794036Z         cluster=test-acc-tf-c-249320363031384013 didn't reach desired state: IDLE,
2026-01-31T03:37:00.9794959Z         error: context deadline exceeded
2026-01-31T03:37:00.9906524Z    test_working_directory=/tmp/plugintest3367549863 test_step_number=1 test_name=TestAccClusterAdvancedClusterConfig_selfManagedSharding test_terraform_path=/home/runner/work/_temp/a98837fb-4834-47ae-962e-ff5640ce5c32/terraform
2026-01-31T03:37:01.0411376Z --- FAIL: TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling (10804.86s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.9980410Z === RUN   TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-02T00:40:19.9015240Z === CONT  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-02T03:40:25.9900752Z === NAME  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-02T03:40:25.9901981Z     effective_fields_test.go:171: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:25.9903187Z         
2026-02-02T03:40:25.9903637Z         Error: Error in create
2026-02-02T03:40:25.9904105Z         
2026-02-02T03:40:25.9904724Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:25.9906020Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:25.9907238Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:25.9907843Z         
2026-02-02T03:40:25.9908724Z         cluster=test-acc-tf-c-4850267927784388483 didn't reach desired state: IDLE,
2026-02-02T03:40:25.9909635Z         error: context deadline exceeded
2026-02-02T03:40:26.0803312Z --- FAIL: TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling (10806.19s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8827710Z === RUN   TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-03T00:42:03.6359054Z === CONT  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-03T00:42:09.6398864Z === NAME  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-03T00:42:09.6399995Z     effective_fields_test.go:171: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.6400696Z         
2026-02-03T00:42:09.6401116Z         Error: Error in create
2026-02-03T00:42:09.6401541Z         
2026-02-03T00:42:09.6402103Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.6403348Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.6404694Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.6405269Z         
2026-02-03T00:42:09.6406017Z         cluster name: test-acc-tf-c-5151174404700815520, API error details:
2026-02-03T00:42:09.6406995Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bcb2e54ee995907038/clusters
2026-02-03T00:42:09.6408181Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.6409417Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.6410295Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.6758656Z    test_terraform_path=/home/runner/work/_temp/1396652e-b654-4378-a4d9-60ca59d3b556/terraform test_name=TestAccAdvancedCluster_effectiveBasic
2026-02-03T00:42:10.0200068Z --- FAIL: TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling (6.39s)
```

- 2026-02-04 PASS 32 minutes
- 2026-02-05 PASS 32 minutes
- 2026-02-06 PASS 34 minutes
- 2026-02-07 PASS 29 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 30 minutes
- 2026-02-10 PASS 30 minutes
- 2026-02-11 PASS 32 minutes
- 2026-02-12 PASS 27 minutes
- 2026-02-13 PASS 29 minutes
- 2026-02-14 PASS 29 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 30 minutes
- 2026-02-17 PASS 30 minutes
- 2026-02-18 PASS 31 minutes
- 2026-02-19 PASS 42 minutes
- 2026-02-20 PASS 31 minutes
- 2026-02-21 PASS 30 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 32 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5620143Z === RUN   TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-24T00:40:00.6206611Z === CONT  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-24T00:57:01.7054160Z === NAME  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-02-24T00:57:01.7054832Z     effective_fields_test.go:171: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:57:01.7055327Z         
2026-02-24T00:57:01.7055843Z         Error: error resolving container IDs
2026-02-24T00:57:01.7056139Z         
2026-02-24T00:57:01.7056517Z           with data.mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:01.7057377Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:01.7058011Z           39: 		data "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:01.7058549Z         
2026-02-24T00:57:01.7059007Z         cluster name = test-acc-tf-c-1188194062925392527, error details: (503 Service
2026-02-24T00:57:01.7059643Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:01.7060018Z         
2026-02-24T00:57:01.7060330Z         Error: error reading advanced cluster list
2026-02-24T00:57:01.7060620Z         
2026-02-24T00:57:01.7060969Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:01.7061631Z           on terraform_plugin_test.tf line 47, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:01.7062236Z           47: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:01.7062764Z         
2026-02-24T00:57:01.7063228Z         project ID 699cf2a9ae2412ce6211a607. Error (503 Service Unavailable) failed
2026-02-24T00:57:01.7063773Z         to decode response body: undefined response type
2026-02-24T00:57:07.1034930Z    test_name=TestAccClusterAdvancedCluster_defaultWrite test_terraform_path=/home/runner/work/_temp/5c6ed455-a3dd-498c-9d5a-daa41eb22591/terraform test_working_directory=/tmp/plugintest1638339041 test_step_number=1
2026-02-24T01:00:04.9010781Z --- FAIL: TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling (1204.30s)
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
- 2026-02-01 PASS 30 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 28 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 33 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 27 minutes
  - PASS 25 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 27 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
