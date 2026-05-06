# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_withPrivateEndpoint Test Details
# Found 26 TestRuns in dev, qa from 2026-04-14 to 2026-05-06 from master branch: 1 unique tests, PASS(x 25) FAIL
Success rate: 96.15%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-22 01:39](#error-2026-04-22t0139340000) | CheckFailure for federated_database_instance.test at Step: -1 Checks: 1,2,3 | dev | 291.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08: MISSING
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13: MISSING
- 2026-04-14 PASS 4 minutes
- 2026-04-15 PASS 4 minutes
- 2026-04-16 PASS 4 minutes
- 2026-04-17 PASS 4 minutes
- 2026-04-18 PASS 4 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 4 minutes
- 2026-04-21 PASS 4 minutes
- 2026-04-22

### Error 2026-04-22T01:39:34+00:00
```
2026-04-22T01:39:34.7063750Z === RUN   TestAccFederatedDatabaseInstance_withPrivateEndpoint
2026-04-22T01:39:34.7065138Z     resource_federated_database_instance_test.go:196: Check 1/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.#' expected "1", got "0"
2026-04-22T01:39:34.7066869Z         Check 2/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.0.hostname' expected to be set
2026-04-22T01:39:34.7068278Z         Check 3/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.0.private_endpoint' expected to be set
2026-04-22T01:39:34.7068993Z --- FAIL: TestAccFederatedDatabaseInstance_withPrivateEndpoint (291.78s)
```

- 2026-04-23 PASS 6 minutes
- 2026-04-24 PASS 6 minutes
- 2026-04-25 PASS 6 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 6 minutes
- 2026-04-28 PASS 7 minutes
- 2026-04-29 PASS 6 minutes
- 2026-04-30 PASS 6 minutes
- 2026-05-01 PASS 7 minutes
- 2026-05-02 PASS 6 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 6 minutes
- 2026-05-05 PASS 7 minutes
- 2026-05-06 PASS 6 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08: MISSING
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 6 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 minutes
- 2026-05-04 PASS 6 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 6 minutes
