# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_withPrivateEndpoint Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-16 00:53](#error-2026-07-16t0053510000) | CheckFailure for federated_database_instance.test at Step: -1 Checks: 1,2,3 | dev | 477.09s
[2026-07-23 01:51](#error-2026-07-23t0151590000) | CheckFailure for federated_database_instance.test at Step: -1 Checks: 1,2,3 | dev | 433.02s
[2026-07-30 02:03](#error-2026-07-30t0203330000) | CheckFailure for federated_database_instance.test at Step: -1 Checks: 1,2,3 | dev | 430.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 6 minutes
- 2026-07-10 PASS 6 minutes
- 2026-07-11 PASS 6 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 6 minutes
- 2026-07-14 PASS 6 minutes
- 2026-07-15 PASS 6 minutes
- 2026-07-16

### Error 2026-07-16T00:53:51+00:00
```
2026-07-16T00:53:51.1330140Z === RUN   TestAccFederatedDatabaseInstance_withPrivateEndpoint
2026-07-16T00:53:51.1330907Z     resource_federated_database_instance_test.go:192: Creating execution project (1): test-acc-tf-p-7655277259574897486
2026-07-16T00:53:51.1332131Z     resource_federated_database_instance_test.go:196: Check 1/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.#' expected "1", got "0"
2026-07-16T00:53:51.1333477Z         Check 2/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.0.hostname' expected to be set
2026-07-16T00:53:51.1334886Z         Check 3/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.0.private_endpoint' expected to be set
2026-07-16T00:53:51.1335674Z --- FAIL: TestAccFederatedDatabaseInstance_withPrivateEndpoint (477.87s)
```

- 2026-07-17 PASS 7 minutes
- 2026-07-18 PASS 6 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 6 minutes
- 2026-07-22 PASS 7 minutes
- 2026-07-23

### Error 2026-07-23T01:51:59+00:00
```
2026-07-23T01:51:59.1637667Z === RUN   TestAccFederatedDatabaseInstance_withPrivateEndpoint
2026-07-23T01:51:59.1639205Z     resource_federated_database_instance_test.go:196: Check 1/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.#' expected "1", got "0"
2026-07-23T01:51:59.1640864Z         Check 2/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.0.hostname' expected to be set
2026-07-23T01:51:59.1642677Z         Check 3/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.0.private_endpoint' expected to be set
2026-07-23T01:51:59.1643627Z --- FAIL: TestAccFederatedDatabaseInstance_withPrivateEndpoint (433.22s)
```

- 2026-07-24 PASS 7 minutes
- 2026-07-25 PASS 7 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 minutes
- 2026-07-28 PASS 6 minutes
- 2026-07-29 PASS 6 minutes
- 2026-07-30

### Error 2026-07-30T02:03:33+00:00
```
2026-07-30T02:03:33.6720237Z === RUN   TestAccFederatedDatabaseInstance_withPrivateEndpoint
2026-07-30T02:03:33.6721695Z     resource_federated_database_instance_test.go:196: Check 1/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.#' expected "1", got "0"
2026-07-30T02:03:33.6723326Z         Check 2/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.0.hostname' expected to be set
2026-07-30T02:03:33.6724583Z         Check 3/3 error: mongodbatlas_federated_database_instance.test: Attribute 'private_endpoint_hostnames.0.private_endpoint' expected to be set
2026-07-30T02:03:33.6725382Z --- FAIL: TestAccFederatedDatabaseInstance_withPrivateEndpoint (430.91s)
```

- 2026-07-31 PASS 6 minutes
- 2026-08-01 PASS 6 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 minutes
- 2026-08-04 PASS 7 minutes
- 2026-08-05 PASS 7 minutes
- 2026-08-06 PASS 6 minutes
- 2026-08-07 PASS 6 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 7 minutes
  - PASS 6 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
