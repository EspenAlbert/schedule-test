# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:59](#error-2025-10-05t0059370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68e1bbfdfec65822ddfca2f8/dataFederation/test-acc-tf-1427299627286233983 | qa | flaky_500 | 219.03s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-02 PASS a minute
- 2025-10-03 PASS a minute
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