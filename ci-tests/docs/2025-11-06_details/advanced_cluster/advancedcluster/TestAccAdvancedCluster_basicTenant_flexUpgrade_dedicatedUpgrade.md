# advanced_cluster/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3) TIMEOUT
Success rate: 90.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 00:28](#error-2025-10-12t0028490000) |  | qa |  | 1570.05s
[2025-10-14 00:27](#error-2025-10-14t0027320000) |  | dev |  | 108.02s
[2025-10-27 00:30](#error-2025-10-27t0030320000) |  | dev |  | 1114.01s
[2025-10-30 00:28](#error-2025-10-30t0028130000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 30 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 37 minutes
- 2025-10-11 PASS 26 minutes
- 2025-10-12

### Error 2025-10-12T00:28:49+00:00
```
2025-10-12T00:28:49.3136119Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-12T00:30:21.7634950Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-12T00:31:01.7535868Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-12T00:31:01.7538036Z     pre_check.go:36: Time before creating cluster: 2025-10-12T00:31:01.753064313Z, ProjectID: 68eaf63f454e3b49aeac1b10, Cluster name: test-acc-tf-c-5990906339196545628
2025-10-12T00:56:31.5036432Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-12T00:56:31.5037288Z     resource_test.go:82: Step 3/3 error: Error running apply: exit status 1
2025-10-12T00:56:31.5037682Z         
2025-10-12T00:56:31.5037988Z         Error: Error in flex upgrade
2025-10-12T00:56:31.5038512Z         
2025-10-12T00:56:31.5038913Z           with mongodbatlas_advanced_cluster.test,
2025-10-12T00:56:31.5039597Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-12T00:56:31.5040371Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-12T00:56:31.5040777Z         
2025-10-12T00:56:31.5041222Z         cluster=test-acc-tf-c-5990906339196545628 didn't reach desired state: IDLE,
2025-10-12T00:56:31.5041716Z         error: couldn't find resource (21 retries)
2025-10-12T00:56:32.2872107Z   
2025-10-12T00:56:32.2872613Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-12T00:56:32.2873048Z         
2025-10-12T00:56:32.2873305Z         Error: Error in flex delete
2025-10-12T00:56:32.2873559Z         
2025-10-12T00:56:32.2873968Z         cluster name: test-acc-tf-c-5990906339196545628, API error details:
2025-10-12T00:56:32.2874582Z         unexpected state 'UPDATING', wanted target 'DELETED'. last error: %!s(<nil>)
2025-10-12T00:56:32.2875118Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1570.54s)
```

- 2025-10-13 PASS 35 minutes
- 2025-10-14

### Error 2025-10-14T00:27:32+00:00
```
2025-10-14T00:27:32.0252009Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-14T00:29:30.8142376Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-14T00:29:40.7970293Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-14T00:29:40.7971782Z     pre_check.go:36: Time before creating cluster: 2025-10-14T00:29:40.796705215Z, ProjectID: 68ed98f023d6454f35a91126, Cluster name: test-acc-tf-c-6461155513565721203
2025-10-14T00:30:17.5550196Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-10-14T00:30:17.5550729Z     resource_test.go:82: Step 2/3 error: Error running apply: exit status 1
2025-10-14T00:30:17.5551077Z         
2025-10-14T00:30:17.5551489Z         Error: error upgrading to a flex cluster: test-acc-tf-c-6461155513565721203
2025-10-14T00:30:17.5551967Z         
2025-10-14T00:30:17.5552268Z           with mongodbatlas_advanced_cluster.test,
2025-10-14T00:30:17.5553048Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-14T00:30:17.5553595Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-14T00:30:17.5553881Z         
2025-10-14T00:30:17.5554540Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ed98f023d6454f35a91126/clusters/tenantUpgrade
2025-10-14T00:30:17.5555070Z         POST: HTTP 403 Forbidden (Error code:
2025-10-14T00:30:17.5555538Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-14T00:30:17.5556085Z         Configuration. Contains selections that are unavailable due to your
2025-10-14T00:30:17.5556614Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-14T00:30:17.5556983Z         BadRequestDetail: 
2025-10-14T00:31:19.0195806Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (108.21s)
```

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