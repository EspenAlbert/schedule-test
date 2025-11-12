# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:59](#error-2025-10-05t0059370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68e1bbfdfec65822ddfca2f8/dataFederation/test-acc-tf-1427299627286233983 | qa | flaky_500 | 219.03s
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b120abf4374f32995d7d | dev | flaky_500 | 66.01s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS a minute
- 2025-10-05

### Error 2025-10-05T00:59:37+00:00
```
2025-10-05T00:59:37.7037810Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-10-05T00:59:37.7049789Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-10-05T00:59:37.7157870Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-10-05T00:59:37.7158487Z     resource_federated_database_instance_test.go:83: Step 2/2 error running import: exit status 1
2025-10-05T00:59:37.7158939Z         
2025-10-05T00:59:37.7161120Z         Error: couldn't import data federated instance (test-acc-tf-1427299627286233983) for project (68e1bbfdfec65822ddfca2f8), error: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfdfec65822ddfca2f8/dataFederation/test-acc-tf-1427299627286233983 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-05T00:59:37.7162585Z         
2025-10-05T00:59:37.7163088Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (219.33s)
```

- 2025-10-06 PASS a minute
- 2025-10-07 PASS a minute
- 2025-10-08 PASS a minute
- 2025-10-09 PASS a minute
- 2025-10-10 PASS a minute
- 2025-10-11 PASS a minute
- 2025-10-12 PASS a minute
- 2025-10-13 PASS a minute
- 2025-10-14 PASS a minute
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18 PASS a minute
- 2025-10-19 PASS 2 minutes
- 2025-10-20
  - PASS a minute
  - PASS a minute
- 2025-10-21 PASS a minute
- 2025-10-22
  - PASS a minute
  - PASS a minute
- 2025-10-23 PASS a minute
- 2025-10-24 PASS a minute
- 2025-10-25 PASS a minute
- 2025-10-26 PASS a minute
- 2025-10-27 PASS a minute
- 2025-10-28 PASS a minute
- 2025-10-29 PASS a minute
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.1613323Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-10-30T00:44:19.1617514Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-10-30T00:44:19.1689589Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-10-30T00:44:19.1690330Z     resource_federated_database_instance_test.go:83: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.1690858Z         
2025-10-30T00:44:19.1691161Z         Error: error when destroying resource
2025-10-30T00:44:19.1691442Z         
2025-10-30T00:44:19.1691777Z         error deleting project (6902b120abf4374f32995d7d):
2025-10-30T00:44:19.1692341Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b120abf4374f32995d7d
2025-10-30T00:44:19.1692963Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.1693547Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.1693948Z         BadRequestDetail: 
2025-10-30T00:44:19.1694271Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (66.06s)
```

- 2025-10-31 PASS a minute
- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03 PASS a minute
- 2025-11-04 PASS a minute
- 2025-11-05
  - PASS a minute
  - PASS a minute
- 2025-11-06 PASS a minute
- 2025-11-07 PASS a minute
- 2025-11-08 PASS a minute
- 2025-11-09 PASS a minute
- 2025-11-10 PASS a minute
- 2025-11-11 PASS a minute
- 2025-11-12 PASS a minute