# cluster/cluster/TestAccCluster_basic_DefaultWriteRead_AdvancedConf Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028060000) |  | dev | timeout | 11816.09s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 17 minutes
- 2025-10-07 PASS 28 minutes
- 2025-10-08 PASS 19 minutes
- 2025-10-09 PASS 52 minutes
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 21 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 17 minutes
- 2025-10-14 PASS 31 minutes
- 2025-10-15 PASS 17 minutes
- 2025-10-16 PASS 27 minutes
- 2025-10-17 PASS 22 minutes
- 2025-10-18 PASS 18 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS 20 minutes
  - PASS 14 minutes
- 2025-10-21 PASS 17 minutes
- 2025-10-22
  - PASS 23 minutes
  - PASS 15 minutes
- 2025-10-23 PASS 25 minutes
- 2025-10-24 PASS 31 minutes
- 2025-10-25 PASS 15 minutes
- 2025-10-26 PASS 16 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 19 minutes
- 2025-10-29 PASS 20 minutes
- 2025-10-30

### Error 2025-10-30T00:28:06+00:00
```
2025-10-30T00:28:06.1392323Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-10-30T00:28:10.4958155Z === CONT  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-10-30T00:28:35.5019324Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-10-30T00:28:35.5021620Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:35.501530238Z, ProjectID: 6902b112abf4374f32989f92, Cluster name: test-acc-tf-c-6279580408666708127
2025-10-30T03:45:07.4083156Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-10-30T03:45:07.4083872Z     resource_cluster_test.go:220: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:45:07.4084362Z         
2025-10-30T03:45:07.4085263Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-6279580408666708127): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:45:07.4085919Z         
2025-10-30T03:45:07.4086242Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (11816.91s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 18 minutes
- 2025-11-03 PASS 20 minutes
- 2025-11-04 PASS 24 minutes