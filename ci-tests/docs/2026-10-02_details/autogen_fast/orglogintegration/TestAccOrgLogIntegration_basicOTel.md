# autogen_fast/orglogintegration/TestAccOrgLogIntegration_basicOTel Test Details
# Found 8 TestRuns in dev, qa from 2026-09-29 to 2026-10-02 from master branch: 1 unique tests, PASS(x 5) FAIL(x 3)
Success rate: 62.50%

## DEV Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16: MISSING
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 4 seconds
  - PASS 5 seconds
- 2026-09-30 PASS 4 seconds
- 2026-10-01 PASS 4 seconds
- 2026-10-02 PASS 5 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-29 06:42](#error-2026-09-29t0642300000) | FEATURE_UNSUPPORTED /api/atlas/v2/orgs/6582e7c083c4a041e2a5e4f2/logIntegrations | qa |  | 0.09s
[2026-09-29 10:48](#error-2026-09-29t1048360000) | FEATURE_UNSUPPORTED /api/atlas/v2/orgs/6582e7c083c4a041e2a5e4f2/logIntegrations | qa | flaky_500 | 1.01s
[2026-09-29 11:27](#error-2026-09-29t1127140000) | FEATURE_UNSUPPORTED /api/atlas/v2/orgs/6582e7c083c4a041e2a5e4f2/logIntegrations | qa |  | 0.10s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16: MISSING
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28: MISSING
- 2026-09-29
  - FAIL a moment

### Error 2026-09-29T06:42:30+00:00
```
2026-09-29T06:42:30.1766930Z === RUN   TestAccOrgLogIntegration_basicOTel
2026-09-29T06:42:30.1767854Z === CONT  TestAccOrgLogIntegration_basicOTel
2026-09-29T06:42:30.1780194Z    test_terraform_path=/home/runner/work/_temp/407b9f5b-c64a-49f6-bdd2-d113ef20d2fa/terraform test_working_directory=/tmp/plugintest1079094822 test_name=TestAccOrgLogIntegration_basicOTel test_step_number=1
2026-09-29T06:42:30.1781337Z     resource_test.go:47: Step 1/3 error: Error running apply: exit status 1
2026-09-29T06:42:30.1781795Z         
2026-09-29T06:42:30.1782158Z         Error: Error calling API in Create
2026-09-29T06:42:30.1782514Z         
2026-09-29T06:42:30.1783070Z           with mongodbatlas_org_log_integration.test,
2026-09-29T06:42:30.1783976Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_org_log_integration" "test":
2026-09-29T06:42:30.1784725Z           12: 		resource "mongodbatlas_org_log_integration" "test" {
2026-09-29T06:42:30.1785130Z         
2026-09-29T06:42:30.1785752Z         https://cloud-qa.mongodb.com/api/atlas/v2/orgs/6582e7c083c4a041e2a5e4f2/logIntegrations
2026-09-29T06:42:30.1786555Z         POST: HTTP 403 Forbidden (Error code: "FEATURE_UNSUPPORTED") Detail: Feature
2026-09-29T06:42:30.1787287Z         not supported by current account level. Reason: Forbidden. Params: [],
2026-09-29T06:42:30.1787792Z         BadRequestDetail: 
2026-09-29T06:42:30.1788192Z --- FAIL: TestAccOrgLogIntegration_basicOTel (0.94s)
```

  - FAIL a second

### Error 2026-09-29T10:48:36+00:00
```
2026-09-29T10:48:36.9126977Z === RUN   TestAccOrgLogIntegration_basicOTel
2026-09-29T10:48:36.9127936Z === CONT  TestAccOrgLogIntegration_basicOTel
2026-09-29T10:48:36.9140500Z    test_name=TestAccOrgLogIntegration_basicOTel test_terraform_path=/home/runner/work/_temp/10260987-c579-4d88-bc41-ab7d807a05c8/terraform
2026-09-29T10:48:36.9141392Z     resource_test.go:47: Step 1/3 error: Error running apply: exit status 1
2026-09-29T10:48:36.9141854Z         
2026-09-29T10:48:36.9142227Z         Error: Error calling API in Create
2026-09-29T10:48:36.9142579Z         
2026-09-29T10:48:36.9143165Z           with mongodbatlas_org_log_integration.test,
2026-09-29T10:48:36.9143949Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_org_log_integration" "test":
2026-09-29T10:48:36.9144860Z           12: 		resource "mongodbatlas_org_log_integration" "test" {
2026-09-29T10:48:36.9145279Z         
2026-09-29T10:48:36.9145909Z         https://cloud-qa.mongodb.com/api/atlas/v2/orgs/6582e7c083c4a041e2a5e4f2/logIntegrations
2026-09-29T10:48:36.9146707Z         POST: HTTP 403 Forbidden (Error code: "FEATURE_UNSUPPORTED") Detail: Feature
2026-09-29T10:48:36.9147432Z         not supported by current account level. Reason: Forbidden. Params: [],
2026-09-29T10:48:36.9147943Z         BadRequestDetail: 
2026-09-29T10:48:36.9148333Z --- FAIL: TestAccOrgLogIntegration_basicOTel (1.07s)
```

  - FAIL a moment

### Error 2026-09-29T11:27:14+00:00
```
2026-09-29T11:27:14.7005888Z === RUN   TestAccOrgLogIntegration_basicOTel
2026-09-29T11:27:14.7006877Z === CONT  TestAccOrgLogIntegration_basicOTel
2026-09-29T11:27:14.7019861Z    test_name=TestAccOrgLogIntegration_basicOTel test_terraform_path=/home/runner/work/_temp/f402b870-dff9-4905-a2ac-976ac2f5c776/terraform test_working_directory=/tmp/plugintest2272479893
2026-09-29T11:27:14.7020965Z     resource_test.go:47: Step 1/3 error: Error running apply: exit status 1
2026-09-29T11:27:14.7021442Z         
2026-09-29T11:27:14.7021824Z         Error: Error calling API in Create
2026-09-29T11:27:14.7022201Z         
2026-09-29T11:27:14.7023004Z           with mongodbatlas_org_log_integration.test,
2026-09-29T11:27:14.7023822Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_org_log_integration" "test":
2026-09-29T11:27:14.7025027Z           12: 		resource "mongodbatlas_org_log_integration" "test" {
2026-09-29T11:27:14.7025757Z         
2026-09-29T11:27:14.7026506Z         https://cloud-qa.mongodb.com/api/atlas/v2/orgs/6582e7c083c4a041e2a5e4f2/logIntegrations
2026-09-29T11:27:14.7027344Z         POST: HTTP 403 Forbidden (Error code: "FEATURE_UNSUPPORTED") Detail: Feature
2026-09-29T11:27:14.7028110Z         not supported by current account level. Reason: Forbidden. Params: [],
2026-09-29T11:27:14.7028655Z         BadRequestDetail: 
2026-09-29T11:27:14.7029080Z --- FAIL: TestAccOrgLogIntegration_basicOTel (0.96s)
```

- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
