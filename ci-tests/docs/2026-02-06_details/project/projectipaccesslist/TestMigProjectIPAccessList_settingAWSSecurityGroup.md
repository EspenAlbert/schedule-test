# project/projectipaccesslist/TestMigProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 22 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 21) FAIL
Success rate: 95.45%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 08:00](#error-2026-01-08t0800590000) |  | dev | 122.08s

### Timeline
- 2026-01-07: MISSING
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

- 2026-01-09 PASS 3 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 3 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 3 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 3 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 3 minutes
- 2026-01-22 PASS 3 minutes
- 2026-01-23 PASS 3 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 3 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 3 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02 PASS 3 minutes
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 3 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 2 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 3 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 2 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
