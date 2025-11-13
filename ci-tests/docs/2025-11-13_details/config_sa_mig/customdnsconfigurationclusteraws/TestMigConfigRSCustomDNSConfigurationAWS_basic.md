# config_sa_mig/customdnsconfigurationclusteraws/TestMigConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 6 TestRuns in dev from 2025-10-30 to 2025-11-13 from master branch: 1 unique tests, PASS(x 5) FAIL
Success rate: 83.33%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b117abf4374f3298e8cb | dev | flaky_500 | 15.09s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15: MISSING
- 2025-10-16: MISSING
- 2025-10-17: MISSING
- 2025-10-18: MISSING
- 2025-10-19: MISSING
- 2025-10-20: MISSING
- 2025-10-21: MISSING
- 2025-10-22: MISSING
- 2025-10-23: MISSING
- 2025-10-24: MISSING
- 2025-10-25: MISSING
- 2025-10-26: MISSING
- 2025-10-27: MISSING
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30

### Error 2025-10-30T00:28:28+00:00
```
2025-10-30T00:28:28.9874859Z === RUN   TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-10-30T00:28:28.9876418Z === CONT  TestMigConfigRSCustomDNSConfigurationAWS_basic
2025-10-30T00:28:28.9896713Z   
2025-10-30T00:28:28.9898116Z     resource_custom_dns_configuration_cluster_aws_migration_test.go:19: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:28:28.9899631Z         
2025-10-30T00:28:28.9962400Z         Error: error when destroying resource
2025-10-30T00:28:28.9963783Z         
2025-10-30T00:28:28.9964666Z         error deleting project (6902b117abf4374f3298e8cb):
2025-10-30T00:28:28.9965911Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b117abf4374f3298e8cb
2025-10-30T00:28:28.9967511Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:28:28.9968868Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:28:28.9969814Z         BadRequestDetail: 
2025-10-30T00:28:28.9970666Z --- FAIL: TestMigConfigRSCustomDNSConfigurationAWS_basic (15.93s)
```

- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03: MISSING
- 2025-11-04 PASS 16 seconds
- 2025-11-05: MISSING
- 2025-11-06 PASS 18 seconds
- 2025-11-07: MISSING
- 2025-11-08 PASS 17 seconds
- 2025-11-09: MISSING
- 2025-11-10: MISSING
- 2025-11-11 PASS 15 seconds
- 2025-11-12: MISSING
- 2025-11-13 PASS 18 seconds