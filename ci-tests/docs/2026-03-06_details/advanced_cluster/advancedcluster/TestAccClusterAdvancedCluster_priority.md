# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priority Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 00:38](#error-2026-02-12t0038320000) |  | dev | timeout | 10805.06s
[2026-02-13 00:41](#error-2026-02-13t0041290000) |  | dev | timeout | 10802.02s

### Timeline
- 2026-02-04: MISSING
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
- 2026-02-25 PASS 19 minutes
- 2026-02-26 PASS 24 minutes
- 2026-02-27 PASS 19 minutes
- 2026-02-28 PASS 18 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 16 minutes
  - PASS 16 minutes
- 2026-03-03 PASS 21 minutes
- 2026-03-04 PASS 20 minutes
- 2026-03-05 PASS 22 minutes
- 2026-03-06 PASS 21 minutes

## QA Environment
### Timeline
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
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 21 minutes
- 2026-03-02 PASS 13 minutes
- 2026-03-03 PASS 16 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
