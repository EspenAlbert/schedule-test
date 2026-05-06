# config/alertconfiguration/TestAccConfigDSAlertConfiguration_withOutput Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-14 00:50](#error-2026-04-14t0050490000) |  | dev | 8.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 9 seconds
- 2026-04-08 PASS 21 seconds
- 2026-04-09 PASS 14 seconds
- 2026-04-10 PASS 12 seconds
- 2026-04-11 PASS 9 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 22 seconds
- 2026-04-14

### Error 2026-04-14T00:50:49+00:00
```
2026-04-14T00:50:49.8011600Z === RUN   TestAccConfigDSAlertConfiguration_withOutput
2026-04-14T00:50:49.8025796Z === CONT  TestAccConfigDSAlertConfiguration_withOutput
2026-04-14T00:50:49.8071653Z === NAME  TestAccConfigDSAlertConfiguration_withOutput
2026-04-14T00:50:49.8072327Z     resource_test.go:1242: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-14T00:50:49.8072818Z         
2026-04-14T00:50:49.8073210Z         Error: error getting Alert Configuration information: %s
2026-04-14T00:50:49.8073550Z         
2026-04-14T00:50:49.8074228Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dd8f197e7703c9cb107cfa/alertConfigs/69dd8f40a93afefdeb79de41
2026-04-14T00:50:49.8075047Z         DELETE: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-04-14T00:50:49.8075484Z         BadRequestDetail: 
2026-04-14T00:50:49.8075835Z --- FAIL: TestAccConfigDSAlertConfiguration_withOutput (8.82s)
```

- 2026-04-15 PASS 12 seconds
- 2026-04-16 PASS 7 seconds
- 2026-04-17 PASS 13 seconds
- 2026-04-18 PASS 8 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 12 seconds
- 2026-04-21 PASS 10 seconds
- 2026-04-22 PASS 20 seconds
- 2026-04-23 PASS 9 seconds
- 2026-04-24 PASS 13 seconds
- 2026-04-25 PASS 9 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 20 seconds
- 2026-04-28 PASS 10 seconds
- 2026-04-29 PASS 14 seconds
- 2026-04-30 PASS 7 seconds
- 2026-05-01 PASS 21 seconds
- 2026-05-02 PASS 10 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 22 seconds
- 2026-05-05 PASS 10 seconds
- 2026-05-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 12 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 19 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 21 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 15 seconds
  - PASS 21 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 26 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 22 seconds
- 2026-05-04 PASS 21 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 14 seconds
