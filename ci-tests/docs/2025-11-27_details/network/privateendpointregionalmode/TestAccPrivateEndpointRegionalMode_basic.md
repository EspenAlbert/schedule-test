# network/privateendpointregionalmode/TestAccPrivateEndpointRegionalMode_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:34](#error-2025-10-30t0034130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111abf4374f3298899d | dev | flaky_500 | 101.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS a minute
- 2025-10-30

### Error 2025-10-30T00:34:13+00:00
```
2025-10-30T00:34:13.8400105Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-10-30T00:34:13.8402262Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-10-30T00:34:13.8412719Z    test_name=TestAccPrivateEndpointRegionalMode_basic test_terraform_path=/home/runner/work/_temp/c1561788-fc6d-4854-bff7-84b17ad35f2f/terraform test_working_directory=/tmp/plugintest917074397
2025-10-30T00:34:13.8413979Z     resource_private_endpoint_regional_mode_test.go:16: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:34:13.8414568Z         
2025-10-30T00:34:13.8415013Z         Error: error when destroying resource
2025-10-30T00:34:13.8415342Z         
2025-10-30T00:34:13.8415731Z         error deleting project (6902b111abf4374f3298899d):
2025-10-30T00:34:13.8416351Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b111abf4374f3298899d
2025-10-30T00:34:13.8417017Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:34:13.8417659Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:34:13.8418115Z         BadRequestDetail: 
2025-10-30T00:34:13.8418493Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (101.01s)
```

- 2025-10-31 PASS a minute
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS a minute
- 2025-11-04 PASS a minute
- 2025-11-05
  - PASS a minute
  - PASS a minute
- 2025-11-06 PASS a minute
- 2025-11-07 PASS a minute
- 2025-11-08 PASS a minute
- 2025-11-09: MISSING
- 2025-11-10 PASS a minute
- 2025-11-11 PASS a minute
- 2025-11-12 PASS a minute
- 2025-11-13 PASS a minute
- 2025-11-14 PASS a minute
- 2025-11-15 PASS a minute
- 2025-11-16: MISSING
- 2025-11-17 PASS a minute
- 2025-11-18 PASS a minute
- 2025-11-19 PASS a minute
- 2025-11-20 PASS a minute
- 2025-11-21 PASS a minute
- 2025-11-22 PASS a minute
- 2025-11-23: MISSING
- 2025-11-24 PASS a minute
- 2025-11-25 PASS a minute
- 2025-11-26 PASS a minute
- 2025-11-27 PASS a minute

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS a minute
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13
  - PASS a minute
  - PASS a minute
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS a minute
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS a minute
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
