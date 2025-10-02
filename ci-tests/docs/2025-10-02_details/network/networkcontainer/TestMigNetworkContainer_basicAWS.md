# network/networkcontainer/TestMigNetworkContainer_basicAWS Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL
Success rate: 97.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-25 00:37](#error-2025-09-25t0037520000) |  | dev | flaky_client | 33.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 2 minutes
- 2025-09-04 PASS 2 minutes
- 2025-09-05 PASS 2 minutes
- 2025-09-06 PASS 2 minutes
- 2025-09-07 PASS 2 minutes
- 2025-09-08
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-09-09 PASS 2 minutes
- 2025-09-10 PASS 2 minutes
- 2025-09-11 PASS 2 minutes
- 2025-09-12 PASS 2 minutes
- 2025-09-13 PASS 2 minutes
- 2025-09-14 PASS 2 minutes
- 2025-09-15
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-09-16 PASS 2 minutes
- 2025-09-17 PASS 2 minutes
- 2025-09-18 PASS 2 minutes
- 2025-09-19 PASS 2 minutes
- 2025-09-20 PASS 2 minutes
- 2025-09-21 PASS 2 minutes
- 2025-09-22 PASS 2 minutes
- 2025-09-23 PASS 2 minutes
- 2025-09-24 PASS 2 minutes
- 2025-09-25

### Error 2025-09-25T00:37:52+00:00
```
2025-09-25T00:37:52.8601832Z === RUN   TestMigNetworkContainer_basicAWS
2025-09-25T00:37:52.8603307Z     resource_network_container_migration_test.go:16: Creating execution project: test-acc-tf-p-2569600239860930698
2025-09-25T00:37:52.8613659Z   
2025-09-25T00:37:52.8639743Z     resource_network_container_migration_test.go:23: TestStep 1/2 running init: exit status 1
2025-09-25T00:37:52.8640604Z         
2025-09-25T00:37:52.8641151Z         Error: Failed to install provider
2025-09-25T00:37:52.8641670Z         
2025-09-25T00:37:52.8642477Z         Error while installing mongodb/mongodbatlas v2.0.0: github.com: Get
2025-09-25T00:37:52.8644411Z         "https://github.com/mongodb/terraform-provider-mongodbatlas/releases/download/v2.0.0/terraform-provider-mongodbatlas_2.0.0_linux_amd64.zip":
2025-09-25T00:37:52.8645743Z         dial tcp 140.82.116.4:443: i/o timeout
2025-09-25T00:37:52.8646526Z --- FAIL: TestMigNetworkContainer_basicAWS (33.43s)
```

- 2025-09-26 PASS 2 minutes
- 2025-09-27 PASS 2 minutes
- 2025-09-28 PASS 2 minutes
- 2025-09-29 PASS 2 minutes
- 2025-09-30
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-10-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-10-02 PASS 2 minutes