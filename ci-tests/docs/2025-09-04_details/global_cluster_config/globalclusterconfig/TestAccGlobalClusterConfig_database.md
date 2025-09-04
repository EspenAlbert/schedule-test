# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030200000) |  | dev | timeout | 10806.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 30 minutes
- 2025-08-07 PASS 42 minutes
- 2025-08-08 PASS 25 minutes
- 2025-08-09 PASS 28 minutes
- 2025-08-10 PASS 37 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 35 minutes
- 2025-08-13 PASS 27 minutes
- 2025-08-14 PASS 34 minutes
- 2025-08-15 PASS 20 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 42 minutes
- 2025-08-18 PASS 37 minutes
- 2025-08-19 PASS 29 minutes
- 2025-08-20
  - PASS 30 minutes
  - PASS 25 minutes
- 2025-08-21 PASS 56 minutes
- 2025-08-22 PASS 21 minutes
- 2025-08-23 PASS 33 minutes
- 2025-08-24 PASS 26 minutes
- 2025-08-25 PASS 27 minutes
- 2025-08-26 PASS 37 minutes
- 2025-08-27 PASS 32 minutes
- 2025-08-28 PASS 34 minutes
- 2025-08-29 PASS 37 minutes
- 2025-08-30 PASS 31 minutes
- 2025-08-31 PASS 37 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.4633308Z === RUN   TestAccGlobalClusterConfig_database
2025-09-01T00:30:25.4656748Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:25.465045003Z, ProjectID: 68b4e91846ef690a79d6dbce, Cluster name: test-acc-tf-c-8217694094982772684
2025-09-01T03:30:26.5045924Z   
2025-09-01T03:30:26.5046828Z     resource_global_cluster_config_test.go:164: Step 1/5 error: Error running apply: exit status 1
2025-09-01T03:30:26.5047608Z         
2025-09-01T03:30:26.5048954Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:26.5049923Z         
2025-09-01T03:30:26.5050547Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:30:26.5051931Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:30:26.5053450Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:30:26.5054121Z         
2025-09-01T03:30:26.5533440Z --- FAIL: TestAccGlobalClusterConfig_database (10806.09s)
```

  - PASS an hour
  - PASS an hour
  - PASS 25 minutes
  - PASS 25 minutes
  - PASS 37 minutes
  - PASS 26 minutes
  - PASS 31 minutes
- 2025-09-02 PASS 30 minutes
- 2025-09-03 PASS 38 minutes
- 2025-09-04 PASS 31 minutes