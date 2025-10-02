# config/alertconfiguration/TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:29](#error-2025-09-14t0029400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c52d444485797b2259f/limits | qa | flaky_500 | 36.07s
[2025-09-15 06:21](#error-2025-09-15t0621470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b059d444485797b5ed20/limits | qa | flaky_500 | 36.00s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 14 seconds
- 2025-09-04 PASS 14 seconds
- 2025-09-05 PASS 15 seconds
- 2025-09-06 PASS 15 seconds
- 2025-09-07 PASS 12 seconds
- 2025-09-08
  - PASS 16 seconds
  - PASS 38 seconds
  - PASS 15 seconds
- 2025-09-09 PASS 17 seconds
- 2025-09-10 PASS 15 seconds
- 2025-09-11 PASS 15 seconds
- 2025-09-12 PASS 15 seconds
- 2025-09-13 PASS 17 seconds
- 2025-09-14

### Error 2025-09-14T00:29:40+00:00
```
2025-09-14T00:29:40.2071508Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-09-14T00:29:40.2310829Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-09-14T00:29:40.2699064Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-09-14T00:29:40.2700372Z     resource_test.go:508: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:29:40.2701016Z         
2025-09-14T00:29:40.2701690Z         Error: error when getting project properties after create
2025-09-14T00:29:40.2702268Z         
2025-09-14T00:29:40.2702835Z           with mongodbatlas_project.test,
2025-09-14T00:29:40.2703901Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:40.2704856Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:40.2705349Z         
2025-09-14T00:29:40.2706118Z         error getting project (68c60c52d444485797b2259f): error getting project's
2025-09-14T00:29:40.2706917Z         limits (68c60c52d444485797b2259f):
2025-09-14T00:29:40.2708124Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c52d444485797b2259f/limits
2025-09-14T00:29:40.2709303Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:40.2710343Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:40.2711033Z         BadRequestDetail: 
2025-09-14T00:29:40.2711756Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (36.66s)
```

- 2025-09-15
  - PASS 15 seconds
  - FAIL 36 seconds

### Error 2025-09-15T06:21:47+00:00
```
2025-09-15T06:21:47.3303828Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-09-15T06:21:47.3395805Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-09-15T06:21:47.3614156Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-09-15T06:21:47.3615393Z     resource_test.go:508: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:21:47.3616037Z         
2025-09-15T06:21:47.3616739Z         Error: error when getting project properties after create
2025-09-15T06:21:47.3617344Z         
2025-09-15T06:21:47.3618116Z           with mongodbatlas_project.test,
2025-09-15T06:21:47.3619252Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:47.3620226Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:47.3620736Z         
2025-09-15T06:21:47.3621531Z         error getting project (68c7b059d444485797b5ed20): error getting project's
2025-09-15T06:21:47.3754189Z         limits (68c7b059d444485797b5ed20):
2025-09-15T06:21:47.3755408Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b059d444485797b5ed20/limits
2025-09-15T06:21:47.3756741Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:47.3757814Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:47.3758499Z         BadRequestDetail: 
2025-09-15T06:21:47.3759200Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (36.02s)
```

- 2025-09-16 PASS 15 seconds
- 2025-09-17 PASS 17 seconds
- 2025-09-18 PASS 16 seconds
- 2025-09-19 PASS 15 seconds
- 2025-09-20 PASS 17 seconds
- 2025-09-21 PASS 34 seconds
- 2025-09-22 PASS 14 seconds
- 2025-09-23 PASS 13 seconds
- 2025-09-24 PASS 15 seconds
- 2025-09-25 PASS 16 seconds
- 2025-09-26 PASS 17 seconds
- 2025-09-27 PASS 15 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 13 seconds
- 2025-09-30
  - PASS 15 seconds
  - PASS 15 seconds
  - PASS 13 seconds
- 2025-10-01
  - PASS 15 seconds
  - PASS 14 seconds
  - PASS 16 seconds
  - PASS 15 seconds
  - PASS 15 seconds
  - PASS 14 seconds
  - PASS 14 seconds
  - PASS 21 seconds
  - PASS 13 seconds
- 2025-10-02 PASS 17 seconds