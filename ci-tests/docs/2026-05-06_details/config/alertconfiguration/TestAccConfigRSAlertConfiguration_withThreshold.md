# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withThreshold Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-14 00:50](#error-2026-04-14t0050490000) |  | dev | 11.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 13 seconds
- 2026-04-08 PASS 34 seconds
- 2026-04-09 PASS 20 seconds
- 2026-04-10 PASS 23 seconds
- 2026-04-11 PASS 14 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 34 seconds
- 2026-04-14

### Error 2026-04-14T00:50:49+00:00
```
2026-04-14T00:50:49.7970027Z === RUN   TestAccConfigRSAlertConfiguration_withThreshold
2026-04-14T00:50:49.8023195Z === CONT  TestAccConfigRSAlertConfiguration_withThreshold
2026-04-14T00:50:49.8093839Z === NAME  TestAccConfigRSAlertConfiguration_withThreshold
2026-04-14T00:50:49.8094443Z     resource_test.go:237: Step 2/3 error: Error running pre-apply plan: exit status 1
2026-04-14T00:50:49.8095104Z         
2026-04-14T00:50:49.8095496Z         Error: error getting Alert Configuration information: %s
2026-04-14T00:50:49.8095848Z         
2026-04-14T00:50:49.8096208Z           with mongodbatlas_alert_configuration.test,
2026-04-14T00:50:49.8096906Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-04-14T00:50:49.8097580Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-04-14T00:50:49.8097917Z         
2026-04-14T00:50:49.8098616Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dd8f197e7703c9cb107cfa/alertConfigs/69dd8f41dcb6e3417a34d8c3
2026-04-14T00:50:49.8099403Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-04-14T00:50:49.8099846Z         BadRequestDetail: 
2026-04-14T00:50:49.8101454Z --- FAIL: TestAccConfigRSAlertConfiguration_withThreshold (11.80s)
```

- 2026-04-15 PASS 21 seconds
- 2026-04-16 PASS 12 seconds
- 2026-04-17 PASS 19 seconds
- 2026-04-18 PASS 12 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 18 seconds
- 2026-04-21 PASS 16 seconds
- 2026-04-22 PASS 33 seconds
- 2026-04-23 PASS 13 seconds
- 2026-04-24 PASS 18 seconds
- 2026-04-25 PASS 13 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 35 seconds
- 2026-04-28 PASS 14 seconds
- 2026-04-29 PASS 20 seconds
- 2026-04-30 PASS 10 seconds
- 2026-05-01 PASS 35 seconds
- 2026-05-02 PASS 16 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 35 seconds
- 2026-05-05 PASS 16 seconds
- 2026-05-06 PASS 15 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 21 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 33 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 33 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 24 seconds
  - PASS 35 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 37 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 34 seconds
- 2026-05-04 PASS 35 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 27 seconds
