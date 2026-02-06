# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035220000) |  | dev | timeout | 10825.08s
[2026-02-02 00:38](#error-2026-02-02t0038510000) |  | dev | timeout | 10845.07s
[2026-02-03 00:39](#error-2026-02-03t0039330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters | dev | out_of_capacity | 35.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
- 2026-01-09 PASS 29 minutes
- 2026-01-10 PASS 20 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 26 minutes
- 2026-01-13 PASS 29 minutes
- 2026-01-14 PASS 23 minutes
- 2026-01-15 PASS 28 minutes
- 2026-01-16 PASS 27 minutes
- 2026-01-17 PASS 22 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 20 minutes
- 2026-01-20 PASS 22 minutes
- 2026-01-21 PASS 30 minutes
- 2026-01-22 PASS 30 minutes
- 2026-01-23 PASS 29 minutes
- 2026-01-24 PASS 20 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 22 minutes
- 2026-01-27 PASS 24 minutes
- 2026-01-28 PASS 25 minutes
- 2026-01-29 PASS 31 minutes
- 2026-01-30 PASS 38 minutes
- 2026-01-31

### Error 2026-01-31T00:35:22+00:00
```
2026-01-31T00:35:22.4150218Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-31T00:36:56.1507230Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-31T00:37:21.1484494Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-31T00:37:21.1486227Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:21.148219971Z, ProjectID: 697d4e477d00588dcf9f3a06, Cluster name: test-acc-tf-c-5925448429234336201
2026-01-31T03:37:21.8389723Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-31T03:37:21.8390704Z     resource_test.go:194: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:21.8391706Z         
2026-01-31T03:37:21.8392107Z         Error: Error in create
2026-01-31T03:37:21.8392386Z         
2026-01-31T03:37:21.8392733Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:21.8393427Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:21.8396380Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:21.8396738Z         
2026-01-31T03:37:21.8397220Z         cluster=test-acc-tf-c-5925448429234336201 didn't reach desired state: IDLE,
2026-01-31T03:37:21.8397723Z         error: context deadline exceeded
2026-01-31T03:37:21.8956296Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10825.75s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:51+00:00
```
2026-02-02T00:38:51.9704186Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-02T00:40:19.9757218Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-02T00:41:04.9223766Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-02T00:41:04.9226759Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:41:04.921981608Z, ProjectID: 697ff219197cc66080b0f49b, Cluster name: test-acc-tf-c-3575383585798400638
2026-02-02T03:41:05.5358389Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-02T03:41:05.5359245Z     resource_test.go:194: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:41:05.5359817Z         
2026-02-02T03:41:05.5360284Z         Error: Error in create
2026-02-02T03:41:05.5360643Z         
2026-02-02T03:41:05.5361169Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:41:05.5362525Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:41:05.5363496Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:41:05.5363901Z         
2026-02-02T03:41:05.5364480Z         cluster=test-acc-tf-c-3575383585798400638 didn't reach desired state: IDLE,
2026-02-02T03:41:05.5365081Z         error: context deadline exceeded
2026-02-02T03:41:05.5884357Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10845.65s)
```

- 2026-02-03

### Error 2026-02-03T00:39:33+00:00
```
2026-02-03T00:39:33.6357313Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-03T00:42:03.6225877Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-03T00:42:38.6560820Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-03T00:42:38.6562331Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:38.655721122Z, ProjectID: 698143c2b2e54ee995909f8a, Cluster name: test-acc-tf-c-7926079029766337492
2026-02-03T00:42:39.3947656Z    test_working_directory=/tmp/plugintest1778102371 test_step_number=1 test_name=TestAccClusterAdvancedCluster_unpausedToPaused test_terraform_path=/home/runner/work/_temp/1396652e-b654-4378-a4d9-60ca59d3b556/terraform
2026-02-03T00:42:39.3948998Z     resource_test.go:194: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:39.3949415Z         
2026-02-03T00:42:39.3949729Z         Error: Error in create
2026-02-03T00:42:39.3950434Z         
2026-02-03T00:42:39.3950867Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:39.3951744Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:39.3952412Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:39.3952729Z         
2026-02-03T00:42:39.3953217Z         cluster name: test-acc-tf-c-7926079029766337492, API error details:
2026-02-03T00:42:39.3953965Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters
2026-02-03T00:42:39.3954710Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:39.3955422Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:39.3955919Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:39.4510263Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (35.84s)
```

- 2026-02-04 PASS 34 minutes
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 23 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 20 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 21 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 23 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 22 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
