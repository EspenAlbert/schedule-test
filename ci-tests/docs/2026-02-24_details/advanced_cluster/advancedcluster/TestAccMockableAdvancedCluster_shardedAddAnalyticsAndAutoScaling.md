# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035280000) |  | dev | timeout | 10805.04s
[2026-02-02 00:38](#error-2026-02-02t0038570000) |  | dev | timeout | 10806.09s
[2026-02-03 00:39](#error-2026-02-03t0039380000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters | dev | out_of_capacity | 6.04s
[2026-02-24 00:37](#error-2026-02-24t0037140000) |  | dev | flaky_500 | 1448.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 27 minutes
- 2026-01-27 PASS 29 minutes
- 2026-01-28 PASS 31 minutes
- 2026-01-29 PASS 42 minutes
- 2026-01-30 PASS 49 minutes
- 2026-01-31

### Error 2026-01-31T00:35:28+00:00
```
2026-01-31T00:35:28.8416069Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-01-31T00:35:28.9398673Z     resource_test.go:1010: Adding variable clusterName=test-acc-tf-c-7259004086077037423
2026-01-31T00:35:28.9399705Z     resource_test.go:1010: Adding variable groupId=697d4e4eff188f1e45c520bf
2026-01-31T00:36:56.1572559Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-01-31T03:37:01.3631048Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-01-31T03:37:01.3633143Z     resource_test.go:1010: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:01.3634125Z         
2026-01-31T03:37:01.3634683Z         Error: Error in create
2026-01-31T03:37:01.3635097Z         
2026-01-31T03:37:01.3635811Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.3637322Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.3638533Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.3639034Z         
2026-01-31T03:37:01.3639980Z         cluster=test-acc-tf-c-7259004086077037423 didn't reach desired state: IDLE,
2026-01-31T03:37:01.3641100Z         error: context deadline exceeded
2026-01-31T03:37:01.4720203Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (10805.42s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:57+00:00
```
2026-02-02T00:38:57.4245268Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-02T00:38:57.5293383Z     resource_test.go:1010: Adding variable groupId=697ff21e71768356d7f8cd02
2026-02-02T00:38:57.5295154Z     resource_test.go:1010: Adding variable clusterName=test-acc-tf-c-8169555708823590288
2026-02-02T00:40:19.9949446Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-02T00:40:22.2161019Z   diagnostic_detail=
2026-02-02T00:40:22.2170398Z    diagnostic_summary="Missing Configuration for Required Attribute" tf_rpc=ValidateResourceConfig tf_resource_type=mongodbatlas_advanced_cluster tf_req_id=31061ba4-c15d-f2e8-5fe8-531e2d41c462 diagnostic_severity=ERROR diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")"
2026-02-02T03:40:26.6086768Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-02T03:40:26.6088015Z     resource_test.go:1010: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:40:26.6088789Z         
2026-02-02T03:40:26.6089240Z         Error: Error in create
2026-02-02T03:40:26.6089688Z         
2026-02-02T03:40:26.6090302Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.6091871Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.6093275Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.6093875Z         
2026-02-02T03:40:26.6094743Z         cluster=test-acc-tf-c-8169555708823590288 didn't reach desired state: IDLE,
2026-02-02T03:40:26.6095641Z         error: context deadline exceeded
2026-02-02T03:40:26.6156541Z    test_name=TestAccAdvancedCluster_effectiveBothAutoScalingEnabled test_terraform_path=/home/runner/work/_temp/88686103-8137-4ab0-af0d-786a02dc3665/terraform test_working_directory=/tmp/plugintest1527967262 test_step_number=1
2026-02-02T03:40:26.7879289Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (10806.89s)
```

- 2026-02-03

### Error 2026-02-03T00:39:38+00:00
```
2026-02-03T00:39:38.9304244Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-03T00:39:39.0466627Z     resource_test.go:1010: Adding variable groupId=698143c8b2e54ee99590ed7c
2026-02-03T00:39:39.0467530Z     resource_test.go:1010: Adding variable clusterName=test-acc-tf-c-8000620154952710872
2026-02-03T00:42:03.6996448Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-03T00:42:09.5316404Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-03T00:42:09.5317527Z     resource_test.go:1010: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:09.5330150Z         
2026-02-03T00:42:09.5330645Z         Error: Error in create
2026-02-03T00:42:09.5331082Z         
2026-02-03T00:42:09.5331672Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.5332886Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.5334020Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.5334582Z         
2026-02-03T00:42:09.5335341Z         cluster name: test-acc-tf-c-8000620154952710872, API error details:
2026-02-03T00:42:09.5336568Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters
2026-02-03T00:42:09.5337822Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.5339112Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.5340040Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.5351674Z   
2026-02-03T00:42:09.9237032Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (6.36s)
```

- 2026-02-04 PASS 36 minutes
- 2026-02-05 PASS 41 minutes
- 2026-02-06 PASS 38 minutes
- 2026-02-07 PASS 34 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 40 minutes
- 2026-02-10 PASS 34 minutes
- 2026-02-11 PASS 34 minutes
- 2026-02-12 PASS 39 minutes
- 2026-02-13 PASS 37 minutes
- 2026-02-14 PASS 55 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 38 minutes
- 2026-02-17 PASS 36 minutes
- 2026-02-18 PASS 39 minutes
- 2026-02-19 PASS 57 minutes
- 2026-02-20 PASS 38 minutes
- 2026-02-21 PASS 39 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 39 minutes
- 2026-02-24

### Error 2026-02-24T00:37:14+00:00
```
2026-02-24T00:37:14.9702605Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-24T00:37:15.0645219Z     resource_test.go:1009: Adding variable groupId=699cf2b8ae2412ce62124f74
2026-02-24T00:37:15.0646537Z     resource_test.go:1009: Adding variable clusterName=test-acc-tf-c-4729810926423450511
2026-02-24T00:40:00.5494817Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-24T01:00:28.3670181Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-24T01:00:28.3671524Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7915405810147094661
2026-02-24T01:00:29.0906373Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6594804766817030615
2026-02-24T01:00:35.0351096Z     http_mocker_config_capture.go:107: error parsing round trip: invalid character 'u' looking for beginning of value
2026-02-24T01:00:35.0461232Z   
2026-02-24T01:00:35.0461775Z     resource_test.go:1009: Step 2/4 error: Error running apply: exit status 1
2026-02-24T01:00:35.0462178Z         
2026-02-24T01:00:35.0462665Z         Error: Error in update
2026-02-24T01:00:35.0462921Z         
2026-02-24T01:00:35.0463291Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T01:00:35.0464059Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T01:00:35.0464818Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T01:00:35.0465266Z         
2026-02-24T01:00:35.0466100Z         cluster name: test-acc-tf-c-4729810926423450511, API error details:
2026-02-24T01:00:35.0467258Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2b8ae2412ce62124f74/clusters/test-acc-tf-c-4729810926423450511
2026-02-24T01:00:35.0468107Z         PATCH: HTTP 503 Service Unavailable (Error code: "") Detail:  Reason: .
2026-02-24T01:00:35.0468567Z         Params: [], BadRequestDetail: 
2026-02-24T01:04:08.6968846Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (1448.24s)
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
- 2026-02-01 PASS 31 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 25 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 31 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 35 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 29 minutes
  - PASS 21 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 29 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
