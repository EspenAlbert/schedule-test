# config/customdnsconfigurationclusteraws/TestAccConfigDSCustomDNSConfigurationAWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b127abf4374f32997fc0 | dev | flaky_500 | 9.05s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-11-06 PASS 6 seconds
- 2025-11-07 PASS 5 seconds
- 2025-11-08 PASS 6 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 6 seconds
- 2025-11-11 PASS 9 seconds
- 2025-11-12 PASS 6 seconds
- 2025-11-13 PASS 9 seconds
- 2025-11-14 PASS 7 seconds
- 2025-11-15 PASS 7 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 5 seconds
- 2025-11-18 PASS 8 seconds
- 2025-11-19 PASS 7 seconds
- 2025-11-20 PASS 11 seconds
- 2025-11-21 PASS 8 seconds
- 2025-11-22 PASS 6 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 6 seconds
- 2025-11-25 PASS 8 seconds
- 2025-11-26 PASS 6 seconds
- 2025-11-27 PASS 7 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 6 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 6 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 9 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 5 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 9 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
