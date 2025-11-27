# advanced_cluster/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, SKIP(x 20) PASS(x 12) TIMEOUT
Success rate: 92.31%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028130000) |  | dev | timeout | 17899.00s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 33 minutes
- 2025-11-04 PASS 27 minutes
- 2025-11-05
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-11-06 PASS 31 minutes
- 2025-11-07 PASS 25 minutes
- 2025-11-08 PASS 42 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 25 minutes
- 2025-11-11 SKIP unknown
- 2025-11-12 SKIP unknown
- 2025-11-13 SKIP unknown
- 2025-11-14 SKIP unknown
- 2025-11-15 SKIP unknown
- 2025-11-16: MISSING
- 2025-11-17 SKIP unknown
- 2025-11-18 SKIP unknown
- 2025-11-19
  - SKIP unknown
  - SKIP unknown
- 2025-11-20
  - SKIP unknown
  - SKIP unknown
- 2025-11-21 SKIP unknown
- 2025-11-22 SKIP unknown
- 2025-11-23: MISSING
- 2025-11-24 SKIP unknown
- 2025-11-25 SKIP unknown
- 2025-11-26 SKIP unknown
- 2025-11-27 SKIP unknown

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 26 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 22 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 SKIP unknown
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 SKIP unknown
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 SKIP unknown
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
