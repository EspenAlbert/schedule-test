# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | flaky_500 | 12764.08s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 29 minutes
- 2025-10-16 PASS 55 minutes
- 2025-10-17 PASS 34 minutes
- 2025-10-18 PASS 30 minutes
- 2025-10-19 PASS 29 minutes
- 2025-10-20
  - PASS 41 minutes
  - PASS 26 minutes
- 2025-10-21 PASS 28 minutes
- 2025-10-22
  - PASS 37 minutes
  - PASS 28 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS 31 minutes
- 2025-10-25 PASS 34 minutes
- 2025-10-26 PASS 28 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 30 minutes
- 2025-10-29 PASS 42 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8257711Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-10-30T00:29:52.4844647Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-10-30T00:30:17.4648906Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-10-30T00:30:17.4650288Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:17.46459483Z, ProjectID: 6902b122abf4374f32996ea1, Cluster name: test-acc-tf-c-9003881928093157054
2025-10-30T04:02:36.9559099Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-10-30T04:02:36.9559704Z     resource_test.go:410: Step 2/3 error: Error running apply: exit status 1
2025-10-30T04:02:36.9560118Z         
2025-10-30T04:02:36.9560445Z         Error: Error in delete
2025-10-30T04:02:36.9560730Z         
2025-10-30T04:02:36.9561207Z         cluster=test-acc-tf-c-9003881928093157054 didn't reach desired state:
2025-10-30T04:02:36.9562126Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T04:02:36.9562671Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T04:02:37.3250023Z    test_step_number=2 test_working_directory=/tmp/plugintest129278947 test_terraform_path=/home/runner/work/_temp/393c930d-038d-4707-96f8-6a139002a190/terraform
2025-10-30T04:02:37.3251205Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T04:02:37.3252012Z         
2025-10-30T04:02:37.3252323Z         Error: Error in delete
2025-10-30T04:02:37.3252611Z         
2025-10-30T04:02:37.3253068Z         cluster name: test-acc-tf-c-9003881928093157054, API error details:
2025-10-30T04:02:37.3254003Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b122abf4374f32996ea1/clusters/test-acc-tf-c-9003881928093157054
2025-10-30T04:02:37.3254707Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T04:02:37.3255208Z         "CLUSTER_ALREADY_REQUESTED_DELETION") Detail: The cluster
2025-10-30T04:02:37.3255836Z         test-acc-tf-c-9003881928093157054 has already been requested for deletion.
2025-10-30T04:02:37.3256478Z         Reason: Bad Request. Params: [test-acc-tf-c-9003881928093157054],
2025-10-30T04:02:37.3256928Z         BadRequestDetail: 
2025-10-30T04:02:37.3257320Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (12764.84s)
```

- 2025-10-31 PASS 32 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 29 minutes
- 2025-11-03 PASS 34 minutes
- 2025-11-04 PASS 32 minutes
- 2025-11-05
  - PASS 35 minutes
  - PASS 30 minutes
- 2025-11-06 PASS 39 minutes
- 2025-11-07 PASS 36 minutes
- 2025-11-08 PASS 56 minutes
- 2025-11-09 PASS 29 minutes
- 2025-11-10 PASS 28 minutes
- 2025-11-11 PASS 28 minutes
- 2025-11-12 PASS 32 minutes
- 2025-11-13
  - PASS an hour
  - PASS 29 minutes