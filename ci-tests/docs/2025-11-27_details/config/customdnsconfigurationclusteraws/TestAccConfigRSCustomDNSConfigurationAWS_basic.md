# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b127abf4374f32997f97 | dev | flaky_500 | 17.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 10 seconds
- 2025-10-30

### Error 2025-10-30T00:30:58+00:00
```
2025-10-30T00:30:58.3586795Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-10-30T00:30:58.3587981Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-10-30T00:30:58.3597930Z    test_name=TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-10-30T00:30:58.3614105Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-10-30T00:30:58.3614898Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:30:58.3615461Z         
2025-10-30T00:30:58.3615930Z         Error: error when destroying resource
2025-10-30T00:30:58.3616286Z         
2025-10-30T00:30:58.3616631Z         error deleting project (6902b127abf4374f32997f97):
2025-10-30T00:30:58.3617207Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b127abf4374f32997f97
2025-10-30T00:30:58.3617825Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3618418Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3618829Z         BadRequestDetail: 
2025-10-30T00:30:58.3619184Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (17.11s)
```

- 2025-10-31 PASS 12 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 11 seconds
- 2025-11-04 PASS 16 seconds
- 2025-11-05
  - PASS 20 seconds
  - PASS 13 seconds
- 2025-11-06 PASS 15 seconds
- 2025-11-07 PASS 10 seconds
- 2025-11-08 PASS 15 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 11 seconds
- 2025-11-11 PASS 15 seconds
- 2025-11-12 PASS 10 seconds
- 2025-11-13 PASS 15 seconds
- 2025-11-14 PASS 10 seconds
- 2025-11-15 PASS 15 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 11 seconds
- 2025-11-18 PASS 15 seconds
- 2025-11-19 PASS 10 seconds
- 2025-11-20 PASS 15 seconds
- 2025-11-21 PASS 21 seconds
- 2025-11-22 PASS 14 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 11 seconds
- 2025-11-25 PASS 15 seconds
- 2025-11-26 PASS 12 seconds
- 2025-11-27 PASS 16 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 16 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 13 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 18 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 10 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 15 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
