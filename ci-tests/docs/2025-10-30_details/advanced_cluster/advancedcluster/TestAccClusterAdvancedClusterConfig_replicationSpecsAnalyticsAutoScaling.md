# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL(x 2)
Success rate: 95.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 04:55](#error-2025-10-01t0455040000) |  | dev | flaky_500 | 855.00s
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | flaky_500 | 11813.02s

## Timeline
- 2025-09-30 PASS 35 minutes
- 2025-10-01
  - PASS 37 minutes
  - PASS 37 minutes
  - FAIL 14 minutes

### Error 2025-10-01T04:55:04+00:00
```
2025-10-01T04:55:04.4377544Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-01T04:56:43.0271244Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-01T04:57:18.0258003Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-01T04:57:18.0259516Z     pre_check.go:32: Time before creating cluster: 2025-10-01T04:57:18.025544792Z, ProjectID: 68dcb4265a2f964500207a8d, Cluster name: test-acc-tf-c-2358792650513533875
2025-10-01T05:10:57.9892404Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-01T05:10:57.9893311Z     resource_test.go:510: Step 2/5 error: Error running apply: exit status 1
2025-10-01T05:10:57.9893874Z         
2025-10-01T05:10:57.9894242Z         Error: Error in create
2025-10-01T05:10:57.9894488Z         
2025-10-01T05:10:57.9895119Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T05:10:57.9895796Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T05:10:57.9896570Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T05:10:57.9897007Z         
2025-10-01T05:10:57.9897436Z         cluster name: test-acc-tf-c-3704037308090443119, API error details: (503
2025-10-01T05:10:57.9898080Z         Service Unavailable) failed to decode response body: undefined response type
2025-10-01T05:10:58.0346485Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (855.01s)
```

  - PASS 34 minutes
  - PASS 46 minutes
  - PASS 36 minutes
  - PASS 53 minutes
  - PASS 33 minutes
- 2025-10-02 PASS 55 minutes
- 2025-10-03 PASS 38 minutes
- 2025-10-04 PASS 40 minutes
- 2025-10-05 PASS 34 minutes
- 2025-10-06 PASS an hour
- 2025-10-07 PASS 2 hours
- 2025-10-08 PASS 2 hours
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 43 minutes
- 2025-10-11 PASS 51 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 51 minutes
- 2025-10-14 PASS 40 minutes
- 2025-10-15 PASS 38 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 41 minutes
- 2025-10-18 PASS 37 minutes
- 2025-10-19 PASS 42 minutes
- 2025-10-20
  - PASS 50 minutes
  - PASS 35 minutes
- 2025-10-21 PASS 36 minutes
- 2025-10-22
  - PASS 41 minutes
  - PASS 35 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS 39 minutes
- 2025-10-25 PASS 46 minutes
- 2025-10-26 PASS 37 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 41 minutes
- 2025-10-29 PASS 52 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8262482Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-30T00:29:52.4816975Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-30T00:30:07.4635537Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-30T00:30:07.4637167Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:07.463208268Z, ProjectID: 6902b122abf4374f32996ea1, Cluster name: test-acc-tf-c-2336708150984266303
2025-10-30T03:46:45.3692763Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-30T03:46:45.3693510Z     resource_test.go:500: Step 2/5 error: Error running apply: exit status 1
2025-10-30T03:46:45.3694028Z         
2025-10-30T03:46:45.3694404Z         Error: Error in delete
2025-10-30T03:46:45.3694734Z         
2025-10-30T03:46:45.3695266Z         cluster=test-acc-tf-c-2336708150984266303 didn't reach desired state:
2025-10-30T03:46:45.3696072Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:46:45.3696534Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:46:45.6687264Z   
2025-10-30T03:46:45.6687810Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:46:45.6688310Z         
2025-10-30T03:46:45.6688583Z         Error: Error in delete
2025-10-30T03:46:45.6688829Z         
2025-10-30T03:46:45.6689241Z         cluster name: test-acc-tf-c-2336708150984266303, API error details:
2025-10-30T03:46:45.6690095Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b122abf4374f32996ea1/clusters/test-acc-tf-c-2336708150984266303
2025-10-30T03:46:45.6690755Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T03:46:45.6691206Z         "CLUSTER_ALREADY_REQUESTED_DELETION") Detail: The cluster
2025-10-30T03:46:45.6692083Z         test-acc-tf-c-2336708150984266303 has already been requested for deletion.
2025-10-30T03:46:45.6692793Z         Reason: Bad Request. Params: [test-acc-tf-c-2336708150984266303],
2025-10-30T03:46:45.6693188Z         BadRequestDetail: 
2025-10-30T03:46:45.6693644Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (11813.19s)
```
