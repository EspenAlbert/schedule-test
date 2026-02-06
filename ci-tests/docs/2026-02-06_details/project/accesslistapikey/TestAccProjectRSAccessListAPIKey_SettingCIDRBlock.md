# project/accesslistapikey/TestAccProjectRSAccessListAPIKey_SettingCIDRBlock Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:58](#error-2026-01-08t0758250000) |  | dev | 1.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 5 seconds
  - PASS 4 seconds
  - FAIL a second

### Error 2026-01-08T07:58:25+00:00
```
2026-01-08T07:58:25.1525140Z === RUN   TestAccProjectRSAccessListAPIKey_SettingCIDRBlock
2026-01-08T07:58:25.1535571Z    test_name=TestAccProjectRSAccessListAPIKey_SettingCIDRBlock test_terraform_path=/home/runner/work/_temp/daafcaaa-3567-41b0-9fbf-76b4c446a70f/terraform test_working_directory=/tmp/plugintest3248653761 test_step_number=1
2026-01-08T07:58:25.1536809Z     resource_access_list_api_key_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:58:25.1537272Z         
2026-01-08T07:58:25.1538653Z         Error: error create API key: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/apiKeys/695f639fbd8c78dbeaf9af4c/accessList POST: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:58:25.1539630Z         
2026-01-08T07:58:25.1539987Z           with mongodbatlas_access_list_api_key.test,
2026-01-08T07:58:25.1540703Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_access_list_api_key" "test":
2026-01-08T07:58:25.1541394Z           19: 		resource "mongodbatlas_access_list_api_key" "test" {
2026-01-08T07:58:25.1542048Z         
2026-01-08T07:58:25.1552817Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-08T07:58:25.1553280Z         
2026-01-08T07:58:25.1554785Z         Error: error API Key: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/apiKeys/695f639fbd8c78dbeaf9af4c DELETE: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:58:25.1555798Z         
2026-01-08T07:58:25.1556140Z --- FAIL: TestAccProjectRSAccessListAPIKey_SettingCIDRBlock (1.05s)
```

- 2026-01-09 PASS 3 seconds
- 2026-01-10 PASS 5 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 4 seconds
- 2026-01-13 PASS 5 seconds
- 2026-01-14 PASS 2 seconds
- 2026-01-15 PASS 5 seconds
- 2026-01-16 PASS 2 seconds
- 2026-01-17 PASS 4 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 2 seconds
- 2026-01-20 PASS 4 seconds
- 2026-01-21 PASS 3 seconds
- 2026-01-22
  - PASS 5 seconds
  - PASS 3 seconds
- 2026-01-23 PASS 5 seconds
- 2026-01-24 PASS 5 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 5 seconds
- 2026-01-27 PASS 5 seconds
- 2026-01-28 PASS 3 seconds
- 2026-01-29 PASS 5 seconds
- 2026-01-30 PASS 2 seconds
- 2026-01-31 PASS 5 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 4 seconds
- 2026-02-03 PASS 6 seconds
- 2026-02-04 PASS 3 seconds
- 2026-02-05 PASS 5 seconds
- 2026-02-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 2 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 2 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 2 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 4 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
