# network/networkcontainer/TestMigNetworkContainer_basicAzure Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-29 00:43](#error-2025-07-29t0043170000) |  | dev | flaky_500 | 5.02s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-07-02 PASS 2 minutes
- 2025-07-03 PASS 2 minutes
- 2025-07-04 PASS 2 minutes
- 2025-07-05 PASS 2 minutes
- 2025-07-06 PASS 2 minutes
- 2025-07-07 PASS 2 minutes
- 2025-07-08 PASS 2 minutes
- 2025-07-09 PASS 2 minutes
- 2025-07-10
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-07-11 PASS 2 minutes
- 2025-07-12 PASS 2 minutes
- 2025-07-13 PASS 2 minutes
- 2025-07-14 PASS 2 minutes
- 2025-07-15 PASS 2 minutes
- 2025-07-16 PASS 2 minutes
- 2025-07-17 PASS 2 minutes
- 2025-07-18 PASS 2 minutes
- 2025-07-19 PASS 2 minutes
- 2025-07-20 PASS 2 minutes
- 2025-07-21 PASS 2 minutes
- 2025-07-22 PASS 2 minutes
- 2025-07-23
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-07-24 PASS 2 minutes
- 2025-07-25 PASS 2 minutes
- 2025-07-26 PASS 2 minutes
- 2025-07-27 PASS 2 minutes
- 2025-07-28 PASS 2 minutes
- 2025-07-29

### Error 2025-07-29T00:43:17+00:00
```
2025-07-29T00:43:17.7805808Z === RUN   TestMigNetworkContainer_basicAzure
2025-07-29T00:43:17.7817455Z   
2025-07-29T00:43:17.7818590Z     resource_network_container_migration_test.go:46: TestStep 1/2 running init: exit status 1
2025-07-29T00:43:17.7819407Z         
2025-07-29T00:43:17.7819952Z         Error: Failed to install provider
2025-07-29T00:43:17.7820479Z         
2025-07-29T00:43:17.7821395Z         Error while installing mongodb/mongodbatlas v1.39.0: could not query provider
2025-07-29T00:43:17.7822663Z         registry for registry.terraform.io/mongodb/mongodbatlas: failed to retrieve
2025-07-29T00:43:17.7823918Z         authentication checksums for provider: the request failed after 2 attempts,
2025-07-29T00:43:17.7825132Z         please try again later: 503 Service Unavailable returned from github.com
2025-07-29T00:43:17.7825946Z --- FAIL: TestMigNetworkContainer_basicAzure (5.23s)
```

- 2025-07-30 PASS 2 minutes