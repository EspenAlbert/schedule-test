# cluster/cluster/TestAccCluster_partial_advancedConf Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028060000) |  | dev | timeout | 11754.00s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 32 minutes
  - PASS 17 minutes
  - PASS 26 minutes
  - PASS 15 minutes
- 2025-10-02 PASS 23 minutes
- 2025-10-03 PASS 16 minutes
- 2025-10-04 PASS 25 minutes
- 2025-10-05 PASS 14 minutes
- 2025-10-06 PASS 16 minutes
- 2025-10-07 PASS 18 minutes
- 2025-10-08 PASS 20 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 20 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 18 minutes
- 2025-10-14 PASS 31 minutes
- 2025-10-15 PASS 17 minutes
- 2025-10-16 PASS 21 minutes
- 2025-10-17 PASS 23 minutes
- 2025-10-18 PASS 19 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS 35 minutes
  - PASS 16 minutes
- 2025-10-21 PASS 17 minutes
- 2025-10-22
  - PASS 23 minutes
  - PASS 18 minutes
- 2025-10-23 PASS 25 minutes
- 2025-10-24 PASS 35 minutes
- 2025-10-25 PASS 17 minutes
- 2025-10-26 PASS 19 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 18 minutes
- 2025-10-29 PASS 20 minutes
- 2025-10-30

### Error 2025-10-30T00:28:06+00:00
```
2025-10-30T00:28:06.1390747Z === RUN   TestAccCluster_partial_advancedConf
2025-10-30T00:28:10.4958807Z === CONT  TestAccCluster_partial_advancedConf
2025-10-30T00:28:40.5031742Z === NAME  TestAccCluster_partial_advancedConf
2025-10-30T00:28:40.5034008Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:40.502884643Z, ProjectID: 6902b112abf4374f32989f92, Cluster name: test-acc-tf-c-5464657024506341047
2025-10-30T03:44:04.4952117Z === NAME  TestAccCluster_partial_advancedConf
2025-10-30T03:44:04.4952957Z     resource_cluster_test.go:83: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:44:04.4953436Z         
2025-10-30T03:44:04.4954334Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-5464657024506341047): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:44:04.4954981Z         
2025-10-30T03:44:04.4955263Z --- FAIL: TestAccCluster_partial_advancedConf (11754.00s)
```
