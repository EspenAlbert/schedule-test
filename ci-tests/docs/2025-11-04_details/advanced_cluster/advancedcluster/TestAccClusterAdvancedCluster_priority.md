# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priority Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027490000) |  | dev |  | 10804.08s
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 11771.07s
[2025-11-02 00:29](#error-2025-11-02t0029490000) |  | qa | flaky_500 | 4.10s

## Timeline
- 2025-10-05: MISSING
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