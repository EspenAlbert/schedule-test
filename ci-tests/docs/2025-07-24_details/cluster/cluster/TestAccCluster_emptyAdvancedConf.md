# cluster/cluster/TestAccCluster_emptyAdvancedConf Test Details
# Found 39 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 00:30](#error-2025-07-14t0030560000) |  | dev | timeout | 10830.08s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 13 minutes
- 2025-06-26 PASS 13 minutes
- 2025-06-27 PASS 14 minutes
- 2025-06-28 PASS 15 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 18 minutes
- 2025-07-01
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 13 minutes
  - PASS 15 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 25 minutes
- 2025-07-05 PASS 17 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 15 minutes
  - PASS 13 minutes
- 2025-07-11 PASS 28 minutes
- 2025-07-12 PASS 17 minutes
- 2025-07-13 PASS 28 minutes
- 2025-07-14

### Error 2025-07-14T00:30:56+00:00
```
2025-07-14T00:30:56.4793820Z === RUN   TestAccCluster_emptyAdvancedConf
2025-07-14T00:31:01.0437860Z === CONT  TestAccCluster_emptyAdvancedConf
2025-07-14T00:31:31.0199164Z === NAME  TestAccCluster_emptyAdvancedConf
2025-07-14T00:31:31.0200644Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:31.019640436Z, ProjectID: 68744fbe52cba864e5f0f8c7, Cluster name: test-acc-tf-c-6866781106568625961
2025-07-14T03:31:31.7945488Z === NAME  TestAccCluster_emptyAdvancedConf
2025-07-14T03:31:31.7946003Z     resource_cluster_test.go:225: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:31.7946534Z         
2025-07-14T03:31:31.7947393Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:31.7948191Z         
2025-07-14T03:31:31.7948481Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:31.7949227Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:31.7950139Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:31.7950429Z         
2025-07-14T03:31:31.8395205Z --- FAIL: TestAccCluster_emptyAdvancedConf (10830.80s)
```

- 2025-07-15 PASS 17 minutes
- 2025-07-16 PASS 15 minutes
- 2025-07-17 PASS 15 minutes
- 2025-07-18 PASS 14 minutes
- 2025-07-19 PASS 16 minutes
- 2025-07-20 PASS 14 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 14 minutes
- 2025-07-23
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-07-24 PASS 17 minutes