# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priority Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035280000) |  | dev | timeout | 10805.06s
[2026-02-02 00:38](#error-2026-02-02t0038570000) |  | dev | timeout | 10800.07s
[2026-02-03 00:39](#error-2026-02-03t0039380000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters | dev | out_of_capacity | 6.05s
[2026-02-12 00:38](#error-2026-02-12t0038320000) |  | dev | timeout | 10805.06s
[2026-02-13 00:41](#error-2026-02-13t0041290000) |  | dev | timeout | 10802.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 13 minutes
- 2026-01-27 PASS 21 minutes
- 2026-01-28 PASS 16 minutes
- 2026-01-29 PASS 21 minutes
- 2026-01-30 PASS 32 minutes
- 2026-01-31

### Error 2026-01-31T00:35:28+00:00
```
2026-01-31T00:35:28.7452893Z === RUN   TestAccClusterAdvancedCluster_priority
2026-01-31T00:36:56.1576271Z === CONT  TestAccClusterAdvancedCluster_priority
2026-01-31T03:37:01.5587435Z === NAME  TestAccClusterAdvancedCluster_priority
2026-01-31T03:37:01.5588414Z     resource_test.go:792: Step 2/4 error: Error running apply: exit status 1
2026-01-31T03:37:01.5591976Z         
2026-01-31T03:37:01.5592478Z         Error: Error in create
2026-01-31T03:37:01.5593028Z         
2026-01-31T03:37:01.5598467Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.5599865Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.5606522Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.5608950Z         
2026-01-31T03:37:01.5619312Z         cluster=test-acc-tf-c-4475162684958602545 didn't reach desired state: IDLE,
2026-01-31T03:37:01.5620295Z         error: context deadline exceeded
2026-01-31T03:37:01.7592702Z --- FAIL: TestAccClusterAdvancedCluster_priority (10805.61s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:57+00:00
```
2026-02-02T00:38:57.3183860Z === RUN   TestAccClusterAdvancedCluster_priority
2026-02-02T00:40:27.3612275Z === CONT  TestAccClusterAdvancedCluster_priority
2026-02-02T03:40:28.0481079Z === NAME  TestAccClusterAdvancedCluster_priority
2026-02-02T03:40:28.0481948Z     resource_test.go:792: Step 2/4 error: Error running apply: exit status 1
2026-02-02T03:40:28.0482729Z         
2026-02-02T03:40:28.0483113Z         Error: Error in create
2026-02-02T03:40:28.0483394Z         
2026-02-02T03:40:28.0483791Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:28.0484706Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:28.0485545Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:28.0485994Z         
2026-02-02T03:40:28.0486625Z         cluster=test-acc-tf-c-4884431591729245855 didn't reach desired state: IDLE,
2026-02-02T03:40:28.0487194Z         error: context deadline exceeded
2026-02-02T03:40:28.1003504Z --- FAIL: TestAccClusterAdvancedCluster_priority (10800.74s)
```

- 2026-02-03

### Error 2026-02-03T00:39:38+00:00
```
2026-02-03T00:39:38.8184243Z === RUN   TestAccClusterAdvancedCluster_priority
2026-02-03T00:42:03.7090456Z === CONT  TestAccClusterAdvancedCluster_priority
2026-02-03T00:42:05.9037509Z   diagnostic_detail=
2026-02-03T00:42:05.9045226Z    diagnostic_severity=ERROR tf_rpc=ValidateResourceConfig tf_resource_type=mongodbatlas_advanced_cluster diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" tf_req_id=4e2bc5be-35ef-5480-f34d-35394387c188 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10
2026-02-03T00:42:09.7717383Z === NAME  TestAccClusterAdvancedCluster_priority
2026-02-03T00:42:09.7718303Z     resource_test.go:792: Step 2/4 error: Error running apply: exit status 1
2026-02-03T00:42:09.7721298Z         
2026-02-03T00:42:09.7721729Z         Error: Error in create
2026-02-03T00:42:09.7722161Z         
2026-02-03T00:42:09.7722668Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.7723777Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.7724753Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.7725249Z         
2026-02-03T00:42:09.7725915Z         cluster name: test-acc-tf-c-8601310574155004584, API error details:
2026-02-03T00:42:09.7726991Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters
2026-02-03T00:42:09.7728115Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.7729236Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.7730025Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.7774390Z    test_name=TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-03T00:42:10.1617904Z --- FAIL: TestAccClusterAdvancedCluster_priority (6.46s)
```

- 2026-02-04 PASS 16 minutes
- 2026-02-05 PASS 21 minutes
- 2026-02-06 PASS 19 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 17 minutes
- 2026-02-10 PASS 15 minutes
- 2026-02-11 PASS 17 minutes
- 2026-02-12

### Error 2026-02-12T00:38:32+00:00
```
2026-02-12T00:38:32.4008039Z === RUN   TestAccClusterAdvancedCluster_priority
2026-02-12T00:40:21.7077603Z === CONT  TestAccClusterAdvancedCluster_priority
2026-02-12T00:40:23.7432252Z   diagnostic_detail=
2026-02-12T00:40:23.7437419Z    diagnostic_summary="Missing Configuration for Required Attribute" tf_req_id=bad7d98d-4ef3-8cc9-ec99-7064a844e0b6
2026-02-12T03:40:27.2870198Z === NAME  TestAccClusterAdvancedCluster_priority
2026-02-12T03:40:27.2870949Z     resource_test.go:792: Step 2/4 error: Error running apply: exit status 1
2026-02-12T03:40:27.2871506Z         
2026-02-12T03:40:27.2871869Z         Error: Error in create
2026-02-12T03:40:27.2872124Z         
2026-02-12T03:40:27.2872446Z           with mongodbatlas_advanced_cluster.test,
2026-02-12T03:40:27.2873223Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-12T03:40:27.2873991Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-12T03:40:27.2874311Z         
2026-02-12T03:40:27.2875050Z         cluster=test-acc-tf-c-9207674469570339587 didn't reach desired state: IDLE,
2026-02-12T03:40:27.2875960Z         error: context deadline exceeded
2026-02-12T03:40:27.3317719Z --- FAIL: TestAccClusterAdvancedCluster_priority (10805.64s)
```

- 2026-02-13

### Error 2026-02-13T00:41:29+00:00
```
2026-02-13T00:41:29.5371996Z === RUN   TestAccClusterAdvancedCluster_priority
2026-02-13T00:42:56.6905146Z === CONT  TestAccClusterAdvancedCluster_priority
2026-02-13T03:42:58.8535772Z === NAME  TestAccClusterAdvancedCluster_priority
2026-02-13T03:42:58.8536514Z     resource_test.go:792: Step 2/4 error: Error running apply: exit status 1
2026-02-13T03:42:58.8536918Z         
2026-02-13T03:42:58.8537169Z         Error: Error in create
2026-02-13T03:42:58.8537689Z         
2026-02-13T03:42:58.8538027Z           with mongodbatlas_advanced_cluster.test,
2026-02-13T03:42:58.8539052Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-13T03:42:58.8540052Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-13T03:42:58.8540427Z         
2026-02-13T03:42:58.8540896Z         cluster=test-acc-tf-c-3486288723638837252 didn't reach desired state: IDLE,
2026-02-13T03:42:58.8541387Z         error: context deadline exceeded
2026-02-13T03:42:58.8760254Z    test_name=TestAccClusterAdvancedClusterConfig_selfManagedSharding test_working_directory=/tmp/plugintest2748348170 test_terraform_path=/home/runner/work/_temp/72362bf8-f888-4354-9389-e621466f1705/terraform
2026-02-13T03:42:58.9097148Z --- FAIL: TestAccClusterAdvancedCluster_priority (10802.22s)
```

- 2026-02-14 PASS 17 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 18 minutes
- 2026-02-17 PASS 16 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 20 minutes
- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 16 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 18 minutes
- 2026-02-24 PASS 19 minutes

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
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 17 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 14 minutes
  - PASS 13 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 16 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
