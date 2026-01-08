# project/accesslistapikey/TestAccProjectRSAccesslistAPIKey_SettingIPAddress Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:58](#error-2026-01-08t0758250000) |  | dev | 0.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 5 seconds
  - PASS 3 seconds
- 2025-12-11 PASS 5 seconds
- 2025-12-12 PASS 5 seconds
- 2025-12-13 PASS 5 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 4 seconds
- 2025-12-16 PASS 6 seconds
- 2025-12-17 PASS 5 seconds
- 2025-12-18 PASS 6 seconds
- 2025-12-19 PASS 5 seconds
- 2025-12-20 PASS 6 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 4 seconds
- 2025-12-23 PASS 5 seconds
- 2025-12-24 PASS 3 seconds
- 2025-12-25 PASS 5 seconds
- 2025-12-26 PASS 5 seconds
- 2025-12-27 PASS 6 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 7 seconds
- 2025-12-31 PASS 5 seconds
- 2026-01-01 PASS 6 seconds
- 2026-01-02 PASS 5 seconds
- 2026-01-03 PASS 7 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 5 seconds
- 2026-01-06 PASS 6 seconds
- 2026-01-07 PASS 4 seconds
- 2026-01-08
  - PASS 6 seconds
  - PASS 6 seconds
  - FAIL a moment

### Error 2026-01-08T07:58:25+00:00
```
2026-01-08T07:58:25.1491582Z === RUN   TestAccProjectRSAccesslistAPIKey_SettingIPAddress
2026-01-08T07:58:25.1502535Z    test_name=TestAccProjectRSAccesslistAPIKey_SettingIPAddress test_terraform_path=/home/runner/work/_temp/daafcaaa-3567-41b0-9fbf-76b4c446a70f/terraform test_working_directory=/tmp/plugintest550112572
2026-01-08T07:58:25.1503685Z     resource_access_list_api_key_test.go:24: Step 1/3 error: Error running apply: exit status 1
2026-01-08T07:58:25.1504137Z         
2026-01-08T07:58:25.1505989Z         Error: error getting api key information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/apiKeys/695f639ebd8c78dbeaf9aeea GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T07:58:25.1507144Z         
2026-01-08T07:58:25.1507450Z           with mongodbatlas_api_key.test,
2026-01-08T07:58:25.1508075Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_api_key" "test":
2026-01-08T07:58:25.1508683Z           13: 	   resource "mongodbatlas_api_key" "test" {
2026-01-08T07:58:25.1508996Z         
2026-01-08T07:58:25.1519528Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-08T07:58:25.1520449Z         
2026-01-08T07:58:25.1522953Z         Error: error API Key: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/apiKeys/695f639ebd8c78dbeaf9aeea DELETE: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:58:25.1524004Z         
2026-01-08T07:58:25.1524629Z --- FAIL: TestAccProjectRSAccesslistAPIKey_SettingIPAddress (0.99s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 4 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 2 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 5 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 5 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 seconds
