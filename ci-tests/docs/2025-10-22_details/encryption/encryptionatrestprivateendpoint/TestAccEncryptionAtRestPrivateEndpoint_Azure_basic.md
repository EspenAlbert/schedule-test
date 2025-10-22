# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 11:59](#error-2025-10-01t1159340000) |  | dev | 186.05s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 3 minutes
- 2025-09-24 PASS 3 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 3 minutes
- 2025-09-28 PASS 3 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 28 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - FAIL 3 minutes

### Error 2025-10-01T11:59:34+00:00
```
2025-10-01T11:59:34.4714713Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-10-01T11:59:34.4726354Z   
2025-10-01T11:59:34.4727338Z     resource_test.go:32: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T11:59:34.4728195Z         
2025-10-01T11:59:34.4728923Z         Error: error when waiting for status transition in delete
2025-10-01T11:59:34.4729559Z         
2025-10-01T11:59:34.4730704Z         unexpected state 'PENDING_ACCEPTANCE', wanted target 'DELETED, FAILED'. last
2025-10-01T11:59:34.4731600Z         error: %!s(<nil>)
2025-10-01T11:59:34.4732336Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (186.54s)
```

  - PASS 3 minutes
- 2025-10-02 PASS 3 minutes
- 2025-10-03 PASS 3 minutes
- 2025-10-04 PASS 3 minutes
- 2025-10-05 PASS 3 minutes
- 2025-10-06 PASS 3 minutes
- 2025-10-07 PASS 5 minutes
- 2025-10-08 PASS 4 minutes
- 2025-10-09 PASS 7 minutes
- 2025-10-10 PASS 4 minutes
- 2025-10-11 PASS 6 minutes
- 2025-10-12 PASS 3 minutes
- 2025-10-13 PASS 3 minutes
- 2025-10-14 PASS 3 minutes
- 2025-10-15 PASS 3 minutes
- 2025-10-16 PASS 4 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19 PASS 3 minutes
- 2025-10-20
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-21 PASS 3 minutes
- 2025-10-22
  - PASS 3 minutes
  - PASS 3 minutes