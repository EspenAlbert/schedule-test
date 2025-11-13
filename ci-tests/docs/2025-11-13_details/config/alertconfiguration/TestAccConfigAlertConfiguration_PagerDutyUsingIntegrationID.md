# config/alertconfiguration/TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b12de2dc7470847c0650 | dev | flaky_500 | 11.05s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 17 seconds
- 2025-10-16 PASS 17 seconds
- 2025-10-17 PASS 15 seconds
- 2025-10-18 PASS 12 seconds
- 2025-10-19 PASS 51 seconds
- 2025-10-20
  - PASS 14 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 11 seconds
- 2025-10-22
  - PASS 19 seconds
  - PASS 16 seconds
- 2025-10-23 PASS 11 seconds
- 2025-10-24 PASS 15 seconds
- 2025-10-25 PASS 9 seconds
- 2025-10-26 PASS 16 seconds
- 2025-10-27 PASS 15 seconds
- 2025-10-28 PASS 11 seconds
- 2025-10-29 PASS 14 seconds
- 2025-10-30

### Error 2025-10-30T00:28:38+00:00
```
2025-10-30T00:28:38.7372928Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-10-30T00:28:38.7394131Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-10-30T00:28:38.7425507Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-10-30T00:28:38.7426749Z     resource_test.go:512: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:28:38.7427633Z         
2025-10-30T00:28:38.7428313Z         Error: error when destroying resource
2025-10-30T00:28:38.7428627Z         
2025-10-30T00:28:38.7428988Z         error deleting project (6902b12de2dc7470847c0650):
2025-10-30T00:28:38.7429600Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b12de2dc7470847c0650
2025-10-30T00:28:38.7430251Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:28:38.7430860Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:28:38.7431304Z         BadRequestDetail: 
2025-10-30T00:28:38.7431717Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (11.46s)
```

- 2025-10-31 PASS 21 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 15 seconds
- 2025-11-03 PASS 23 seconds
- 2025-11-04 PASS 11 seconds
- 2025-11-05
  - PASS 17 seconds
  - PASS 15 seconds
- 2025-11-06 PASS 10 seconds
- 2025-11-07 PASS 22 seconds
- 2025-11-08 PASS 10 seconds
- 2025-11-09 PASS 20 seconds
- 2025-11-10 PASS 15 seconds
- 2025-11-11 PASS 10 seconds
- 2025-11-12 PASS 23 seconds
- 2025-11-13
  - PASS 13 seconds
  - PASS 16 seconds