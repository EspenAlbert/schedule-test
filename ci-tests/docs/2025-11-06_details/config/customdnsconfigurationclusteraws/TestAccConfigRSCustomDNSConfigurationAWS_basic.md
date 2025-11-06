# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b127abf4374f32997f97 | dev | flaky_500 | 17.01s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 17 seconds
- 2025-10-09 PASS 20 seconds
- 2025-10-10 PASS 13 seconds
- 2025-10-11 PASS 16 seconds
- 2025-10-12 PASS 11 seconds
- 2025-10-13 PASS 22 seconds
- 2025-10-14 PASS 24 seconds
- 2025-10-15 PASS 24 seconds
- 2025-10-16 PASS 25 seconds
- 2025-10-17 PASS 11 seconds
- 2025-10-18 PASS 15 seconds
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS 17 seconds
  - PASS 14 seconds
- 2025-10-21 PASS 14 seconds
- 2025-10-22
  - PASS 23 seconds
  - PASS 18 seconds
- 2025-10-23 PASS 15 seconds
- 2025-10-24 PASS 12 seconds
- 2025-10-25 PASS 15 seconds
- 2025-10-26 PASS 20 seconds
- 2025-10-27 PASS 16 seconds
- 2025-10-28 PASS 16 seconds
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
- 2025-11-02 PASS 16 seconds
- 2025-11-03 PASS 11 seconds
- 2025-11-04 PASS 16 seconds
- 2025-11-05
  - PASS 20 seconds
  - PASS 13 seconds
- 2025-11-06 PASS 15 seconds