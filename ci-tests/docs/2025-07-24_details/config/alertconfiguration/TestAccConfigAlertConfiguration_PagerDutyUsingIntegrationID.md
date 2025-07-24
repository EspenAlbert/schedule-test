# config/alertconfiguration/TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:33](#error-2025-06-29t0033070000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089a256291349dce6d8da/limits | qa | flaky_500 | 36.02s
[2025-07-06 00:33](#error-2025-07-06t0033030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c418690ae45e168bdce8/limits | qa | flaky_500 | 41.09s
[2025-07-10 13:08](#error-2025-07-10t1308160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb1e006d8d55bb9e7110/limits | qa | flaky_500 | 36.03s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 13 seconds
- 2025-06-26 PASS 15 seconds
- 2025-06-27 PASS 17 seconds
- 2025-06-28 PASS 14 seconds
- 2025-06-29

### Error 2025-06-29T00:33:07+00:00
```
2025-06-29T00:33:07.8907120Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-06-29T00:33:07.8982389Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-06-29T00:33:07.9053799Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-06-29T00:33:07.9054799Z     resource_test.go:508: Step 1/1 error: Error running apply: exit status 1
2025-06-29T00:33:07.9055418Z         
2025-06-29T00:33:07.9056114Z         Error: error when getting project properties after create
2025-06-29T00:33:07.9056644Z         
2025-06-29T00:33:07.9057161Z           with mongodbatlas_project.test,
2025-06-29T00:33:07.9203785Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:33:07.9205006Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:33:07.9205538Z         
2025-06-29T00:33:07.9206335Z         error getting project (686089a256291349dce6d8da): error getting project's
2025-06-29T00:33:07.9207173Z         limits (686089a256291349dce6d8da):
2025-06-29T00:33:07.9208222Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089a256291349dce6d8da/limits
2025-06-29T00:33:07.9209467Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:33:07.9210515Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:33:07.9211400Z         BadRequestDetail: 
2025-06-29T00:33:07.9212109Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (36.16s)
```

- 2025-06-30 PASS 15 seconds
- 2025-07-01
  - PASS 14 seconds
  - PASS 15 seconds
  - PASS 17 seconds
  - PASS 14 seconds
  - PASS 18 seconds
  - PASS 18 seconds
- 2025-07-02 PASS 14 seconds
- 2025-07-03 PASS 15 seconds
- 2025-07-04 PASS 14 seconds
- 2025-07-05 PASS 16 seconds
- 2025-07-06

### Error 2025-07-06T00:33:03+00:00
```
2025-07-06T00:33:03.9309871Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-06T00:33:03.9374319Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-06T00:33:03.9710145Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-06T00:33:03.9711356Z     resource_test.go:508: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:33:03.9712067Z         
2025-07-06T00:33:03.9938540Z         Error: error when getting project properties after create
2025-07-06T00:33:03.9939535Z         
2025-07-06T00:33:03.9940136Z           with mongodbatlas_project.test,
2025-07-06T00:33:03.9941210Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:03.9942137Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:03.9942633Z         
2025-07-06T00:33:03.9943400Z         error getting project (6869c418690ae45e168bdce8): error getting project's
2025-07-06T00:33:03.9944186Z         limits (6869c418690ae45e168bdce8):
2025-07-06T00:33:03.9945300Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c418690ae45e168bdce8/limits
2025-07-06T00:33:03.9946458Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:03.9947446Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:03.9948103Z         BadRequestDetail: 
2025-07-06T00:33:03.9948786Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (41.94s)
```

- 2025-07-07 PASS 14 seconds
- 2025-07-08 PASS 16 seconds
- 2025-07-09 PASS 16 seconds
- 2025-07-10
  - PASS 14 seconds
  - FAIL 36 seconds

### Error 2025-07-10T13:08:16+00:00
```
2025-07-10T13:08:16.1683332Z === RUN   TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-10T13:08:16.1712173Z === CONT  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-10T13:08:16.1771570Z === NAME  TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID
2025-07-10T13:08:16.1772667Z     resource_test.go:508: Step 1/1 error: Error running apply: exit status 1
2025-07-10T13:08:16.1773286Z         
2025-07-10T13:08:16.1773951Z         Error: error when getting project properties after create
2025-07-10T13:08:16.1774505Z         
2025-07-10T13:08:16.1775074Z           with mongodbatlas_project.test,
2025-07-10T13:08:16.1776498Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:16.1777459Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:16.1777950Z         
2025-07-10T13:08:16.1778726Z         error getting project (686fbb1e006d8d55bb9e7110): error getting project's
2025-07-10T13:08:16.1779488Z         limits (686fbb1e006d8d55bb9e7110):
2025-07-10T13:08:16.1780477Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb1e006d8d55bb9e7110/limits
2025-07-10T13:08:16.1781608Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:16.1782605Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:16.1783251Z         BadRequestDetail: 
2025-07-10T13:08:16.1783922Z --- FAIL: TestAccConfigAlertConfiguration_PagerDutyUsingIntegrationID (36.34s)
```

- 2025-07-11 PASS 16 seconds
- 2025-07-12 PASS 16 seconds
- 2025-07-13 PASS 14 seconds
- 2025-07-14 PASS 19 seconds
- 2025-07-15 PASS 17 seconds
- 2025-07-16 PASS 17 seconds
- 2025-07-17 PASS 17 seconds
- 2025-07-18 PASS 17 seconds
- 2025-07-19 PASS 16 seconds
- 2025-07-20 PASS 21 seconds
- 2025-07-21 PASS 18 seconds
- 2025-07-22 PASS 18 seconds
- 2025-07-23
  - PASS 14 seconds
  - PASS 14 seconds
  - PASS 16 seconds
- 2025-07-24 PASS 15 seconds