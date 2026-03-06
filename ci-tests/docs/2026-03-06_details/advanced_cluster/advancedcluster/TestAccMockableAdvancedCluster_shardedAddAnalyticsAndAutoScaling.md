# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037140000) |  | dev | flaky_500 | 1448.02s
[2026-02-28 00:35](#error-2026-02-28t0035040000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 7 | dev |  | 1401.09s

### Timeline
- 2026-02-04: MISSING
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

- 2026-02-25 PASS 40 minutes
- 2026-02-26 PASS 47 minutes
- 2026-02-27 PASS 37 minutes
- 2026-02-28

### Error 2026-02-28T00:35:04+00:00
```
2026-02-28T00:35:04.3630913Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-28T00:35:04.4626336Z     resource_test.go:1009: Adding variable groupId=69a238349581f2334150c3a4
2026-02-28T00:35:04.4627676Z     resource_test.go:1009: Adding variable clusterName=test-acc-tf-c-3539388361289415298
2026-02-28T00:36:47.8492100Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-28T00:56:03.7947374Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-02-28T00:56:03.7948731Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7831321649960649947
2026-02-28T00:56:04.1383634Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-4827715424686423459
2026-02-28T00:56:04.8539985Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-1900775915434569770
2026-02-28T00:56:05.3656728Z     resource_test.go:1009: Step 1/4 error: Check failed: Check 7/11 error: data.mongodbatlas_advanced_cluster.test: Attribute 'state_name' expected "IDLE", got "UPDATING"
2026-02-28T01:00:09.5038583Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (1401.92s)
```

- 2026-03-01: MISSING
- 2026-03-02
  - PASS 38 minutes
  - PASS 37 minutes
- 2026-03-03 PASS 42 minutes
- 2026-03-04 PASS 38 minutes
- 2026-03-05 PASS 52 minutes
- 2026-03-06 PASS 39 minutes

## QA Environment
### Timeline
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
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 36 minutes
- 2026-03-02 PASS 23 minutes
- 2026-03-03 PASS 28 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
