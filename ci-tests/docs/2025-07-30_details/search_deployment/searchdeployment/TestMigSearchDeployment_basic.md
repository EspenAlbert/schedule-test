# search_deployment/searchdeployment/TestMigSearchDeployment_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 00:30](#error-2025-07-14t0030590000) |  | dev | timeout | 10804.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 20 minutes
  - PASS 23 minutes
  - PASS 19 minutes
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 22 minutes
- 2025-07-04 PASS 23 minutes
- 2025-07-05 PASS 21 minutes
- 2025-07-06 PASS 21 minutes
- 2025-07-07 PASS 23 minutes
- 2025-07-08 PASS 23 minutes
- 2025-07-09 PASS 26 minutes
- 2025-07-10
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-07-11 PASS 21 minutes
- 2025-07-12 PASS 22 minutes
- 2025-07-13 PASS 30 minutes
- 2025-07-14

### Error 2025-07-14T00:30:59+00:00
```
2025-07-14T00:30:59.9495448Z === RUN   TestMigSearchDeployment_basic
2025-07-14T00:31:05.9338447Z === CONT  TestMigSearchDeployment_basic
2025-07-14T03:31:08.1687992Z === NAME  TestMigSearchDeployment_basic
2025-07-14T03:31:08.1688926Z     resource_migration_test.go:20: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:08.1689571Z         
2025-07-14T03:31:08.1691056Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:08.1691998Z         
2025-07-14T03:31:08.1692542Z           with mongodbatlas_advanced_cluster.test,
2025-07-14T03:31:08.1693648Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-14T03:31:08.1694903Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-07-14T03:31:08.1695417Z         
2025-07-14T03:31:08.3562884Z --- FAIL: TestMigSearchDeployment_basic (10804.82s)
```

- 2025-07-15 PASS 24 minutes
- 2025-07-16 PASS 23 minutes
- 2025-07-17 PASS 21 minutes
- 2025-07-18 PASS 21 minutes
- 2025-07-19 PASS 23 minutes
- 2025-07-20 PASS 23 minutes
- 2025-07-21 PASS 20 minutes
- 2025-07-22 PASS 22 minutes
- 2025-07-23
  - PASS 24 minutes
  - PASS 23 minutes
- 2025-07-24 PASS 21 minutes
- 2025-07-25 PASS 25 minutes
- 2025-07-26 PASS 23 minutes
- 2025-07-27 PASS 25 minutes
- 2025-07-28 PASS 23 minutes
- 2025-07-29 PASS 24 minutes
- 2025-07-30 PASS 24 minutes