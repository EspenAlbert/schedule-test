# config/alertconfiguration/TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:32](#error-2025-08-17t0032200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122ebf746882a383ca283/limits | qa | flaky_500 | 43.04s
[2025-08-24 00:31](#error-2025-08-24t0031330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d3e9bbb8c4ee1f83745/limits | qa | flaky_500 | 42.02s
[2025-09-01 05:58](#error-2025-09-01t0558550000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 4.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 16 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 15 seconds
- 2025-08-09 PASS 15 seconds
- 2025-08-10 PASS 14 seconds
- 2025-08-11 PASS 17 seconds
- 2025-08-12 PASS 14 seconds
- 2025-08-13 PASS 15 seconds
- 2025-08-14 PASS 16 seconds
- 2025-08-15 PASS 15 seconds
- 2025-08-16 PASS 14 seconds
- 2025-08-17

### Error 2025-08-17T00:32:20+00:00
```
2025-08-17T00:32:20.2684192Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-08-17T00:32:20.2706146Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-08-17T00:32:20.2740194Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-08-17T00:32:20.2741218Z     resource_test.go:508: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:32:20.2741996Z         
2025-08-17T00:32:20.2742720Z         Error: error when getting project properties after create
2025-08-17T00:32:20.2743061Z         
2025-08-17T00:32:20.2743451Z           with mongodbatlas_project.test,
2025-08-17T00:32:20.2744069Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T00:32:20.2744619Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:32:20.2744905Z         
2025-08-17T00:32:20.2745557Z         error getting project (68a122ebf746882a383ca283): error getting project's
2025-08-17T00:32:20.2746013Z         limits (68a122ebf746882a383ca283):
2025-08-17T00:32:20.2746578Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122ebf746882a383ca283/limits
2025-08-17T00:32:20.2747230Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:32:20.2747801Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:32:20.2748188Z         BadRequestDetail: 
2025-08-17T00:32:20.2748738Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (43.39s)
```

- 2025-08-18 PASS 15 seconds
- 2025-08-19 PASS 17 seconds
- 2025-08-20
  - PASS 16 seconds
  - PASS 16 seconds
- 2025-08-21 PASS 14 seconds
- 2025-08-22 PASS 15 seconds
- 2025-08-23 PASS 16 seconds
- 2025-08-24

### Error 2025-08-24T00:31:33+00:00
```
2025-08-24T00:31:33.8373588Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-08-24T00:31:33.8393656Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-08-24T00:31:33.8447744Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-08-24T00:31:33.8448898Z     resource_test.go:508: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:31:33.8449607Z         
2025-08-24T00:31:33.8450248Z         Error: error when getting project properties after create
2025-08-24T00:31:33.8450796Z         
2025-08-24T00:31:33.8451324Z           with mongodbatlas_project.test,
2025-08-24T00:31:33.8452357Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:31:33.8453294Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:31:33.8453784Z         
2025-08-24T00:31:33.8454551Z         error getting project (68aa5d3e9bbb8c4ee1f83745): error getting project's
2025-08-24T00:31:33.8455504Z         limits (68aa5d3e9bbb8c4ee1f83745):
2025-08-24T00:31:33.8456523Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d3e9bbb8c4ee1f83745/limits
2025-08-24T00:31:33.8457693Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:31:33.8458699Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:31:33.8459399Z         BadRequestDetail: 
2025-08-24T00:31:33.8460173Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (42.25s)
```

- 2025-08-25 PASS 16 seconds
- 2025-08-26 PASS 20 seconds
- 2025-08-27 PASS 18 seconds
- 2025-08-28 PASS 13 seconds
- 2025-08-29 PASS 16 seconds
- 2025-08-30 PASS 15 seconds
- 2025-08-31 PASS 27 seconds
- 2025-09-01
  - PASS 12 seconds
  - FAIL 4 seconds

### Error 2025-09-01T05:58:55+00:00
```
2025-09-01T05:58:55.2011420Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-09-01T05:58:55.2047141Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-09-01T05:58:55.2074067Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-09-01T05:58:55.2075043Z     resource_test.go:508: Step 1/1 error: Error running apply: exit status 1
2025-09-01T05:58:55.2075618Z         
2025-09-01T05:58:55.2076261Z         Error: error creating project: test-acc-tf-p-372663379494331994
2025-09-01T05:58:55.2076808Z         
2025-09-01T05:58:55.2077436Z           with mongodbatlas_project.test,
2025-09-01T05:58:55.2078401Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T05:58:55.2079273Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T05:58:55.2079719Z         
2025-09-01T05:58:55.2080480Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T05:58:55.2081518Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T05:58:55.2082701Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T05:58:55.2083687Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T05:58:55.2084349Z         BadRequestDetail: 
2025-09-01T05:58:55.2085000Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (4.21s)
```

  - PASS 18 seconds
  - PASS 17 seconds
  - PASS 14 seconds
  - PASS 14 seconds
  - PASS 21 seconds
  - PASS 16 seconds
- 2025-09-02 PASS 14 seconds
- 2025-09-03 PASS 14 seconds
- 2025-09-04 PASS 14 seconds