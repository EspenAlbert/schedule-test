# cluster/cluster/TestMigDefaultWriteReadAdvancedConf_advancedConf Test Details
# Found 39 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 00:30](#error-2025-07-14t0030560000) |  | dev | timeout | 10851.10s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 11 minutes
- 2025-06-26 PASS 10 minutes
- 2025-06-27 PASS 10 minutes
- 2025-06-28 PASS 10 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 10 minutes
- 2025-07-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-07-02 PASS 13 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 23 minutes
- 2025-07-05 PASS 10 minutes
- 2025-07-06 PASS 11 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 13 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10
  - PASS 12 minutes
  - PASS 10 minutes
- 2025-07-11 PASS 25 minutes
- 2025-07-12 PASS 13 minutes
- 2025-07-13 PASS 27 minutes
- 2025-07-14

### Error 2025-07-14T00:30:56+00:00
```
2025-07-14T00:30:56.4778444Z === RUN   TestMigDefaultWriteReadAdvancedConf_advancedConf
2025-07-14T00:31:01.0441100Z === CONT  TestMigDefaultWriteReadAdvancedConf_advancedConf
2025-07-14T00:31:51.0278719Z === NAME  TestMigDefaultWriteReadAdvancedConf_advancedConf
2025-07-14T00:31:51.0280537Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:51.027608218Z, ProjectID: 68744fbe52cba864e5f0f8c7, Cluster name: test-acc-tf-c-7205411629788047334
2025-07-14T03:31:52.8386597Z === NAME  TestMigDefaultWriteReadAdvancedConf_advancedConf
2025-07-14T03:31:52.8387215Z     resource_cluster_migration_test.go:20: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:52.8387629Z         
2025-07-14T03:31:52.8388535Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:52.8389063Z         
2025-07-14T03:31:52.8389339Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:52.8390224Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:52.8390746Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:52.8391028Z         
2025-07-14T03:31:53.0172003Z --- FAIL: TestMigDefaultWriteReadAdvancedConf_advancedConf (10851.97s)
```

- 2025-07-15 PASS 13 minutes
- 2025-07-16 PASS 11 minutes
- 2025-07-17 PASS 11 minutes
- 2025-07-18 PASS 13 minutes
- 2025-07-19 PASS 13 minutes
- 2025-07-20 PASS 11 minutes
- 2025-07-21 PASS 10 minutes
- 2025-07-22 PASS 11 minutes
- 2025-07-23
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-07-24 PASS 12 minutes