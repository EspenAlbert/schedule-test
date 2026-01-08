# project/projectipaccesslist/TestMigProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 08:00](#error-2026-01-08t0800590000) |  | dev | 122.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 3 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 3 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 3 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 3 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 2 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 3 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 3 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 3 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 3 minutes
- 2026-01-06: MISSING
- 2026-01-07 PASS 3 minutes
- 2026-01-08

### Error 2026-01-08T08:00:59+00:00
```
2026-01-08T08:00:59.4220803Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2026-01-08T08:00:59.4230768Z    test_step_number=1 test_name=TestMigProjectIPAccessList_settingAWSSecurityGroup test_terraform_path=/home/runner/work/_temp/daafcaaa-3567-41b0-9fbf-76b4c446a70f/terraform test_working_directory=/tmp/plugintest2464194478
2026-01-08T08:00:59.4232096Z     resource_project_ip_access_list_migration_test.go:71: Step 1/2 error: Error running apply: exit status 1
2026-01-08T08:00:59.4232755Z         
2026-01-08T08:00:59.4235113Z         Error: error reading MongoDB Network Peering Container (695f63a0aa2a8443b4901897): https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639dbd8c78dbeaf9aa46/containers/695f63a0aa2a8443b4901897 GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T08:00:59.4236447Z         
2026-01-08T08:00:59.4236797Z           with mongodbatlas_network_container.test,
2026-01-08T08:00:59.4237501Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-01-08T08:00:59.4238184Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-01-08T08:00:59.4238526Z         
2026-01-08T08:00:59.4243750Z    test_name=TestMigProjectIPAccessList_settingAWSSecurityGroup test_terraform_path=/home/runner/work/_temp/daafcaaa-3567-41b0-9fbf-76b4c446a70f/terraform test_working_directory=/tmp/plugintest2464194478 test_step_number=1
2026-01-08T08:00:59.4245183Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-08T08:00:59.4245645Z         
2026-01-08T08:00:59.4247552Z         Error: error deleting MongoDB Network Peering Container (695f63a0aa2a8443b4901897): https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639dbd8c78dbeaf9aa46/containers/695f63a0aa2a8443b4901897 GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T08:00:59.4248861Z         
2026-01-08T08:00:59.4249203Z --- FAIL: TestMigProjectIPAccessList_settingAWSSecurityGroup (122.79s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 3 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 3 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 3 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 3 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
