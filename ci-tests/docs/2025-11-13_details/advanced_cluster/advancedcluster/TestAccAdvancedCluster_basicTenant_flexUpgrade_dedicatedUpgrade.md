# advanced_cluster/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 27) SKIP(x 4) FAIL TIMEOUT
Success rate: 96.43%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-27 00:30](#error-2025-10-27t0030320000) |  | dev |  | 1114.01s
[2025-10-30 00:28](#error-2025-10-30t0028130000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 23 minutes
- 2025-10-16 PASS 57 minutes
- 2025-10-17 PASS 29 minutes
- 2025-10-18 PASS 26 minutes
- 2025-10-19 PASS 24 minutes
- 2025-10-20
  - PASS 36 minutes
  - PASS an hour
- 2025-10-21 PASS 22 minutes
- 2025-10-22
  - PASS 36 minutes
  - PASS 23 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS 25 minutes
- 2025-10-25 PASS 20 minutes
- 2025-10-26 PASS 24 minutes
- 2025-10-27

### Error 2025-10-27T00:30:32+00:00
```
2025-10-27T00:30:32.8534598Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-27T00:32:21.7053974Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-27T00:33:16.7004947Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-27T00:33:16.7006566Z     pre_check.go:36: Time before creating cluster: 2025-10-27T00:33:16.700222516Z, ProjectID: 68febd265c665f6c63cfc089, Cluster name: test-acc-tf-c-8475298077013739506
2025-10-27T00:50:54.7852782Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-27T00:50:54.7853617Z     resource_test.go:81: Step 3/3 error: Error running apply: exit status 1
2025-10-27T00:50:54.7854104Z         
2025-10-27T00:50:54.7854388Z         Error: Error in flex upgrade
2025-10-27T00:50:54.7854753Z         
2025-10-27T00:50:54.7855315Z           with mongodbatlas_advanced_cluster.test,
2025-10-27T00:50:54.7856119Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-27T00:50:54.7856860Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-27T00:50:54.7857423Z         
2025-10-27T00:50:54.7858006Z         cluster=test-acc-tf-c-8475298077013739506 didn't reach desired state: IDLE,
2025-10-27T00:50:54.7858608Z         error: couldn't find resource (21 retries)
2025-10-27T00:50:55.8256103Z    test_step_number=3 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-27T00:50:55.8256888Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-27T00:50:55.8257642Z         
2025-10-27T00:50:55.8257952Z         Error: Error in flex delete
2025-10-27T00:50:55.8258228Z         
2025-10-27T00:50:55.8258660Z         cluster name: test-acc-tf-c-8475298077013739506, API error details:
2025-10-27T00:50:55.8259305Z         unexpected state 'UPDATING', wanted target 'DELETED'. last error: %!s(<nil>)
2025-10-27T00:50:55.8259869Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1114.12s)
```

- 2025-10-28 PASS 24 minutes
- 2025-10-29 PASS 35 minutes
- 2025-10-30

### Error 2025-10-30T00:28:13+00:00
```
2025-10-30T00:28:13.2694949Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-30T00:29:52.5090415Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-30T00:30:57.4736780Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-30T00:30:57.4738457Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:57.473367053Z, ProjectID: 6902b11be2dc7470847b808a, Cluster name: test-acc-tf-c-2018538410402235628
2025-10-30T03:35:47.4672684Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-30T03:35:47.4673282Z     resource_test.go:81: Step 3/3 error: Error running apply: exit status 1
2025-10-30T03:35:47.4673657Z         
2025-10-30T03:35:47.4673927Z         Error: Error in flex upgrade
2025-10-30T03:35:47.4674191Z         
2025-10-30T03:35:47.4674617Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:35:47.4675606Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:35:47.4676359Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:35:47.4676673Z         
2025-10-30T03:35:47.4677220Z         cluster=test-acc-tf-c-2018538410402235628 didn't reach desired state: IDLE,
2025-10-30T03:35:47.4677994Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:35:47.4678434Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:39:05.9163657Z    test_name=TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling test_terraform_path=/home/runner/work/_temp/393c930d-038d-4707-96f8-6a139002a190/terraform test_working_directory=/tmp/plugintest2353710567
2025-10-30T05:28:11.5670536Z panic: test timed out after 5h0m0s
2025-10-30T05:28:11.5671202Z 	running tests:
2025-10-30T05:28:11.5672290Z 		TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (4h58m19s)
```

- 2025-10-31 PASS 33 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 26 minutes
- 2025-11-03 PASS 33 minutes
- 2025-11-04 PASS 27 minutes
- 2025-11-05
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-11-06 PASS 31 minutes
- 2025-11-07 PASS 25 minutes
- 2025-11-08 PASS 42 minutes
- 2025-11-09 PASS 22 minutes
- 2025-11-10 PASS 25 minutes
- 2025-11-11 SKIP unknown
- 2025-11-12 SKIP unknown
- 2025-11-13
  - SKIP unknown
  - SKIP unknown