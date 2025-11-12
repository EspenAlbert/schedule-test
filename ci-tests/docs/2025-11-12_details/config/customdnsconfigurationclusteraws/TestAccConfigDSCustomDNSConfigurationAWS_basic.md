# config/customdnsconfigurationclusteraws/TestAccConfigDSCustomDNSConfigurationAWS_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b127abf4374f32997fc0 | dev | flaky_500 | 9.05s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 9 seconds
- 2025-10-05 PASS 5 seconds
- 2025-10-06 PASS 7 seconds
- 2025-10-07 PASS 9 seconds
- 2025-10-08 PASS 6 seconds
- 2025-10-09 PASS 9 seconds
- 2025-10-10 PASS 7 seconds
- 2025-10-11 PASS 6 seconds
- 2025-10-12 PASS 6 seconds
- 2025-10-13 PASS 10 seconds
- 2025-10-14 PASS 9 seconds
- 2025-10-15 PASS 9 seconds
- 2025-10-16 PASS 10 seconds
- 2025-10-17 PASS 6 seconds
- 2025-10-18 PASS 12 seconds
- 2025-10-19 PASS 34 seconds
- 2025-10-20
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-10-23 PASS 9 seconds
- 2025-10-24 PASS 7 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26 PASS 9 seconds
- 2025-10-27 PASS 9 seconds
- 2025-10-28 PASS 8 seconds
- 2025-10-29 PASS 6 seconds
- 2025-10-30

### Error 2025-10-30T00:30:58+00:00
```
2025-10-30T00:30:58.3585976Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-10-30T00:30:58.3587593Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-10-30T00:30:58.3598469Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2025-10-30T00:30:58.3599264Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:30:58.3599823Z         
2025-10-30T00:30:58.3600121Z         Error: error when destroying resource
2025-10-30T00:30:58.3600401Z         
2025-10-30T00:30:58.3600739Z         error deleting project (6902b127abf4374f32997fc0):
2025-10-30T00:30:58.3601425Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b127abf4374f32997fc0
2025-10-30T00:30:58.3602048Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3602645Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3603058Z         BadRequestDetail: 
2025-10-30T00:30:58.3603409Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (9.46s)
```

- 2025-10-31 PASS 8 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 6 seconds
- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-11-06 PASS 6 seconds
- 2025-11-07 PASS 5 seconds
- 2025-11-08 PASS 6 seconds
- 2025-11-09 PASS 6 seconds
- 2025-11-10 PASS 6 seconds
- 2025-11-11 PASS 9 seconds
- 2025-11-12 PASS 6 seconds