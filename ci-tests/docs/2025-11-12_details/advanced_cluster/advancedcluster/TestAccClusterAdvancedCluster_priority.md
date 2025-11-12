# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priority Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029510000) |  | qa |  | 4.09s
[2025-10-07 00:27](#error-2025-10-07t0027490000) |  | dev |  | 10804.08s
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 11771.07s
[2025-11-02 00:29](#error-2025-11-02t0029490000) |  | qa | flaky_500 | 4.10s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 2 hours
- 2025-10-05

### Error 2025-10-05T00:29:51+00:00
```
2025-10-05T00:29:51.4059799Z === RUN   TestAccClusterAdvancedCluster_priority
2025-10-05T00:31:26.4131176Z === CONT  TestAccClusterAdvancedCluster_priority
2025-10-05T00:31:31.0170049Z === NAME  TestAccClusterAdvancedCluster_priority
2025-10-05T00:31:31.0170944Z     resource_test.go:842: Step 2/4 error: Error running apply: exit status 1
2025-10-05T00:31:31.0171590Z         
2025-10-05T00:31:31.0171995Z         Error: Error in create
2025-10-05T00:31:31.0172419Z         
2025-10-05T00:31:31.0172968Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:31.0299181Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:31.0300587Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:31.0301125Z         
2025-10-05T00:31:31.0301853Z         cluster name: test-acc-tf-c-896611171816463067, API error details:
2025-10-05T00:31:31.0303052Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfef758b3057a1af6cf/clusters
2025-10-05T00:31:31.0303966Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:31.0305058Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:31.0306140Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:31.0319727Z    test_step_number=1 test_name=TestAccClusterAdvancedClusterConfig_selfManagedSharding test_terraform_path=/home/runner/work/_temp/d6726d11-c2b5-40bc-b1fa-9f3e3dd393d4/terraform test_working_directory=/tmp/plugintest1472787998
2025-10-05T00:31:31.0321751Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:31.0322476Z         BadRequestDetail: 
2025-10-05T00:31:31.2481649Z --- FAIL: TestAccClusterAdvancedCluster_priority (4.86s)
```

- 2025-10-06 PASS 13 minutes
- 2025-10-07

### Error 2025-10-07T00:27:49+00:00
```
2025-10-07T00:27:49.5423436Z === RUN   TestAccClusterAdvancedCluster_priority
2025-10-07T00:30:14.9706800Z === CONT  TestAccClusterAdvancedCluster_priority
2025-10-07T03:30:19.7274494Z === NAME  TestAccClusterAdvancedCluster_priority
2025-10-07T03:30:19.7275563Z     resource_test.go:842: Step 2/4 error: Error running apply: exit status 1
2025-10-07T03:30:19.7276209Z         
2025-10-07T03:30:19.7276625Z         Error: Error in create
2025-10-07T03:30:19.7277027Z         
2025-10-07T03:30:19.7277596Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:30:19.7278703Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:30:19.7279767Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:30:19.7280307Z         
2025-10-07T03:30:19.7281121Z         cluster=test-acc-tf-c-1157572675520581741 didn't reach desired state: IDLE,
2025-10-07T03:30:19.7281962Z         error: context deadline exceeded
2025-10-07T03:30:19.7836745Z --- FAIL: TestAccClusterAdvancedCluster_priority (10804.83s)
```

- 2025-10-08 PASS 16 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 18 minutes
- 2025-10-11 PASS 14 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 18 minutes
- 2025-10-14 PASS 17 minutes
- 2025-10-15 PASS 13 minutes
- 2025-10-16 PASS 32 minutes
- 2025-10-17 PASS 14 minutes
- 2025-10-18 PASS 14 minutes
- 2025-10-19 PASS 13 minutes
- 2025-10-20
  - PASS 12 minutes
  - PASS an hour
- 2025-10-21 PASS 12 minutes
- 2025-10-22
  - PASS 18 minutes
  - PASS 11 minutes
- 2025-10-23 PASS 18 minutes
- 2025-10-24 PASS 14 minutes
- 2025-10-25 PASS 18 minutes
- 2025-10-26 PASS 13 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 13 minutes
- 2025-10-29 PASS 18 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2621843Z === RUN   TestAccClusterAdvancedCluster_priority
2025-10-30T00:29:52.4740035Z === CONT  TestAccClusterAdvancedCluster_priority
2025-10-30T03:46:04.1876497Z === NAME  TestAccClusterAdvancedCluster_priority
2025-10-30T03:46:04.1877575Z     resource_test.go:832: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:46:04.1878350Z         
2025-10-30T03:46:04.1878764Z         Error: Error in delete
2025-10-30T03:46:04.1879159Z         
2025-10-30T03:46:04.1879907Z         cluster=test-acc-tf-c-3849941630781613185 didn't reach desired state:
2025-10-30T03:46:04.1881062Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:46:04.1882146Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:46:04.1882830Z --- FAIL: TestAccClusterAdvancedCluster_priority (11771.71s)
```

- 2025-10-31 PASS 16 minutes
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:49+00:00
```
2025-11-02T00:29:49.6941692Z === RUN   TestAccClusterAdvancedCluster_priority
2025-11-02T00:31:20.5696284Z === CONT  TestAccClusterAdvancedCluster_priority
2025-11-02T00:31:25.1548374Z === NAME  TestAccClusterAdvancedCluster_priority
2025-11-02T00:31:25.1549373Z     resource_test.go:832: Step 2/4 error: Error running apply: exit status 1
2025-11-02T00:31:25.1550057Z         
2025-11-02T00:31:25.1550551Z         Error: Error in create
2025-11-02T00:31:25.1551083Z         
2025-11-02T00:31:25.1551732Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.1552967Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.1554188Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.1554861Z         
2025-11-02T00:31:25.1555612Z         cluster name: test-acc-tf-c-5999142326532769434, API error details:
2025-11-02T00:31:25.1556786Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5fa5ace12378d296111/clusters
2025-11-02T00:31:25.1558098Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.1559223Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.1560374Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.1561834Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.1562856Z         BadRequestDetail: 
2025-11-02T00:31:25.1724297Z   
2025-11-02T00:31:25.5314612Z --- FAIL: TestAccClusterAdvancedCluster_priority (4.97s)
```

- 2025-11-03 PASS 15 minutes
- 2025-11-04 PASS 15 minutes
- 2025-11-05
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-11-06 PASS 21 minutes
- 2025-11-07 PASS 15 minutes
- 2025-11-08 PASS 42 minutes
- 2025-11-09 PASS 11 minutes
- 2025-11-10 PASS 11 minutes
- 2025-11-11 PASS 12 minutes
- 2025-11-12 PASS 14 minutes