# project/projectipaccesslist/TestMigProjectIPAccessList_settingCIDRBlock Test Details
# Found 22 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 21) FAIL
Success rate: 95.45%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 08:00](#error-2026-01-08t0800590000) |  | dev | 12.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08

### Error 2026-01-08T08:00:59+00:00
```
2026-01-08T08:00:59.4219349Z === RUN   TestMigProjectIPAccessList_settingCIDRBlock
2026-01-08T08:00:59.4256592Z === CONT  TestMigProjectIPAccessList_settingCIDRBlock
2026-01-08T08:00:59.4268257Z   
2026-01-08T08:00:59.4358618Z === NAME  TestMigProjectIPAccessList_settingCIDRBlock
2026-01-08T08:00:59.4359421Z     resource_project_ip_access_list_migration_test.go:43: Step 1/2 error: Error running apply: exit status 1
2026-01-08T08:00:59.4360230Z         
2026-01-08T08:00:59.4360718Z         Error: error while waiting for resource creation
2026-01-08T08:00:59.4361046Z         
2026-01-08T08:00:59.4361548Z           with mongodbatlas_project_ip_access_list.test,
2026-01-08T08:00:59.4362525Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_ip_access_list" "test":
2026-01-08T08:00:59.4363361Z           14: 		resource "mongodbatlas_project_ip_access_list" "test" {
2026-01-08T08:00:59.4363798Z         
2026-01-08T08:00:59.4364198Z         error creating Project IP Access List information:
2026-01-08T08:00:59.4365103Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639dbd8c78dbeaf9aa46/accessList
2026-01-08T08:00:59.4365949Z         POST: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2026-01-08T08:00:59.4366526Z         BadRequestDetail: 
2026-01-08T08:00:59.4366876Z --- FAIL: TestMigProjectIPAccessList_settingCIDRBlock (12.53s)
```

- 2026-01-09 PASS 16 seconds
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 seconds
- 2026-01-13: MISSING
- 2026-01-14 PASS 14 seconds
- 2026-01-15: MISSING
- 2026-01-16 PASS 15 seconds
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 16 seconds
- 2026-01-20: MISSING
- 2026-01-21 PASS 16 seconds
- 2026-01-22 PASS 15 seconds
- 2026-01-23 PASS 18 seconds
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 seconds
- 2026-01-27: MISSING
- 2026-01-28 PASS 2 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 14 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02 PASS 16 seconds
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 seconds
- 2026-02-05: MISSING
- 2026-02-06 PASS 15 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 14 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 14 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 15 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 16 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 15 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 2 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
